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
import { Eye, Edit, Trash2 } from 'lucide-react';

interface BookingTableProps {
  bookings: Booking[];
  onView: (booking: Booking) => void;
  onEdit: (booking: Booking) => void;
  onCancel: (booking: Booking) => void;
}

const statusColors = {
  confirmed: 'bg-blue-100 text-blue-800',
  checked_in: 'bg-green-100 text-green-800',
  checked_out: 'bg-gray-100 text-gray-800',
  cancelled: 'bg-red-100 text-red-800',
  no_show: 'bg-yellow-100 text-yellow-800'
};

const sourceColors = {
  direct: 'bg-purple-100 text-purple-800',
  'booking.com': 'bg-blue-100 text-blue-800',
  expedia: 'bg-yellow-100 text-yellow-800',
  airbnb: 'bg-red-100 text-red-800',
  walk_in: 'bg-green-100 text-green-800'
};

export const BookingTable: React.FC<BookingTableProps> = ({
  bookings,
  onView,
  onEdit,
  onCancel
}) => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Booking ID</TableHead>
            <TableHead>Guest</TableHead>
            <TableHead>Room</TableHead>
            <TableHead>Check-in</TableHead>
            <TableHead>Check-out</TableHead>
            <TableHead>Guests</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Source</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookings.map((booking) => (
            <TableRow key={booking.id}>
              <TableCell className="font-medium">{booking.id}</TableCell>
              <TableCell>
                <div>
                  <p className="font-medium">{booking.guest.firstName} {booking.guest.lastName}</p>
                  <p className="text-sm text-gray-500">{booking.guest.email}</p>
                </div>
              </TableCell>
              <TableCell>
                <div>
                  <p className="font-medium">Room {booking.room.number}</p>
                  <p className="text-sm text-gray-500 capitalize">{booking.room.type}</p>
                </div>
              </TableCell>
              <TableCell>{new Date(booking.checkIn).toLocaleDateString()}</TableCell>
              <TableCell>{new Date(booking.checkOut).toLocaleDateString()}</TableCell>
              <TableCell>{booking.adults + booking.children}</TableCell>
              <TableCell>
                <Badge className={statusColors[booking.status]}>
                  {booking.status.replace('_', ' ')}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge className={sourceColors[booking.source]}>
                  {booking.source}
                </Badge>
              </TableCell>
              <TableCell className="font-medium">${booking.totalAmount}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onView(booking)}
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onEdit(booking)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onCancel(booking)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};