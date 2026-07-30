import { useState, useEffect } from 'react';
import { useAuth } from '../../lib/AuthContext';
import { useI18n } from '../../lib/I18nContext';
import { motion, AnimatePresence } from 'motion/react';
import { UserPlus, Users, Trash2, Edit3, X, Search, Crown, AlertTriangle, CheckCircle2 } from 'lucide-react';

const EMPTY_FORM = { id: '', name: '', username: '', password: '', role: 'EQUIPE', status: 'Ativo' };

export default function AdminUsers() {
  const { t } = useI18n();
  const { user: currentUser, getAllUsers, saveUser, deleteUser } = useAuth();
  const [usersList, setUsersList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState<any | null>(null);
  const [form, setForm] = useState<any>(EMPTY_FORM);
  const [searchQuery, setSearchQuery] = useState('');
  const [notice, setNotice] = useState<{ type: 'success' | 'error'; title: string; message?: string } | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<any | null>(null);

  useEffect(() => { loadUsers(); }, []);

  const showNotice = (type: 'success' | 'error', title: string, message?: string) => {
    setNotice({ type, title, message });
    window.setTimeout(() => setNotice(null), 3200);
  };

  const loadUsers = async () => {
    setLoading(true);
    try {
      const data = await getAllUsers();
      setUsersList(data || []);
    } catch (err: any) {
      showNotice('error', 'Erro ao carregar usuários', err?.message || 'Tente novamente em instantes.');
    } finally {
      setLoading(false);
    }
  };

  const openCreate = () => {
    setEditingUser(null);
    setForm(EMPTY_FORM);
    setShowModal(true);
  };

  const openEdit = (u: any) => {
    setEditingUser(u);
    setForm({
      id: u.id,
      name: u.name || '',
      username: u.username || '',
      password: '',
      role: u.role || 'EQUIPE',
      status: u.status || 'Ativo',
    });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingUser(null);
    setForm(EMPTY_FORM);
  };

  const handleSaveUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const payload: any = {
        id: editingUser?.id || undefined,
        name: form.name,
        username: form.username,
        role: form.role,
        status: form.status,
      };

      if (!editingUser || form.password) payload.password = form.password;
      if (editingUser && !form.password) payload.password = editingUser.password || '';

      await saveUser(payload);
      closeModal();
      await loadUsers();
      showNotice('success', editingUser ? 'Conta atualizada com sucesso.' : 'Conta criada com sucesso.');
    } catch (err: any) {
      showNotice('error', 'Erro ao salvar conta', err?.message || 'Verifique os dados e tente novamente.');
    } finally {
      setSaving(false);
    }
  };

  const toggleStatus = async (userToUpdate: any) => {
    if (userToUpdate.role === 'OWNER') {
      const activeOwners = usersList.filter(u => u.role === 'OWNER' && u.status === 'Ativo');
      if (activeOwners.length <= 1 && userToUpdate.status === 'Ativo') {
        return showNotice('error', 'Ação bloqueada', t('error_last_owner') || 'Não é possível desativar o último OWNER ativo.');
      }
    }

    const newStatus = userToUpdate.status === 'Ativo' ? 'Desativado' : 'Ativo';
    try {
      await saveUser({ ...userToUpdate, status: newStatus, password: userToUpdate.password || '' });
      await loadUsers();
    } catch (err: any) {
      showNotice('error', 'Erro ao atualizar status', err?.message || 'Tente novamente em instantes.');
    }
  };

  const handleDeleteUser = (u: any) => {
    if (u.id === (currentUser as any)?.id) {
      showNotice('error', 'Ação bloqueada', t('error_self_delete') || 'Você não pode apagar a própria conta.');
      return;
    }
    setConfirmDelete(u);
  };

  const confirmDeleteUser = async () => {
    if (!confirmDelete) return;
    try {
      await deleteUser(confirmDelete.id);
      setConfirmDelete(null);
      await loadUsers();
      showNotice('success', 'Conta apagada com sucesso.');
    } catch (err: any) {
      showNotice('error', 'Erro ao apagar conta', err?.message || 'Tente novamente em instantes.');
    }
  };

  const filteredUsers = usersList.filter(u =>
    String(u.name || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
    String(u.username || '').toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-10">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-3 text-[#d4af37]">
            <Crown size={24} />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Contas de Acesso</span>
          </div>
          <h2 className="text-4xl font-display font-bold tracking-tight text-white">Contas de Acesso</h2>
          <p className="text-white/40 text-sm">Gerencie usuários, cargos e permissões do sistema.</p>
        </div>

        <button onClick={openCreate} className="flex items-center gap-3 px-6 py-4 bg-[#d4af37] text-black font-black uppercase tracking-widest text-[10px] rounded-2xl shadow-[0_10px_30px_rgba(212,175,55,0.15)] hover:scale-105 transition-all">
          <UserPlus size={18} />
          Criar Nova Conta
        </button>
      </header>

      <div className="bg-[#1b1b1b] rounded-[2rem] border-2 border-[#2f2f2f] overflow-hidden shadow-2xl">
        <div className="p-6 border-b border-[#2f2f2f] flex items-center gap-4 bg-black/40">
          <Search size={18} className="text-[#d4af37]/40" />
          <input
            type="text"
            placeholder="Buscar usuário..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent border-none outline-none text-sm text-white w-full placeholder:text-white/10"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left font-sans">
            <thead>
              <tr className="border-b border-[#2f2f2f] bg-black/20">
                <th className="px-8 py-5 text-[10px] font-black text-[#d4af37] uppercase tracking-[0.2em]">Usuário</th>
                <th className="px-8 py-5 text-[10px] font-black text-[#d4af37] uppercase tracking-[0.2em]">Cargo</th>
                <th className="px-8 py-5 text-[10px] font-black text-[#d4af37] uppercase tracking-[0.2em]">Status</th>
                <th className="px-8 py-5 text-[10px] font-black text-[#d4af37] uppercase tracking-[0.2em] text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2f2f2f]">
              {loading ? (
                <tr><td colSpan={4} className="px-8 py-20 text-center text-white/10 uppercase font-black text-xs tracking-widest">Carregando...</td></tr>
              ) : filteredUsers.length === 0 ? (
                <tr><td colSpan={4} className="px-8 py-20 text-center text-white/10 uppercase font-black text-xs tracking-widest">Nenhum usuário encontrado</td></tr>
              ) : filteredUsers.map((u) => (
                <tr key={u.id} className="hover:bg-white/[0.03] transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-black/40 border border-[#2f2f2f] flex items-center justify-center text-[#d4af37]"><Users size={18} /></div>
                      <div>
                        <p className="text-sm font-bold text-white tracking-tight">{u.name}</p>
                        <p className="text-[10px] text-white/20 font-black tracking-widest uppercase">@{u.username}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${u.role === 'OWNER' ? 'bg-[#d4af37]/10 text-[#d4af37] border-[#d4af37]/20' : u.role === 'ADMIN' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : 'bg-white/5 text-white/40 border-white/5'}`}>{u.role}</span>
                  </td>
                  <td className="px-8 py-6">
                    <button onClick={() => toggleStatus(u)} className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border ${u.status === 'Ativo' ? 'bg-green-500/5 text-green-500 border-green-500/20' : 'bg-red-500/5 text-red-500 border-red-500/20'}`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${u.status === 'Ativo' ? 'bg-green-500' : 'bg-red-500'}`} />
                      {u.status === 'Ativo' ? 'Ativo' : 'Inativo'}
                    </button>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button onClick={() => openEdit(u)} title="Editar conta" className="p-3 bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20 rounded-xl hover:bg-[#d4af37] hover:text-black transition-all shadow-lg">
                        <Edit3 size={16} />
                      </button>
                      <button onClick={() => handleDeleteUser(u)} title="Apagar conta" className="p-3 bg-red-500/10 text-red-500 border border-red-500/20 rounded-xl hover:bg-red-500 hover:text-white transition-all shadow-lg">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={closeModal} />
            <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} className="relative w-full max-w-lg bg-[#151515] rounded-[2.5rem] border-2 border-[#2f2f2f] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)]">
              <div className="p-8 border-b border-[#2f2f2f] bg-black/40 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[#d4af37] mb-1"><UserPlus size={16} /><span className="text-[10px] font-black uppercase tracking-widest">{editingUser ? 'Editar Conta' : 'Criar Conta'}</span></div>
                  <h3 className="text-xl font-bold text-white tracking-tight">{editingUser ? 'Editar Conta' : 'Criar Nova Conta'}</h3>
                </div>
                <button onClick={closeModal} className="p-3 hover:bg-white/5 rounded-2xl transition-all text-white/40 hover:text-white border border-transparent hover:border-[#2f2f2f]"><X size={20} /></button>
              </div>

              <form onSubmit={handleSaveUser} className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Field label="Nome Completo" value={form.name} onChange={(v: string) => setForm({ ...form, name: v })} placeholder="Ex: João Silva" required />
                  <Field label="Usuário" value={form.username} onChange={(v: string) => setForm({ ...form, username: v })} placeholder="Ex: joao.silva" required />
                </div>

                <Field label={editingUser ? 'Nova Senha (opcional)' : 'Senha'} type="password" value={form.password} onChange={(v: string) => setForm({ ...form, password: v })} placeholder="••••••••" required={!editingUser} />

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-[#d4af37] uppercase tracking-widest px-1">Nível de Acesso</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['EQUIPE', 'ADMIN', 'OWNER'].map((r) => (
                      <button key={r} type="button" onClick={() => setForm({ ...form, role: r })} className={`py-3 rounded-xl border-2 text-[10px] font-black tracking-widest uppercase transition-all ${form.role === r ? 'bg-[#d4af37] border-[#d4af37] text-black shadow-[0_5px_15px_rgba(212,175,55,0.2)]' : 'bg-[#1b1b1b] border-[#2f2f2f] text-white/40 hover:border-white/20'}`}>{r}</button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-[#d4af37] uppercase tracking-widest px-1">Status</label>
                  <div className="grid grid-cols-2 gap-2">
                    {['Ativo', 'Desativado'].map((s) => (
                      <button key={s} type="button" onClick={() => setForm({ ...form, status: s })} className={`py-3 rounded-xl border-2 text-[10px] font-black tracking-widest uppercase transition-all ${form.status === s ? 'bg-[#d4af37] border-[#d4af37] text-black' : 'bg-[#1b1b1b] border-[#2f2f2f] text-white/40 hover:border-white/20'}`}>{s}</button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex gap-3">
                  <button type="button" onClick={closeModal} className="w-full h-14 bg-[#1b1b1b] border-2 border-[#2f2f2f] text-white/50 font-black uppercase tracking-[0.2em] rounded-2xl transition-all hover:text-white">Cancelar</button>
                  <button disabled={saving} className="w-full h-14 bg-[#d4af37] text-black font-black uppercase tracking-[0.2em] rounded-2xl transition-all shadow-xl shadow-[#d4af37]/10 disabled:opacity-50 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2">
                    {saving ? <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" /> : (editingUser ? 'Salvar Alterações' : 'Criar Conta')}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {notice && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.96 }}
            className={`fixed top-6 right-6 z-[140] w-[min(420px,calc(100vw-32px))] rounded-3xl border-2 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.65)] backdrop-blur-xl ${notice.type === 'success' ? 'bg-green-950/80 border-green-500/25' : 'bg-red-950/80 border-red-500/25'}`}
          >
            <div className="flex gap-4">
              <div className={`w-11 h-11 rounded-2xl flex items-center justify-center ${notice.type === 'success' ? 'bg-green-500/15 text-green-400' : 'bg-red-500/15 text-red-400'}`}>
                {notice.type === 'success' ? <CheckCircle2 size={22} /> : <AlertTriangle size={22} />}
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-black text-white uppercase tracking-widest">{notice.title}</h4>
                {notice.message && <p className="mt-1 text-xs text-white/55 leading-relaxed">{notice.message}</p>}
              </div>
              <button onClick={() => setNotice(null)} className="text-white/30 hover:text-white transition-colors"><X size={18} /></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {confirmDelete && (
          <div className="fixed inset-0 z-[130] flex items-center justify-center p-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/85 backdrop-blur-md" onClick={() => setConfirmDelete(null)} />
            <motion.div initial={{ opacity: 0, scale: 0.92, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.92, y: 24 }} className="relative w-full max-w-md overflow-hidden rounded-[2.5rem] border-2 border-red-500/20 bg-[#151515] shadow-[0_0_120px_rgba(0,0,0,0.9)]">
              <div className="p-8 border-b border-[#2f2f2f] bg-gradient-to-br from-red-500/10 to-black/30">
                <div className="w-14 h-14 rounded-2xl bg-red-500/10 text-red-400 border border-red-500/20 flex items-center justify-center mb-5">
                  <AlertTriangle size={28} />
                </div>
                <h3 className="text-2xl font-black text-white tracking-tight">Apagar conta?</h3>
                <p className="mt-2 text-sm text-white/50 leading-relaxed">
                  Tem certeza que deseja apagar <span className="text-white font-bold">{confirmDelete.name}</span>? Essa ação não pode ser desfeita.
                </p>
              </div>
              <div className="p-6 grid grid-cols-2 gap-3">
                <button onClick={() => setConfirmDelete(null)} className="h-14 rounded-2xl border-2 border-[#2f2f2f] bg-[#1b1b1b] text-white/50 font-black uppercase tracking-[0.2em] text-[10px] hover:text-white transition-all">Cancelar</button>
                <button onClick={confirmDeleteUser} className="h-14 rounded-2xl bg-red-500 text-white font-black uppercase tracking-[0.2em] text-[10px] hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-red-500/10">Apagar</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({ label, value, onChange, placeholder, type = 'text', required = false }: any) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-black text-[#d4af37] uppercase tracking-widest px-1">{label}</label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-12 bg-[#1b1b1b] border-2 border-[#2f2f2f] rounded-xl px-4 text-white placeholder:text-white/10 focus:border-[#d4af37]/50 focus:bg-black/40 outline-none transition-all"
        placeholder={placeholder}
      />
    </div>
  );
}
