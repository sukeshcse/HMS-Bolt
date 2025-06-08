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
  LogOut
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const navigation = [
  { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard },
  { id: 'front-office', name: 'Front Office', icon: Users },
  { id: 'bookings', name: 'Bookings', icon: Calendar },
  { id: 'rooms', name: 'Rooms & Facilities', icon: Building2 },
  { id: 'billing', name: 'Billing & Payments', icon: CreditCard },
  { id: 'room-service', name: 'Room Service', icon: UtensilsCrossed },
  { id: 'tickets', name: 'Tickets & Support', icon: HelpCircle },
  { id: 'reports', name: 'Reports & Analytics', icon: BarChart3 },
  { id: 'staff', name: 'Staff Management', icon: ClipboardList },
  { id: 'settings', name: 'Settings', icon: Settings },
];

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
  const { user, logout } = useAuth();

  return (
    <div className="flex h-screen w-64 flex-col bg-white border-r border-gray-200">
      {/* Logo */}
      <div className="flex h-16 items-center px-6 border-b border-gray-200">
        <Building2 className="h-8 w-8 text-blue-600" />
        <span className="ml-2 text-xl font-bold text-gray-900">Grand HMS</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onTabChange(item.id)}
                  className={cn(
                    'flex w-full items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                    activeTab === item.id
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  )}
                >
                  <Icon className="mr-3 h-5 w-5" />
                  {item.name}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User Profile */}
      <div className="border-t border-gray-200 p-4">
        <div className="flex items-center">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src={user?.avatar || 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=150'}
            alt={user?.name}
          />
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium text-gray-900">{user?.name}</p>
            <p className="text-xs text-gray-500 capitalize">{user?.role}</p>
          </div>
          <button
            onClick={logout}
            className="ml-2 rounded-lg p-1.5 text-gray-400 hover:bg-gray-50 hover:text-gray-600"
          >
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};