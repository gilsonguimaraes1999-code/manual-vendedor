import { useState, useRef, useEffect } from 'react';
import { Smile } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const EMOJI_GROUPS: { label: string; emojis: string[] }[] = [
  { label: 'Sugeridos', emojis: ['💎', '⭐', '🔥', '✨', '⚡', '✅', '❌', '⚠️', '📌', '📍', '➡️', '👉', '🔹', '🔸', '🟢', '🟡', '🔴', '🟠'] },
  { label: 'Comercial', emojis: ['💰', '💵', '💸', '🪙', '💳', '🏦', '📈', '📉', '📊', '🧾', '🤝', '🧮', '💼', '🏷️', '🛒', '🎯', '🏆', '🥇'] },
  { label: 'RP / Cidade', emojis: ['🛡️', '🪪', '🏠', '🏢', '🏙️', '🚗', '🚙', '🏍️', '✈️', '🚁', '🔫', '💣', '🚓', '🚑', '🚒', '🕶️', '👑', '🎭'] },
  { label: 'Pessoas', emojis: ['👤', '👥', '🧑‍💼', '👮', '🕵️', '🧑‍⚖️', '🧑‍🚀', '🧑‍🔧', '🧑‍🍳', '🧑‍🎓', '🙋', '🙌', '💪', '👍', '👎', '🫡', '🧠', '💬'] },
  { label: 'Objetos', emojis: ['🔑', '🗝️', '🔒', '🔓', '📱', '💻', '🖥️', '⌨️', '📞', '📧', '📝', '📚', '📦', '🎁', '🧩', '🛠️', '⚙️', '🔧'] },
  { label: 'Tempo', emojis: ['⏰', '⏳', '⌛', '🕐', '📅', '📆', '🗓️', '🌙', '☀️', '🌤️', '🌧️', '⚡', '🔔', '🔕', '🎉', '🎊', '🎯', '🏁'] },
];

interface Props {
  onInsert: (emoji: string) => void;
  className?: string;
}

export default function EmojiPickerButton({ onInsert, className = '' }: Props) {
  const [open, setOpen] = useState(false);
  const [group, setGroup] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        title="Inserir emoji"
        className="flex items-center gap-2 px-3 py-2 bg-[#1b1b1b] border-2 border-[#2f2f2f] hover:border-[#d4af37] rounded-xl text-white/40 hover:text-[#d4af37] transition-all text-[9px] font-black uppercase tracking-widest"
      >
        <Smile size={14} /> Emoji
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.12 }}
            className="absolute right-0 top-full mt-2 z-[130] w-[320px] bg-[#0f0f0f] border-2 border-[#2f2f2f] rounded-2xl shadow-2xl shadow-black/80 overflow-hidden"
          >
            <div className="flex overflow-x-auto border-b border-[#2f2f2f] custom-scrollbar">
              {EMOJI_GROUPS.map((g, i) => (
                <button
                  key={g.label}
                  type="button"
                  onClick={() => setGroup(i)}
                  className={`shrink-0 px-3 py-2 text-[9px] font-black uppercase tracking-widest transition-all ${
                    i === group ? 'text-[#d4af37] border-b-2 border-[#d4af37]' : 'text-white/30 hover:text-white/60 border-b-2 border-transparent'
                  }`}
                >
                  {g.label}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-9 gap-1 p-3 max-h-56 overflow-y-auto custom-scrollbar">
              {EMOJI_GROUPS[group].emojis.map((e, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => { onInsert(e); setOpen(false); }}
                  className="w-8 h-8 flex items-center justify-center text-lg rounded-lg hover:bg-[#d4af37]/10 hover:scale-125 transition-all"
                >
                  {e}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
