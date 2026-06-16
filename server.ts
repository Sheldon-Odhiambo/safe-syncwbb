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

  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY!,
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

  // ==========================================
  // NEW REPLACED CHAT ROUTE START
  // ==========================================
  app.post("/api/chat", async (req, res) => {
    const { message } = req.body;

    // 1. Fail early if API Key is missing so it doesn't try to stream
    if (!process.env.GEMINI_API_KEY) {
      console.error("❌ Error: GEMINI_API_KEY is not defined in your environment variables!");
      return res.status(500).json({ error: "Server missing API Key configuration." });
    }

    try {
      // Set headers for streaming text
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
        // 2. Ensure chunk text exists before trying to write it
        if (chunk.text) {
          res.write(chunk.text);
        }
      }

      res.end();
    } catch (error) {
      console.error("❌ Gemini Stream Error:", error);
      
      // 3. Since headers were already set to text/plain, write a raw text error string 
      // instead of breaking formatting with an unhandled JSON payload
      if (!res.headersSent) {
        res.status(500).send("AI service encountered an error.");
      } else {
        res.write("\n[AI Stream Interrupted]");
        res.end();
      }
    }
  });
  // ==========================================
  // NEW REPLACED CHAT ROUTE END
  // ==========================================

  // Vite dev middleware
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
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();