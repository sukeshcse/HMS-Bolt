import React, { useState } from 'react';
import { BookingTable } from '@/components/bookings/BookingTable';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { mockBookings } from '@/data/mockData';
import { Booking } from '@/types';
import { Plus, Search, Filter, Download, Sparkles } from 'lucide-react';

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
    <div className="space-y-8 p-8 min-h-screen bg-gradient-to-br from-violet-50 via-white to-cyan-50">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row justify-between gap-6">
        <div className="flex flex-1 items-center space-x-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search bookings..."
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
              <SelectItem value="confirmed">Confirmed</SelectItem>
              <SelectItem value="checked_in">Checked In</SelectItem>
              <SelectItem value="checked_out">Checked Out</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
              <SelectItem value="no_show">No Show</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex space-x-3">
          <Button 
            variant="outline" 
            className="rounded-2xl border-violet-200 bg-white/80 backdrop-blur-sm hover:bg-white hover:border-violet-400 transition-all duration-300 hover:scale-105"
          >
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button className="bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600 text-white border-0 rounded-2xl px-6 py-3 font-semibold shadow-lg hover:shadow-glow transition-all duration-300 hover:scale-105">
            <Plus className="h-5 w-5 mr-2" />
            <Sparkles className="h-4 w-4 mr-2" />
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
        <div className="text-center py-16">
          <div className="rounded-3xl bg-white/80 backdrop-blur-xl p-12 shadow-xl max-w-md mx-auto">
            <div className="rounded-full bg-gradient-to-r from-violet-100 to-cyan-100 p-4 w-16 h-16 mx-auto mb-4">
              <Search className="h-8 w-8 text-violet-500 mx-auto" />
            </div>
            <p className="text-gray-500 font-medium">No bookings found matching your criteria.</p>
          </div>
        </div>
      )}
    </div>
  );
};