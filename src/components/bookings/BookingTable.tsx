import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Booking } from '@/types';
import { Eye, Edit, Trash2, User, MapPin } from 'lucide-react';

interface BookingTableProps {
  bookings: Booking[];
  onView: (booking: Booking) => void;
  onEdit: (booking: Booking) => void;
  onCancel: (booking: Booking) => void;
}

const statusConfig = {
  confirmed: { color: 'bg-gradient-to-r from-violet-400 to-violet-500 text-white', glow: 'shadow-violet-200' },
  checked_in: { color: 'bg-gradient-to-r from-emerald-400 to-emerald-500 text-white', glow: 'shadow-emerald-200' },
  checked_out: { color: 'bg-gradient-to-r from-gray-400 to-gray-500 text-white', glow: 'shadow-gray-200' },
  cancelled: { color: 'bg-gradient-to-r from-rose-400 to-rose-500 text-white', glow: 'shadow-rose-200' },
  no_show: { color: 'bg-gradient-to-r from-amber-400 to-amber-500 text-white', glow: 'shadow-amber-200' }
};

const sourceConfig = {
  direct: { color: 'bg-gradient-to-r from-purple-400 to-purple-500 text-white' },
  'booking.com': { color: 'bg-gradient-to-r from-blue-400 to-blue-500 text-white' },
  expedia: { color: 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-white' },
  airbnb: { color: 'bg-gradient-to-r from-red-400 to-red-500 text-white' },
  walk_in: { color: 'bg-gradient-to-r from-green-400 to-green-500 text-white' }
};

export const BookingTable: React.FC<BookingTableProps> = ({
  bookings,
  onView,
  onEdit,
  onCancel
}) => {
  return (
    <div className="rounded-3xl border-0 bg-white/80 backdrop-blur-xl shadow-xl overflow-hidden animate-fade-in">
      <Table>
        <TableHeader>
          <TableRow className="border-b border-violet-100 bg-gradient-to-r from-violet-50 to-cyan-50">
            <TableHead className="font-bold text-gray-700 py-4">Booking ID</TableHead>
            <TableHead className="font-bold text-gray-700">Guest</TableHead>
            <TableHead className="font-bold text-gray-700">Room</TableHead>
            <TableHead className="font-bold text-gray-700">Check-in</TableHead>
            <TableHead className="font-bold text-gray-700">Check-out</TableHead>
            <TableHead className="font-bold text-gray-700">Guests</TableHead>
            <TableHead className="font-bold text-gray-700">Status</TableHead>
            <TableHead className="font-bold text-gray-700">Source</TableHead>
            <TableHead className="font-bold text-gray-700">Amount</TableHead>
            <TableHead className="font-bold text-gray-700">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookings.map((booking, index) => {
            const statusStyle = statusConfig[booking.status];
            const sourceStyle = sourceConfig[booking.source];
            
            return (
              <TableRow 
                key={booking.id} 
                className="border-b border-violet-50 hover:bg-gradient-to-r hover:from-violet-25 hover:to-cyan-25 transition-all duration-300 group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <TableCell className="font-semibold text-violet-700 py-4">{booking.id}</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <div className="rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 p-2">
                      <User className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-violet-700 transition-colors">
                        {booking.guest.firstName} {booking.guest.lastName}
                      </p>
                      <p className="text-sm text-gray-500 font-medium">{booking.guest.email}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <div className="rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 p-2">
                      <MapPin className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Room {booking.room.number}</p>
                      <p className="text-sm text-gray-500 capitalize font-medium">{booking.room.type}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="font-medium">{new Date(booking.checkIn).toLocaleDateString()}</TableCell>
                <TableCell className="font-medium">{new Date(booking.checkOut).toLocaleDateString()}</TableCell>
                <TableCell className="font-semibold">{booking.adults + booking.children}</TableCell>
                <TableCell>
                  <Badge className={`${statusStyle.color} border-0 shadow-lg ${statusStyle.glow} font-semibold px-3 py-1`}>
                    {booking.status.replace('_', ' ')}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge className={`${sourceStyle.color} border-0 shadow-lg font-semibold px-3 py-1`}>
                    {booking.source}
                  </Badge>
                </TableCell>
                <TableCell className="font-bold text-xl gradient-text">${booking.totalAmount}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onView(booking)}
                      className="rounded-xl hover:bg-violet-100 hover:text-violet-600 transition-all duration-300 hover:scale-110"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onEdit(booking)}
                      className="rounded-xl hover:bg-cyan-100 hover:text-cyan-600 transition-all duration-300 hover:scale-110"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onCancel(booking)}
                      className="rounded-xl hover:bg-rose-100 hover:text-rose-600 transition-all duration-300 hover:scale-110"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};