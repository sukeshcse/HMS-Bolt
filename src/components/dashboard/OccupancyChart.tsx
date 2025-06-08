import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { day: 'Mon', occupancy: 85, revenue: 12500 },
  { day: 'Tue', occupancy: 92, revenue: 15200 },
  { day: 'Wed', occupancy: 78, revenue: 11800 },
  { day: 'Thu', occupancy: 95, revenue: 16400 },
  { day: 'Fri', occupancy: 88, revenue: 13900 },
  { day: 'Sat', occupancy: 96, revenue: 17200 },
  { day: 'Sun', occupancy: 82, revenue: 12100 }
];

export const OccupancyChart: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly Occupancy & Revenue</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="occupancy" fill="#3B82F6" name="Occupancy %" />
            <Bar dataKey="revenue" fill="#10B981" name="Revenue ($)" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};