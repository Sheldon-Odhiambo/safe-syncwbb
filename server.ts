import { supabase } from "./server/supabase";
import express from "express";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  const chosenApiKey = process.env.GEMINI_API_KEY!;

  if (!chosenApiKey) {
    console.error("❌ GEMINI_API_KEY is missing in .env");
    process.exit(1);
  }

  const ai = new GoogleGenAI({
    apiKey: chosenApiKey,
  });

  const protocols = [
    {
      title: "Medical Emergency",
      desc: "Secure the area, assess the patient, initiate a SafeSync alert, provide first aid if trained, and follow emergency operator instructions.",
    },
    {
      title: "Fire Emergency",
      desc: "Activate the fire alarm, evacuate using designated exits, avoid elevators, trigger a SafeSync alert, and assemble at the designated meeting point.",
    },
    {
      title: "Security / Intrusion",
      desc: "Remain calm, secure nearby rooms if necessary, trigger a silent SafeSync alert, and wait for responders while avoiding unnecessary movement.",
    },
  ];

  app.post("/api/chat", async (req, res) => {
    const { message, sessionId } = req.body;

    if (!message) {
      return res.status(400).json({
        error: "Message is required.",
      });
    }

    try {
      // Save user message
      await supabase.from("chat_history").insert([
        {
          session_id: sessionId,
          sender: "user",
          message,
        },
      ]);

      res.setHeader("Content-Type", "text/plain");
      res.setHeader("Transfer-Encoding", "chunked");

      const responseStream = await ai.models.generateContentStream({
        model: "gemini-2.5-flash",
        contents: `
You are Nuru AI, the intelligent emergency assistant for SafeSync.

Your responsibilities include:

• Helping users during emergencies.
• Giving calm, accurate emergency guidance.
• Explaining SafeSync features.
• Answering safety questions.
• Never inventing dangerous information.
• Advising users to contact emergency responders whenever necessary.

Emergency Procedures

Medical Emergency
${protocols[0].desc}

Fire Emergency
${protocols[1].desc}

Security Emergency
${protocols[2].desc}

User Message:
${message}
        `,
      });

      // Store complete AI reply
      let aiReply = "";

      for await (const chunk of responseStream) {
        if (chunk.text) {
          aiReply += chunk.text;
          res.write(chunk.text);
        }
      }

      res.end();

      // Save AI reply
      await supabase.from("chat_history").insert([
        {
          session_id: sessionId,
          sender: "assistant",
          message: aiReply,
        },
      ]);

      console.log("✅ Conversation saved.");
    } catch (error) {
      console.error("❌ Gemini/Supabase Error:", error);

      if (!res.headersSent) {
        res.status(500).json({
          error: "Nuru AI encountered an error.",
        });
      } else {
        res.write("\n\n[Nuru AI encountered an unexpected error.]");
        res.end();
      }
    }
  });

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
      },
      appType: "spa",
    });

    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");

    app.use(express.static(distPath));

    app.get("*", (_, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log("====================================");
    console.log(`🚀 SafeSync running at http://localhost:${PORT}`);
    console.log("🤖 Nuru AI Connected");
    console.log("💾 Supabase Connected");
    console.log("====================================");
  });
}

startServer();