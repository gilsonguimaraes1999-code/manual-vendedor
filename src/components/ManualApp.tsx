import { useState, useMemo, useEffect } from 'react';
import { useNavigate, useParams } from '@tanstack/react-router';
import Sidebar from '@/components/Sidebar';
import CommandItem from '@/components/CommandItem';
import Login from '@/components/Login';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import AdminUsers from '@/components/admin/AdminUsers';
import DynamicContent from '@/components/DynamicContent';
import { CONTROLS, STAFF_COMMANDS } from '@/types';
import { useAuth } from '@/lib/AuthContext';
import { useI18n } from '@/lib/I18nContext';
import { categoryService, userService } from '@/lib/services';
import { INITIAL_CATEGORIES } from '@/lib/initialContent';
import { motion, AnimatePresence } from 'motion/react';
import Markdown from 'react-markdown';
import { 
  Search, 
  ChevronRight, 
  UserPlus, 
  Map, 
  Users, 
  ShieldCheck, 
  Stethoscope, 
  CheckCircle, 
  XCircle, 
  BookOpen,
  Coffee,
  Heart,
  Zap,
  Lightbulb,
  Eye,
  X,
  Terminal,
  ShieldAlert,
  Copy,
  Check,
  Crown,
  Scale,
  Star,
  ChevronDown,
  TrendingUp,
  Banknote,
  MapPin,
  HelpCircle,
  Trophy,
  Target,
  AlertTriangle,
  Activity,
  CheckSquare,
  History,
  MessageCircle,
  Settings,
  Link as LinkIcon,
  CircleDashed,
  LogOut,
  Image as ImageIcon
  ,FileSignature
  ,Drama, Swords, Bug, Tag, Gift
  ,Headphones
} from 'lucide-react';

