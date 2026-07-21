import { createContext } from 'react';
import type { Language } from './languageConfig';

export interface I18nContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
  getLocalized: (value: any) => string;
}

export const I18nContext = createContext<I18nContextType | null>(null);
