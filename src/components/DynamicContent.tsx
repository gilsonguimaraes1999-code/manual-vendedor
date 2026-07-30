import React from 'react';
import { 
  Zap, 
  Terminal, 
  ShieldAlert, 
  BookOpen, 
  CheckCircle, 
  XCircle, 
  Image as ImageIcon,
  LayoutGrid,
  FileText,
  Type,
  ExternalLink,
  Copy,
  ChevronRight
} from 'lucide-react';
import Markdown from 'react-markdown';
import { Emoji, EMOJI_LABELS } from './Emoji';
import { motion } from 'motion/react';
import { useI18n } from '../lib/I18nContext';

interface DynamicContentProps {
  blocks: any[];
  onMediaClick: (media: any) => void;
}

export default function DynamicContent({ blocks, onMediaClick }: DynamicContentProps) {
  const { t, getLocalized } = useI18n();

  if (!blocks || blocks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-20 text-white/10 uppercase font-black tracking-[0.2em] text-center text-[10px] border-2 border-dashed border-[#2f2f2f] rounded-[3rem] bg-black/20">
        <div className="w-16 h-16 bg-white/5 rounded-3xl border border-white/5 flex items-center justify-center text-white/20 mb-6">
          <FileText size={32} />
        </div>
        {t('general.waiting_config')}
      </div>
    );
  }

  return (
    <div className="space-y-16">
      {blocks.map((block, idx) => {
        switch (block.type) {
          case 'header':
            return (
              <header key={idx} className="space-y-4">
                {getLocalized(block.subtitle) && <span className="text-[#d4af37] font-mono text-sm tracking-widest uppercase">{getLocalized(block.subtitle)}</span>}
                <h2 className="text-6xl font-display font-black tracking-tight normal-case text-white">{getLocalized(block.title)}</h2>
                <p className="text-white/60 leading-relaxed text-lg max-w-5xl">{getLocalized(block.content || block.text)}</p>
              </header>
            );

          case 'grid':
            return (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(block.items || []).map((item: any, i: number) => (
                  <div key={i} className="p-8 glass rounded-3xl border-white/5 space-y-4 group card-hover">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 bg-[#d4af37]/10 rounded-2xl flex items-center justify-center text-[#d4af37]">
                        <LayoutGrid size={24} />
                      </div>
                      {item.url && (
                        <button onClick={() => onMediaClick({ url: item.url, title: getLocalized(item.title), type: 'image' })} className="p-2 bg-white/5 rounded-xl text-white/40 hover:text-[#d4af37] transition-all">
                          <ImageIcon size={18} />
                        </button>
                      )}
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xl font-bold tracking-tight">{getLocalized(item.title)}</h4>
                      <p className="text-sm text-white/40 leading-relaxed">{getLocalized(item.description)}</p>
                    </div>
                  </div>
                ))}
              </div>
            );

          case 'text': {
            const content = getLocalized(block.content);
            const isCashbackBlock =
              content.includes('CASHBACK') ||
              content.includes('BENEFÍCIOS DE SER UM AFILIADO') ||
              content.includes('BENEFITS OF BEING AN AFFILIATE') ||
              content.includes('BENEFICIOS DE SER AFILIADO');
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.03 }}
                className={`relative overflow-hidden rounded-[2rem] border ${isCashbackBlock ? 'border-[#d4af37]/20 bg-gradient-to-br from-[#d4af37]/10 via-white/[0.035] to-black/40 shadow-2xl shadow-black/20' : 'border-white/10 bg-white/[0.035]'} p-8 md:p-10 prose prose-invert max-w-none`}
              >

                <div className="relative z-10 [&_p]:text-white/65 [&_p]:leading-8 [&_strong]:text-white [&_strong]:font-black">
                  <Markdown
                    components={{
                      h2: ({ children }) => (
                        <div className="not-prose mb-7 mt-12 first:mt-0 flex items-center gap-4">
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#d4af37]/25 bg-[#d4af37]/10 text-[#d4af37] shadow-md shadow-[#d4af37]/10">
                            <ChevronRight size={22} strokeWidth={3} />
                          </span>
                          <h2 className="m-0 text-2xl font-black leading-tight tracking-tight text-white md:text-3xl">{children}</h2>
                        </div>
                      ),
                      p: ({ children }) => (
                        <p className="not-prose relative my-4 pl-7 text-base font-semibold leading-8 text-white/60 md:text-[17px]">
                          <span className="absolute left-0 top-0 flex h-8 items-center text-[#d4af37] text-lg font-black leading-none drop-shadow-[0_0_6px_rgba(212,175,55,0.5)]">›</span>
                          {children}
                        </p>
                      ),
                      ul: ({ children }) => (
                        <ul
                          className="not-prose my-5 ml-2 list-none relative pl-6 space-y-0 [&>li]:py-2 [&>li:first-child]:pt-1 [&>li:last-child]:pb-1 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-2 before:w-px before:rounded-full before:bg-[linear-gradient(to_bottom,transparent,rgba(212,175,55,0.55)_15%,rgba(212,175,55,0.55)_85%,transparent)] before:shadow-[0_0_8px_rgba(212,175,55,0.35)]"
                        >
                          {children}
                        </ul>
                      ),
                      li: ({ children }) => {
                        const kids = React.Children.toArray(children);
                        let emoji: string | null = null;
                        let rest = kids;
                        const first = kids[0];
                        if (typeof first === 'string') {
                          const m = first.match(/^(\p{Extended_Pictographic}(?:\uFE0F)?(?:\u200D\p{Extended_Pictographic}(?:\uFE0F)?)*)\s*(.*)$/u);
                          if (m) {
                            emoji = m[1];
                            rest = [m[2], ...kids.slice(1)];
                          }
                        }
                        return (
                          <li className="flex items-baseline gap-3 text-base font-semibold leading-8 text-white/75 md:text-[17px]">
                            {emoji && (
                              <Emoji
                                symbol={emoji}
                                label={EMOJI_LABELS[emoji] ?? 'item de lista'}
                                className="inline-flex w-6 shrink-0 justify-center text-[18px] leading-8 select-none"
                              />
                            )}
                            <span className="flex-1">{rest}</span>
                          </li>
                        );
                      },
                    }}
                  >
                    {content}
                  </Markdown>
                </div>
              </motion.div>
            );
          }

          case 'alert': {
            const rawContent = getLocalized(block.content);
            const [rulePart, quotePart] = rawContent.split('|||').map((s) => s.trim());
            const hasQuote = Boolean(quotePart);
            const isDanger = block.style === 'danger';
            return (
              <div key={idx} className={`p-6 md:p-8 glass rounded-2xl border-l-4 ${isDanger ? 'border-red-500 bg-red-500/5' : 'border-[#d4af37] bg-[#d4af37]/5'} space-y-4`}>
                <div className="flex items-center gap-3">
                  <ShieldAlert size={hasQuote ? 26 : 20} className={isDanger ? 'text-red-500' : 'text-[#d4af37]'} />
                  <h5 className={`font-bold uppercase tracking-widest ${hasQuote ? 'text-lg md:text-xl' : 'text-xs'} ${isDanger ? 'text-red-400' : 'text-[#d4af37]'}`}>{getLocalized(block.title)}</h5>
                </div>
                {hasQuote ? (
                  <>
                    <p className="text-white/80 text-base md:text-lg leading-relaxed whitespace-pre-line flex gap-3">
                      <span className={`${isDanger ? 'text-red-400' : 'text-[#d4af37]'} font-bold shrink-0`}>›</span>
                      <span>{rulePart}</span>
                    </p>
                    <blockquote className={`mt-2 px-5 py-4 rounded-xl border ${isDanger ? 'border-red-500/30 bg-red-500/5' : 'border-[#d4af37]/30 bg-[#d4af37]/5'}`}>
                      <p className="text-white/90 italic text-base md:text-lg leading-relaxed">
                        “{quotePart.replace(/^["“”]+|["“”]+$/g, '').replace(/^[.!?,;:\s]+/, (s) => s).replace(/^./, (c) => c.toUpperCase())}”
                      </p>
                    </blockquote>
                  </>
                ) : (
                  <p className="text-white/60 text-sm leading-relaxed whitespace-pre-line">{rawContent}</p>
                )}
              </div>
            );
          }

          default:
            return null;
        }
      })}
    </div>
  );
}
