import { useState, useEffect } from 'react';
import { categoryService } from '../../lib/services';
import { motion, AnimatePresence } from 'motion/react';
import { useI18n } from '../../lib/I18nContext';
import CustomSelect from '../ui/CustomSelect';
import { 
  PlusCircle,
  LayoutGrid,
  Layers,
  Settings,
  Save,
  Trash2,
  Edit3,
  MoveUp,
  MoveDown,
  Eye,
  EyeOff,
  X,
  Type,
  FileText,
  Image as ImageIcon,
  Grid
} from 'lucide-react';
import EmojiPickerButton from './EmojiPickerButton';

function Tooltip({ children, text }: { children: React.ReactNode; text: string }) {
  const [show, setShow] = useState(false);
  return (
    <div className="relative" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      {children}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-black text-[#d4af37] text-[10px] font-black uppercase tracking-widest rounded-lg border border-[#d4af37]/20 whitespace-nowrap z-[120] pointer-events-none shadow-2xl shadow-black"
          >
            {text}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function AdminContent() {
  const { t } = useI18n();
  const [categories, setCategories] = useState<any[]>([]);
  const [editingCategory, setEditingCategory] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return categoryService.subscribe((data) => {
      setCategories(data);
      setLoading(false);
    });
  }, []);

  const handleSave = async (category: any) => {
    await categoryService.saveCategory(category);
    setEditingCategory(null);
  };

  const handleDelete = async (_id: string) => {
    // Configuração do Site foi removida; categorias não são apagadas pelo painel.
    return;
  };

  const moveOrder = async (category: any, direction: 'up' | 'down') => {
    const currentIndex = categories.findIndex(c => c.id === category.id);
    const newIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;
    if (newIndex < 0 || newIndex >= categories.length) return;

    const targetCategory = categories[newIndex];
    await categoryService.saveCategory({ ...category, order: targetCategory.order });
    await categoryService.saveCategory({ ...targetCategory, order: category.order });
  };

  const toggleVisibility = async (category: any) => {
    await categoryService.saveCategory({ ...category, visible: !category.visible });
  };

  return (
    <div className="space-y-10">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-3 text-[#d4af37]">
            <Layers size={24} />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">{t('settings.siteConfig')}</span>
          </div>
          <h2 className="text-4xl font-display font-bold tracking-tight text-white">{t('settings.siteConfig')}</h2>
          <p className="text-white/40 text-sm">{t('admin_content_subtitle') || 'Gerencie a estrutura visual, categorias e conteúdos do manual.'}</p>
        </div>

        <button 
          onClick={() => setEditingCategory({ name: '', group: 'INÍCIO DE RP', order: categories.length + 1, visible: true, contentBlocks: [], icon: 'LayoutGrid' })}
          className="flex items-center gap-3 px-6 py-4 bg-[#d4af37] text-black font-black uppercase tracking-widest text-[10px] rounded-2xl shadow-[0_10px_20px_rgba(212,175,55,0.2)] hover:scale-105 transition-all"
        >
          <PlusCircle size={18} />
          Nova Categoria
        </button>
      </header>

      <div className="grid grid-cols-1 gap-4">
        {loading ? (
          <div className="p-20 bg-[#1b1b1b] rounded-3xl border border-[#2f2f2f] flex items-center justify-center text-white/20 uppercase font-black text-xs tracking-widest"> {t('general.loading')} </div>
        ) : categories.length === 0 ? (
          <div className="p-20 bg-[#1b1b1b] rounded-3xl border border-[#2f2f2f] flex items-center justify-center text-white/20 uppercase font-black text-xs tracking-widest"> {t('settings.no_categories') || 'NENHUMA CATEGORIA ADICIONADA'} </div>
        ) : categories.map((cat, idx) => (
          <div key={cat.id} className="bg-[#1b1b1b] rounded-[2rem] border border-[#2f2f2f] p-6 group hover:bg-[#252525] transition-all">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="flex flex-col gap-1">
                  <button onClick={() => moveOrder(cat, 'up')} disabled={idx === 0} className="text-white/10 hover:text-[#d4af37] disabled:opacity-0 transition-colors">
                    <MoveUp size={14} />
                  </button>
                  <button onClick={() => moveOrder(cat, 'down')} disabled={idx === categories.length - 1} className="text-white/10 hover:text-[#d4af37] disabled:opacity-0 transition-colors">
                    <MoveDown size={14} />
                  </button>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-black/40 border border-[#2f2f2f] flex items-center justify-center text-[#d4af37] shadow-inner">
                    <LayoutGrid size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white tracking-tight">{cat.name}</h4>
                    <span className="text-[10px] text-white/20 font-black uppercase tracking-widest">{cat.group} | {cat.contentBlocks?.length || 0} {t('settings.visualStructure')}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button 
                  onClick={() => toggleVisibility(cat)}
                  className={`p-3 rounded-xl transition-all border ${cat.visible ? 'bg-green-500/10 text-green-500 border-green-500/20' : 'bg-red-500/10 text-red-500 border-red-500/20'}`}
                >
                  {cat.visible ? <Eye size={18} /> : <EyeOff size={18} />}
                </button>
                <button 
                  onClick={() => setEditingCategory(cat)}
                  className="p-3 bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20 rounded-xl hover:bg-[#d4af37] hover:text-black transition-all shadow-lg"
                >
                  <Edit3 size={18} />
                </button>
                <button 
                  onClick={() => handleDelete(cat.id)}
                  className="p-3 bg-red-500/10 text-red-500 border border-red-500/20 rounded-xl hover:bg-red-500 hover:text-white transition-all shadow-lg"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {editingCategory && (
          <CategoryEditor 
            category={editingCategory} 
            onSave={handleSave} 
            onClose={() => setEditingCategory(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function CategoryEditor({ category, onSave, onClose }: any) {
  const { t } = useI18n();
  const [data, setData] = useState({ ...category });

  const addBlock = (type: string) => {
    const newBlock = { id: Math.random().toString(36).substr(2, 9), type, title: '', content: '' };
    if (type === 'grid') (newBlock as any).items = [];
    setData({ ...data, contentBlocks: [...(data.contentBlocks || []), newBlock] });
  };

  const removeBlock = (id: string) => {
    setData({ ...data, contentBlocks: data.contentBlocks.filter((b: any) => b.id !== id) });
  };

  const updateBlock = (blockId: string, updates: any) => {
    setData({
      ...data,
      contentBlocks: data.contentBlocks.map((b: any) => b.id === blockId ? { ...b, ...updates } : b)
    });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-end">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={onClose} />
      <motion.div
        initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 150 }}
        className="relative w-full max-w-4xl h-full bg-[#0f0f0f] border-l border-[#2f2f2f] overflow-hidden flex flex-col"
      >
        <div className="p-8 border-b border-[#2f2f2f] flex items-center justify-between bg-black/40">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#d4af37]/20 text-[#d4af37] rounded-2xl border border-[#d4af37]/20"> <Settings size={20} /> </div>
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">{t('settings.visualStructure')}</h3>
              <p className="text-[10px] text-[#d4af37] uppercase font-black tracking-widest">{category.id ? t('buttons.editar') : t('buttons.salvar')} {t('settings.categoryName')}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={onClose} className="px-6 py-3 border border-[#2f2f2f] rounded-xl text-white/40 hover:text-white hover:bg-white/5 transition-all text-[10px] font-black uppercase">{t('buttons.cancelar')}</button>
            <button onClick={() => onSave(data)} className="px-8 py-3 bg-[#d4af37] text-black rounded-xl shadow-xl shadow-[#d4af37]/10 text-[10px] font-black uppercase flex items-center gap-2 hover:scale-105 transition-all"> <Save size={16} /> {t('buttons.salvar')} </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-8 space-y-10 custom-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-[#d4af37] uppercase tracking-widest px-1">{t('settings.categoryName')}</label>
              <input 
                type="text" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} 
                className="w-full h-12 bg-[#1b1b1b] border-2 border-[#2f2f2f] rounded-xl px-4 text-white placeholder:text-white/10 outline-none focus:border-[#d4af37] transition-all" 
              />
            </div>
            
            <CustomSelect 
              label={t('settings.menuGroup')}
              value={data.group}
              onChange={(val) => setData({ ...data, group: val })}
              options={[
                { value: 'INÍCIO DE RP', label: 'INÍCIO DE RP' },
                { value: 'COMERCIAL', label: 'COMERCIAL' },
                { value: 'AFILIADOS', label: 'AFILIADOS' }
              ]}
            />

            <CustomSelect 
              label={t('settings.icon')}
              value={data.icon}
              onChange={(val) => setData({ ...data, icon: val })}
              options={[
                { value: 'LayoutGrid', label: 'LayoutGrid' },
                { value: 'Home', label: 'Home' },
                { value: 'MapPin', label: 'MapPin' },
                { value: 'Zap', label: 'Zap' },
                { value: 'Banknote', label: 'Banknote' },
                { value: 'Users', label: 'Users' },
                { value: 'Terminal', label: 'Terminal' }
              ]}
            />
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-[#2f2f2f] pb-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#d4af37]">{t('settings.visualStructure')}</h4>
              <div className="flex items-center gap-2">
                <Tooltip text={t('general.add_text') || 'ADICIONAR TEXTO'}>
                  <button onClick={() => addBlock('header')} className="p-3 bg-[#1b1b1b] border-2 border-[#2f2f2f] hover:border-[#d4af37] rounded-xl text-white/40 hover:text-[#d4af37] transition-all"> <Type size={18} /> </button>
                </Tooltip>
                <Tooltip text={t('general.add_content_block') || 'ADICIONAR BLOCO'}>
                  <button onClick={() => addBlock('text')} className="p-3 bg-[#1b1b1b] border-2 border-[#2f2f2f] hover:border-[#d4af37] rounded-xl text-white/40 hover:text-[#d4af37] transition-all"> <FileText size={18} /> </button>
                </Tooltip>
                <Tooltip text={t('general.add_image') || 'ADICIONAR MÍDIA'}>
                  <button onClick={() => addBlock('media')} className="p-3 bg-[#1b1b1b] border-2 border-[#2f2f2f] hover:border-[#d4af37] rounded-xl text-white/40 hover:text-[#d4af37] transition-all"> <ImageIcon size={18} /> </button>
                </Tooltip>
                <Tooltip text={t('general.add_grid') || 'ADICIONAR GRID'}>
                  <button onClick={() => addBlock('grid')} className="p-3 bg-[#1b1b1b] border-2 border-[#2f2f2f] hover:border-[#d4af37] rounded-xl text-white/40 hover:text-[#d4af37] transition-all"> <Grid size={18} /> </button>
                </Tooltip>
              </div>
            </div>

            <div className="space-y-4">
              {(data.contentBlocks || []).map((block: any, bIdx: number) => (
                <motion.div 
                  initial={{ opacity: 1, y: 0 }}
                  key={block.id || bIdx} 
                  className="p-6 bg-[#1b1b1b] border-2 border-[#2f2f2f] rounded-[2rem] space-y-4 group/block relative"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black text-[#d4af37] uppercase tracking-widest bg-black/40 px-3 py-1 rounded-full">{t('general.block_type') || 'BLOCO'}: {block.type}</span>
                    <button onClick={() => removeBlock(block.id)} className="p-2 text-red-500/40 hover:text-red-500 bg-red-500/5 hover:bg-red-500/10 rounded-lg transition-all"> <X size={16} /> </button>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-[9px] font-black text-white/40 uppercase tracking-widest px-1">{t('general.block_title') || 'TÍTULO'}</label>
                      <input 
                        type="text" placeholder={t('general.block_title') || 'TÍTULO'} value={block.title || ''} 
                        onChange={(e) => updateBlock(block.id, { title: e.target.value })}
                        className="w-full bg-black/40 border-2 border-[#2f2f2f] rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-[#d4af37] transition-all"
                      />
                    </div>
                    
                    {block.type === 'grid' && (
                      <div className="space-y-3 p-4 bg-black/20 rounded-2xl border border-[#2f2f2f]">
                        <p className="text-[9px] font-black text-[#d4af37] uppercase tracking-widest px-1">{t('general.grid_items') || 'ITENS DO GRID'}</p>
                        {(block.items || []).map((item: any, i: number) => (
                          <div key={i} className="flex gap-2">
                            <input 
                              type="text" placeholder="Título" value={item.title || ''}
                              onChange={(e) => {
                                const newItems = [...block.items];
                                newItems[i] = { ...item, title: e.target.value };
                                updateBlock(block.id, { items: newItems });
                              }}
                              className="flex-1 bg-black/40 border-2 border-[#2f2f2f] rounded-xl px-4 py-2 text-xs text-white outline-none focus:border-[#d4af37]"
                            />
                            <button 
                              onClick={() => {
                                const newItems = block.items.filter((_: any, idx: number) => idx !== i);
                                updateBlock(block.id, { items: newItems });
                              }}
                              className="p-2 text-red-500/40 hover:text-red-500"
                            > <X size={16} /> </button>
                          </div>
                        ))}
                        <button 
                          onClick={() => {
                            const newItems = [...(block.items || []), { title: '', description: '' }];
                            updateBlock(block.id, { items: newItems });
                          }}
                          className="w-full py-3 border-2 border-dashed border-[#2f2f2f] hover:border-[#d4af37]/40 rounded-xl text-[10px] text-white/20 hover:text-[#d4af37] transition-all uppercase font-black tracking-widest"
                        > + {t('buttons.adicionarItem')} </button>
                      </div>
                    )}

                    <div className="space-y-1">
                      <div className="flex items-center justify-between px-1">
                        <label className="text-[9px] font-black text-white/40 uppercase tracking-widest">{t('general.main_content') || 'CONTEÚDO'}</label>
                        <EmojiPickerButton
                          onInsert={(emoji) => {
                            const el = document.getElementById(`block-textarea-${block.id}`) as HTMLTextAreaElement | null;
                            const current = block.content || '';
                            if (!el) { updateBlock(block.id, { content: current + emoji }); return; }
                            const start = el.selectionStart ?? current.length;
                            const end = el.selectionEnd ?? current.length;
                            const next = current.slice(0, start) + emoji + current.slice(end);
                            updateBlock(block.id, { content: next });
                            requestAnimationFrame(() => {
                              el.focus();
                              const pos = start + emoji.length;
                              el.setSelectionRange(pos, pos);
                            });
                          }}
                        />
                      </div>
                      <textarea 
                        id={`block-textarea-${block.id}`}
                        placeholder={t('general.main_content') || 'CONTEÚDO'} value={block.content || ''}
                        onChange={(e) => updateBlock(block.id, { content: e.target.value })}
                        className="w-full h-40 bg-black/40 border-2 border-[#2f2f2f] rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-[#d4af37] transition-all resize-none custom-scrollbar"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {(!data.contentBlocks || data.contentBlocks.length === 0) && (
                <div className="p-12 border-2 border-dashed border-[#2f2f2f] rounded-3xl flex items-center justify-center text-white/10 uppercase font-black text-[10px] tracking-[0.3em]">
                  Nenhum bloco de conteúdo adicionado
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
