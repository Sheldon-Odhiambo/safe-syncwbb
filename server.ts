import express from "express";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

// Load Environment Variables (kept for other settings like NODE_ENV)
dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // ==========================================
  // 🔑 PASTE YOUR ACTUAL GEMINI API KEY HERE 
  // ==========================================
  const chosenApiKey = "AIzaSyYourActualKeyGoesHere"; 

  // Initialize the Gemini AI SDK instance using the hardcoded key
  const ai = new GoogleGenAI({
    apiKey: chosenApiKey,
  });

  const protocols = [
    {
      title: "Medical Emergency",
      desc: "Secure the area, assess the condition, initiate SafeSync alert, and follow operator instructions.",
    },
    {
      title: "Fire Protocol",
      desc: "Activate alarm, evacuate following designated routes, trigger SafeSync alert, and assemble at the meet point.",
    },
    {
      title: "Intrusion Alert",
      desc: "Secure rooms, remain quiet, trigger silent SafeSync alert, and wait for security intervention.",
    },
  ];

  // Chat API Streaming Route
  app.post("/api/chat", async (req, res) => {
    const { message } = req.body;

    // Fail early if you forgot to replace the placeholder string above
    if (!chosenApiKey || chosenApiKey.includes("YourActualKeyGoesHere")) {
      console.error("❌ Error: You must replace the placeholder string with your actual Gemini API key!");
      return res.status(500).json({ error: "Server missing API Key configuration." });
    }

    try {
      // Set stream headers
      res.setHeader("Content-Type", "text/plain");

      const responseStream = await ai.models.generateContentStream({
        model: "gemini-2.5-flash",
        contents: `
You are SafeSync's Intelligent Safety Companion.

Emergency protocols:
- Medical: ${protocols[0].desc}
- Fire: ${protocols[1].desc}
- Intrusion: ${protocols[2].desc}

User message: ${message}
        `,
      });

      for await (const chunk of responseStream) {
        if (chunk.text) {
          res.write(chunk.text);
        }
      }

      res.end();
    } catch (error) {
      console.error("❌ Gemini Stream Error:", error);
      
      if (!res.headersSent) {
        res.status(500).send("AI service encountered an error.");
      } else {
        res.write("\n[AI Stream Interrupted]");
        res.end();
      }
    }
  });

  // Vite development environment server middleware mapping
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
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
    console.log(`===============================================`);
    console.log(`🚀 SafeSync Server running on http://localhost:${PORT}`);
    console.log(`🔑 Key status: FORCED HARDCODED KEY ACTIVE`);
    console.log(`===============================================`);
  });
}

startServer();