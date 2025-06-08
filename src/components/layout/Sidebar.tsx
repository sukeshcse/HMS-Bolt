import React from 'react';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  Users,
  Calendar,
  Building2,
  CreditCard,
  UtensilsCrossed,
  BarChart3,
  Settings,
  HelpCircle,
  User,
  ClipboardList,
  LogOut,
  Sparkles
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const navigation = [
  { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard, color: 'text-violet-500' },
  { id: 'front-office', name: 'Front Office', icon: Users, color: 'text-cyan-500' },
  { id: 'bookings', name: 'Bookings', icon: Calendar, color: 'text-emerald-500' },
  { id: 'rooms', name: 'Rooms & Facilities', icon: Building2, color: 'text-amber-500' },
  { id: 'billing', name: 'Billing & Payments', icon: CreditCard, color: 'text-rose-500' },
  { id: 'room-service', name: 'Room Service', icon: UtensilsCrossed, color: 'text-orange-500' },
  { id: 'tickets', name: 'Tickets & Support', icon: HelpCircle, color: 'text-blue-500' },
  { id: 'reports', name: 'Reports & Analytics', icon: BarChart3, color: 'text-indigo-500' },
  { id: 'staff', name: 'Staff Management', icon: ClipboardList, color: 'text-teal-500' },
  { id: 'settings', name: 'Settings', icon: Settings, color: 'text-gray-500' },
];

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
  const { user, logout } = useAuth();

  return (
    <div className="flex h-screen w-72 flex-col bg-white/95 backdrop-blur-xl border-r border-violet-100 shadow-2xl">
      {/* Logo */}
      <div className="flex h-20 items-center px-8 border-b border-violet-100/50">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Building2 className="h-10 w-10 text-violet-600" />
            <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-cyan-400" />
          </div>
          <div>
            <span className="text-2xl font-bold gradient-text">LuxeStay</span>
            <p className="text-xs text-violet-400 font-medium">Premium HMS</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-6 py-8">
        <ul className="space-y-3">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onTabChange(item.id)}
                  className={cn(
                    'group flex w-full items-center rounded-2xl px-4 py-3.5 text-sm font-medium transition-all duration-300 hover:scale-105',
                    isActive
                      ? 'bg-gradient-to-r from-violet-500 to-cyan-500 text-white shadow-glow'
                      : 'text-gray-700 hover:bg-gradient-to-r hover:from-violet-50 hover:to-cyan-50 hover:text-violet-700'
                  )}
                >
                  <Icon className={cn(
                    'mr-4 h-5 w-5 transition-all duration-300',
                    isActive ? 'text-white' : item.color,
                    'group-hover:scale-110'
                  )} />
                  <span className="transition-all duration-300">{item.name}</span>
                  {isActive && (
                    <div className="ml-auto h-2 w-2 rounded-full bg-white pulse-purple" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User Profile */}
      <div className="border-t border-violet-100/50 p-6">
        <div className="flex items-center space-x-4 p-4 rounded-2xl bg-gradient-to-r from-violet-50 to-cyan-50 hover:from-violet-100 hover:to-cyan-100 transition-all duration-300 hover-lift">
          <div className="relative">
            <img
              className="h-12 w-12 rounded-full object-cover ring-2 ring-violet-200"
              src={user?.avatar || 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=150'}
              alt={user?.name}
            />
            <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-emerald-400 border-2 border-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-900 truncate">{user?.name}</p>
            <p className="text-xs text-violet-600 capitalize font-medium">{user?.role}</p>
          </div>
          <button
            onClick={logout}
            className="rounded-xl p-2 text-gray-400 hover:bg-white hover:text-rose-500 transition-all duration-300 hover:scale-110"
          >
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};