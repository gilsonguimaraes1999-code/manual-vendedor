import { motion } from 'motion/react';
import {
  Home,
  MapPin,
  Keyboard,
  ShieldAlert,
  Zap,
  Terminal,
  Gavel,
  CheckCircle2,
  Lightbulb,
  Menu,
  X,
  Fish,
  Banknote,
  Users,
  LogOut,
  User as UserIcon,
  LayoutGrid,
  Award,
  RefreshCw,
  TrendingUp,
  CreditCard,
  Trophy,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useAuth } from '../lib/AuthContext';
import { useI18n } from '../lib/I18nContext';

const BRAND_LOGO_URL = '/alpha-logo.png';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  categories: any[];
}

const DEFAULT_ICONS: { [key: string]: any } = {
  Home, MapPin, Keyboard, ShieldAlert, Zap, Terminal, Gavel, CheckCircle2, Lightbulb, Fish, Banknote, Users, LayoutGrid, Award, RefreshCw, TrendingUp, CreditCard, Trophy
};

export default function Sidebar({ activeSection, onSectionChange, categories }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktopOpen, setIsDesktopOpen] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(340);
  const isResizing = useRef(false);
  const closeTimer = useRef<number | null>(null);
  const { user, logout, can } = useAuth();
  const { t, getLocalized, language } = useI18n();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing.current) return;

      const newWidth = e.clientX;
      if (newWidth > 300 && newWidth < 520) {
        setSidebarWidth(newWidth);
      }
    };

    const handleMouseUp = () => {
      isResizing.current = false;
      document.body.style.userSelect = 'auto';
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);


  useEffect(() => {
    const root = document.documentElement;

    const syncLayout = () => {
      const desktopOffset = window.innerWidth >= 1024 ? sidebarWidth : 0;
      root.style.setProperty('--manual-sidebar-offset', `${desktopOffset}px`);
    };

    syncLayout();
    window.addEventListener('resize', syncLayout);

    return () => {
      window.removeEventListener('resize', syncLayout);
      root.style.setProperty('--manual-sidebar-offset', '0px');
    };
  }, [sidebarWidth]);

  const openDesktopSidebar = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setIsDesktopOpen(true);
  };

  const closeDesktopSidebar = () => {
    if (isResizing.current) return;
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => {
      setIsDesktopOpen(false);
      closeTimer.current = null;
    }, 220);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    isResizing.current = true;
    document.body.style.userSelect = 'none';
  };

  const handleLogout = () => {
    onSectionChange('inicio');
    logout();
  };

  const groupMapping: { [key: string]: string } = {
    'INÍCIO DE RP': 'inicioRp',
    'COMERCIAL': 'comercial',
    'AFILIADOS': 'afiliadosGroup',
    'WIPE': 'wipeGroup'
  };

  return (
    <>
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <defs>
          <linearGradient id="sidebar-grad-gold" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="24" y2="0">
            <stop offset="0%" stopColor="#7f5f09" />
            <stop offset="50%" stopColor="#f9e29f" />
            <stop offset="100%" stopColor="#7f5f09" />
          </linearGradient>
          <linearGradient id="sidebar-grad-cyan" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="24" y2="0">
            <stop offset="0%" stopColor="#53EAFD" />
            <stop offset="50%" stopColor="#c5f8fe" />
            <stop offset="100%" stopColor="#53EAFD" />
          </linearGradient>
          <linearGradient id="sidebar-grad-greenred" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="24" y2="0">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="50%" stopColor="#facc15" />
            <stop offset="100%" stopColor="#ef4444" />
          </linearGradient>
        </defs>
      </svg>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 glass rounded-lg text-[#d4af37]"
        id="mobile-menu-toggle"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside
        data-desktop-open="true"
        style={{ width: `${sidebarWidth}px`, maxWidth: '100vw' }}
        className={`desktop-sidebar-panel fixed inset-y-0 left-0 z-40 bg-[#0a0a0a] border-r border-white/5 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform will-change-transform
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 overflow-y-auto group/sidebar flex flex-col`}
      >
        <div
          onMouseDown={handleMouseDown}
          className="hidden lg:block absolute top-0 right-0 w-1 h-full cursor-col-resize hover:bg-white/10 transition-colors z-50"
        />

        <div className="p-8 flex-1">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-12 h-12 -ml-1 flex items-center justify-center">
              <img
                src={BRAND_LOGO_URL}
                alt="SantaGroup"
                className="h-12 w-12 object-contain drop-shadow-[0_0_18px_rgba(212,175,55,0.4)]"
              />
            </div>
            <div className="overflow-hidden">
              <h1 className="font-display font-bold text-xl tracking-tight whitespace-nowrap">SANTAGROUP</h1>
              <p className="text-[10px] text-white/40 uppercase tracking-widest font-mono whitespace-nowrap">{t('login.subtitle')}</p>
            </div>
          </div>

          <nav className="space-y-8">
            {['INÍCIO DE RP', 'COMERCIAL', 'AFILIADOS', 'WIPE'].map(groupName => {
              const groupId = groupMapping[groupName];
              const groupLabel = t(`menu.groups.${groupId}`);
              const items = categories.filter(c => c.group === groupName && (c.visible !== false || can('edit_content')) && !(c.id === 'criterios-equipes' && language !== 'pt'));
              if (items.length === 0) return null;

              return (
                <div key={groupName} className="space-y-2">
                  <h3 className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em] px-4 mb-4 whitespace-nowrap">{groupLabel}</h3>
                  <div className="space-y-1">
                    {items.map((item) => {
                      const Icon = DEFAULT_ICONS[item.icon] || LayoutGrid;
                      const isActive = activeSection === item.id;
                      const isMainSystems = item.id === 'sistemas-principais' || item.id === 'wipe-objecoes';
                      const gradientId = item.id === 'comercial-operacao'
                        ? 'gold'
                        : item.id === 'sistemas-principais' || item.id === 'wipe-objecoes'
                        ? 'cyan'
                        : item.id === 'pode-nao-pode'
                        ? 'greenred'
                        : null;
                      const iconGradientClass = gradientId && !isActive
                        ? `sidebar-icon-${gradientId}`
                        : '';
                      const labelGradientClass = gradientId && !isActive
                        ? (gradientId === 'gold'
                            ? 'sidebar-label-gold-black'
                            : gradientId === 'cyan'
                            ? 'sidebar-label-blue-black'
                            : 'sidebar-label-green-red')
                        : '';

                      return (
                        <button
                          key={item.id}
                          onClick={() => {
                            onSectionChange(item.id);
                            setIsOpen(false);
                          }}
                          className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group relative
                            ${isActive && isMainSystems
                              ? 'bg-cyan-300 text-black shadow-[0_0_18px_rgba(34,211,238,0.36)]'
                              : isActive
                              ? 'bg-[#d4af37] text-black shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                              : 'text-white/60 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          <div className={`flex-shrink-0 ${iconGradientClass}`}>
                            <Icon
                              size={18}
                              className={
                                isActive
                                  ? 'text-black'
                                  : gradientId
                                  ? 'transition-colors'
                                  : isMainSystems
                                  ? 'text-cyan-200'
                                  : 'group-hover:text-[#d4af37] transition-colors'
                              }
                            />
                          </div>
                          <span
                            className={`font-medium text-sm text-left leading-tight whitespace-nowrap ${
                              labelGradientClass
                                ? labelGradientClass
                                : !isActive && isMainSystems
                                ? 'text-cyan-200'
                                : ''
                            }`}
                          >
                            {getLocalized(item.name)}
                          </span>

                          {isActive && (
                            <motion.div
                              layoutId="active-pill"
                              className="absolute left-0 w-1 h-6 bg-black rounded-r-full"
                            />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </nav>
        </div>

        <div className="p-6 space-y-6 border-t border-white/5 bg-black/20">
          <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
            <p className="text-[10px] text-white/40 font-bold uppercase tracking-wider mb-1">{t('manual_status')}</p>
            <p className="text-[11px] text-[#d4af37] font-medium leading-relaxed">
              {t('manual_desc')}
            </p>
          </div>

          {user?.role === 'OWNER' && (
            <div className="space-y-2">
              <h3 className="text-[10px] font-bold text-[#d4af37]/40 uppercase tracking-[0.2em] px-2 mb-2">{t('configs')}</h3>
              <div className="grid grid-cols-1 gap-1">
                <button
                  onClick={() => onSectionChange('admin-users')}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all text-[10px] font-bold uppercase tracking-widest
                    ${activeSection === 'admin-users' ? 'bg-[#d4af37] text-black' : 'text-white/40 hover:text-white hover:bg-white/5'}`}
                >
                  <Users size={14} />
                  <span>{t('accounts')}</span>
                </button>
              </div>
            </div>
          )}

          <div className="flex items-center gap-4 pt-6 border-t border-white/5">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#d4af37]">
              <UserIcon size={20} />
            </div>
            <div className="overflow-hidden flex-1">
              <p className="text-sm font-bold text-white truncate">{user?.name || t('username')}</p>
              <p className="text-[10px] text-[#d4af37] font-black uppercase tracking-tighter">
                {user?.role || 'Acesso'}
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="p-2 bg-red-500/10 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-all shadow-lg shadow-red-500/5"
              title={t('logout')}
            >
              <LogOut size={16} />
            </button>
          </div>
        </div>
      </aside>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 1024px) {
          .desktop-sidebar-panel {
            transform: translate3d(0, 0, 0) !important;
          }
          main {
            margin-left: ${sidebarWidth}px !important;
          }
        }
      `}} />


      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden"
        />
      )}
    </>
  );
}
