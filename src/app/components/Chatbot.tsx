import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Message {
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const FAQ = [
  {
    question: "What is your main tech stack?",
    answer: "My core expertise lies in React Native  with Redux flow. I am also highly skilled in mobile decelopement (iOS with Swift, Android with Kotlin/Java), API integrations, and cloud services (Firebase)."
  },
  {
    question: "Tell me about your Sulekha projects",
    answer: "At Sulekha, I worked with React Native development. For the Sulekha NRI App, I drove the end-to-end features, payment gateway, and booking flows, posting ad flows, leading to a 30% engagement boost. I also built the Sulekha Business App to help vendors track leads and engage clients efficiently."
  },
  {
    question: "Are you open to new opportunities?",
    answer: "Yes, I am open to full-time roles, contract opportunities, and remote engagements. Feel free to download my resume or drop me an email at rambabunehru@gmail.com!"
  },
  {
    question: "What are your education & locations?",
    answer: "I am based in Chennai, India. I hold a Master of Computer Applications (MCA) from PSNA College of Engineering and Technology (2021) and a BCA (2019)."
  }
];

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! I am Ram's holographic AI assistant. Feel free to ask me anything about his qualifications, experience, or projects!",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [customInput, setCustomInput] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleAsk = (question: string) => {
    // Add user question
    const userMsg: Message = { text: question, sender: "user", timestamp: new Date() };
    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    // Simulate thinking delay
    setTimeout(() => {
      // Find answer
      const found = FAQ.find((item) => item.question === question);
      const answerText = found
        ? found.answer
        : `Thanks for asking! I'm pre-programmed to answer specific recruitment queries. For custom topics, please contact Rambabu directly at rambabunehru@gmail.com or +91 8248887070.`;

      const botMsg: Message = { text: answerText, sender: "bot", timestamp: new Date() };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 900);
  };

  const handleSendCustom = () => {
    if (!customInput.trim()) return;
    const text = customInput;
    setCustomInput("");
    handleAsk(text);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(6, 182, 212, 0.4)" }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-gradient-to-br from-neon-blue to-neon-cyan rounded-full flex items-center justify-center text-white cursor-pointer shadow-lg shadow-neon-blue/30 border border-white/20"
      >
        <MessageSquare className="w-6 h-6 animate-pulse" />
      </motion.button>

      {/* Chat Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 100 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="fixed bottom-24 right-6 z-50 w-80 md:w-96 h-[500px] glass-card rounded-2xl border border-neon-cyan/30 flex flex-col overflow-hidden shadow-2xl shadow-black/80"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-neon-blue/40 to-neon-cyan/40 p-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <div className="w-9 h-9 rounded-full bg-black/40 flex items-center justify-center border border-neon-cyan/30">
                  <Bot className="w-5 h-5 text-neon-cyan" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    Ram Assistant <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                  </h4>
                  <p className="text-[10px] text-gray-300">Operational & Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 flex flex-col bg-black/35">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs md:text-sm leading-relaxed ${msg.sender === "user"
                      ? "bg-neon-blue text-white rounded-br-none"
                      : "bg-white/5 border border-white/10 text-gray-200 rounded-bl-none"
                      }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/10 text-gray-400 rounded-2xl rounded-bl-none px-4 py-2.5 flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Recruiter FAQ chips */}
            <div className="px-4 py-2 border-t border-white/5 bg-black/25 flex flex-wrap gap-1.5 max-h-24 overflow-y-auto">
              {FAQ.map((faq, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAsk(faq.question)}
                  disabled={isTyping}
                  className="text-[10px] text-neon-cyan border border-neon-cyan/20 px-2 py-1 rounded-full hover:bg-neon-cyan/10 hover:border-neon-cyan/50 transition-all cursor-pointer whitespace-nowrap"
                >
                  {faq.question}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <div className="p-3 bg-black/60 border-t border-white/5 flex items-center gap-2">
              <input
                type="text"
                placeholder="Ask me a custom question..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs md:text-sm text-white placeholder-gray-500 outline-none focus:border-neon-cyan/50 transition-colors"
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendCustom()}
                disabled={isTyping}
              />
              <button
                onClick={handleSendCustom}
                disabled={isTyping || !customInput.trim()}
                className="w-8 h-8 rounded-xl bg-gradient-to-r from-neon-blue to-neon-cyan flex items-center justify-center text-white cursor-pointer hover:opacity-90 disabled:opacity-50 transition-all"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
