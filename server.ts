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

  // API route for chatbot
  app.post("/api/chat", async (req, res) => {
    const { message } = req.body;
    try {
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Transfer-Encoding', 'chunked');

      const responseStream = await ai.models.generateContentStream({
        model: "gemini-3.5-flash",
        contents: `You are a helpful assistant for SafeSync, a real-time emergency response platform. Answer safety-related questions in all situations, including emergencies or general safety, concisely as a safety-assistant. If the message is about a severe emergency, emphasize that they should contact local emergency services immediately, and provide clear, simple steps on what the user can do to stay safe or assist others while waiting for professional help. Message: ${message}`,
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
