'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useChat } from '@ai-sdk/react';
import { useLocale } from 'next-intl';

import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Sparkles, AlertCircle, RefreshCw } from 'lucide-react';

const translations = {
  es: {
    title: 'Asistente IA',
    subtitle: 'Soporte Fiscal y Corporativo',
    placeholder: 'Escribe tu consulta aquí...',
    disclaimer: 'Nota: Respuestas informativas. Para asesoría formal, consulta con nuestros contadores.',
    suggested: [
      '¿Cómo crear una LLC en EE.UU.?',
      '¿Cuándo vence el plazo de impuestos?',
      '¿Qué servicios de QuickBooks ofrecen?',
      '¿Qué es la retención FIRPTA?'
    ],
    welcome: '¡Hola! Soy tu asistente de Hispanic Financial. Estoy entrenado para ayudarte con dudas sobre creación de empresas, contabilidad, impuestos y nuestros servicios. ¿En qué puedo ayudarte hoy?',
    errorMsg: 'No se pudo conectar con el asistente. Asegúrate de configurar la clave GEMINI_API_KEY en el servidor.',
    send: 'Enviar',
    suggestedTitle: 'Preguntas Sugeridas',
    tooltip: '¡Hola! Soy tu asistente de IA, listo para ayudarte en lo que necesites. 💬'
  },
  en: {
    title: 'AI Assistant',
    subtitle: 'Tax & Corporate Support',
    placeholder: 'Type your question here...',
    disclaimer: 'Note: Informational answers only. For formal advice, consult with our accountants.',
    suggested: [
      'How to register an LLC in the US?',
      'When is the tax deadline?',
      'What QuickBooks services do you offer?',
      'What is FIRPTA withholding?'
    ],
    welcome: 'Hello! I am your Hispanic Financial assistant. I can help you with questions about business setup, bookkeeping, taxes, and our services. How can I help you today?',
    errorMsg: 'Could not connect to the assistant. Please make sure the GEMINI_API_KEY is configured on the server.',
    send: 'Send',
    suggestedTitle: 'Suggested Questions',
    tooltip: 'Hello! I am your AI assistant, ready to help you with whatever you need. 💬'
  }
};

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const locale = useLocale();

  useEffect(() => {
    if (isOpen) {
      setShowTooltip(false);
    }
  }, [isOpen]);
  const t = translations[locale as 'en' | 'es'] || translations.es;
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const [input, setInput] = useState('');
  const { messages, status, sendMessage, regenerate, error } = useChat({
    messages: [
      {
        id: 'welcome-msg',
        role: 'assistant' as 'user' | 'assistant' | 'system',
        parts: [
          {
            type: 'text',
            text: t.welcome
          }
        ]
      }
    ]
  });

  const isLoading = status === 'submitted' || status === 'streaming';

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    sendMessage({ text: input });
    setInput('');
  };

  const handleSuggestedClick = (question: string) => {
    if (isLoading) return;
    sendMessage({ text: question });
  };


  return (
    <div className="fixed bottom-6 left-6 z-[60] font-sans">
      <style jsx global>{`
        @keyframes shiftingGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .ai-core-gradient {
          background: linear-gradient(-45deg, #263A69, #22689B, #72BF44, #D5CD27);
          background-size: 400% 400%;
          animation: shiftingGradient 8s ease infinite;
        }
      `}</style>

      {/* Chat Window Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 50, x: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 50, x: -20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="absolute bottom-20 left-0 w-[90vw] sm:w-[400px] h-[550px] rounded-[2rem] overflow-hidden flex flex-col shadow-2xl border border-slate-100/80 bg-white/95 backdrop-blur-[16px] origin-bottom-left"
          >
            {/* Header */}
            <div className="p-5 ai-core-gradient text-white flex items-center justify-between relative overflow-hidden">
              {/* Shimmer overlay */}
              <div className="absolute inset-0 bg-white/5 pointer-events-none opacity-20" />
              
              <div className="flex items-center gap-3 relative z-10">
                {/* Mini animated core inside header */}
                <div className="w-10 h-10 rounded-full relative flex items-center justify-center border border-white/20 shadow-inner overflow-hidden bg-slate-900/40">
                  <div className="absolute w-8 h-8 rounded-full ai-core-gradient blur-[2px] opacity-80" />
                  <Sparkles size={16} className="text-white relative z-10 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-bold text-[15px] tracking-tight leading-none text-white">{t.title}</h3>
                  <p className="text-[11px] text-white/80 font-medium mt-1">{t.subtitle}</p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all cursor-pointer border border-white/10"
                aria-label="Close Assistant"
              >
                <X size={16} />
              </button>
            </div>

            {/* Messages Body */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-slate-50/50">
              {messages.map((message) => {
                const isUser = message.role === 'user';
                return (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 text-[14px] leading-relaxed shadow-sm font-medium ${
                        isUser
                          ? 'bg-brand-blue text-white rounded-tr-none'
                          : 'bg-white text-brand-dark border border-slate-100 rounded-tl-none'
                      }`}
                    >
                      {/* Formato de Markdown simple soportado */}
                      <div className="whitespace-pre-line">
                        {message.parts
                          ?.filter((part) => part.type === 'text')
                          .map((part: any) => part.text)
                          .join('') || ''}
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-slate-100 rounded-2xl rounded-tl-none px-4 py-3 flex items-center gap-1.5 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-brand-blue animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-2 h-2 rounded-full bg-brand-green animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-2 h-2 rounded-full bg-brand-gold animate-bounce"></span>
                  </div>
                </div>
              )}

              {error && (
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-100 text-red-700 text-xs font-semibold flex items-start gap-2.5">
                  <AlertCircle size={16} className="text-red-500 shrink-0 mt-0.5" />
                  <div className="space-y-2">
                    <p>{t.errorMsg}</p>
                    <button 
                      onClick={() => regenerate()} 
                      className="flex items-center gap-1 text-[11px] underline hover:text-red-800 cursor-pointer"
                    >
                      <RefreshCw size={12} /> Reintentar
                    </button>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Questions Section */}
            {messages.length === 1 && (
              <div className="px-5 py-3 border-t border-slate-100 bg-white">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">{t.suggestedTitle}</p>
                <div className="flex flex-wrap gap-2">
                  {t.suggested.map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSuggestedClick(q)}
                      className="text-xs bg-slate-50 hover:bg-brand-blue/5 text-brand-dark hover:text-brand-blue border border-slate-200/80 hover:border-brand-blue/30 px-3 py-1.5 rounded-full transition-all text-left font-medium cursor-pointer"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Form Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-slate-100 bg-white flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <input
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  placeholder={t.placeholder}
                  disabled={isLoading}
                  className="flex-1 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-full text-[14px] focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all disabled:opacity-50 text-brand-dark font-medium"
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="w-10 h-10 rounded-full ai-core-gradient text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all disabled:opacity-40 disabled:scale-100 cursor-pointer border border-white/10 shrink-0"
                  aria-label={t.send}
                >
                  <Send size={16} />
                </button>
              </div>
              <p className="text-[10px] text-slate-400 text-center font-medium leading-normal px-2">
                {t.disclaimer}
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tooltip cloud */}
      <AnimatePresence>
        {!isOpen && showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -6, 0] 
            }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{
              opacity: { duration: 0.3 },
              scale: { duration: 0.3 },
              y: { repeat: Infinity, duration: 3, ease: 'easeInOut', delay: 0.3 }
            }}
            onClick={() => setIsOpen(true)}
            className="absolute bottom-20 left-2 w-[260px] sm:w-[300px] bg-white text-brand-dark px-4 py-3 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.12)] border border-slate-100/90 whitespace-normal text-xs font-bold flex items-center gap-2.5 z-30 select-none cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            {/* Tiny speech bubble pointer pointing down at the button */}
            <div className="absolute top-full left-[42px] w-3 h-3 bg-white border-r border-b border-slate-100/90 rotate-45 -translate-y-1.5" />
            
            <Sparkles size={14} className="text-brand-blue animate-pulse" />
            <span>{t.tooltip}</span>
            
            {/* Close button inside tooltip */}
            <button
              onClick={(e) => {
                e.stopPropagation(); // Avoid opening the chat
                setShowTooltip(false);
              }}
              className="text-slate-400 hover:text-slate-600 ml-1 rounded-full p-0.5 hover:bg-slate-100 transition-all cursor-pointer flex items-center justify-center shrink-0"
              aria-label="Close message"
            >
              <X size={12} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating AI Core Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full ai-core-gradient flex items-center justify-center text-white shadow-2xl relative border border-white/20 transition-all cursor-pointer z-20 group"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        aria-label="Toggle AI Assistant"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close-icon"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={26} />
            </motion.div>
          ) : (
            <motion.div
              key="bot-icon"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative flex items-center justify-center"
            >
              <MessageSquare size={26} fill="white" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Orbiting Particles (4 dots of company colors) representing thinking AI */}
        {!isOpen && (
          <>
            {/* Particle 1: Gold (#D5CD27) */}
            <motion.div
              animate={{
                x: [0, 36, 0, -36, 0],
                y: [-36, 0, 36, 0, -36],
                scale: [1, 1.3, 0.7, 1.3, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute w-3.5 h-3.5 rounded-full bg-[#D5CD27] border border-white shadow-md pointer-events-none"
            />

            {/* Particle 2: Green (#72BF44) */}
            <motion.div
              animate={{
                x: [36, 0, -36, 0, 36],
                y: [0, 36, 0, -36, 0],
                scale: [0.7, 1.3, 1, 0.7, 0.7],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute w-3.5 h-3.5 rounded-full bg-[#72BF44] border border-white shadow-md pointer-events-none"
            />

            {/* Particle 3: Blue (#22689B) */}
            <motion.div
              animate={{
                x: [0, -36, 0, 36, 0],
                y: [36, 0, -36, 0, 36],
                scale: [1.2, 0.8, 1.3, 0.8, 1.2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute w-3.5 h-3.5 rounded-full bg-[#22689B] border border-white shadow-md pointer-events-none"
            />

            {/* Particle 4: Dark Navy (#263A69) */}
            <motion.div
              animate={{
                x: [-36, 0, 36, 0, -36],
                y: [0, -36, 0, 36, 0],
                scale: [0.8, 1.2, 0.7, 1.3, 0.8],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute w-3.5 h-3.5 rounded-full bg-[#263A69] border border-white shadow-md pointer-events-none"
            />
          </>
        )}
      </motion.button>
    </div>
  );
}
