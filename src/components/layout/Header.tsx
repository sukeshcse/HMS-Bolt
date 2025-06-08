import React from 'react';
import { Bell, Search, MessageSquare, Calendar, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  const [isDark, setIsDark] = React.useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="flex h-20 items-center justify-between border-b border-violet-100/50 bg-white/80 backdrop-blur-xl px-8 shadow-sm">
      <div className="animate-fade-in">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent">
          {title}
        </h1>
        {subtitle && (
          <p className="text-sm text-gray-500 font-medium mt-1">{subtitle}</p>
        )}
      </div>

      <div className="flex items-center space-x-6">
        {/* Search */}
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 group-hover:text-violet-500 transition-colors" />
          <Input
            placeholder="Search guests, rooms, bookings..."
            className="w-96 pl-12 pr-4 py-3 rounded-2xl border-violet-100 bg-white/50 backdrop-blur-sm focus:bg-white focus:border-violet-300 focus:ring-violet-200 transition-all duration-300 hover:shadow-glow"
          />
        </div>

        {/* Quick Actions */}
        <div className="flex items-center space-x-3">
          <Button 
            variant="ghost" 
            size="sm" 
            className="relative rounded-2xl hover:bg-violet-50 hover:text-violet-600 transition-all duration-300 hover:scale-110"
          >
            <MessageSquare className="h-5 w-5" />
            <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 text-xs bg-gradient-to-r from-rose-400 to-rose-500 border-0 animate-bounce-in">
              3
            </Badge>
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="relative rounded-2xl hover:bg-violet-50 hover:text-violet-600 transition-all duration-300 hover:scale-110"
          >
            <Bell className="h-5 w-5" />
            <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 text-xs bg-gradient-to-r from-emerald-400 to-emerald-500 border-0 animate-bounce-in">
              5
            </Badge>
          </Button>

          <Button 
            variant="ghost" 
            size="sm" 
            className="rounded-2xl hover:bg-violet-50 hover:text-violet-600 transition-all duration-300 hover:scale-110"
          >
            <Calendar className="h-5 w-5" />
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="rounded-2xl hover:bg-violet-50 hover:text-violet-600 transition-all duration-300 hover:scale-110"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </header>
  );
};