import React, { useState } from 'react';
import { RoomCard } from '@/components/rooms/RoomCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { mockRooms } from '@/data/mockData';
import { Room } from '@/types';
import { Plus, Search, Filter } from 'lucide-react';

export const Rooms: React.FC = () => {
  const [rooms] = useState<Room[]>(mockRooms);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [typeFilter, setTypeFilter] = useState<string>('all');

  const handleManageRoom = (room: Room) => {
    console.log('Managing room:', room);
    // Here you would open a room management modal or navigate to a detailed view
  };

  const filteredRooms = rooms.filter(room => {
    const matchesSearch = room.number.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || room.status === statusFilter;
    const matchesType = typeFilter === 'all' || room.type === typeFilter;
    return matchesSearch && matchesStatus && matchesType;
  });

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex flex-1 items-center space-x-4">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search rooms..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-40">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="available">Available</SelectItem>
              <SelectItem value="occupied">Occupied</SelectItem>
              <SelectItem value="maintenance">Maintenance</SelectItem>
              <SelectItem value="cleaning">Cleaning</SelectItem>
              <SelectItem value="out_of_order">Out of Order</SelectItem>
            </SelectContent>
          </Select>

          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="standard">Standard</SelectItem>
              <SelectItem value="deluxe">Deluxe</SelectItem>
              <SelectItem value="suite">Suite</SelectItem>
              <SelectItem value="presidential">Presidential</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Room
        </Button>
      </div>

      {/* Room Cards Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredRooms.map((room) => (
          <RoomCard
            key={room.id}
            room={room}
            onManage={handleManageRoom}
          />
        ))}
      </div>

      {filteredRooms.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No rooms found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};