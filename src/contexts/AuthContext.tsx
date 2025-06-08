import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User } from '@/types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>({
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@grandhotel.com',
    role: 'manager',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=150',
    department: 'Front Office',
    shift: 'morning',
    status: 'active'
  });

  const login = async (email: string, password: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setUser({
      id: '1',
      name: 'Sarah Johnson',
      email: email,
      role: 'manager',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=150',
      department: 'Front Office',
      shift: 'morning',
      status: 'active'
    });
  };

  const logout = () => {
    setUser(null);
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};