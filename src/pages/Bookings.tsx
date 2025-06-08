import React, { useState } from 'react';
import { BookingTable } from '@/components/bookings/BookingTable';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { mockBookings } from '@/data/mockData';
import { Booking } from '@/types';
import { Plus, Search, Filter, Download } from 'lucide-react';

export const Bookings: React.FC = () => {
  const [bookings] = useState<Booking[]>(mockBookings);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const handleViewBooking = (booking: Booking) => {
    console.log('Viewing booking:', booking);
  };

  const handleEditBooking = (booking: Booking) => {
    console.log('Editing booking:', booking);
  };

  const handleCancelBooking = (booking: Booking) => {
    console.log('Cancelling booking:', booking);
  };

  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = 
      booking.guest.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.guest.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.guest.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || booking.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex flex-1 items-center space-x-4">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search bookings..."
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
              <SelectItem value="confirmed">Confirmed</SelectItem>
              <SelectItem value="checked_in">Checked In</SelectItem>
              <SelectItem value="checked_out">Checked Out</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
              <SelectItem value="no_show">No Show</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex space-x-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Booking
          </Button>
        </div>
      </div>

      {/* Bookings Table */}
      <BookingTable
        bookings={filteredBookings}
        onView={handleViewBooking}
        onEdit={handleEditBooking}
        onCancel={handleCancelBooking}
      />

      {filteredBookings.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No bookings found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};