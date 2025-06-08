import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, User, Calendar, CreditCard } from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'check-in',
    guest: 'John Smith',
    room: '205',
    time: '2 minutes ago',
    icon: User,
    color: 'bg-green-100 text-green-600'
  },
  {
    id: 2,
    type: 'booking',
    guest: 'Emma Wilson',
    room: '412',
    time: '15 minutes ago',
    icon: Calendar,
    color: 'bg-blue-100 text-blue-600'
  },
  {
    id: 3,
    type: 'payment',
    guest: 'Michael Brown',
    amount: '$450',
    time: '32 minutes ago',
    icon: CreditCard,
    color: 'bg-yellow-100 text-yellow-600'
  },
  {
    id: 4,
    type: 'check-out',
    guest: 'Sarah Davis',
    room: '301',
    time: '1 hour ago',
    icon: User,
    color: 'bg-red-100 text-red-600'
  }
];

export const RecentActivity: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Clock className="h-5 w-5 mr-2" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => {
            const Icon = activity.icon;
            return (
              <div key={activity.id} className="flex items-center space-x-3">
                <div className={`rounded-full p-2 ${activity.color}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">
                    {activity.guest}
                  </p>
                  <p className="text-sm text-gray-500">
                    {activity.type === 'check-in' && `Checked in to room ${activity.room}`}
                    {activity.type === 'check-out' && `Checked out from room ${activity.room}`}
                    {activity.type === 'booking' && `New booking for room ${activity.room}`}
                    {activity.type === 'payment' && `Payment received: ${activity.amount}`}
                  </p>
                </div>
                <span className="text-xs text-gray-400">{activity.time}</span>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};