export default function App() {
  const { user, loading: authLoading, can } = useAuth();
  const { getLocalized, language } = useI18n();
  const params = useParams({ strict: false }) as { section?: string };
  const navigate = useNavigate();
  const activeSection = params.section || 'inicio';
  const setActiveSection = (id: string) => navigate({ to: '/$section', params: { section: id } });
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMedia, setSelectedMedia] = useState<{ url?: string; title: string; type: 'image' | 'video' | 'markdown'; content?: string } | null>(null);
  const [copiedBind, setCopiedBind] = useState<string | null>(null);
  const [activeGuideline, setActiveGuideline] = useState<string | null>(null);
  const [openCommandItemId, setOpenCommandItemId] = useState<string | null>(null);

  // Subscribe to categories and seed default owner
  useEffect(() => {
    if (!user) return;
    
    const seedSystem = async () => {
      const unsubscribeCategories = categoryService.subscribe((data) => {
        if (data.length === 0) {
          console.log('Seeding initial categories...');
          INITIAL_CATEGORIES.forEach(cat => {
            categoryService.saveCategory(cat);
          });
        } else {
          setCategories(data);
          setLoading(false);
        }
      });

      return unsubscribeCategories;
    };

    const cleanup = seedSystem();
    return () => {
      cleanup.then(unsub => unsub?.());
    };
  }, [user]);

  // Close modal on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedMedia(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  useEffect(() => {
    if (!user) return;
    setActiveSection('inicio');
    setSearchQuery('');
    setSelectedMedia(null);
    setOpenCommandItemId(null);
  }, [user?.id]);

  useEffect(() => {
    setOpenCommandItemId(null);
  }, [activeSection, searchQuery]);

  useEffect(() => {
    if (activeSection === 'criterios-equipes' && language !== 'pt') {
      navigate({ to: '/$section', params: { section: 'inicio' } });
    }
  }, [language, activeSection, navigate]);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedBind(id);
    setTimeout(() => setCopiedBind(null), 2000);
  };

  const filteredCommands = useMemo(() => {
    const frequentKeys = ['nc', 'god id', 'tpto id', 'tptome id', 'mundoarea', 'car [spawn]', 'dv', 'tuning', 'vehedit', 'wall', 'wallconfig2', 'mundo'];
    
    if (!searchQuery) return { 
      controls: CONTROLS, 
      staff: STAFF_COMMANDS,
      frequent: STAFF_COMMANDS.filter(cmd => frequentKeys.includes(cmd.key))
    };
    
    const query = searchQuery.toLowerCase();
    const filterFn = (cmd: typeof CONTROLS[0]) => 
      cmd.name.toLowerCase().includes(query) || 
      cmd.key.toLowerCase().includes(query) || 
      cmd.description.toLowerCase().includes(query);
    
    return {
      controls: CONTROLS.filter(filterFn),
      staff: STAFF_COMMANDS.filter(filterFn),
      frequent: STAFF_COMMANDS.filter(cmd => frequentKeys.includes(cmd.key)).filter(filterFn)
    };
  }, [searchQuery]);

  const renderContent = () => {
    // Admin Sections (Blocked based on permissions)
    if (activeSection === 'admin-users' && can('manage_users')) return <AdminUsers />;

    // Dynamic Categories from internal storage
    const currentCategory = categories.find(c => c.id === activeSection);
    if (currentCategory) {
      // If category is hidden and user cannot edit_content, don't show
      if (!currentCategory.visible && !can('edit_content')) {
        return (
          <div className="flex flex-col items-center justify-center p-20 text-white/20 uppercase font-black tracking-widest text-xs border-2 border-dashed border-white/5 rounded-[3rem]">
            Acesso Restrito
          </div>
        );
      }

      // If it has dynamic blocks, render them
      if (currentCategory.contentBlocks && currentCategory.contentBlocks.length > 0) {
        return <DynamicContent blocks={currentCategory.contentBlocks} onMediaClick={setSelectedMedia} />;
      }
    }

    // Fallback to static sections (for initial transition)
    switch (activeSection) {
      case 'inicio':
        return (
          <div className="space-y-12">
            <header className="space-y-4">
              <span className="text-[#d4af37] font-mono text-sm tracking-widest uppercase">Manual</span>
              <h2
                className="manual-comercial-gold text-6xl font-display font-black tracking-tight normal-case"
                data-text="Manual Comercial"
              >
                Manual Comercial
              </h2>
              <p className="text-white/60 max-w-2xl leading-relaxed text-lg">
                Bem-vindo ao Comercial SantaGroup. Este manual foi criado para ensinar como jogar o roleplay e como utilizar seus poderes de forma correta.
              </p>
            </header>

            <div className="flex flex-col gap-6">
              {[
                { title: 'Evolução', desc: 'Comece com pequenos trabalhos, conheça pessoas e consequentemente traga resultados.', icon: Zap },
              ].map((card, i) => (
                <div key={i} className="p-8 glass rounded-3xl border-white/5 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#d4af37]/10 rounded-2xl flex items-center justify-center text-[#d4af37]">
                      <card.icon size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-[#d4af37]">📈 {card.title}</h3>
                  </div>
                  <p className="text-white/40 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'comercial-operacao':
        return (
          <div className="space-y-12">
            <header className="space-y-4">
              <h2 className="text-6xl font-display font-black tracking-tight normal-case text-white">Comercial / Operação</h2>
            </header>

            <section className="commercial-rule-led-card relative overflow-hidden rounded-[2rem] p-8">
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#d4af37]/10 blur-3xl" />
              <Users
                size={160}
                strokeWidth={1.25}
                aria-hidden="true"
                className="pointer-events-none absolute -right-6 top-1/2 -translate-y-1/2 text-[#d4af37]/10 drop-shadow-[0_0_24px_rgba(212,175,55,0.35)]"
              />
              <div className="relative flex flex-col gap-5">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/30 bg-black/30 px-4 py-2 text-[10px] font-black uppercase tracking-[0.25em] text-[#d4af37]">
                    <Crown size={14} />
                    {getLocalized('REGRA PRINCIPAL DO COMERCIAL')}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-3xl font-display font-black text-white">
                      {getLocalized('Nenhum vendedor é dono de cliente!')}
                    </h3>
                    <div className="max-w-4xl space-y-3">
                      <p className="flex items-start gap-3 text-base font-bold leading-relaxed text-white/70">
                        <span className="mt-0.5 text-xl font-black leading-none text-[#d4af37]">›</span>
                        <span>{getLocalized('A escolha é sempre do cliente: ele compra com quem quiser e com quem se sentir mais confortável.')}</span>
                      </p>
                      <p className="flex items-start gap-3 text-sm font-black leading-relaxed text-[#f9e29f]/85">
                        <span className="mt-0.5 text-xl font-black leading-none text-[#d4af37]">›</span>
                        <span>{getLocalized('Se ele já tiver preferência por algum vendedor, o próprio cliente vai avisar quando oferecerem o produto.')}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="commercial-rule-led-card commercial-rule-led-card--blue relative overflow-hidden rounded-[2rem] p-8">
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-blue-500/10 blur-3xl" />
              <FileSignature
                size={160}
                strokeWidth={1.25}
                aria-hidden="true"
                className="pointer-events-none absolute -right-6 top-1/2 -translate-y-1/2 text-[#53EAFD]/10 drop-shadow-[0_0_24px_rgba(83,234,253,0.35)]"
              />
              <div className="relative flex flex-col gap-5">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-black/30 px-4 py-2 text-[10px] font-black uppercase tracking-[0.25em] text-blue-300">
                    <FileSignature size={14} />
                    {getLocalized('CONTRATO')}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-3xl font-display font-black text-white">
                      {getLocalized('Quando é obrigatório contrato')}
                    </h3>
                    <div className="max-w-4xl space-y-3">
                      <p className="flex items-start gap-3 text-base font-bold leading-relaxed text-white/70">
                        <span className="mt-0.5 text-xl font-black leading-none text-blue-400">›</span>
                        <span>{getLocalized('Vendas acima de 2k (mesmo que tenha sido pendência, vai o valor total da pendência).')}</span>
                      </p>
                      <p className="flex items-start gap-3 text-base font-bold leading-relaxed text-white/70">
                        <span className="mt-0.5 text-xl font-black leading-none text-blue-400">›</span>
                        <span>{getLocalized('Vendas de big clientes.')}</span>
                      </p>
                      <div className="contract-warning-highlight mt-2 inline-flex items-center gap-2.5 rounded-xl px-3.5 py-2.5">
                        <AlertTriangle size={18} className="shrink-0 text-amber-300 drop-shadow-[0_0_8px_rgba(251,191,36,0.7)]" />
                        <span className="contract-warning-text text-sm font-black leading-snug tracking-tight md:text-base">
                          {getLocalized('Caso o cliente não assine em até 24h, o vendedor perderá a venda.')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="space-y-16">
              {/* REGRAS IMPORTANTES */}
              <section className="space-y-8">
                <div className="flex items-center gap-3 text-[#d4af37]">
                  <BookOpen size={24} />
                  <h3 className="text-xl font-bold uppercase tracking-widest">📌 REGRAS IMPORTANTES</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-8 glass bg-red-500/5 rounded-3xl border border-red-500/10 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-red-500/20 text-red-400 rounded-lg">
                        <ShieldAlert size={20} />
                      </div>
                      <h5 className="text-red-400 font-bold text-lg uppercase tracking-tight">OPERAÇÃO</h5>
                    </div>
                    <ul className="space-y-4">
                      {[
                        'Responsável por regras da cidade',
                        'Aplica punições gerais (ban, advertência, etc)',
                        'Resolve tudo relacionado a administração'
                      ].map((li, i) => (
                        <li key={i} className="flex items-center gap-3 text-white/50 text-sm">
                           <div className="w-1.5 h-1.5 bg-red-500/40 rounded-full" />
                           {li}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-8 glass bg-green-500/5 rounded-3xl border border-green-500/10 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-green-500/20 text-green-400 rounded-lg">
                        <Banknote size={20} />
                      </div>
                      <h5 className="text-green-400 font-bold text-lg uppercase tracking-tight">COMERCIAL</h5>
                    </div>
                    <ul className="space-y-4">
                      {[
                        'Responsável por vendas',
                        'Benefícios e produtos',
                        'Relacionamento com cliente',
                        'Punições (Banimentos apenas por questões comerciais)'
                      ].map((li, i) => (
                        <li key={i} className="flex items-center gap-3 text-white/50 text-sm">
                           <div className="w-1.5 h-1.5 bg-green-500/40 rounded-full" />
                           {li}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* LIMITES & DIRECIONAMENTO (QUADRO INTERATIVO - 2 COLUNAS) */}
              <section className="space-y-8">
                <div className="flex items-center gap-3 text-[#d4af37]">
                  <ShieldAlert size={24} />
                  <h3 className="text-xl font-bold uppercase tracking-widest">⚠️ DIRETRIZES E DIRECIONAMENTOS</h3>
                </div>

                <div className="glass bg-white/5 rounded-[2.5rem] border border-white/10 overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* LIMITES */}
                    <div className="p-10 border-b lg:border-b-0 lg:border-r border-white/10 space-y-10">
                      <div className="space-y-4">
                        {[
                          { 
                            id: 'L1',
                            q: 'Comercial Interfere em banimentos?', 
                            a: 'O comercial não possui autoridade para alterar, revisar ou opinar sobre decisões da operação.',
                            color: 'red',
                            icon: <XCircle size={18} />
                          },
                          { 
                            id: 'L2',
                            q: 'Comercial negocia punições de banimentos e advertências?', 
                            a: 'Nenhuma punição pode ser flexibilizada, negociada ou “ajustada” pelo comercial.',
                            color: 'red',
                            icon: <Scale size={18} />
                          },
                          { 
                            id: 'L3',
                            q: 'Quem pode resolver essas questões de banimentos e advertências?', 
                            a: 'Toda situação envolvendo punição ou advertência é responsabilidade da equipe operacional.',
                            color: 'blue',
                            icon: <ShieldAlert size={18} />
                          }
                        ].map((item, i) => {
                          const themeColors = {
                            red: { border: 'border-red-500/20', hover: 'hover:border-red-500/40', active: 'border-red-500/50 bg-red-500/5', text: 'text-red-500', glow: 'shadow-[0_0_20px_rgba(239,68,68,0.05)]' },
                            blue: { border: 'border-blue-500/20', hover: 'hover:border-blue-500/40', active: 'border-blue-500/50 bg-blue-500/5', text: 'text-blue-400', glow: 'shadow-[0_0_20px_rgba(59,130,246,0.05)]' },
                            green: { border: 'border-green-500/20', hover: 'hover:border-green-500/40', active: 'border-green-500/50 bg-green-500/5', text: 'text-green-400', glow: 'shadow-[0_0_20px_rgba(34,197,94,0.05)]' }
                          }[item.color as 'red' | 'blue' | 'green'];

                          return (
                            <div key={i} className={`flex flex-col overflow-hidden rounded-2xl border transition-all duration-300 ${themeColors.glow} ${activeGuideline === item.id ? themeColors.active : `bg-white/5 ${themeColors.border} ${themeColors.hover}`}`}>
                              <button 
                                onClick={() => setActiveGuideline(activeGuideline === item.id ? null : item.id)}
                                className="w-full flex flex-col gap-3 p-6 text-left"
                              >
                                <div className="flex items-center justify-between gap-4">
                                  <div className="flex items-center gap-4">
                                    <div className={`p-2 rounded-xl bg-black/40 ${activeGuideline === item.id ? themeColors.text : 'text-white/20'}`}>
                                      {item.icon}
                                    </div>
                                    <span className={activeGuideline === item.id ? 'text-white font-bold' : 'text-white/80'}>{item.q}</span>
                                  </div>
                                  <ChevronDown 
                                    size={18} 
                                    className={`transition-transform duration-300 ${activeGuideline === item.id ? `rotate-180 ${themeColors.text}` : 'text-white/20'}`} 
                                  />
                                </div>
                              </button>
                              
                              <AnimatePresence>
                                {activeGuideline === item.id && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="px-6 pb-6 overflow-hidden"
                                  >
                                    <div className={`pt-4 border-t ${item.color === 'red' ? 'border-red-500/10' : item.color === 'blue' ? 'border-blue-500/10' : 'border-green-500/10'}`}>
                                      <p className={`text-sm leading-relaxed font-medium ${item.color === 'red' ? 'text-red-100/70' : item.color === 'blue' ? 'text-blue-100/70' : 'text-green-100/70'}`}>
                                        {item.a}
                                      </p>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* DIRECIONAMENTO */}
                    <div className="p-10 bg-blue-500/5 space-y-10">
                      <div className="space-y-4">
                        {[
                          { 
                            id: 'D1',
                            q: 'Cliente foi banido ou advertido sem que seja pelo Comercial?', 
                            a: 'Em caso de banimentos ou advertências que não forem por motivos comerciais, encaminhar o cliente a procurar alguém da operação.',
                            color: 'blue',
                            icon: <MapPin size={18} />
                          },
                          { 
                            id: 'D2',
                            q: 'Cliente com problema com um staff?', 
                            a: 'O cliente tem algum problema com algum staff da operação? Encaminhe o cliente para alguém da Diretoria da cidade.',
                            color: 'blue',
                            icon: <Users size={18} />
                          },
                          { 
                            id: 'D3',
                            q: 'Cliente possui dúvidas referente a um produto, vip ou gostaria de efetuar uma compra?', 
                            a: 'O comercial é responsável por essa área. Então apenas o comercial pode falar preço de Item, ou tirar dúvidas relacionadas a compra.',
                            color: 'green',
                            icon: <Banknote size={18} />
                          }
                        ].map((item, i) => {
                          const themeColors = {
                            red: { border: 'border-red-500/20', hover: 'hover:border-red-500/40', active: 'border-red-500/50 bg-red-500/5', text: 'text-red-500', glow: 'shadow-[0_0_20px_rgba(239,68,68,0.05)]' },
                            blue: { border: 'border-blue-500/20', hover: 'hover:border-blue-500/40', active: 'border-blue-500/50 bg-blue-500/5', text: 'text-blue-400', glow: 'shadow-[0_0_20px_rgba(59,130,246,0.05)]' },
                            green: { border: 'border-green-500/20', hover: 'hover:border-green-500/40', active: 'border-green-500/50 bg-green-500/5', text: 'text-green-400', glow: 'shadow-[0_0_20px_rgba(34,197,94,0.05)]' }
                          }[item.color as 'red' | 'blue' | 'green'];

                          return (
                            <div key={i} className={`flex flex-col overflow-hidden rounded-2xl border transition-all duration-300 ${themeColors.glow} ${activeGuideline === item.id ? themeColors.active : `bg-black/40 ${themeColors.border} ${themeColors.hover}`}`}>
                              <button 
                                onClick={() => setActiveGuideline(activeGuideline === item.id ? null : item.id)}
                                className="w-full flex flex-col gap-3 p-6 text-left"
                              >
                                <div className="flex items-center justify-between gap-4">
                                  <div className="flex items-center gap-4">
                                    <div className={`p-2 rounded-xl bg-black/40 ${activeGuideline === item.id ? themeColors.text : 'text-white/20'}`}>
                                      {item.icon}
                                    </div>
                                    <span className={activeGuideline === item.id ? 'text-white font-bold' : 'text-white/80'}>{item.q}</span>
                                  </div>
                                  <ChevronDown 
                                    size={18} 
                                    className={`transition-transform duration-300 ${activeGuideline === item.id ? `rotate-180 ${themeColors.text}` : 'text-white/20'}`} 
                                  />
                                </div>
                              </button>

                              <AnimatePresence>
                                {activeGuideline === item.id && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="px-6 pb-6 overflow-hidden"
                                  >
                                    <div className={`pt-4 border-t ${item.color === 'red' ? 'border-red-500/10' : item.color === 'blue' ? 'border-blue-500/10' : 'border-green-500/10'}`}>
                                      <p className={`text-sm leading-relaxed font-medium ${item.color === 'red' ? 'text-red-100/70' : item.color === 'blue' ? 'text-blue-100/70' : 'text-green-100/70'}`}>
                                        {item.a}
                                      </p>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Funnel de Hierarquia (BOTTOM) */}
              <section className="space-y-8">
                <div className="flex items-center gap-3 text-[#d4af37]">
                  <TrendingUp size={24} />
                  <h3 className="text-xl font-bold uppercase tracking-widest">👑 Hierarquia da Operação</h3>
                </div>
                
                <div className="flex flex-col items-center space-y-4 max-w-4xl mx-auto">
                   {[
                     { 
                       level: 'RESP. GERAL', 
                       title: 'DONO DA CIDADE', 
                       desc: 'Máxima autoridade da cidade. Responsável por definir diretrizes gerais e ter a palavra final.',
                       color: 'border-[#d4af37] bg-[#d4af37]/5',
                       icon: <Crown size={24} />,
                       width: 'w-full'
                     },
                     { 
                       level: 'DIRETORIA', 
                       title: 'FISCALIZAÇÃO GERAL', 
                       desc: 'Fiscaliza todas as áreas da cidade: cultura, wallstreet e orgs. Toma decisões críticas.',
                       color: 'border-white/20 bg-white/5',
                       icon: <ShieldCheck size={20} />,
                       width: 'w-[92%]'
                     },
                     { 
                       level: 'DIRETOR ORGS & LEGAL', 
                       title: 'EQUILÍBRIO DE PAINÉIS', 
                       desc: 'Mantém a cultura interna das facções e ilegal/legal em harmonia.',
                       color: 'border-white/10 bg-white/5',
                       icon: <Scale size={20} />,
                       width: 'w-[84%]'
                     },
                     { 
                       level: 'DIRETOR COMUNIDADE', 
                       title: 'CULTURA E SUPORTE', 
                       desc: 'Mantém as pastas rodando e o suporte ao player ativo.',
                       color: 'border-white/5 bg-white/5',
                       icon: <Users size={20} />,
                       width: 'w-[76%]'
                     },
                     { 
                       level: 'DIRETOR WALLSTREET', 
                       title: 'RECRUTAMENTO E INICIANTES', 
                       desc: 'Gestão de iniciantes e direcionamento para facções ou empregos.',
                       color: 'border-white/5 bg-white/5',
                       icon: <TrendingUp size={20} />,
                       width: 'w-[68%]'
                     }
                   ].map((item, i) => (
                     <div key={i} className="flex flex-col items-center w-full">
                       <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className={`${item.width} relative group`}
                       >
                         <div className={`p-6 rounded-3xl border ${item.color} transition-all duration-500 overflow-hidden`}>
                            <div className="flex gap-6 items-center relative z-10">
                              <div className="p-3 bg-black/40 rounded-2xl text-[#d4af37] ring-1 ring-white/10 shrink-0">
                                {item.icon}
                              </div>
                              <div className="space-y-1 flex-1">
                                <div className="flex items-center gap-3">
                                  <h4 className="text-base font-bold tracking-tight text-white/90 uppercase">{item.level}</h4>
                                  <span className="text-[10px] font-black text-[#d4af37] tracking-widest">{item.title}</span>
                                </div>
                                <p className="text-xs text-white/50 leading-relaxed">
                                  {item.desc}
                                </p>
                              </div>
                            </div>
                         </div>
                       </motion.div>
                       {i < 4 && (
                         <ChevronDown size={16} className="text-white/10 my-1" />
                       )}
                     </div>
                   ))}
                   
                   <div className="pt-8 w-full max-w-2xl">
                      <div className="p-6 bg-black/40 rounded-3xl border border-white/5 border-l-4 border-[#d4af37] flex items-center gap-6">
                        <div className="p-3 bg-[#d4af37] text-black rounded-full shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                          <Star size={24} fill="currentColor" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-[#d4af37] font-black uppercase tracking-[0.2em] text-[10px]">REGRA DE OURO</h4>
                          <p className="text-white/60 text-xs italic font-medium leading-relaxed">
                            O respeito à hierarquia evita erros e mantém a ordem estratégica da cidade.
                          </p>
                        </div>
                      </div>
                   </div>
                </div>
              </section>
            </div>
          </div>
        );

      case 'primeiros-passos':
        return (
          <div className="space-y-10">
            <h2 className="text-6xl font-display font-black tracking-tight normal-case text-white">Primeiros Passos</h2>
            <div className="flex flex-col gap-6">
              {[
                { 
                  title: 'Criação de Personagem', 
                  desc: 'Escolha um rosto e um nome para o seu personagem, este será o seu nome como vendedor. Pode ser o seu próprio ou um fictício.', 
                  icon: UserPlus,
                  video: 'https://drive.google.com/file/d/1OVZ2vuDzhRysd1ZTtbWMRtkjYSrjt-Od/preview',
                  hasVideo: true 
                },
                { title: 'Spawn na Cidade', desc: 'Você começará nascendo no PIER, a partir daí sua jornada será iniciada.', icon: Map },
                { 
                  title: 'Locais Importantes', 
                  desc: 'Visite facções, organizações, empregos legais, Pier Sul/Norte e a praça. É nesses locais que há uma grande concentração de pessoas — e é justamente nessas regiões que você vai criar conexões e oportunidades.', 
                  icon: BookOpen,
                  isLocais: true 
                },
                { title: 'Primeira Interação', desc: 'Converse com outros players e comece a se integrar na cidade.', icon: Coffee },
                { 
                  title: 'Ativar VOIP (Voz)', 
                  icon: Heart,
                  isVoip: true,
                  img: 'https://i.imgur.com/2RLl9NR.png',
                  desc: 'Configuração essencial para se comunicar por voz dentro da cidade.'
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="p-6 glass rounded-2xl border-white/5 flex-1 flex flex-col md:flex-row md:items-center justify-between gap-6 card-hover">
                    <div className="flex gap-4 flex-1">
                      <div className="text-[#d4af37] pt-1"><item.icon size={20} /></div>
                      <div className="space-y-2 flex-1">
                        <h3 className="font-bold text-lg">{item.title}</h3>
                        {item.isVoip ? (
                          <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <p className="text-[10px] uppercase text-[#d4af37] font-bold tracking-widest mb-2">Acesso</p>
                                <ul className="space-y-1 text-sm text-white/60">
                                  <li className="flex items-center gap-2"><ChevronRight size={12} className="text-[#d4af37]" /> Aperte a tecla "P"</li>
                                  <li className="flex items-center gap-2"><ChevronRight size={12} className="text-[#d4af37]" /> Clique em "Configurações"</li>
                                  <li className="flex items-center gap-2"><ChevronRight size={12} className="text-[#d4af37]" /> Selecione a opção "Bate-Papo"</li>
                                </ul>
                              </div>
                              <div className="space-y-2">
                                <p className="text-[10px] uppercase text-[#d4af37] font-bold tracking-widest mb-2">Configurações</p>
                                <ul className="space-y-1 text-sm text-white/60">
                                  <li className="flex items-center gap-2"><ChevronRight size={12} className="text-[#d4af37]" /> Ative o Bate-Papo de Voz</li>
                                  <li className="flex items-center gap-2"><ChevronRight size={12} className="text-[#d4af37]" /> Ative o Microfone</li>
                                  <li className="flex items-center gap-2"><ChevronRight size={12} className="text-[#d4af37]" /> Modo de Bate-Papo: <span className="text-white font-bold">Pressionar para Falar</span></li>
                                </ul>
                              </div>
                            </div>
                            <div className="p-3 bg-white/5 rounded-xl border border-[#d4af37]/20 flex items-center justify-between">
                              <span className="text-xs text-white/40 italic">Tecla nativa utilizada para falar:</span>
                              <span className="px-3 py-1 bg-[#d4af37] text-black rounded-lg font-black text-sm">"N"</span>
                            </div>
                          </div>
                        ) : item.isLocais ? (
                          <div className="space-y-4">
                            <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {[
                                { name: 'Departamentos de Polícia', icon: ShieldAlert, color: 'text-blue-400' },
                                { name: 'Serviços Essenciais (Hospital, Mecanica, Juridico, Bombeiros)', icon: Stethoscope, color: 'text-red-400' },
                                { name: 'Interações (Praça/Pier)', icon: Users, color: 'text-[#d4af37]' },
                                { name: 'Facções', icon: Zap, color: 'text-purple-400' }
                              ].map((loc, idx) => (
                                <div key={idx} className="flex items-center gap-2 p-2 bg-white/5 rounded-lg border border-white/5">
                                  <loc.icon size={14} className={loc.color} />
                                  <span className="text-[10px] font-bold uppercase tracking-tight text-white/80">{loc.name}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
                        )}
                      </div>
                    </div>
                    
                    {(item.isVoip || item.hasVideo) && (
                      <button
                        onClick={() => setSelectedMedia({ 
                          url: item.isVoip ? item.img! : item.video!, 
                          title: item.title, 
                          type: item.isVoip ? 'image' : 'video' 
                        })}
                        className="flex items-center gap-2 px-6 py-3 bg-[#d4af37] text-black rounded-xl font-bold hover:scale-105 transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)] shrink-0"
                      >
                        <Eye size={18} />
                        <span>{item.isVoip ? 'Ver Configuração' : 'Ver Vídeo'}</span>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'controles':
      case 'comandos':
      case 'poderes':
        return (
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <h2 className="text-6xl font-display font-black tracking-tight normal-case text-white">
                {activeSection === 'controles' ? 'Controles Básicos' : 
                 activeSection === 'poderes' ? 'Poderes (Admin)' : 'Comandos Frequentes'}
              </h2>
              <div className="relative w-full md:w-80">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                <input 
                  type="text" 
                  placeholder="Pesquisar comando..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-[#d4af37]/50 transition-colors"
                />
              </div>
            </div>

            {activeSection === 'poderes' && (
              <div className="p-6 glass rounded-2xl border-l-4 border-[#d4af37] bg-[#d4af37]/5 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#d4af37]/20 rounded-lg text-[#d4af37]">
                    <Terminal size={20} />
                  </div>
                  <div className="space-y-3">
                    <p className="text-white/80 leading-relaxed font-medium">
                      ⚡ Abaixo estão quais os principais comandos utilizados dentro da cidade. Para utilizá-los basta clicar no <span className="text-[#d4af37] font-bold">"F8"</span> e escrever o comando.
                    </p>
                    <div className="flex gap-2 items-center p-3 bg-red-500/10 rounded-xl border border-red-500/20">
                      <ShieldAlert size={18} className="text-red-500 shrink-0" />
                      <p className="text-xs text-red-200 font-bold uppercase tracking-tight">
                        ATENÇÃO: É extremamente proibido utilizar os poderes para benefício próprio ou prejudicar alguém. Enquadra como ABUSO DE PODER.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'comandos' && (
              <div className="space-y-8">
                <div className="p-6 glass rounded-2xl border-l-4 border-blue-500 bg-blue-500/5 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-500/20 rounded-lg text-blue-500">
                      <Zap size={20} />
                    </div>
                    <div className="space-y-3">
                      <p className="text-white/80 leading-relaxed font-medium">
                        ⭐ Abaixo estão quais os comandos mais utilizados pelo comercial, dentro e fora de atendimento ao cliente.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="flex flex-col gap-4">
              {(activeSection === 'controles' || searchQuery) && (
                <>
                  {filteredCommands.controls.length > 0 && <div className="text-xs font-bold uppercase tracking-widest text-[#d4af37] mt-4 mb-2 px-4">🎮 Comandos do Jogo</div>}
                  {filteredCommands.controls.map((cmd) => (
                    <CommandItem
                      key={cmd.key}
                      item={{...cmd, category: 'controles' as 'controles'}}
                      itemId={`controls-${cmd.key}`}
                      openItemId={openCommandItemId}
                      onOpenChange={setOpenCommandItemId}
                      onMediaClick={setSelectedMedia}
                    />
                  ))}
                </>
              )}
              
              {((activeSection === 'comandos' && !searchQuery) || (searchQuery && filteredCommands.frequent.length > 0)) && (
                <>
                  {filteredCommands.frequent.length > 0 && <h4 className="text-xs font-bold uppercase tracking-widest text-blue-500 mt-8 mb-2 px-4 italic">⚡ Comandos Detalhados</h4>}
                  {filteredCommands.frequent.map((cmd) => (
                    <CommandItem
                      key={`freq-${cmd.key}`}
                      item={{...cmd, category: 'poderes' as 'poderes'}}
                      itemId={`frequent-${cmd.key}`}
                      openItemId={openCommandItemId}
                      onOpenChange={setOpenCommandItemId}
                      onMediaClick={setSelectedMedia}
                    />
                  ))}
                </>
              )}

              {(activeSection === 'poderes' || (searchQuery && filteredCommands.staff.length > 0)) && (
                <>
                  {filteredCommands.staff
                    .filter(cmd => !filteredCommands.frequent.some(f => f.key === cmd.key))
                    .map((cmd) => (
                      <CommandItem
                        key={`staff-${cmd.key}`}
                        item={{...cmd, category: 'poderes' as 'poderes'}}
                        itemId={`staff-${cmd.key}`}
                        openItemId={openCommandItemId}
                        onOpenChange={setOpenCommandItemId}
                        onMediaClick={setSelectedMedia}
                      />
                    ))}
                </>
              )}

              {filteredCommands.controls.length === 0 && filteredCommands.staff.length === 0 && (
                <div className="p-20 text-center text-white/20">
                  Nenhum resultado para "{searchQuery}"
                </div>
              )}
            </div>
          </div>
        );

      case 'sistemas':
        return (
          <div className="space-y-12">
            <header className="space-y-2">
              <h2 className="text-6xl font-display font-black tracking-tight normal-case text-white">Sistema da Cidade</h2>
              <p className="text-white/40 leading-relaxed whitespace-nowrap">
                Conheça os pilares da cidade, desde os serviços públicos até as interações sociais e o mundo do crime.
              </p>
            </header>

            <div className="space-y-12">
              {/* Empregos Legais */}
              <section className="space-y-6">
                <div className="flex items-center gap-3 text-blue-400">
                  <ShieldCheck size={24} />
                  <h3 className="text-xl font-bold uppercase tracking-widest">💼 Empregos Legais</h3>
                </div>
                <p className="text-sm text-white/50 bg-white/5 p-4 rounded-xl border border-white/5">
                  São os trabalhos oficiais da cidade, focados em organização, serviço público e suporte à população.
                </p>
                
                <div className="space-y-4">
                  {/* Polícia Especial Card */}
                  <div className="p-6 bg-white/5 rounded-3xl border border-white/5 space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-4">
                        <span className="text-3xl">👮</span>
                        <h4 className="text-2xl font-bold tracking-tight">POLÍCIA</h4>
                      </div>
                      <p className="text-sm text-white/40 italic">Responsável pela segurança da cidade, combate ao crime e organização das operações policiais.</p>
                    </div>
                    
                    <div className="flex flex-wrap justify-center gap-3 border-t border-white/5 pt-6">
                      {[
                        { name: 'EXÉRCITO', img: 'https://i.imgur.com/16EtpuB.jpeg' },
                        { name: 'CIVIL', img: 'https://i.imgur.com/64QjKTO.jpeg' },
                        { name: 'MILITAR', img: 'https://i.imgur.com/E5hGy2B.jpeg' },
                        { name: 'TÁTICA', img: 'https://i.imgur.com/PufEaSN.jpeg' },
                        { name: 'PRN', img: 'https://i.imgur.com/7CxbxxA.png' }
                      ].map((sub, idx) => (
                        <div key={idx} className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.33%-0.75rem)] flex items-center justify-between p-3 bg-white/5 border border-white/5 rounded-2xl group card-hover shrink-0">
                          <span className="text-xs font-bold text-white/60 tracking-widest uppercase">{sub.name}</span>
                          <button 
                            onClick={() => setSelectedMedia({ url: sub.img, title: `Polícia: ${sub.name}`, type: 'image' })}
                            className="p-2 bg-[#d4af37]/10 text-[#d4af37] rounded-lg hover:bg-[#d4af37] hover:text-black transition-all"
                          >
                            <Eye size={16} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Outros Empregos Legais */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { name: 'MÉDICO (HOSPITAL)', emoji: '🚑', desc: 'Atua no atendimento de feridos, salvando vidas e garantindo o suporte médico da cidade.', img: 'https://i.imgur.com/cKixdKq.jpeg' },
                      { name: 'BOMBEIROS', emoji: '🚒', desc: 'Responsável por resgates e emergências, atuando em situações críticas e salvando civis.', img: 'https://i.imgur.com/qIbtrg8.jpeg' },
                      { name: 'MECÂNICO', emoji: '🔧', desc: 'Realiza manutenção e reparo de veículos, essencial para o funcionamento da cidade.', img: 'https://i.imgur.com/VvCj6J1.jpeg' },
                      { name: 'JURÍDICO', emoji: '⚖️', desc: 'Atua na defesa e organização das leis, garantindo justiça e equilíbrio dentro da cidade.', img: 'https://i.imgur.com/aVGidVm.jpeg' }
                    ].map((item, i) => (
                      <div key={i} className="p-6 glass rounded-2xl border-white/5 space-y-4 group card-hover">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{item.emoji}</span>
                            <h4 className="font-bold text-lg tracking-tight uppercase">{item.name}</h4>
                          </div>
                          <button 
                             onClick={() => setSelectedMedia({ url: item.img, title: item.name, type: 'image' })}
                             className="p-2 bg-[#d4af37]/10 text-[#d4af37] rounded-lg hover:bg-[#d4af37] hover:text-black transition-all"
                          >
                             <Eye size={16} />
                          </button>
                        </div>
                        <p className="text-xs text-white/50 leading-relaxed italic">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Empregos Ilegais */}
              <section className="space-y-6">
                <div className="flex items-center gap-3 text-red-500">
                  <ShieldAlert size={24} />
                  <h3 className="text-xl font-bold uppercase tracking-widest">🚫 Empregos Ilegais</h3>
                </div>
                <div className="p-6 bg-red-500/5 rounded-3xl border border-red-500/10 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">🏴</span>
                        <h4 className="text-2xl font-bold tracking-tight uppercase">FACÇÕES</h4>
                      </div>
                      <button 
                        onClick={() => setSelectedMedia({ url: 'https://i.imgur.com/HzYCCIR.jpeg', title: 'Facções', type: 'image' })}
                        className="p-2 bg-red-500/10 text-red-400 rounded-lg hover:bg-red-500 hover:text-white transition-all"
                      >
                        <Eye size={16} />
                      </button>
                    </div>
                    <p className="text-sm text-white/60 leading-relaxed font-medium">
                      São organizações criminosas que dominam áreas da cidade e controlam produções ilegais.
                    </p>
                  </div>

                  <div className="flex flex-col gap-4 pt-4 border-t border-white/5">
                    <div className="p-6 bg-white/5 rounded-2xl space-y-4 border border-white/5">
                      <div className="space-y-1">
                        <h5 className="text-[#d4af37] font-bold text-sm">🔫 Facções de Armas e Munições</h5>
                        <p className="text-xs text-white/50 leading-relaxed font-medium">Responsáveis pela produção de armamentos e recursos de combate dentro da cidade.</p>
                      </div>
                      
                      <div className="p-3 bg-red-500/10 rounded-xl border border-red-500/20 mb-2">
                        <p className="text-[10px] text-red-200 font-black uppercase tracking-tighter">
                          ⚠️ Cada facção é limitada a apenas um tipo de produção — nenhuma facção produz mais de um tipo.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                          <h6 className="text-[#d4af37] font-bold text-[10px] uppercase tracking-widest mb-1">🔫 Armas</h6>
                          <p className="text-[10px] text-white/40 leading-tight italic">Produção de armamentos 🔫 (pistolas, fuzis, etc). Essencial para abastecer confrontos e operações.</p>
                        </div>
                        <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                          <h6 className="text-orange-400 font-bold text-[10px] uppercase tracking-widest mb-1">💥 Munições</h6>
                          <p className="text-[10px] text-white/40 leading-tight italic">Produção de munições 💥 para as armas. Fundamental para manter o funcionamento dos armamentos.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 bg-white/5 rounded-2xl space-y-4 border border-white/5">
                      <div className="space-y-1">
                        <h5 className="text-green-400 font-bold text-sm">💊 Facções de Drogas</h5>
                        <p className="text-xs text-white/50 leading-relaxed font-medium">Produzem substâncias ilegais, cada uma com efeitos diferentes dentro da cidade.</p>
                      </div>
                      
                      <div className="p-3 bg-red-500/10 rounded-xl border border-red-500/20 mb-2">
                        <p className="text-[10px] text-red-200 font-black uppercase tracking-tighter">
                          ⚠️ Cada facção é limitada a apenas um tipo de produção — nenhuma facção produz mais de uma substância.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                          <h6 className="text-white font-bold text-[10px] uppercase tracking-widest mb-1">⚪ Cocaína</h6>
                          <p className="text-[10px] text-white/40 leading-tight italic">Aumenta a velocidade do personagem 🏃‍♂️ por um período de tempo.</p>
                        </div>
                        <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                          <h6 className="text-blue-400 font-bold text-[10px] uppercase tracking-widest mb-1">🔵 Metanfetamina</h6>
                          <p className="text-[10px] text-white/40 leading-tight italic">Realiza a cura da vida ❤️ e do colete 🛡️.</p>
                        </div>
                        <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                          <h6 className="text-green-500 font-bold text-[10px] uppercase tracking-widest mb-1">🟢 Baseado</h6>
                          <p className="text-[10px] text-white/40 leading-tight italic">Também realiza a cura da vida ❤️ e do colete 🛡️.</p>
                        </div>
                      </div>
                    </div>

                    {/* Comercialização Block */}
                    <div className="p-6 bg-[#d4af37]/5 rounded-2xl border border-[#d4af37]/20 space-y-4">
                      <div className="flex items-center gap-3 text-[#d4af37]">
                        <Zap size={20} />
                        <h5 className="font-bold text-sm tracking-widest uppercase">💰 COMERCIALIZAÇÃO DAS FACÇÕES → ARMAS / MUNIÇÕES / DROGAS</h5>
                      </div>
                      <div className="space-y-3">
                        <p className="text-xs text-white/60 leading-relaxed">
                          📦 As facções não apenas produzem, mas também são responsáveis pela distribuição e venda dos produtos gerados.
                        </p>
                        <div className="p-3 bg-red-500/10 rounded-xl border border-red-500/20">
                          <p className="text-[10px] text-red-200 font-bold uppercase tracking-tight">
                            ⚠️ Cada facção só pode realizar a venda dos produtos que ela mesma produz.
                          </p>
                          <p className="text-[10px] text-red-200 font-bold uppercase tracking-tight mt-1">
                            🚫 Não é permitido comercializar itens de outras produções.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Desmanche e Lavagem */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-6 bg-white/5 rounded-2xl space-y-4 border border-white/5 group card-hover">
                        <div className="space-y-1">
                          <h5 className="text-orange-400 font-bold text-sm flex items-center gap-2">
                             <span>🔧</span> Facções de Desmanche
                          </h5>
                          <p className="text-xs text-white/50 leading-relaxed font-medium">Responsáveis pelo desmanche de veículos dentro da cidade.</p>
                        </div>
                        <p className="text-[10px] text-white/40 leading-relaxed italic">
                          Quando um veículo é desmanchado, ele é convertido em <span className="text-[#d4af37] font-bold">dinheiro sujo 💰</span>.
                        </p>
                        <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                           <p className="text-[10px] text-white/60 font-medium tracking-tight">👉 Esse dinheiro não pode ser utilizado diretamente, sendo necessário procurar uma facção de lavagem para a conversão de dinheiro limpo.</p>
                        </div>
                      </div>

                      <div className="p-6 bg-white/5 rounded-2xl space-y-4 border border-white/5 group card-hover">
                        <div className="space-y-1">
                          <h5 className="text-blue-400 font-bold text-sm flex items-center gap-2">
                             <span>🧼</span> Facções de Lavagem
                          </h5>
                          <p className="text-xs text-white/50 leading-relaxed font-medium">Responsáveis por lavar todo o dinheiro sujo da cidade.</p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-[10px] text-white/40 uppercase font-bold tracking-tighter">Inclui valores de:</p>
                          <ul className="text-[10px] text-white/50 space-y-1 list-disc list-inside ml-2 border-b border-white/5 pb-2">
                            <li>Rotas de drogas</li>
                            <li>Veículos desmanchados</li>
                            <li>Assaltos (Pequeno, Médio e Grande porte)</li>
                          </ul>
                        </div>
                        <div className="space-y-2">
                          <h6 className="text-[#d4af37] font-bold text-[10px] uppercase tracking-widest flex items-center gap-2">
                            <span>💰</span> DIVISÃO DA LAVAGEM
                          </h6>
                          <div className="p-3 bg-white/5 rounded-xl border border-white/5 space-y-1">
                             <p className="text-[10px] text-white/60">• Uma porcentagem fica com a facção de lavagem</p>
                             <p className="text-[10px] text-white/60">• Outra porcentagem vai para quem levou o dinheiro</p>
                          </div>
                        </div>
                        <div className="p-3 bg-green-500/10 rounded-xl border border-green-500/20">
                           <p className="text-[10px] text-green-200 font-bold">👉 Após a lavagem, o dinheiro se torna limpo e utilizável dentro da economia da cidade.</p>
                        </div>
                      </div>
                    </div>

                    {/* Regra Importante Factions */}
                    <div className="p-6 bg-red-500/5 rounded-2xl border border-red-500/10 space-y-4">
                      <div className="flex items-center gap-3 text-red-500">
                        <ShieldAlert size={18} />
                        <h5 className="font-bold text-sm tracking-widest uppercase">⚠️ REGRA IMPORTANTE</h5>
                      </div>
                      <div className="space-y-4">
                        <p className="text-xs text-white/60 leading-relaxed">
                          Cada facção atua em sua função específica dentro da economia ilegal.
                        </p>
                        <div className="flex items-center justify-center gap-2 p-4 bg-black/40 rounded-2xl border border-white/5 overflow-x-auto">
                           <div className="flex items-center gap-1">
                             <span className="text-[10px] font-bold text-white/40 uppercase">Produção</span>
                             <ChevronRight size={12} className="text-[#d4af37]" />
                           </div>
                           <div className="flex items-center gap-1">
                             <span className="text-[10px] font-bold text-red-400 uppercase">Conversão (Dinheiro Sujo)</span>
                             <ChevronRight size={12} className="text-[#d4af37]" />
                           </div>
                           <div className="flex items-center gap-1">
                             <span className="text-[10px] font-bold text-blue-400 uppercase">Lavagem</span>
                             <ChevronRight size={12} className="text-[#d4af37]" />
                           </div>
                           <span className="text-[10px] font-bold text-green-400 uppercase font-black tracking-tighter">Dinheiro Limpo</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Locais de Interação */}
              <section className="space-y-6">
                <div className="flex items-center gap-3 text-[#d4af37]">
                  <Users size={24} />
                  <h3 className="text-xl font-bold uppercase tracking-widest">📍 Locais de Interação</h3>
                </div>
                <p className="text-sm text-white/50 bg-white/5 p-4 rounded-xl border border-white/5">
                  São pontos da cidade com grande movimentação, ideais para conhecer pessoas, criar conexões e iniciar interações.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { name: 'PRAÇA', emoji: '🌳', desc: 'Um dos principais pontos de encontro da cidade, com grande fluxo de jogadores.', img: 'https://i.imgur.com/OjS1XmJ.jpeg' },
                    { name: 'PIER SUL', emoji: '⚓', desc: 'Local movimentado, ideal para interações rápidas e oportunidades de conversa.', img: 'https://i.imgur.com/wZx5kB6.png' },
                    { name: 'PIER NORTE', emoji: '🚢', desc: 'Outro ponto estratégico de interação, com presença constante de jogadores.', img: 'https://i.imgur.com/mIIIDpv.png' }
                  ].map((item, i) => (
                    <div key={i} className="p-5 glass rounded-2xl border-white/5 space-y-3 flex flex-col justify-between group card-hover">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-2xl">{item.emoji}</span>
                          <button 
                             onClick={() => setSelectedMedia({ url: item.img, title: item.name, type: 'image' })}
                             className="p-2 bg-[#d4af37]/10 text-[#d4af37] rounded-lg hover:bg-[#d4af37] hover:text-black transition-all"
                          >
                             <Eye size={14} />
                          </button>
                        </div>
                        <h4 className="font-bold text-white/80 text-sm tracking-widest uppercase">{item.name}</h4>
                        <p className="text-[10px] text-white/40 leading-relaxed italic">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        );

      case 'regras':
        return (
          <div className="space-y-10">
            <h2 className="text-6xl font-display font-black tracking-tight normal-case text-white">Regras da Cidade</h2>
            <div className="p-10 glass rounded-[2.5rem] border-white/5 space-y-10">
              <div className="space-y-4 border-b border-white/5 pb-10">
                <h3 className="text-2xl font-bold">Definição de Roleplay</h3>
                <p className="text-white/50 leading-relaxed">
                  O Roleplay (interpretado como 'RP') é a arte de atuar como um personagem dentro de um universo fictício, respeitando sua personalidade, motivações e limitações. É como um teatro improvisado em tempo real, onde cada interação constrói uma história única. Na SantaGroup, o seu papel como vendedor exige que você mantenha a imersão total, tratando conversas técnicas de vendas como 'consultorias especializadas' integradas ao contexto da cidade.
                </p>
              </div>

              <div className="space-y-6">
                <h4 className="font-bold text-[#d4af37] uppercase tracking-widest text-xs">📌 Regras Fundamentais</h4>
                <div className="flex flex-col gap-4">
                  {[
                    { term: 'VDM', desc: 'Proibido usar qualquer tipo de veículo como arma para atropelar ou ferir outros cidadãos.' },
                    { term: 'RDM', desc: 'Proibido ferir ou matar um cidadão sem que haja um motivo plausível dentro da história.' },
                    { term: 'Metagaming', desc: 'Proibido utilizar informações obtidas fora do jogo (Discord, Lives) para ganho próprio dentro do RP.' },
                    { term: 'Anti RP', desc: 'Proibido agir de forma que fira a lógica da vida real ou quebre a imersão do cenário atual.' },
                    { term: 'Powergaming', desc: 'Proibido realizar ações impossíveis ou forçar situações onde o outro jogador não tenha escolha.' },
                    { term: 'Amor à Vida', desc: 'Regra de ouro: trate a vida do seu personagem como se fosse a única. Valorize-a acima de tudo.' },
                  ].map((item, i) => (
                    <div key={i} className="p-5 bg-white/5 rounded-2xl border border-white/5 flex flex-col gap-2">
                      <div className="font-bold text-[#d4af37] uppercase text-xs tracking-widest">{item.term}</div>
                      <div className="text-sm text-white/40 leading-relaxed font-mono">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'farms':
        return (
          <div className="space-y-10">
            <h2 className="text-6xl font-display font-black tracking-tight normal-case text-white">Sistema de Farms</h2>
            <div className="space-y-6">
              <p className="text-white/60 leading-relaxed text-lg max-w-5xl">
                {(() => {
                  const full = getLocalized('Esses são os principais sistemas de farm da cidade, responsáveis por gerar recursos e dinheiro. Cada farm possui uma função específica e pode ser utilizado de acordo com seu objetivo dentro do RP.');
                  const highlight = getLocalized('farm da cidade');
                  const parts = full.split(highlight);
                  if (parts.length < 2) return full;
                  return (
                    <>
                      {parts[0]}
                      <span className="text-[#d4af37] font-bold">{highlight}</span>
                      {parts.slice(1).join(highlight)}
                    </>
                  );
                })()}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { 
                    title: 'FARM LEITEIRO (DINHEIRO LIMPO)', 
                    desc: 'Produz garrafas de leite que podem ser convertidas em dinheiro limpo 💰.', 
                    img: 'https://i.imgur.com/BBx0AE2.png' 
                  },
                  { 
                    title: 'FARM PESCARIA (DINHEIRO LIMPO)', 
                    desc: 'Produz peixes 🐟 que podem ser vendidos para gerar dinheiro limpo 💰.', 
                    img: 'https://i.imgur.com/hSfT4Is.png' 
                  },
                  { 
                    title: 'FARM ATIVO (FACÇÃO)', 
                    desc: 'Farm voltado para facções, onde é necessário interação constante do jogador.', 
                    img: 'https://i.imgur.com/pwfAx1i.png' 
                  },
                  { 
                    title: 'FARM AFK (FACÇÃO)', 
                    desc: 'Farm voltado para facções, que funciona de forma automática (AFK).', 
                    img: 'https://i.imgur.com/DVWVEZl.png' 
                  }
                ].map((farm, i) => (
                  <div key={i} className="p-6 glass rounded-3xl border-white/5 space-y-6 group card-hover">
                    <div className="space-y-2">
                       <h3 className="text-2xl font-bold text-[#d4af37] tracking-tight group-hover:translate-x-1 transition-transform">{farm.title}</h3>
                       <p className="text-white/50 text-sm leading-relaxed">{farm.desc}</p>
                    </div>
                    
                    <button 
                      onClick={() => setSelectedMedia({ url: farm.img, title: farm.title, type: 'image' })}
                      className="w-full relative aspect-video rounded-2xl overflow-hidden border border-white/5 group-hover:border-[#d4af37]/30 transition-all"
                    >
                      <img 
                        src={farm.img} 
                        alt={farm.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/20 flex items-center gap-2">
                           <Eye size={16} className="text-[#d4af37]" />
                           <span className="text-xs font-bold uppercase tracking-wider">Ampliar</span>
                        </div>
                      </div>
                    </button>
                  </div>
                ))}
              </div>

              <div className="p-8 glass rounded-3xl border-white/5 border-l-4 border-[#d4af37]">
                <h3 className="text-xl font-bold mb-2">🎯 RESUMO</h3>
                <p className="text-white/50">Os farms são essenciais para gerar renda dentro da cidade — seja de forma individual ou em grupo (facção).</p>
              </div>
            </div>
          </div>
        );

      case 'sistemas-principais':
      case 'comercial-sistemas':
        return (
          <div className="space-y-10">
            <h2 className="text-6xl font-display font-black tracking-tight normal-case text-white">Sistemas Principais</h2>
            {[
              { title: 'BUSCAR VENDAS', badge: 'PRINCIPAL 01', desc: 'Sistema onde você busca clientes de acordo com o Tier que você estiver.', video: 'https://drive.google.com/file/d/1tAAqh2fAAKAMJjQ3JUszfJ0nGnKJ4Emn/preview', Icon: Search },
              { title: 'INICIAR ATENDIMENTO MANUAL', badge: 'PRINCIPAL 02', desc: 'Sistema onde voce consegue iniciar um atendimento sem precisar do BUSCAR VENDAS.', video: 'https://drive.google.com/file/d/1POtDMQNNaSGiHIqDkHwbWNWGt5I22Ney/preview', Icon: Headphones },
            ].map((item) => (
              <section key={item.title} className="commercial-rule-led-card commercial-rule-led-card--blue relative overflow-hidden rounded-[2rem] p-8">
                <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-blue-500/10 blur-3xl" />
                <item.Icon
                  size={160}
                  strokeWidth={1.25}
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-6 top-1/2 -translate-y-1/2 text-cyan-300/10 drop-shadow-[0_0_24px_rgba(34,211,238,0.35)]"
                />
                <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-black/30 px-4 py-2 text-[10px] font-black uppercase tracking-[0.25em] text-blue-300">
                      <Eye size={14} />
                      {getLocalized(item.badge)}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-3xl font-display font-black text-white">{item.title}</h3>
                      <p className="flex items-start gap-3 max-w-3xl text-sm font-bold leading-relaxed text-white/60">
                        <span className="mt-0.5 text-xl font-black leading-none text-[#53EAFD]">›</span>
                        <span>{getLocalized(item.desc)}</span>
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedMedia({ url: item.video, title: item.title, type: 'video' })}
                    className="relative z-10 inline-flex shrink-0 items-center gap-2 rounded-xl bg-cyan-300 px-6 py-3 font-bold text-black shadow-[0_0_24px_rgba(34,211,238,0.28)] transition-all hover:scale-105"
                  >
                    <Eye size={18} />
                    <span>{getLocalized('Ver Vídeo')}</span>
                  </button>
                </div>
              </section>
            ))}
            <div className="flex flex-col gap-6">
              {[
                { title: 'CHAMADOS COMPRAS', desc: 'Gerenciamento de chamados de compras ativos na cidade.', img: 'https://i.imgur.com/tfi4n0d.png', type: 'image' },
                { title: 'COMPRAS', desc: 'Visualização detalhada das compras realizadas pelos cidadãos.', img: 'https://i.imgur.com/QNEItwL.png', type: 'image' },
                { title: 'CLIENTES', desc: 'Lista completa de clientes vinculados ao seu perfil de vendedor.', img: 'https://i.imgur.com/2jJiNA5.png', type: 'image' },
                { title: 'VENDAS PESSOAIS', desc: 'Acompanhamento do seu desempenho e histórico de vendas individuais.', img: 'https://i.imgur.com/SmXzKci.png', type: 'image' },
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-6 group">
                   <div className="relative overflow-hidden p-8 glass rounded-3xl flex flex-col md:flex-row md:items-center justify-between gap-6 border-white/5 card-hover">
                     <div className="relative z-10 space-y-2 flex-1">
                        <h3 className="text-2xl font-bold tracking-tight text-[#d4af37]">{item.title}</h3>
                       <p className="text-white/40 leading-relaxed text-sm max-w-xl">{item.desc}</p>
                     </div>
                     
                     <button
                        onClick={() => setSelectedMedia({ 
                          url: item.img,
                          title: item.title, 
                          type: 'image'
                        })}
                         className="relative z-10 flex items-center gap-2 px-6 py-3 text-black rounded-xl font-bold hover:scale-105 transition-all shrink-0 bg-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.2)]"
                     >
                        <Eye size={18} />
                        <span>{getLocalized('Ver Interface')}</span>
                     </button>
                   </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'pode-nao-pode':
        return (
          <div className="space-y-10">
            <h2 className="text-6xl font-display font-black tracking-tight normal-case text-white">Pode e Não Pode</h2>
            <div className="flex flex-col gap-10">
              <div className="space-y-6">
                <h3 className="inline-flex items-center gap-2.5 w-fit px-5 py-2.5 rounded-xl font-black uppercase tracking-[0.2em] text-lg text-white border border-green-400/50 bg-green-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
                  <CheckCircle size={20} /> PODE
                </h3>
                <div className="flex flex-col gap-3">
                  {[
                    { text: 'Interagir com todos os cidadãos livremente', Icon: Users },
                    { text: 'Criar uma história cativante para vender melhor', Icon: BookOpen },
                    { text: 'Ser imparcial em conflitos de terceiros', Icon: Scale },
                    { text: 'Fazer amizades genuínas nas organizações', Icon: Heart }
                  ].map(({ text, Icon }, i) => (
                    <div
                      key={i}
                      className="relative overflow-hidden p-5 rounded-2xl border border-green-500/20 bg-[linear-gradient(90deg,rgba(34,197,94,0.05)_0%,rgba(22,163,74,0.015)_50%,rgba(34,197,94,0.05)_100%),linear-gradient(120deg,rgba(22,163,74,0.03)_0%,rgba(5,20,10,0.2)_100%)] text-sm text-white/90 transition-colors duration-300"
                    >
                      <Icon
                        size={88}
                        strokeWidth={1.25}
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-3 top-1/2 -translate-y-1/2 text-emerald-300/15 drop-shadow-[0_0_18px_rgba(16,185,129,0.35)]"
                      />
                      <span className="relative z-10 block">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="inline-flex items-center gap-2.5 w-fit px-5 py-2.5 rounded-xl font-black uppercase tracking-[0.2em] text-lg text-white border border-red-400/50 bg-red-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
                  <XCircle size={20} /> NÃO PODE
                </h3>
                <div className="flex flex-col gap-3">
                  {[
                    {
                      title: 'Receber pagamento de cliente no Pix pessoal',
                      Icon: Banknote,
                      highlight: true,
                      desc: `# 🚨 AVISO IMPORTANTE — PAGAMENTOS

**É terminantemente proibido** que qualquer **vendedor** ou **afiliado** receba dinheiro de clientes em seu **Pix pessoal**, seja qual for o motivo.

### 📌 O QUE ESTÁ PROIBIDO

- Receber valores no Pix pessoal para **realizar pagamentos** em nome do cliente
- **Intermediar compras** usando conta própria
- Qualquer outra movimentação financeira envolvendo o cliente fora dos meios oficiais

### ✅ MEIOS OFICIAIS AUTORIZADOS

Todo pagamento deve ser feito **exclusivamente** por:

- 🟢 **HUB**
- 🟢 **TEBEX**
- 🟢 **REVOLUT**

### ⚖️ PUNIÇÃO IMEDIATA

> 🔴 **Afiliado:** banimento global de toda a **Santa Group**, ficando impedido de participar de qualquer equipe ou cidade.

> 🔴 **Vendedor:** **demissão imediata**.

### ⚠️ SEM EXCEÇÕES

**Não haverá** justificativa, atenuante ou segunda chance. O recebimento de qualquer valor de cliente em conta pessoal será tratado como **infração gravíssima**.`
                    },
                    { 
                      title: 'Quebrar RP (Sair do personagem)', 
                      Icon: Drama,
                      desc: `**Quebrar RP (sair do personagem)** no GTA RP é quando o jogador deixa de agir como o personagem dele e passa a agir como ele mesmo (**vida real — “Nárnia”**).
👉 Ou seja: ele “quebra a imersão” do roleplay.

### 📌 O QUE É “NÁRNIA” NO RP?

No GTA RP, **“Nárnia”** é uma forma informal que os jogadores usam para se referir à **vida real (fora do jogo)**.
👉 É como se fosse um “outro mundo”, separado do RP.

* “Eu trabalho amanhã em Nárnia” → está falando da vida real
* “Isso aconteceu em Nárnia” → algo fora do personagem

### 📌 EXEMPLOS DE QUEBRA DE RP:
* Falar coisas da vida real no meio da cena
* Usar termos como: “isso é só um jogo”, “vou reportar você”
* Reclamar de regras durante uma situação em andamento
* Agir com conhecimento que o personagem não teria (meta)
* Sair do **NC** na frente dos jogadores

### 🎯 RESUMO SIMPLES:
> Quebrar RP é parar de interpretar seu personagem e trazer a “Nárnia” (vida real) pra dentro do jogo.`
                    },
                    { 
                      title: 'Abusar de poderes para benefício próprio', 
                      Icon: ShieldAlert,
                      desc: `**Abusar de poderes para benefício próprio** no GTA RP é quando alguém do comercial usa comandos ou permissões do servidor para se favorecer dentro do jogo, em vez de usar apenas para administração. 

👉 Ou seja: usa o “poder comercial” como vantagem pessoal, quebrando as regras do servidor.

### 📌 Exemplos:
* Usar **/god**, **/nc**, teleport, etc. para ganhar vantagem em situações RP
* Ajudar amigos (favorecimento) em vez de agir de forma neutra
* Evitar punições próprias ou de conhecidos

### 🎯 Resumo simples:
> Abusar de Poder é usar seus poderes para benefício próprio, e não para vendas`
                    },
                    { title: 'Causar brigas tóxicas com outros players', Icon: Swords },
                    { title: 'Usar cheats, hacks ou bugs conhecidos', Icon: Bug },
                    { title: 'Alterar preços oficiais definidos pela SantaGroup', Icon: Tag },
                    { title: 'Dar brindes ou itens sem autorização prévia', Icon: Gift }
                  ].map((item, i) => (
                    item.highlight ? (
                      <section
                        key={i}
                        className="commercial-rule-led-card commercial-rule-led-card--red relative overflow-hidden rounded-2xl p-5"
                      >
                        <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-red-500/10 blur-3xl" />
                        {item.Icon && (
                          <item.Icon
                            size={88}
                            strokeWidth={1.25}
                            aria-hidden="true"
                            className="pointer-events-none absolute -right-3 top-1/2 -translate-y-1/2 text-red-300/15 drop-shadow-[0_0_18px_rgba(239,68,68,0.35)]"
                          />
                        )}
                        <div className="relative flex items-center justify-between gap-4">
                          <h3 className="text-sm font-display font-black text-white">
                            {getLocalized(item.title)}
                          </h3>
                          {item.desc && (
                            <button
                              onClick={() => setSelectedMedia({ title: item.title, type: 'markdown', content: item.desc! })}
                              className="shrink-0 inline-flex rounded-lg border border-red-400/30 bg-red-500/25 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-red-100 transition-colors hover:bg-red-500/50"
                            >
                              Ver Explicação
                            </button>
                          )}
                        </div>
                      </section>
                    ) : (
                      <div
                        key={i}
                        className="relative overflow-hidden p-5 rounded-2xl border border-red-500/20 bg-[linear-gradient(90deg,rgba(239,68,68,0.05)_0%,rgba(190,18,60,0.015)_50%,rgba(239,68,68,0.05)_100%),linear-gradient(120deg,rgba(20,5,8,0.2)_100%)] flex items-center justify-between gap-4 transition-colors duration-300"
                      >
                        {item.Icon && (
                          <item.Icon
                            size={88}
                            strokeWidth={1.25}
                            aria-hidden="true"
                            className="pointer-events-none absolute -right-3 top-1/2 -translate-y-1/2 text-red-300/15 drop-shadow-[0_0_18px_rgba(239,68,68,0.35)]"
                          />
                        )}
                        <span className="relative z-10 text-sm text-white/90">{item.title}</span>
                        {item.desc && (
                          <button
                            onClick={() => setSelectedMedia({ title: item.title, type: 'markdown', content: item.desc! })}
                            className="relative z-10 px-3 py-1 bg-red-500/25 hover:bg-red-500/50 text-red-100 text-[10px] uppercase font-bold rounded-lg transition-colors shrink-0 border border-red-400/30"
                          >
                            Ver Explicação
                          </button>
                        )}
                      </div>
                    )
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'dicas':
        return (
          <div className="space-y-12">
            <h2 className="text-6xl font-display font-black tracking-tight normal-case text-white">Dicas Rápidas</h2>
            <div className="flex flex-col gap-6">
              {[
                { title: '📌 SEMPRE PERGUNTE', desc: 'Em caso de dúvida técnica ou sobre RP, chame alguém mais experiente ou suporte via Discord.', icon: Lightbulb },
                { title: '📌 COMECE SIMPLES', desc: 'Crie relações primeiro. Vendas são consequências de boas conexões na cidade.', icon: Users },
                { title: '📌 QUALIDADE', desc: 'Lembre-se que o pós-venda é mais importante que a venda em si para manter o cliente.', icon: CheckCircle },
                { title: '📌 ATENDIMENTO', desc: 'Conheça bem o produto. A autoridade no assunto gera confiança imediata.', icon: Zap }
              ].map((tip, i) => (
                <div key={i} className="p-8 glass rounded-3xl border-white/5 flex gap-6 items-center group card-hover">
                  <div className="w-14 h-14 bg-[#d4af37]/10 rounded-full flex items-center justify-center text-[#d4af37] font-bold text-xl shrink-0">
                    <tip.icon size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1 tracking-tight">{tip.title}</h3>
                    <p className="text-white/40 leading-relaxed text-sm">{tip.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'binds':
        return (
          <div className="space-y-12">
            <header className="space-y-4">
              <h2 className="text-6xl font-display font-black tracking-tight normal-case text-white">Binds Essenciais (Vendedor)</h2>
              <div className="p-6 glass rounded-2xl border-white/5 space-y-4">
                <div className="flex items-center gap-3 text-[#d4af37]">
                  <CheckCircle size={20} />
                  <h4 className="text-lg font-bold">🎯 OBJETIVO</h4>
                </div>
                <p className="text-white/60 leading-relaxed">
                  Facilitar ações rápidas no dia a dia e ganhar agilidade no atendimento
                </p>
              </div>

              <div className="p-6 bg-blue-500/5 rounded-2xl border border-blue-500/10 space-y-4">
                <div className="flex items-center gap-3 text-blue-400">
                  <Terminal size={20} />
                  <h4 className="text-lg font-bold">🧩 COMO USAR AS BINDS</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-center">
                    <p className="text-[10px] text-white/40 uppercase font-bold mb-1">1. Passo</p>
                    <p className="text-xs font-bold text-blue-400">Pressione F8</p>
                  </div>
                  <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-center">
                    <p className="text-[10px] text-white/40 uppercase font-bold mb-1">2. Passo</p>
                    <p className="text-xs font-bold text-blue-400">Cole o comando</p>
                  </div>
                  <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-center">
                    <p className="text-[10px] text-white/40 uppercase font-bold mb-1">3. Passo</p>
                    <p className="text-xs font-bold text-blue-400">Aperte Enter</p>
                  </div>
                </div>
              </div>
            </header>

            <section className="space-y-6">
              <div className="flex items-center gap-3 text-[#d4af37]">
                <BookOpen size={20} />
                <h3 className="text-xl font-bold uppercase tracking-widest text-sm">📌 BINDS RECOMENDADAS</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { id: 'nc', title: '📍 NC (modo invisível)', desc: 'Use para observação e posicionamento', cmd: 'bind keyboard "numpad1" "nc"' },
                  { id: 'god', title: '📍 GOD (reviver)', desc: 'Use para suporte rápido ao player', cmd: 'bind keyboard "numpad3" "god"' },
                  { id: 'wall', title: '📍 WALL (informações do player)', desc: 'Use para análise rápida do cliente', cmd: 'bind keyboard "numpad2" "wall"' },
                  { id: 'fix', title: '📍 FIX (consertar veículo)', desc: 'Use para ajudar o cliente rapidamente', cmd: 'bind keyboard "numpad7" "fix"' },
                  { id: 'dv', title: '📍 DV (deletar veículo)', desc: 'Use para limpar área ou remover veículo bugado', cmd: 'bind keyboard "numpad9" "dv"' },
                ].map((item) => (
                  <div key={item.id} className="p-6 glass rounded-3xl border-white/5 space-y-4 flex flex-col justify-between card-hover">
                    <div className="space-y-2">
                      <h4 className="font-bold text-white/90">{item.title}</h4>
                      <p className="text-xs text-white/40">{item.desc}</p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="p-3 bg-black/40 rounded-xl border border-white/5 font-mono text-[10px] text-blue-400 break-all">
                        {item.cmd}
                      </div>
                      <button 
                        onClick={() => handleCopy(item.cmd, item.id)}
                        className={`w-full flex items-center justify-center gap-2 py-2 rounded-xl text-[10px] font-bold uppercase transition-all
                          ${copiedBind === item.id 
                            ? 'bg-green-500 text-white' 
                            : 'bg-white/5 hover:bg-[#d4af37] hover:text-black'}`}
                      >
                        {copiedBind === item.id ? <Check size={14} /> : <Copy size={14} />}
                        {copiedBind === item.id ? 'Copiado!' : 'Copiar Bind'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <div className="p-6 bg-red-500/10 rounded-2xl border border-red-500/20 space-y-4">
              <h5 className="text-red-400 font-bold flex items-center gap-2 text-sm uppercase tracking-tight">
                <ShieldAlert size={16} /> ⚠️ OBSERVAÇÃO IMPORTANTE
              </h5>
              <div className="space-y-4">
                <p className="text-sm text-red-200/80 leading-relaxed font-medium">
                  As binds utilizadas nos exemplos foram configuradas no <span className="text-red-400 font-bold">teclado numérico (lado direito do teclado)</span>.
                </p>
                <div className="space-y-2">
                  <p className="text-xs text-white/60 font-bold">👉 Porém, você pode usar qualquer tecla, como:</p>
                  <ul className="text-xs text-white/50 space-y-1 list-disc list-inside ml-2">
                    <li>Letras</li>
                    <li>Números</li>
                    <li>Teclas F (F1, F2, F3...)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-8 glass rounded-3xl border-white/5 flex flex-col items-center justify-center text-center space-y-4">
              <div className="p-3 bg-purple-500/10 rounded-2xl text-purple-400">
                <Lightbulb size={32} />
              </div>
              <div className="space-y-2">
                <h5 className="text-purple-400 font-bold uppercase tracking-[0.2em] text-xs">🧠 MENTALIDADE</h5>
                <blockquote className="text-2xl font-display font-medium text-white/80 italic leading-tight">
                  “agilidade no comando = mais eficiência no atendimento” ⚡
                </blockquote>
              </div>
            </div>
          </div>
        );

      case 'afiliados':
        return (
          <div className="space-y-16">
            <header className="space-y-4">
              
              <h2 className="text-6xl font-display font-black tracking-tight normal-case text-white">Equipe de Afiliados</h2>
              <p className="text-white/60 max-w-5xl leading-relaxed text-lg">
                O programa de afiliados do SantaGroup é a porta de entrada para quem busca profissionalismo e resultados reais dentro da cidade.
              </p>
            </header>

            {/* SEÇÃO 1: AFILIADOS (FORMAÇÃO) */}
            <div className="space-y-12">
              <div className="flex items-center gap-3 text-[#d4af37]">
                <Trophy size={24} />
                <h3 className="text-xl font-bold uppercase tracking-widest">🧠 SEÇÃO 1 — AFILIADOS (FORMAÇÃO)</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8 glass rounded-3xl border-white/5 space-y-4 shadow-[0_0_20px_rgba(212,175,55,0.05)]">
                  <div className="flex items-center gap-3 text-[#d4af37]">
                    <Target size={20} />
                    <h4 className="font-bold uppercase tracking-tight">🔰 O QUE É AFILIADO?</h4>
                  </div>
                  <p className="text-white/60 leading-relaxed italic">
                    "Um Afiliado é parte de uma equipe onde um Responsável de Vendas lidera, estrutura e desenvolve pessoas que realizam vendas dentro da cidade."
                  </p>
                </div>

                <div className="p-8 glass rounded-3xl border-[#d4af37]/20 bg-[#d4af37]/5 space-y-4 shadow-[0_0_30px_rgba(212,175,55,0.1)] transition-transform hover:scale-[1.02]">
                  <div className="flex items-center gap-3 text-[#d4af37]">
                    <TrendingUp size={20} />
                    <h4 className="font-bold uppercase tracking-tight">🚀 O QUE É SER UM AFILIADO?</h4>
                  </div>
                  <div className="space-y-2 text-white/80 font-medium">
                    <p>"Ser afiliado é buscar evolução constante.</p>
                    <p>É aprender, aplicar e crescer todos os dias.</p>
                    <p>É o primeiro passo para entrar no Comercial SantaGroup.</p>
                    <p className="text-[#d4af37] font-black uppercase">Quem entra com visão, cresce. Quem cresce, domina."</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="p-8 glass rounded-3xl border-red-500/10 bg-red-500/5 space-y-6">
                  <div className="flex items-center gap-3 text-red-400">
                    <AlertTriangle size={20} />
                    <h4 className="font-bold uppercase tracking-tight">⚠️ ERROS MAIS COMUNS (INÍCIO)</h4>
                  </div>
                  <p className="text-red-200/60 text-sm">"O maior erro de um afiliado no início é o mal uso dos poderes."</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      'Sair do NC exposto',
                      'Usar poderes em RP',
                      'Spawn incorreto de veículos',
                      'Troca de mundo indevida',
                      'Puxar cliente sem contexto',
                      'Tunar sem necessidade'
                    ].map((error, i) => (
                      <li key={i} className="flex items-center gap-2 p-3 bg-black/40 rounded-xl border border-white/5 text-xs text-white/50">
                        <XCircle size={14} className="text-red-500" />
                        {error}
                      </li>
                    ))}
                  </ul>
                  <p className="text-white/40 text-xs italic text-center font-bold">"Afiliado preparado não erra em momentos importantes."</p>
                </div>

                <div className="p-8 glass rounded-3xl border-white/5 space-y-6">
                  <div className="flex items-center gap-3 text-blue-400">
                    <CheckSquare size={20} />
                    <h4 className="font-bold uppercase tracking-tight">📜 REGRAS PRINCIPAIS</h4>
                  </div>
                  <div className="space-y-3">
                    {[
                      'Não abusar de poder',
                      'Priorizar bater meta antes de RP',
                      'Nunca alterar preços da tabela',
                      'Manter respeito entre equipes'
                    ].map((rule, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                        <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-xs">
                          {i + 1}
                        </div>
                        <span className="text-sm text-white/80 font-medium">{rule}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* META E RESPONSABILIBADE - DESTAQUE FORTE */}
              <div className="relative group">
                <div className="absolute inset-0 bg-red-600/5 blur-3xl group-hover:bg-red-600/10 transition-colors" />
                <div className="relative p-10 glass rounded-[2.5rem] border-red-500/30 bg-red-500/5 space-y-8 overflow-hidden">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                      <div className="p-4 bg-red-500 text-white rounded-2xl shadow-[0_0_20px_rgba(239,68,68,0.4)]">
                        <Activity size={32} />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-2xl font-display font-black text-white tracking-widest uppercase">META E RESPONSABILIDADE</h4>
                        <p className="text-red-200/60 font-medium">Foco total em performance e compromisso.</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-red-500/20">
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <p className="text-lg text-white/90 leading-relaxed font-medium">
                          "Todo afiliado tem uma meta diária a ser cumprida. Essa meta pode variar de acordo com a cidade, mas sempre existirá."
                        </p>
                      </div>
                      <div className="p-6 bg-black/40 rounded-[2rem] border border-red-500/30 space-y-4">
                        <div className="flex items-center gap-2 text-red-400 font-black uppercase tracking-widest text-xs">
                          <AlertTriangle size={16} /> ⚠️ REGRA CRÍTICA:
                        </div>
                        <div className="space-y-2 text-white font-bold text-xl">
                          <p className="flex items-center gap-3">
                            <span className="text-red-500">→</span> Remoção imediata da equipe
                          </p>
                          <p className="flex items-center gap-3">
                            <span className="text-red-500">→</span> Blacklist permanente de AFILIADOS
                          </p>
                        </div>
                        <p className="text-red-200/40 text-[10px] uppercase font-bold tracking-tighter">Aplicado após 3 dias sem meta.</p>
                      </div>
                    </div>

                    <div className="p-8 bg-red-500/10 rounded-[2rem] border border-red-500/20 flex flex-col justify-center gap-6">
                      <div className="flex items-center gap-3 text-red-400">
                        <HelpCircle size={20} />
                        <h5 className="font-bold uppercase tracking-tight">💣 EXPLICAÇÃO:</h5>
                      </div>
                      <p className="text-red-100/80 leading-relaxed italic text-lg">
                        "Se alguém que tem acesso a um sistema onde pode conquistar mais do que muitos cargos dentro da cidade não se dedica… Não é depois que vai querer. Aqui, oportunidade é pra quem valoriza."
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* HIERARQUIA E EVOLUÇÃO */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 p-10 glass rounded-[2.5rem] border-white/5 space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#d4af37]/20 rounded-2xl flex items-center justify-center text-[#d4af37]">
                      <Trophy size={24} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-2xl font-bold tracking-tight">🏆 EVOLUÇÃO DE CARGO</h4>
                      <p className="text-white/40 text-sm italic">"Não é qualquer um que sobe. Só cresce quem prova que é capaz."</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h5 className="text-[10px] font-black text-[#d4af37] uppercase tracking-[0.2em] mb-4">Critérios de Ascensão</h5>
                      {[
                        'Apenas afiliados esforçados tem capacidade de conquistar esses cargos',
                        'Precisa bater metas constantemente',
                        'Precisa ter alto volume de vendas',
                        'Precisa saber liderar e estruturar equipe'
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-white/60 text-sm">
                          <CheckCircle size={14} className="text-[#d4af37] shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                    <div className="space-y-4">
                      <h5 className="text-[10px] font-black text-[#d4af37] uppercase tracking-[0.2em] mb-4">Hierarquia dos maiores cargos de Afiliados</h5>
                      <div className="space-y-3">
                        {[
                          { name: 'Responsável', color: 'bg-blue-500/20 text-blue-300' },
                          { name: 'ADM', color: 'bg-purple-500/20 text-purple-300' },
                          { name: 'Master', color: 'bg-[#d4af37]/20 text-[#d4af37]' }
                        ].map((cargo, i) => (
                          <div key={i} className={`p-4 ${cargo.color} rounded-2xl border border-white/5 font-black text-center uppercase tracking-widest text-sm`}>
                            {cargo.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-white/5 text-center">
                    <p className="text-[#d4af37] font-black uppercase text-xs tracking-[0.3em]">Cargo não é dado. É conquistado.</p>
                  </div>
                </div>

                <div className="p-10 glass rounded-[2.5rem] border-[#d4af37]/20 bg-[#d4af37]/10 flex flex-col justify-between group overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/20 blur-[80px] -mr-16 -mt-16" />
                  <div className="space-y-6 relative z-10">
                    <div className="flex items-center gap-3 text-[#d4af37]">
                      <Star size={24} fill="currentColor" />
                      <h4 className="text-xl font-black uppercase tracking-widest">CULTURA</h4>
                    </div>
                    <p className="text-white/80 text-lg font-medium leading-relaxed italic">
                      "É o que você faz certo mesmo quando ninguém está olhando."
                    </p>
                    <div className="space-y-4 pt-6 border-t border-white/10">
                      <div className="space-y-1">
                        <p className="text-[10px] font-black text-[#d4af37] uppercase tracking-widest flex items-center gap-2">
                           <History size={12} /> Exemplo de Ambiente
                        </p>
                        <div className="space-y-2 pt-2">
                          <p className="text-sm text-white/50"><span className="text-white font-bold">Balada:</span> Grito, dança, bagunça</p>
                          <p className="text-sm text-white/50"><span className="text-white font-bold">Teatro:</span> Silêncio, respeito</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-8 relative z-10">
                    <p className="text-white/40 text-xs italic font-medium">"Você não precisa que alguém mande. Você já sabe como agir."</p>
                  </div>
                </div>
              </div>
            </div>

            {/* SEÇÃO 2: RECRUTAMENTO */}
            <div className="space-y-12 pb-20">
              <div className="flex items-center gap-3 text-blue-400">
                <MapPin size={24} />
                <h3 className="text-xl font-bold uppercase tracking-widest">🚀 SEÇÃO 2 — RECRUTAMENTO</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Entrevista */}
                <div className="p-8 glass rounded-3xl border-white/5 space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-blue-400">
                      <MessageCircle size={20} />
                      <h4 className="font-bold uppercase tracking-tight">🎯 ENTREVISTA</h4>
                    </div>
                    <div className="space-y-2">
                      {[
                        'Idade',
                        'Experiência como staff',
                        'Disponibilidade',
                        'Motivo para entrar',
                        'Planos futuros'
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-white/50 text-xs font-medium">
                          <div className="w-1.5 h-1.5 bg-blue-500/50 rounded-full" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Venda do Sonho */}
                <div className="p-8 glass rounded-3xl border-[#d4af37]/20 bg-[#d4af37]/5 space-y-4">
                  <div className="flex items-center gap-3 text-[#d4af37]">
                    <Star size={20} />
                    <h4 className="font-bold uppercase tracking-tight">💭 VENDA DO SONHO</h4>
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed italic">
                    "Ser afiliado é o começo de uma oportunidade real dentro do SantaGroup. Quem performa, cresce. Quem cresce, entra no comercial."
                  </p>
                </div>

                {/* Explicação Obrigatória */}
                <div className="p-8 glass rounded-3xl border-white/5 space-y-4">
                  <div className="flex items-center gap-3 text-blue-400">
                    <Settings size={20} />
                    <h4 className="font-bold uppercase tracking-tight">⚙️ EXPLICAÇÃO</h4>
                  </div>
                  <div className="space-y-2">
                    {[
                      'Explicar poderes',
                      'Explicar preços',
                      'Mostrar tabela da cidade',
                      'Explicar funcionamento da loja',
                      'Alinhar padrão de preços'
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-white/50 text-xs font-medium">
                        <Check size={12} className="text-green-500" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Finalização */}
                <div className="p-8 glass rounded-3xl border-green-500/20 bg-green-500/5 space-y-4">
                  <div className="flex items-center gap-3 text-green-400">
                    <CheckCircle size={20} />
                    <h4 className="font-bold uppercase tracking-tight">✅ FINALIZAÇÃO</h4>
                  </div>
                  <div className="space-y-2">
                    {[
                      'Setar no Discord de poderes',
                      'Setar no Discord de afiliados',
                      'Confirmar acesso'
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-white/60 text-xs font-bold uppercase">
                        <ChevronRight size={14} className="text-green-500" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* SETAGEM DE PODERES */}
              <div className="p-10 glass rounded-[2.5rem] border-white/5 space-y-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400">
                    <Terminal size={24} />
                  </div>
                  <h4 className="text-2xl font-bold tracking-tight">🧩 SETAGEM DE PODERES</h4>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  <div className="space-y-4">
                    {/* Discord */}
                    <div className="p-6 bg-white/5 rounded-3xl border border-white/5 space-y-4 transition-all hover:bg-white/[0.07]">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-blue-500/20 text-blue-400 rounded-xl">
                            <LinkIcon size={18} />
                          </div>
                          <h5 className="font-bold text-sm text-white/90">1. Discord de Afiliados (Poderes)</h5>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 pt-2">
                        <a 
                          href="https://discord.gg/NUjHP3w6yF" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-300 rounded-xl text-[10px] font-bold uppercase hover:bg-blue-500/30 transition-all shadow-lg shadow-blue-500/10"
                        >
                          <Eye size={14} /> <span aria-hidden="true">🔗</span> Abrir Link
                        </a>
                        <button 
                          onClick={() => handleCopy('https://discord.gg/NUjHP3w6yF', 'afiliados-discord')}
                          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-bold uppercase transition-all shadow-lg
                            ${copiedBind === 'afiliados-discord' ? 'bg-green-500 text-white shadow-green-500/20' : 'bg-white/5 text-white/60 hover:bg-white/10 shadow-black/20'}`}
                        >
                          {copiedBind === 'afiliados-discord' ? <Check size={14} /> : <Copy size={14} />}
                          {copiedBind === 'afiliados-discord' ? <><span aria-hidden="true">✅</span> Link copiado!</> : <><span aria-hidden="true">📋</span> Copiar Link</>}
                        </button>
                      </div>
                    </div>

                    {/* Solicitação */}
                    <div className="p-6 bg-white/5 rounded-3xl border border-white/5 space-y-4 transition-all hover:bg-white/[0.07]">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-purple-500/20 text-purple-400 rounded-xl">
                            <Eye size={18} />
                          </div>
                          <h5 className="font-bold text-sm text-white/90">2. Solicitação dos poderes</h5>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 pt-2">
                        <button 
                          onClick={() => setSelectedMedia({ url: 'https://i.imgur.com/kpskPX2.png', title: 'Solicitação dos poderes', type: 'image' })}
                          className="flex items-center gap-2 px-4 py-2 bg-purple-500/20 text-purple-300 rounded-xl text-[10px] font-bold uppercase hover:bg-purple-500/30 transition-all shadow-lg shadow-purple-500/10"
                        >
                          <Eye size={14} /> <span aria-hidden="true">👁️</span> Ver Exemplo
                        </button>
                      </div>

                    </div>

                    {/* Setagem Manual */}
                    <div className="p-6 bg-white/5 rounded-3xl border border-white/5 space-y-4 transition-all hover:bg-white/[0.07]">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-orange-500/20 text-orange-400 rounded-xl">
                            <Terminal size={18} />
                          </div>
                          <h5 className="font-bold text-sm text-white/90">3. Setagem manual de poderes (/setcargo)</h5>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 pt-2">
                        <button 
                          onClick={() => setSelectedMedia({ url: 'https://i.imgur.com/GOGWH1q.png', title: 'Setagem manual de poderes (/setcargo)', type: 'image' })}
                          className="flex items-center gap-2 px-4 py-2 bg-orange-500/20 text-orange-300 rounded-xl text-[10px] font-bold uppercase hover:bg-orange-500/30 transition-all shadow-lg shadow-orange-500/10"
                        >
                          <Eye size={14} /> <span aria-hidden="true">🖼️</span> Ver Print
                        </button>
                      </div>

                    </div>

                    {/* Verificação */}
                    <div className="p-6 bg-white/5 rounded-3xl border border-white/5 space-y-4 transition-all hover:bg-white/[0.07]">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-green-500/20 text-green-400 rounded-xl">
                            <ShieldCheck size={18} />
                          </div>
                          <h5 className="font-bold text-sm text-white/90">4. Verificação dos poderes</h5>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 pt-2">
                        <button 
                          onClick={() => setSelectedMedia({ url: 'https://i.imgur.com/Va0cPhP.png', title: 'Verificação dos poderes', type: 'image' })}
                          className="flex items-center gap-2 px-4 py-2 bg-emerald-500/20 text-emerald-300 rounded-xl text-[10px] font-bold uppercase hover:bg-emerald-500/30 transition-all shadow-lg shadow-emerald-500/10"
                        >
                          <ImageIcon size={14} /> <span aria-hidden="true">🖼️</span> Ver Print
                        </button>
                        <a 
                          href="https://discord.com/channels/1425215822917275724/1425215824259584185" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-300 rounded-xl text-[10px] font-bold uppercase hover:bg-green-500/30 transition-all shadow-lg shadow-green-500/10"
                        >
                          <Eye size={14} /> <span aria-hidden="true">🔗</span> Abrir Link
                        </a>
                        <button 
                          onClick={() => handleCopy('https://discord.com/channels/1425215822917275724/1425215824259584185', 'afiliados-verificacao')}
                          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-bold uppercase transition-all shadow-lg
                            ${copiedBind === 'afiliados-verificacao' ? 'bg-green-500 text-white shadow-green-500/20' : 'bg-white/5 text-white/60 hover:bg-white/10 shadow-black/20'}`}
                        >
                          {copiedBind === 'afiliados-verificacao' ? <Check size={14} /> : <Copy size={14} />}
                          {copiedBind === 'afiliados-verificacao' ? <><span aria-hidden="true">✅</span> Link copiado!</> : <><span aria-hidden="true">📋</span> Copiar Link</>}
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        );

      default:
        return <div>Em breve...</div>;
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center space-y-6">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="text-[#d4af37]"
        >
          <CircleDashed size={48} />
        </motion.div>
        <p className="text-[#d4af37] font-black uppercase tracking-[0.3em] text-xs">Validando Identidade comercial...</p>
        <LanguageSwitcher />
      </div>
    );
  }

  // Auth guard já é feito no roteador (RequireAuth em main.tsx).
  if (!user) return null;

  return (
    <div className="relative z-10 flex min-h-screen selection:bg-[#d4af37]/30 selection:text-white">
      <Sidebar 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
        categories={categories}
      />
      <LanguageSwitcher />


      
      <main className="flex-1 p-6 lg:p-12 overflow-x-hidden relative">
        {/* Background gradients removidos — starfield global cuida do fundo */}

        <div className="max-w-6xl mx-auto py-12 lg:py-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {loading && activeSection !== 'admin-users' ? (
                <div className="flex flex-col items-center justify-center p-40 space-y-6">
                  <CircleDashed size={32} className="animate-spin text-white/10" />
                  <span className="text-white/20 uppercase font-black text-[10px] tracking-widest">Sincronizando Banco de Dados...</span>
                </div>
              ) : renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Media Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12"
          >
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-all"
              onClick={() => setSelectedMedia(null)}
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-3xl glass rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.8)]"
            >
              <div className="flex items-center justify-between p-5 border-b border-white/5 bg-white/5">
                <h3 className="text-lg font-bold text-[#d4af37] tracking-tight">{getLocalized(selectedMedia.title)}</h3>
                <button 
                  onClick={() => setSelectedMedia(null)}
                  className="p-2 hover:bg-white/10 rounded-xl transition-all text-white/40 hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-3 bg-[#0a0a0a]/90 flex items-center justify-center overflow-auto max-h-[80vh]">
                {selectedMedia.type === 'image' ? (
                  <img 
                    src={selectedMedia.url} 
                    alt={getLocalized(selectedMedia.title)} 
                    className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-2xl"
                    referrerPolicy="no-referrer"
                  />
                ) : selectedMedia.type === 'video' ? (
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl bg-black">
                    <iframe
                      src={selectedMedia.url}
                      className="absolute inset-0 w-full h-full border-0"
                      allow="autoplay"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  <div className="p-6 text-white/80 prose prose-invert max-w-none">
                    <Markdown>{getLocalized(selectedMedia.content)}</Markdown>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
