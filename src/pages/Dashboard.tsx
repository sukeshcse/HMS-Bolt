import React from 'react';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { RecentActivity } from '@/components/dashboard/RecentActivity';
import { OccupancyChart } from '@/components/dashboard/OccupancyChart';
import { mockDashboardStats } from '@/data/mockData';
import {
  Building2,
  Users,
  DollarSign,
  TrendingUp,
  Calendar,
  AlertTriangle,
  UserCheck,
  UserX
} from 'lucide-react';

export const Dashboard: React.FC = () => {
  const stats = mockDashboardStats;

  return (
    <div className="space-y-8 p-8 min-h-screen bg-gradient-to-br from-violet-50 via-white to-cyan-50">
      {/* Primary Stats Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Occupancy Rate"
          value={`${stats.occupancyRate}%`}
          change="+5.2% from yesterday"
          changeType="positive"
          icon={Building2}
          gradient="from-violet-500 to-purple-600"
        />
        <StatsCard
          title="Total Revenue"
          value={`$${stats.totalRevenue.toLocaleString()}`}
          change="+12.5% from last week"
          changeType="positive"
          icon={DollarSign}
          gradient="from-emerald-500 to-teal-600"
        />
        <StatsCard
          title="Average Rate"
          value={`$${stats.averageRate}`}
          change="-2.1% from last month"
          changeType="negative"
          icon={TrendingUp}
          gradient="from-amber-500 to-orange-600"
        />
        <StatsCard
          title="Total Guests"
          value={stats.totalGuests}
          change="+8 new arrivals"
          changeType="positive"
          icon={Users}
          gradient="from-rose-500 to-pink-600"
        />
      </div>

      {/* Secondary Stats */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Available Rooms"
          value={stats.availableRooms}
          icon={Calendar}
          gradient="from-cyan-500 to-blue-600"
        />
        <StatsCard
          title="Maintenance Issues"
          value={stats.maintenanceIssues}
          icon={AlertTriangle}
          gradient="from-red-500 to-rose-600"
        />
        <StatsCard
          title="Pending Check-ins"
          value={stats.pendingCheckIns}
          icon={UserCheck}
          gradient="from-indigo-500 to-purple-600"
        />
        <StatsCard
          title="Pending Check-outs"
          value={stats.pendingCheckOuts}
          icon={UserX}
          gradient="from-orange-500 to-red-600"
        />
      </div>

      {/* Charts and Activity */}
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <OccupancyChart />
        </div>
        <div>
          <RecentActivity />
        </div>
      </div>
    </div>
  );
};