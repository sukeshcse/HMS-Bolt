import React, { useState } from 'react';
import { RoomCard } from '@/components/rooms/RoomCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { mockRooms } from '@/data/mockData';
import { Room } from '@/types';
import { Plus, Search, Filter, Sparkles } from 'lucide-react';

export const Rooms: React.FC = () => {
  const [rooms] = useState<Room[]>(mockRooms);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [typeFilter, setTypeFilter] = useState<string>('all');

  const handleManageRoom = (room: Room) => {
    console.log('Managing room:', room);
  };

  const filteredRooms = rooms.filter(room => {
    const matchesSearch = room.number.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || room.status === statusFilter;
    const matchesType = typeFilter === 'all' || room.type === typeFilter;
    return matchesSearch && matchesStatus && matchesType;
  });

  return (
    <div className="space-y-8 p-8 min-h-screen bg-gradient-to-br from-violet-50 via-white to-cyan-50">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row justify-between gap-6">
        <div className="flex flex-1 items-center space-x-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search rooms..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pr-4 py-3 rounded-2xl border-violet-200 bg-white/80 backdrop-blur-sm focus:bg-white focus:border-violet-400 focus:ring-violet-200 transition-all duration-300 hover:shadow-glow"
            />
          </div>
          
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-48 rounded-2xl border-violet-200 bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300">
              <Filter className="h-4 w-4 mr-2 text-violet-500" />
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent className="rounded-2xl border-violet-200 bg-white/95 backdrop-blur-xl">
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="available">Available</SelectItem>
              <SelectItem value="occupied">Occupied</SelectItem>
              <SelectItem value="maintenance">Maintenance</SelectItem>
              <SelectItem value="cleaning">Cleaning</SelectItem>
              <SelectItem value="out_of_order">Out of Order</SelectItem>
            </SelectContent>
          </Select>

          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-48 rounded-2xl border-violet-200 bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent className="rounded-2xl border-violet-200 bg-white/95 backdrop-blur-xl">
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="standard">Standard</SelectItem>
              <SelectItem value="deluxe">Deluxe</SelectItem>
              <SelectItem value="suite">Suite</SelectItem>
              <SelectItem value="presidential">Presidential</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button className="bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600 text-white border-0 rounded-2xl px-6 py-3 font-semibold shadow-lg hover:shadow-glow transition-all duration-300 hover:scale-105">
          <Plus className="h-5 w-5 mr-2" />
          <Sparkles className="h-4 w-4 mr-2" />
          Add Room
        </Button>
      </div>

      {/* Room Cards Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredRooms.map((room, index) => (
          <div
            key={room.id}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <RoomCard
              room={room}
              onManage={handleManageRoom}
            />
          </div>
        ))}
      </div>

      {filteredRooms.length === 0 && (
        <div className="text-center py-16">
          <div className="rounded-3xl bg-white/80 backdrop-blur-xl p-12 shadow-xl max-w-md mx-auto">
            <div className="rounded-full bg-gradient-to-r from-violet-100 to-cyan-100 p-4 w-16 h-16 mx-auto mb-4">
              <Search className="h-8 w-8 text-violet-500 mx-auto" />
            </div>
            <p className="text-gray-500 font-medium">No rooms found matching your criteria.</p>
          </div>
        </div>
      )}
    </div>
  );
};