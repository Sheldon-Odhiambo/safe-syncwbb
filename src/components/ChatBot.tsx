import { motion, AnimatePresence } from "motion/react";
import { Bot, X, Send } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { v4 as uuid } from "uuid";

type Message = {
  sender: "user" | "bot";
  text: string;
};

export default function ChatBot() {
  // Generate a unique session ID for this browser
  const sessionId =
    localStorage.getItem("nuru-session") ||
    (() => {
      const id = uuid();
      localStorage.setItem("nuru-session", id);
      return id;
    })();

  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Hello! I am Nuru AI, your SafeSync emergency assistant. I can help you with emergency procedures, first aid guidance, evacuation protocols, and answer questions about SafeSync. How may I assist you today?",
    },
  ]);

  const [input, setInput] = useState("");

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input.trim();

    setInput("");

    // Add user message and placeholder bot message
    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: userMsg,
      },
      {
        sender: "bot",
        text: "",
      },
    ]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMsg,
          sessionId,
        }),
      });

      if (!res.ok) {
        throw new Error("Unable to connect.");
      }

      if (!res.body) return;

      const reader = res.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();

        if (done) break;

        const chunk = decoder.decode(value, {
          stream: true,
        });

        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1].text += chunk;
          return updated;
        });
      }
    } catch (err) {
      console.error(err);

      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          sender: "bot",
          text: "Sorry, I'm unable to connect right now. Please try again shortly.",
        };
        return updated;
      });
    }
  };

  return (
    <>
      <motion.button
        className="fixed bottom-32 left-8 z-[9999] bg-primary text-white p-3 rounded-full shadow-xl ring-4 ring-primary/30 hover:bg-primary-dark transition-all"
        initial={{
          scale: 0,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        whileHover={{
          scale: 1.1,
        }}
        onClick={() => setIsOpen(true)}
      >
        <Bot className="w-6 h-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-32 left-8 w-80 h-[520px] bg-white rounded-2xl shadow-2xl border border-outline-variant flex flex-col overflow-hidden z-[10000]"
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
            }}
          >
            {/* Header */}
            <div className="bg-primary text-white p-4 flex justify-between items-center">
              <div>
                <h3 className="font-bold text-lg">
                  Nuru AI
                </h3>

                <p className="text-xs text-white/80">
                  SafeSync Emergency Assistant
                </p>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 rounded-full p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 text-sm">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`max-w-[85%] rounded-xl px-3 py-2 whitespace-pre-wrap ${
                    msg.sender === "user"
                      ? "bg-primary text-white self-end"
                      : "bg-gray-100 text-gray-800 self-start"
                  }`}
                >
                  {msg.text || (
                    <span className="italic text-gray-400">
                      Nuru AI is typing...
                    </span>
                  )}
                </div>
              ))}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-outline-variant p-4 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSend();
                  }
                }}
                placeholder="Ask Nuru AI about emergencies..."
                className="flex-1 border border-outline-variant rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <button
                onClick={handleSend}
                className="bg-primary text-white rounded-lg px-3 hover:bg-primary-dark transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}