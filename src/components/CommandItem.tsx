import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, Info, Zap, AlertCircle, ChevronDown, Eye } from 'lucide-react';
import { CommandInfo } from '../types';
import { useState } from 'react';
import { useI18n } from '../lib/I18nContext';

interface CommandItemProps {
  item: CommandInfo;
  onMediaClick: (media: { url: string; title: string; type: 'image' | 'video' }) => void;
  itemId?: string;
  openItemId?: string | null;
  onOpenChange?: (itemId: string | null) => void;
  key?: string | number;
}

export default function CommandItem({ item, onMediaClick, itemId = item.key, openItemId, onOpenChange }: CommandItemProps) {
  const { t, getLocalized } = useI18n();
  const [internalIsOpen, setInternalIsOpen] = useState(false);

  const isStaff = item.category === 'poderes';
  const isControl = item.category === 'controles';
  const canTranslateCommand = item.key === 'mundo' || item.key === 'mundoarea';
  const commandKey = isControl ? getLocalized(item.key) : canTranslateCommand ? getLocalized(item.key).toLowerCase() : item.key;
  const isControlled = openItemId !== undefined && onOpenChange;
  const isOpen = isControlled ? openItemId === itemId : internalIsOpen;
  const handleToggle = () => {
    if (isControlled) {
      onOpenChange(isOpen ? null : itemId);
      return;
    }
    setInternalIsOpen((value) => !value);
  };

  return (
    <div className="space-y-2">
      <button 
        onClick={handleToggle}
        className={`w-full p-4 bg-[#1b1b1b] rounded-2xl border-2 border-[#2f2f2f] flex items-center justify-between cursor-pointer group transition-all duration-300
          ${isOpen ? (isStaff ? 'border-red-500/50 bg-red-500/5' : 'border-[#d4af37]/50 bg-[#d4af37]/5') : 'hover:border-[#d4af37]/20'}
          ${isStaff ? 'hover:border-red-500/30' : isControl ? 'hover:border-[#d4af37]/30' : ''}`}
      >
        <div className="flex items-center gap-4">
          <div className={`flex flex-col items-center justify-center px-3 py-2 rounded-xl font-mono border-2 transition-all duration-300 min-w-[5.5rem]
            ${isStaff 
              ? 'bg-red-500/10 text-red-500 border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.1)]' 
              : 'bg-black/40 text-[#d4af37] border-[#2f2f2f] shadow-[0_0_15px_rgba(0,0,0,0.1)]'}`}>
            <span className="text-[8px] uppercase tracking-[0.2em] font-black opacity-30 mb-0.5">
              {isControl ? t('general.key') : t('general.command')}
            </span>
            <span data-no-global-translate className="text-sm font-black whitespace-nowrap">"{commandKey}"</span>
          </div>
          <div className="text-left">
            <p className="text-sm font-bold text-white/80 group-hover:text-white transition-colors">
              {getLocalized(item.description)}
            </p>
          </div>
        </div>
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#d4af37]' : 'text-white/10 group-hover:text-[#d4af37]'}`}>
          <ChevronDown size={18} />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="p-6 bg-[#151515] rounded-2xl border-2 border-[#2f2f2f] space-y-6 mt-1">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="mt-1"><Zap size={14} className="text-[#d4af37]" /></div>
                    <div>
                      <p className="text-[10px] uppercase text-[#d4af37]/40 font-black tracking-widest">{t('general.what_does')}</p>
                      <p className="text-xs text-white/60 leading-relaxed font-medium">{getLocalized(item.description)}</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="mt-1"><AlertCircle size={14} className="text-white/20" /></div>
                    <div>
                      <p className="text-[10px] uppercase text-white/20 font-black tracking-widest">{t('general.when_use')}</p>
                      <p className="text-xs text-white/60 leading-relaxed font-medium">{getLocalized(item.when)}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-black/40 p-4 rounded-xl space-y-2 border-2 border-[#2f2f2f]">
                    <p className="text-[10px] uppercase text-[#d4af37]/40 font-black tracking-widest flex items-center gap-2">
                      <HelpCircle size={12} className="text-[#d4af37]" /> {t('general.example_shortcuts')}
                    </p>
                    <code className="text-sm text-[#d4af37] font-mono block bg-black/40 p-2 border border-[#d4af37]/10 rounded-lg whitespace-pre-wrap">
                      {getLocalized(item.example)}
                    </code>
                  </div>

                  {item.video && (
                    <button
                      onClick={() => onMediaClick({ url: item.video!, title: getLocalized(item.name), type: 'video' })}
                      className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-[#d4af37] text-black rounded-xl font-black uppercase tracking-widest text-[10px] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_10px_20px_rgba(212,175,55,0.15)]"
                    >
                      <Eye size={16} />
                      <span>{t('general.watch_video')}</span>
                    </button>
                  )}

                  {item.note && (
                    <div className="flex items-center gap-2 text-[10px] text-white/20 font-medium italic px-2">
                      <Info size={12} />
                      <span>{t('general.note')}: {getLocalized(item.note)}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
