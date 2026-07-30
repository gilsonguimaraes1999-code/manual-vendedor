import { Languages } from 'lucide-react';
import { LANGUAGES } from '../lib/languageConfig';
import { useI18n } from '../lib/I18nContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useI18n();
  const ariaLabel = language === 'en' ? 'Language' : 'Idioma';

  return (
    <div
      data-no-global-translate
      className="fixed bottom-5 right-5 z-[90] flex items-center gap-2 rounded-2xl border border-white/10 bg-[#101010]/85 p-1.5 shadow-[0_0_28px_rgba(0,0,0,0.45)] backdrop-blur-xl"
      aria-label={ariaLabel}
    >
      <div className="hidden h-9 w-9 items-center justify-center rounded-xl bg-black/35 text-[#d4af37] sm:flex">
        <Languages size={16} />
      </div>

      {LANGUAGES.map((item) => (
        <button
          key={item.code}
          type="button"
          onClick={() => setLanguage(item.code)}
          title={item.label}
          className={`h-9 min-w-10 rounded-xl px-3 text-[10px] font-black uppercase tracking-widest transition-all ${
            language === item.code
              ? 'bg-[#d4af37] text-black shadow-[0_0_18px_rgba(212,175,55,0.25)]'
              : 'text-white/40 hover:bg-white/5 hover:text-white'
          }`}
        >
          {item.shortLabel}
        </button>
      ))}
    </div>
  );
}
