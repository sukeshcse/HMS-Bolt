import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { TrendingUp } from 'lucide-react';

const data = [
  { day: 'Mon', occupancy: 85, revenue: 12500 },
  { day: 'Tue', occupancy: 92, revenue: 15200 },
  { day: 'Wed', occupancy: 78, revenue: 11800 },
  { day: 'Thu', occupancy: 95, revenue: 16400 },
  { day: 'Fri', occupancy: 88, revenue: 13900 },
  { day: 'Sat', occupancy: 96, revenue: 17200 },
  { day: 'Sun', occupancy: 82, revenue: 12100 }
];

const colors = [
  '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#f43f5e', '#8b5cf6', '#06b6d4'
];

export const OccupancyChart: React.FC = () => {
  return (
    <Card className="border-0 bg-white/80 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center text-xl font-bold">
          <div className="rounded-xl bg-gradient-to-r from-violet-500 to-cyan-500 p-2 mr-3">
            <TrendingUp className="h-5 w-5 text-white" />
          </div>
          <span className="gradient-text">Weekly Occupancy & Revenue</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <defs>
              <linearGradient id="occupancyGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0.3}/>
              </linearGradient>
              <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity={0.8}/>
                <stop offset="100%" stopColor="#06b6d4" stopOpacity={0.3}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" opacity={0.5} />
            <XAxis 
              dataKey="day" 
              tick={{ fill: '#6b7280', fontSize: 12, fontWeight: 500 }}
              axisLine={{ stroke: '#d1d5db' }}
            />
            <YAxis 
              tick={{ fill: '#6b7280', fontSize: 12, fontWeight: 500 }}
              axisLine={{ stroke: '#d1d5db' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                border: 'none',
                borderRadius: '12px',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(10px)'
              }}
            />
            <Bar dataKey="occupancy" fill="url(#occupancyGradient)" name="Occupancy %" radius={[4, 4, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index]} />
              ))}
            </Bar>
            <Bar dataKey="revenue" fill="url(#revenueGradient)" name="Revenue ($)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};