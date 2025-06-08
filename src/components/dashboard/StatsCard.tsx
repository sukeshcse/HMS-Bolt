import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon: LucideIcon;
  iconColor?: string;
  description?: string;
  gradient?: string;
}

export const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  change,
  changeType = 'neutral',
  icon: Icon,
  iconColor = 'text-violet-600',
  description,
  gradient = 'from-violet-500 to-cyan-500'
}) => {
  const getChangeColor = () => {
    switch (changeType) {
      case 'positive':
        return 'text-emerald-600';
      case 'negative':
        return 'text-rose-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <Card className="group relative overflow-hidden border-0 bg-white/80 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover-lift animate-fade-in">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
      <CardContent className="p-8">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider">{title}</p>
            <p className="text-4xl font-bold text-gray-900 mt-3 group-hover:scale-105 transition-transform duration-300">
              {value}
            </p>
            {change && (
              <p className={`text-sm mt-2 font-medium ${getChangeColor()}`}>
                {change}
              </p>
            )}
            {description && (
              <p className="text-xs text-gray-500 mt-2 font-medium">{description}</p>
            )}
          </div>
          <div className={`relative rounded-2xl bg-gradient-to-br ${gradient} p-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
            <Icon className="h-8 w-8 text-white" />
            <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};