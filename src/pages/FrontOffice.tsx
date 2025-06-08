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
  Mail,
  Sparkles
} from 'lucide-react';

export const FrontOffice: React.FC = () => {
  const todayCheckIns = mockBookings.filter(b => 
    new Date(b.checkIn).toDateString() === new Date().toDateString()
  );
  
  const todayCheckOuts = mockBookings.filter(b => 
    new Date(b.checkOut).toDateString() === new Date().toDateString()
  );

  const quickActions = [
    {
      title: 'Quick Check-in',
      description: 'Process guest arrival',
      icon: UserPlus,
      gradient: 'from-violet-500 to-purple-600',
      bgGradient: 'from-violet-50 to-purple-50',
      borderColor: 'border-violet-200'
    },
    {
      title: 'Quick Check-out',
      description: 'Process guest departure',
      icon: UserMinus,
      gradient: 'from-emerald-500 to-teal-600',
      bgGradient: 'from-emerald-50 to-teal-50',
      borderColor: 'border-emerald-200'
    },
    {
      title: 'New Booking',
      description: 'Create reservation',
      icon: Calendar,
      gradient: 'from-cyan-500 to-blue-600',
      bgGradient: 'from-cyan-50 to-blue-50',
      borderColor: 'border-cyan-200'
    },
    {
      title: 'Walk-in Guest',
      description: 'Register new guest',
      icon: Users,
      gradient: 'from-amber-500 to-orange-600',
      bgGradient: 'from-amber-50 to-orange-50',
      borderColor: 'border-amber-200'
    }
  ];

  return (
    <div className="space-y-8 p-8 min-h-screen bg-gradient-to-br from-violet-50 via-white to-cyan-50">
      {/* Quick Actions */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {quickActions.map((action, index) => {
          const Icon = action.icon;
          return (
            <Card 
              key={action.title}
              className={`group relative overflow-hidden border-0 bg-gradient-to-br ${action.bgGradient} shadow-xl hover:shadow-2xl transition-all duration-500 hover-lift animate-fade-in cursor-pointer`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${action.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              <CardContent className="p-8">
                <div className="flex items-center space-x-4">
                  <div className={`rounded-2xl bg-gradient-to-r ${action.gradient} p-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg group-hover:text-violet-700 transition-colors">
                      {action.title}
                    </h3>
                    <p className="text-sm text-gray-600 font-medium mt-1">{action.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Today's Check-ins */}
        <Card className="border-0 bg-white/80 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center text-xl font-bold">
              <div className="rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 p-3 mr-4">
                <UserPlus className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="gradient-text">Today's Check-ins</span>
                <Badge className="ml-3 bg-gradient-to-r from-violet-400 to-purple-500 text-white border-0 font-bold">
                  {todayCheckIns.length}
                </Badge>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {todayCheckIns.map((booking, index) => (
                <div 
                  key={booking.id} 
                  className="group border border-violet-100 rounded-2xl p-6 hover:bg-gradient-to-r hover:from-violet-50 hover:to-purple-50 transition-all duration-300 hover-lift"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="rounded-full bg-gradient-to-r from-violet-500 to-purple-600 p-2">
                        <Users className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg group-hover:text-violet-700 transition-colors">
                          {booking.guest.firstName} {booking.guest.lastName}
                        </h4>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                          <div className="flex items-center">
                            <Mail className="h-4 w-4 mr-1 text-violet-400" />
                            {booking.guest.email}
                          </div>
                          <div className="flex items-center">
                            <Phone className="h-4 w-4 mr-1 text-cyan-400" />
                            {booking.guest.phone}
                          </div>
                        </div>
                      </div>
                    </div>
                    <Badge className="bg-gradient-to-r from-violet-400 to-purple-500 text-white border-0 font-semibold px-3 py-1">
                      {booking.status.replace('_', ' ')}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                    <div className="flex items-center p-3 rounded-xl bg-white/50">
                      <MapPin className="h-4 w-4 mr-2 text-amber-500" />
                      <span className="font-medium">Room {booking.room.number} ({booking.room.type})</span>
                    </div>
                    <div className="flex items-center p-3 rounded-xl bg-white/50">
                      <Clock className="h-4 w-4 mr-2 text-emerald-500" />
                      <span className="font-medium">{new Date(booking.checkIn).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center p-3 rounded-xl bg-white/50">
                      <Users className="h-4 w-4 mr-2 text-cyan-500" />
                      <span className="font-medium">{booking.adults + booking.children} guests</span>
                    </div>
                    <div className="flex items-center justify-center p-3 rounded-xl bg-gradient-to-r from-violet-100 to-purple-100">
                      <Sparkles className="h-4 w-4 mr-2 text-violet-600" />
                      <span className="font-bold text-violet-700">${booking.totalAmount}</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button className="flex-1 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white border-0 rounded-xl font-semibold shadow-lg hover:shadow-glow transition-all duration-300 hover:scale-105">
                      Check In
                    </Button>
                    <Button 
                      variant="outline" 
                      className="rounded-xl border-violet-200 hover:bg-violet-50 hover:border-violet-400 transition-all duration-300"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
              
              {todayCheckIns.length === 0 && (
                <div className="text-center py-8">
                  <div className="rounded-2xl bg-gradient-to-r from-violet-50 to-purple-50 p-8">
                    <UserPlus className="h-12 w-12 text-violet-400 mx-auto mb-3" />
                    <p className="text-gray-500 font-medium">No check-ins scheduled for today</p>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Today's Check-outs */}
        <Card className="border-0 bg-white/80 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center text-xl font-bold">
              <div className="rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 p-3 mr-4">
                <UserMinus className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="gradient-text">Today's Check-outs</span>
                <Badge className="ml-3 bg-gradient-to-r from-emerald-400 to-teal-500 text-white border-0 font-bold">
                  {todayCheckOuts.length}
                </Badge>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {todayCheckOuts.map((booking, index) => (
                <div 
                  key={booking.id} 
                  className="group border border-emerald-100 rounded-2xl p-6 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 transition-all duration-300 hover-lift"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 p-2">
                        <Users className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg group-hover:text-emerald-700 transition-colors">
                          {booking.guest.firstName} {booking.guest.lastName}
                        </h4>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                          <div className="flex items-center">
                            <Mail className="h-4 w-4 mr-1 text-emerald-400" />
                            {booking.guest.email}
                          </div>
                          <div className="flex items-center">
                            <Phone className="h-4 w-4 mr-1 text-teal-400" />
                            {booking.guest.phone}
                          </div>
                        </div>
                      </div>
                    </div>
                    <Badge className="bg-gradient-to-r from-emerald-400 to-teal-500 text-white border-0 font-semibold px-3 py-1">
                      {booking.status.replace('_', ' ')}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                    <div className="flex items-center p-3 rounded-xl bg-white/50">
                      <MapPin className="h-4 w-4 mr-2 text-amber-500" />
                      <span className="font-medium">Room {booking.room.number} ({booking.room.type})</span>
                    </div>
                    <div className="flex items-center p-3 rounded-xl bg-white/50">
                      <Clock className="h-4 w-4 mr-2 text-rose-500" />
                      <span className="font-medium">{new Date(booking.checkOut).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center p-3 rounded-xl bg-white/50">
                      <Users className="h-4 w-4 mr-2 text-cyan-500" />
                      <span className="font-medium">{booking.adults + booking.children} guests</span>
                    </div>
                    <div className="flex items-center justify-center p-3 rounded-xl bg-gradient-to-r from-emerald-100 to-teal-100">
                      <Sparkles className="h-4 w-4 mr-2 text-emerald-600" />
                      <span className="font-bold text-emerald-700">${booking.totalAmount}</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white border-0 rounded-xl font-semibold shadow-lg hover:shadow-glow transition-all duration-300 hover:scale-105">
                      Check Out
                    </Button>
                    <Button 
                      variant="outline" 
                      className="rounded-xl border-emerald-200 hover:bg-emerald-50 hover:border-emerald-400 transition-all duration-300"
                    >
                      Bill & Pay
                    </Button>
                  </div>
                </div>
              ))}
              
              {todayCheckOuts.length === 0 && (
                <div className="text-center py-8">
                  <div className="rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 p-8">
                    <UserMinus className="h-12 w-12 text-emerald-400 mx-auto mb-3" />
                    <p className="text-gray-500 font-medium">No check-outs scheduled for today</p>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};