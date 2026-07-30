import { createContext } from 'react';

export interface AuthUser {
  id: string;
  username: string;
  password?: string;
  name: string;
  role: 'OWNER' | 'ADMIN' | 'EQUIPE';
  status: 'Ativo' | 'Desativado';
  createdAt: string;
}

export interface AuthContextType {
  user: AuthUser | null;
  loading: boolean;
  login: (username: string, pass: string) => Promise<void>;
  logout: () => void;
  can: (permission: string) => boolean;
  getAllUsers: () => Promise<AuthUser[]>;
  saveUser: (userData: any) => Promise<void>;
  deleteUser: (id: string) => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | null>(null);
