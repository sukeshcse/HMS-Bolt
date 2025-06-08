import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { mockBookings } from '@/data/mockData';
import { 
  UserPlus, 
  UserMinus, 
  Calendar, 
  Clock, 
  Users, 
  MapPin,
  Phone,
  Mail
} from 'lucide-react';

export const FrontOffice: React.FC = () => {
  const todayCheckIns = mockBookings.filter(b => 
    new Date(b.checkIn).toDateString() === new Date().toDateString()
  );
  
  const todayCheckOuts = mockBookings.filter(b => 
    new Date(b.checkOut).toDateString() === new Date().toDateString()
  );

  return (
    <div className="space-y-6">
      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="rounded-full bg-blue-100 p-3">
                <UserPlus className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-blue-900">Quick Check-in</h3>
                <p className="text-sm text-blue-700">Process guest arrival</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="rounded-full bg-green-100 p-3">
                <UserMinus className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-green-900">Quick Check-out</h3>
                <p className="text-sm text-green-700">Process guest departure</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-purple-200 bg-purple-50">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="rounded-full bg-purple-100 p-3">
                <Calendar className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-purple-900">New Booking</h3>
                <p className="text-sm text-purple-700">Create reservation</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-orange-200 bg-orange-50">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="rounded-full bg-orange-100 p-3">
                <Users className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-orange-900">Walk-in Guest</h3>
                <p className="text-sm text-orange-700">Register new guest</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Today's Check-ins */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <UserPlus className="h-5 w-5 mr-2 text-blue-600" />
              Today's Check-ins ({todayCheckIns.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {todayCheckIns.map((booking) => (
                <div key={booking.id} className="border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {booking.guest.firstName} {booking.guest.lastName}
                      </h4>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 mr-1" />
                          {booking.guest.email}
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 mr-1" />
                          {booking.guest.phone}
                        </div>
                      </div>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">
                      {booking.status.replace('_', ' ')}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                      Room {booking.room.number} ({booking.room.type})
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-gray-400" />
                      {new Date(booking.checkIn).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2 text-gray-400" />
                      {booking.adults + booking.children} guests
                    </div>
                    <div className="text-right font-semibold">
                      ${booking.totalAmount}
                    </div>
                  </div>
                  
                  <div className="mt-3 pt-3 border-t flex space-x-2">
                    <Button size="sm" className="flex-1">
                      Check In
                    </Button>
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
              
              {todayCheckIns.length === 0 && (
                <p className="text-center text-gray-500 py-4">
                  No check-ins scheduled for today
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Today's Check-outs */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <UserMinus className="h-5 w-5 mr-2 text-green-600" />
              Today's Check-outs ({todayCheckOuts.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {todayCheckOuts.map((booking) => (
                <div key={booking.id} className="border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {booking.guest.firstName} {booking.guest.lastName}
                      </h4>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 mr-1" />
                          {booking.guest.email}
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 mr-1" />
                          {booking.guest.phone}
                        </div>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-800">
                      {booking.status.replace('_', ' ')}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                      Room {booking.room.number} ({booking.room.type})
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-gray-400" />
                      {new Date(booking.checkOut).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2 text-gray-400" />
                      {booking.adults + booking.children} guests
                    </div>
                    <div className="text-right font-semibold">
                      ${booking.totalAmount}
                    </div>
                  </div>
                  
                  <div className="mt-3 pt-3 border-t flex space-x-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      Check Out
                    </Button>
                    <Button size="sm" variant="outline">
                      Bill & Pay
                    </Button>
                  </div>
                </div>
              ))}
              
              {todayCheckOuts.length === 0 && (
                <p className="text-center text-gray-500 py-4">
                  No check-outs scheduled for today
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};