export type Language = 'pt' | 'en' | 'es';

export const LANGUAGES: Array<{ code: Language; shortLabel: string; label: string }> = [
  { code: 'pt', shortLabel: 'PT', label: 'Português' },
  { code: 'en', shortLabel: 'EN', label: 'English' },
  { code: 'es', shortLabel: 'ES', label: 'Español' },
];

export const LANGUAGE_STORAGE_KEY = 'sg_manual_language';
