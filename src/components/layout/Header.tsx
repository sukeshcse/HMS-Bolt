import React from 'react';
import { Bell, Search, MessageSquare, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
        {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
      </div>

      <div className="flex items-center space-x-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search guests, rooms, bookings..."
            className="w-80 pl-10"
          />
        </div>

        {/* Quick Actions */}
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" className="relative">
            <MessageSquare className="h-5 w-5" />
            <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 text-xs">
              3
            </Badge>
          </Button>
          
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="h-5 w-5" />
            <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 text-xs">
              5
            </Badge>
          </Button>

          <Button variant="ghost" size="sm">
            <Calendar className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};