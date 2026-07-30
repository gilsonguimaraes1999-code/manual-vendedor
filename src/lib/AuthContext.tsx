import React, { useContext, useEffect, useState } from 'react';
import { userService } from './services';
import { AuthContext, type AuthUser as User } from './authContextInstance';


const ROLE_PERMISSIONS: Record<string, string[]> = {
  OWNER: ['view', 'edit_content', 'manage_users', 'manage_categories', 'manage_settings'],
  ADMIN: ['view', 'edit_content', 'manage_categories'],
  EQUIPE: ['view'],
};

function normalizeSessionUser(raw: any): User | null {
  if (!raw) return null;
  return {
    id: raw.id,
    username: raw.username,
    name: raw.name,
    role: raw.role,
    status: raw.status || 'Ativo',
    createdAt: raw.createdAt || new Date().toISOString(),
  };
}

async function withTimeout<T>(promise: Promise<T>, timeoutMs = 2500): Promise<T> {
  return await Promise.race([
    promise,
    new Promise<T>((_, reject) => {
      window.setTimeout(() => reject(new Error('Tempo limite ao validar sessao.')), timeoutMs);
    }),
  ]);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const boot = async () => {
      const session = localStorage.getItem('auth_session');
      if (!session) {
        setLoading(false);
        return;
      }

      try {
        const sessionUser = normalizeSessionUser(JSON.parse(session));
        if (!sessionUser?.id) {
          localStorage.removeItem('auth_session');
          setLoading(false);
          return;
        }

        // Confere na API se a conta ainda existe e está ativa.
        const users = await withTimeout(userService.getAllUsers());
        const verified = users.find((u: any) => u.id === sessionUser.id && u.status === 'Ativo');
        if (verified) {
          setUser(verified);
          localStorage.setItem('auth_session', JSON.stringify(verified));
        } else {
          localStorage.removeItem('auth_session');
        }
      } catch (err) {
        console.warn('Não foi possível validar sessão com a API. Mantendo sessão local se existir.', err);
        try {
          const sessionUser = normalizeSessionUser(JSON.parse(session));
          if (sessionUser) setUser(sessionUser);
        } catch {
          localStorage.removeItem('auth_session');
        }
      } finally {
        setLoading(false);
      }
    };

    boot();
  }, []);

  const can = (permission: string) => {
    if (!user) return false;
    const permissions = ROLE_PERMISSIONS[user.role] || [];
    return permissions.includes(permission);
  };

  const login = async (username: string, pass: string) => {
    const targetUser = await userService.login(username.trim(), pass.trim());
    const { password: _, ...sessionUser } = targetUser;
    localStorage.setItem('auth_session', JSON.stringify(sessionUser));
    setUser(sessionUser as User);
  };

  const logout = () => {
    localStorage.removeItem('auth_session');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      login,
      logout,
      can,
      getAllUsers: async () => userService.getAllUsers(),
      saveUser: async (u) => { await userService.saveUser(u); },
      deleteUser: async (id) => { await userService.deleteUser(id); },
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
