import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, User, Calendar, CreditCard, TrendingUp } from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'check-in',
    guest: 'John Smith',
    room: '205',
    time: '2 minutes ago',
    icon: User,
    gradient: 'from-emerald-400 to-emerald-600'
  },
  {
    id: 2,
    type: 'booking',
    guest: 'Emma Wilson',
    room: '412',
    time: '15 minutes ago',
    icon: Calendar,
    gradient: 'from-violet-400 to-violet-600'
  },
  {
    id: 3,
    type: 'payment',
    guest: 'Michael Brown',
    amount: '$450',
    time: '32 minutes ago',
    icon: CreditCard,
    gradient: 'from-amber-400 to-amber-600'
  },
  {
    id: 4,
    type: 'check-out',
    guest: 'Sarah Davis',
    room: '301',
    time: '1 hour ago',
    icon: TrendingUp,
    gradient: 'from-rose-400 to-rose-600'
  }
];

export const RecentActivity: React.FC = () => {
  return (
    <Card className="border-0 bg-white/80 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center text-xl font-bold">
          <div className="rounded-xl bg-gradient-to-r from-violet-500 to-cyan-500 p-2 mr-3">
            <Clock className="h-5 w-5 text-white" />
          </div>
          <span className="gradient-text">Recent Activity</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <div 
                key={activity.id} 
                className="group flex items-center space-x-4 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-violet-50 hover:to-cyan-50 transition-all duration-300 hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`rounded-2xl bg-gradient-to-r ${activity.gradient} p-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900 group-hover:text-violet-700 transition-colors">
                    {activity.guest}
                  </p>
                  <p className="text-sm text-gray-500 font-medium">
                    {activity.type === 'check-in' && `Checked in to room ${activity.room}`}
                    {activity.type === 'check-out' && `Checked out from room ${activity.room}`}
                    {activity.type === 'booking' && `New booking for room ${activity.room}`}
                    {activity.type === 'payment' && `Payment received: ${activity.amount}`}
                  </p>
                </div>
                <Badge variant="secondary" className="text-xs font-medium bg-violet-100 text-violet-700 hover:bg-violet-200 transition-colors">
                  {activity.time}
                </Badge>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};