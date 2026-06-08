import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;
  
  app.use(express.json());

  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY!,
    httpOptions: {
        headers: {
            'User-Agent': 'aistudio-build',
        }
    }
  });

  const protocols = [
    { title: 'Medical Emergency', desc: 'Secure the area, assess the condition, initiate SafeSync alert, and follow operator instructions.' },
    { title: 'Fire Protocol', desc: 'Activate alarm, evacuate following designated routes, trigger SafeSync alert, and assemble at the meet point.' },
    { title: 'Intrusion Alert', desc: 'Secure rooms, remain quiet, trigger silent SafeSync alert, and wait for security intervention.' },
  ];

  // API route for chatbot
  app.post("/api/chat", async (req, res) => {
    const { message } = req.body;
    try {
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Transfer-Encoding', 'chunked');

      const responseStream = await ai.models.generateContentStream({
        model: "gemini-3.5-flash",
        contents: `You are SafeSync's Intelligent Safety Companion. Your role is twofold:
1. Provide immediate, actionable safety guidance for emergencies (Medical, Fire, Intrusion). Always prioritize advising the user to contact local emergency services if a situation is severe. Use the following protocols:
   - Medical Emergency: ${protocols[0].desc}
   - Fire Protocol: ${protocols[1].desc}
   - Intrusion Alert: ${protocols[2].desc}
2. Act as a supportive assistant for the SafeSync platform. Explain how users can book services, use the app for real-time tracking, or get help when needed.

Keep all responses EXTREMELY concise, empathetic, and professional. If you aren't sure, advise them to use the app to contact a responder.
Message: ${message}`,
      });

      for await (const chunk of responseStream) {
        res.write(chunk.text);
      }
      res.end();
    } catch (error) {
      console.error("Gemini API error:", error);
      res.status(500).json({ error: "Failed to get response from AI" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
