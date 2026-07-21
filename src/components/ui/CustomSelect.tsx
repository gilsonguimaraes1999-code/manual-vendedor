import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
}

export default function CustomSelect({ options, value, onChange, label }: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const selectedOption = options.find(opt => opt.value === value) || options[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="space-y-2 relative" ref={containerRef}>
      {label && <label className="text-[10px] font-black text-[#d4af37] uppercase tracking-widest px-1">{label}</label>}
      
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full h-12 flex items-center justify-between px-4 bg-[#1b1b1b] border-2 rounded-xl transition-all outline-none
          ${isOpen ? 'border-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.1)]' : 'border-[#2f2f2f] hover:border-white/20'}`}
      >
        <span className="text-sm font-medium text-white">{selectedOption?.label}</span>
        <ChevronDown size={18} className={`text-white/40 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#d4af37]' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            className="absolute z-[110] left-0 right-0 top-[calc(100%+8px)] bg-[#1b1b1b] border-2 border-[#2f2f2f] rounded-2xl shadow-2xl overflow-hidden py-2"
          >
            {options.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => {
                  onChange(opt.value);
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-3 text-left text-sm transition-all flex items-center gap-2
                  ${opt.value === value 
                    ? 'bg-[#d4af37]/10 text-[#d4af37] font-bold' 
                    : 'text-white/60 hover:bg-white/5 hover:text-white'}`}
              >
                {opt.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
