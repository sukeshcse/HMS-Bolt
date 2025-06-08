export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'manager' | 'front_desk' | 'housekeeping' | 'maintenance';
  avatar?: string;
  department: string;
  shift: 'morning' | 'evening' | 'night';
  status: 'active' | 'offline' | 'break';
}

export interface Room {
  id: string;
  number: string;
  type: 'standard' | 'deluxe' | 'suite' | 'presidential';
  status: 'available' | 'occupied' | 'maintenance' | 'cleaning' | 'out_of_order';
  floor: number;
  capacity: number;
  price: number;
  amenities: string[];
  lastCleaned?: Date;
  nextMaintenance?: Date;
}

export interface Guest {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  nationality: string;
  idType: 'passport' | 'driving_license' | 'national_id';
  idNumber: string;
  loyaltyTier: 'bronze' | 'silver' | 'gold' | 'platinum';
  totalStays: number;
  preferences: string[];
}

export interface Booking {
  id: string;
  guestId: string;
  guest: Guest;
  roomId: string;
  room: Room;
  checkIn: Date;
  checkOut: Date;
  adults: number;
  children: number;
  status: 'confirmed' | 'checked_in' | 'checked_out' | 'cancelled' | 'no_show';
  source: 'direct' | 'booking.com' | 'expedia' | 'airbnb' | 'walk_in';
  totalAmount: number;
  specialRequests?: string;
  createdAt: Date;
}

export interface Invoice {
  id: string;
  bookingId: string;
  amount: number;
  tax: number;
  total: number;
  status: 'pending' | 'paid' | 'refunded' | 'cancelled';
  paymentMethod: 'cash' | 'card' | 'online' | 'bank_transfer';
  items: InvoiceItem[];
  issuedAt: Date;
  paidAt?: Date;
}

export interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
  category: 'room' | 'food' | 'beverage' | 'service' | 'tax';
}

export interface Order {
  id: string;
  guestId: string;
  guest: Guest;
  roomNumber: string;
  items: OrderItem[];
  status: 'pending' | 'preparing' | 'ready' | 'delivered' | 'cancelled';
  total: number;
  orderTime: Date;
  estimatedDelivery?: Date;
  deliveredAt?: Date;
  specialInstructions?: string;
}

export interface OrderItem {
  id: string;
  name: string;
  category: 'appetizer' | 'main' | 'dessert' | 'beverage' | 'snack';
  quantity: number;
  unitPrice: number;
  total: number;
  customizations?: string[];
}

export interface Ticket {
  id: string;
  title: string;
  description: string;
  category: 'maintenance' | 'housekeeping' | 'guest_complaint' | 'technical' | 'general';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'open' | 'in_progress' | 'resolved' | 'closed';
  assignedTo?: string;
  reportedBy: string;
  roomNumber?: string;
  createdAt: Date;
  resolvedAt?: Date;
  slaDeadline: Date;
}

export interface DashboardStats {
  occupancyRate: number;
  totalRevenue: number;
  averageRate: number;
  totalGuests: number;
  availableRooms: number;
  maintenanceIssues: number;
  pendingCheckIns: number;
  pendingCheckOuts: number;
}