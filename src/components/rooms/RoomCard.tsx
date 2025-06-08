import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Room } from '@/types';
import { Users, Wifi, Car, Coffee, Settings } from 'lucide-react';

interface RoomCardProps {
  room: Room;
  onManage: (room: Room) => void;
}

const statusColors = {
  available: 'bg-green-100 text-green-800',
  occupied: 'bg-blue-100 text-blue-800',
  maintenance: 'bg-yellow-100 text-yellow-800',
  cleaning: 'bg-purple-100 text-purple-800',
  out_of_order: 'bg-red-100 text-red-800'
};

const roomTypeColors = {
  standard: 'bg-gray-100 text-gray-800',
  deluxe: 'bg-blue-100 text-blue-800',
  suite: 'bg-purple-100 text-purple-800',
  presidential: 'bg-yellow-100 text-yellow-800'
};

export const RoomCard: React.FC<RoomCardProps> = ({ room, onManage }) => {
  return (
    <Card className="transition-shadow hover:shadow-md">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Room {room.number}</h3>
            <p className="text-sm text-gray-500">Floor {room.floor}</p>
          </div>
          <div className="flex space-x-2">
            <Badge className={statusColors[room.status]}>
              {room.status.replace('_', ' ')}
            </Badge>
            <Badge className={roomTypeColors[room.type]}>
              {room.type}
            </Badge>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-600">Capacity: {room.capacity}</span>
            </div>
            <span className="text-lg font-bold text-gray-900">${room.price}/night</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {room.amenities.slice(0, 3).map((amenity) => (
              <div key={amenity} className="flex items-center space-x-1">
                {amenity === 'WiFi' && <Wifi className="h-3 w-3 text-gray-400" />}
                {amenity === 'Parking' && <Car className="h-3 w-3 text-gray-400" />}
                {amenity === 'Coffee' && <Coffee className="h-3 w-3 text-gray-400" />}
                <span className="text-xs text-gray-500">{amenity}</span>
              </div>
            ))}
            {room.amenities.length > 3 && (
              <span className="text-xs text-gray-400">+{room.amenities.length - 3} more</span>
            )}
          </div>

          {room.lastCleaned && (
            <p className="text-xs text-gray-400">
              Last cleaned: {new Date(room.lastCleaned).toLocaleDateString()}
            </p>
          )}
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onManage(room)}
            className="w-full"
          >
            <Settings className="h-4 w-4 mr-2" />
            Manage Room
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};