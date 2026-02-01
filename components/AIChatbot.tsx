
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, User } from 'lucide-react';
import { getLandscapingAdvice } from '../services/gemini';

const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'ai' | 'user'; text: string }[]>([
    { role: 'ai', text: "Hi! I'm Ingram's AI Assistant. Ask me anything about Cleveland lawn care or our services!" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    const aiResponse = await getLandscapingAdvice(userMsg);
    setMessages(prev => [...prev, { role: 'ai', text: aiResponse || 'Sorry, I hit a snag. Try calling us!' }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-accent text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 animate-bounce"
        >
          <MessageSquare size={24} />
          <span className="font-bold hidden md:inline">Ask AI Expert</span>
        </button>
      )}

      {isOpen && (
        <div className="bg-white w-[350px] sm:w-[400px] h-[500px] rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          <div className="bg-black p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot className="text-accent" />
              <span className="font-bold">Cleveland Expert AI</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-accent">
              <X size={20} />
            </button>
          </div>

          <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto space-y-4 bg-gray-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-accent text-white rounded-br-none' 
                    : 'bg-white border border-gray-200 text-black rounded-bl-none shadow-sm'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 p-3 rounded-2xl animate-pulse text-xs font-bold text-gray-400">
                  Thinking...
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t flex gap-2">
            <input
              className="flex-grow bg-gray-100 rounded-full px-4 py-2 text-sm outline-none focus:ring-2 ring-accent/20"
              placeholder="Ask about red clay soil..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-black text-white p-2 rounded-full hover:bg-accent transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChatbot;
