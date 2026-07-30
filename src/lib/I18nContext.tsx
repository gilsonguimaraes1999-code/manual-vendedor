import React, { useContext, useEffect, useState } from 'react';
import { translations } from './translations';
import { LANGUAGE_STORAGE_KEY, Language } from './languageConfig';
import { translateText } from './manualTranslations';
import { I18nContext } from './i18nContextInstance';

const FALLBACK_PT: Record<string, string> = {
  manual_status: 'Status do Manual',
  MANUAL_STATUS: 'Status do Manual',
  manual_desc: 'Manual do novo vendedor. Focado em treinamento e integração oficial.',
  MANUAL_DESC: 'Manual do novo vendedor. Focado em treinamento e integração oficial.',
  visitor_view: 'Ver como visitante',
  VISITOR_VIEW: 'Ver como visitante',
  visitor_active: 'Modo visitante ativo',
  VISITOR_ACTIVE: 'Modo visitante ativo',
  configs: 'Configurações',
  CONFIGS: 'Configurações',
  accounts: 'Contas',
  ACCOUNTS: 'Contas',
  site_config: 'Configuração do Site',
  SITE_CONFIG: 'Configuração do Site',
  username: 'Usuário',
  logout: 'Sair',
  admin_users_subtitle: 'Gerencie usuários, cargos e permissões do sistema.',
  admin_content_subtitle: 'Edite categorias, conteúdos, blocos, links, imagens e estrutura do manual.',
  confirm_delete_category: 'Tem certeza que deseja apagar esta categoria?',
  confirm_delete_user: 'Tem certeza que deseja apagar {name}?',
  error_creating_user: 'Erro ao criar usuário.',
  error_last_owner: 'Não é possível desativar ou apagar o último Owner ativo.',
  error_self_delete: 'Você não pode apagar sua própria conta.',
  login_error: 'Erro ao entrar no sistema.',
  'settings.role': 'Cargo',
  'SETTINGS.ROLE': 'Cargo',
  'settings.actions': 'Ações',
  'SETTINGS.ACTIONS': 'Ações',
  'settings.no_users': 'Nenhum usuário encontrado',
  'settings.nomeCompleto': 'Nome Completo',
  'settings.categoryName': 'Nome da Categoria',
  'settings.menuGroup': 'Grupo do Menu',
  'settings.icon': 'Ícone',
  'settings.visualStructure': 'Estrutura Visual',
  'settings.siteConfig': 'Configuração do Site',
  'settings.accounts': 'Contas de Acesso',
  'settings.createAccount': 'Criar Nova Conta',
  'general.status': 'Status',
  'GENERAL.STATUS': 'Status',
  'general.loading': 'Carregando...',
  'general.active': 'Ativo',
  'general.inactive': 'Desativado',
  'general.add_text': 'Adicionar texto',
  'general.add_content_block': 'Adicionar bloco de conteúdo',
  'general.add_image': 'Adicionar imagem',
  'general.add_grid': 'Adicionar grid/cards',
  'general.block_type': 'Bloco',
  'general.block_title': 'Título',
  'general.grid_items': 'Itens do grid',
  'general.main_content': 'Conteúdo',
  'general.waiting_config': 'Aguardando conteúdo ser configurado pelo Owner...',
};

function getNestedTranslation(key: string, language: Language = 'pt'): string | undefined {
  const keys = key.split('.');
  let value: any = translations[language] || translations.pt;

  for (const k of keys) {
    if (value && Object.prototype.hasOwnProperty.call(value, k)) {
      value = value[k];
    } else {
      return undefined;
    }
  }

  return typeof value === 'string' ? value : undefined;
}

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'pt';
  const saved = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return saved === 'en' || saved === 'es' || saved === 'pt' ? saved : 'pt';
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [language]);

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
  };

  const t = (key: string) => {
    const nested = getNestedTranslation(key, language) || getNestedTranslation(key, 'pt');
    if (nested) return translateText(nested, language);

    if (FALLBACK_PT[key]) return translateText(FALLBACK_PT[key], language);

    const general = getNestedTranslation(`general.${key}`, language) || getNestedTranslation(`general.${key}`, 'pt');
    if (general) return translateText(general, language);

    const settings = getNestedTranslation(`settings.${key}`, language) || getNestedTranslation(`settings.${key}`, 'pt');
    if (settings) return translateText(settings, language);

    return key;
  };

  const getLocalized = (value: any) => {
    if (typeof value === 'string') {
      const translatedKey = t(value);
      return translatedKey === value ? translateText(value, language) : translatedKey;
    }
    if (value && typeof value === 'object') {
      if (value[language]) return translateText(value[language], language);
      if (value.pt) return translateText(value.pt, language);
      const keys = Object.keys(value);
      if (keys.length > 0) return t(value[keys[0]]);
    }
    return String(value || '');
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t, getLocalized }}>
      {children}
    </I18nContext.Provider>
  );
}

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) throw new Error('useI18n must be used within I18nProvider');
  return context;
};
