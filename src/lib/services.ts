import { INITIAL_CATEGORIES } from './initialContent';

// Apps Script backend centralizado.
// A planilha/API é usada apenas para contas. Categorias e conteúdos ficam fixos no código do site.
export const API_URL = 'https://script.google.com/macros/s/AKfycbwkFbAGazUrZJ0FDLieTxkaptI_iPyiItIuIMVUOqqaPlx_GG3eUA8MBhYxOR-UJ24ekg/exec';

export async function api(action: string, data: Record<string, any> = {}) {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify({ action, ...data }),
    });

    const text = await response.text();
    try {
      return JSON.parse(text);
    } catch {
      throw new Error(text || 'Resposta inválida da API.');
    }
  } catch (err: any) {
    console.error('[SG API ERROR]', action, err);
    throw new Error(err?.message || 'Erro de conexão com a API.');
  }
}

function normalizeStatus(value: any) {
  return value === true || String(value).toUpperCase() === 'TRUE' || value === 'Ativo' ? 'Ativo' : 'Desativado';
}

function normalizeUser(user: any) {
  return {
    id: user?.id || user?.ID || user?.uid || '',
    username: String(user?.username || user?.usuario || user?.Usuario || '').trim(),
    password: String(user?.password || user?.senha || user?.Senha || ''),
    name: user?.name || user?.nome || user?.Nome || user?.username || 'Usuário',
    role: String(user?.role || user?.cargo || user?.Cargo || 'EQUIPE').toUpperCase(),
    status: normalizeStatus(user?.status ?? user?.ativo ?? user?.Ativo ?? user?.active),
    active: normalizeStatus(user?.status ?? user?.ativo ?? user?.Ativo ?? user?.active) === 'Ativo',
    createdAt: user?.createdAt || user?.criadoEm || user?.CriadoEm || new Date().toISOString(),
  };
}

function normalizeCategory(cat: any, contents: any[] = []) {
  const id = cat?.id || cat?.ID;
  const blocksFromApi = contents
    .filter((c: any) => String(c.CategoriaID || c.categoriaId || c.categoryId) === String(id))
    .sort((a: any, b: any) => Number(a.Ordem || a.ordem || 0) - Number(b.Ordem || b.ordem || 0))
    .map((c: any) => ({
      id: c.ID || c.id || Math.random().toString(36).slice(2),
      type: c.Tipo || c.tipo || 'text',
      title: c.Titulo || c.titulo || '',
      content: c.Descricao || c.descricao || c.Content || c.content || '',
      url: c.Imagem || c.imagem || c.Link || c.link || '',
      mediaUrl: c.Imagem || c.imagem || '',
      link: c.Link || c.link || '',
      order: Number(c.Ordem || c.ordem || 0),
    }));

  return {
    id,
    name: cat?.name || cat?.Nome || '',
    group: cat?.group || cat?.Grupo || 'INÍCIO DE RP',
    icon: cat?.icon || cat?.Icone || 'LayoutGrid',
    order: Number(cat?.order || cat?.Ordem || 0),
    visible: cat?.visible === false ? false : String(cat?.Visivel ?? cat?.visible ?? 'TRUE').toUpperCase() !== 'FALSE',
    contentBlocks: cat?.contentBlocks || blocksFromApi || [],
  };
}

async function seedOwner() {
  try {
    await api('seedOwner');
  } catch (err) {
    console.warn('Não foi possível verificar/criar OWNER na API.', err);
  }
}

async function ensureInitialCategoriesIfEmpty(categories: any[]) {
  if (categories.length > 0) return;

  for (const cat of INITIAL_CATEGORIES) {
    await categoryService.saveCategory(cat);
  }
}

// User Services via Apps Script
export const userService = {
  async login(username: string, password: string) {
    await seedOwner();
    const result = await api('login', { usuario: username, senha: password });
    if (!result?.success) throw new Error(result?.message || 'Erro ao fazer login.');
    return normalizeUser(result.user);
  },

  async getAllUsers() {
    await seedOwner();
    const result = await api('listUsers');
    if (!result?.success) throw new Error(result?.message || 'Erro ao listar usuários.');
    return (result.users || []).map(normalizeUser);
  },

  async getUser(id: string) {
    const users = await this.getAllUsers();
    return users.find((u: any) => u.id === id) || null;
  },

  async saveUser(user: any) {
    const payload = {
      id: user.id,
      nome: user.name || user.nome,
      usuario: user.username || user.usuario,
      senha: user.password || user.senha,
      cargo: user.role || user.cargo || 'EQUIPE',
      ativo: (user.status || user.active) === 'Ativo' || user.active === true,
    };

    const result = user.id
      ? await api('updateUser', payload)
      : await api('createUser', payload);

    if (!result?.success) throw new Error(result?.message || 'Erro ao salvar conta.');
    window.dispatchEvent(new Event('sg-users-updated'));
    return result;
  },

  async deleteUser(id: string) {
    const result = await api('deleteUser', { id });
    if (!result?.success) throw new Error(result?.message || 'Erro ao apagar conta.');
    window.dispatchEvent(new Event('sg-users-updated'));
    return result;
  },
};

// Conteúdo/categorias ficam fixos no próprio site.
// A planilha/API agora é usada apenas para CONTAS.
export const categoryService = {
  async loadCategories() {
    return INITIAL_CATEGORIES.sort((a: any, b: any) => (a.order || 0) - (b.order || 0));
  },

  subscribe(callback: (categories: any[]) => void) {
    callback(INITIAL_CATEGORIES.sort((a: any, b: any) => (a.order || 0) - (b.order || 0)));
    return () => {};
  },

  async saveCategory(_category: any) {
    throw new Error('Configuração do Site removida. Categorias são gerenciadas diretamente no código do site.');
  },

  async deleteCategory(_id: string) {
    throw new Error('Configuração do Site removida. Categorias são gerenciadas diretamente no código do site.');
  },

  async resetToDefault() {
    return true;
  },
};
