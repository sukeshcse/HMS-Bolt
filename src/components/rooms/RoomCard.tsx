import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Room } from '@/types';
import { Users, Wifi, Car, Coffee, Settings, Star } from 'lucide-react';

interface RoomCardProps {
  room: Room;
  onManage: (room: Room) => void;
}

const statusConfig = {
  available: { 
    color: 'bg-gradient-to-r from-emerald-400 to-emerald-500 text-white',
    glow: 'shadow-emerald-200'
  },
  occupied: { 
    color: 'bg-gradient-to-r from-violet-400 to-violet-500 text-white',
    glow: 'shadow-violet-200'
  },
  maintenance: { 
    color: 'bg-gradient-to-r from-amber-400 to-amber-500 text-white',
    glow: 'shadow-amber-200'
  },
  cleaning: { 
    color: 'bg-gradient-to-r from-cyan-400 to-cyan-500 text-white',
    glow: 'shadow-cyan-200'
  },
  out_of_order: { 
    color: 'bg-gradient-to-r from-rose-400 to-rose-500 text-white',
    glow: 'shadow-rose-200'
  }
};

const roomTypeConfig = {
  standard: { 
    color: 'bg-gradient-to-r from-gray-400 to-gray-500 text-white',
    icon: '🏠'
  },
  deluxe: { 
    color: 'bg-gradient-to-r from-blue-400 to-blue-500 text-white',
    icon: '🏨'
  },
  suite: { 
    color: 'bg-gradient-to-r from-purple-400 to-purple-500 text-white',
    icon: '🏰'
  },
  presidential: { 
    color: 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-white',
    icon: '👑'
  }
};

export const RoomCard: React.FC<RoomCardProps> = ({ room, onManage }) => {
  const statusStyle = statusConfig[room.status];
  const typeStyle = roomTypeConfig[room.type];

  return (
    <Card className="group relative overflow-hidden border-0 bg-white/80 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover-lift animate-fade-in">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-violet-700 transition-colors">
                Room {room.number}
              </h3>
              <span className="text-lg">{typeStyle.icon}</span>
            </div>
            <p className="text-sm text-gray-500 font-medium">Floor {room.floor}</p>
          </div>
          <div className="flex flex-col space-y-2">
            <Badge className={`${statusStyle.color} border-0 shadow-lg ${statusStyle.glow} font-semibold px-3 py-1`}>
              {room.status.replace('_', ' ')}
            </Badge>
            <Badge className={`${typeStyle.color} border-0 shadow-lg font-semibold px-3 py-1`}>
              {room.type}
            </Badge>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-violet-50 to-cyan-50 group-hover:from-violet-100 group-hover:to-cyan-100 transition-all duration-300">
            <div className="flex items-center space-x-3">
              <div className="rounded-xl bg-gradient-to-r from-violet-500 to-cyan-500 p-2">
                <Users className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-semibold text-gray-700">Capacity: {room.capacity}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-amber-400 fill-current" />
              <span className="text-xl font-bold gradient-text">${room.price}</span>
              <span className="text-sm text-gray-500 font-medium">/night</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {room.amenities.slice(0, 3).map((amenity, index) => (
              <div key={amenity} className="flex items-center justify-center space-x-1 p-2 rounded-xl bg-white/50 hover:bg-white transition-colors group/amenity">
                {amenity === 'WiFi' && <Wifi className="h-3 w-3 text-violet-500 group-hover/amenity:scale-110 transition-transform" />}
                {amenity === 'Parking' && <Car className="h-3 w-3 text-cyan-500 group-hover/amenity:scale-110 transition-transform" />}
                {amenity === 'Coffee' && <Coffee className="h-3 w-3 text-amber-500 group-hover/amenity:scale-110 transition-transform" />}
                <span className="text-xs text-gray-600 font-medium">{amenity}</span>
              </div>
            ))}
            {room.amenities.length > 3 && (
              <div className="flex items-center justify-center p-2 rounded-xl bg-gradient-to-r from-violet-100 to-cyan-100">
                <span className="text-xs text-violet-600 font-semibold">+{room.amenities.length - 3}</span>
              </div>
            )}
          </div>

          {room.lastCleaned && (
            <p className="text-xs text-gray-400 font-medium bg-gray-50 rounded-xl p-3 text-center">
              Last cleaned: {new Date(room.lastCleaned).toLocaleDateString()}
            </p>
          )}
        </div>

        <div className="mt-6 pt-6 border-t border-violet-100">
          <Button
            onClick={() => onManage(room)}
            className="w-full bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600 text-white border-0 rounded-2xl py-3 font-semibold shadow-lg hover:shadow-glow transition-all duration-300 hover:scale-105"
          >
            <Settings className="h-4 w-4 mr-2" />
            Manage Room
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};