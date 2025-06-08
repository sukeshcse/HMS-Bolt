import { Room, Booking, Guest, User, Invoice, Order, Ticket, DashboardStats } from '@/types';

export const mockRooms: Room[] = [
  {
    id: '1',
    number: '101',
    type: 'standard',
    status: 'available',
    floor: 1,
    capacity: 2,
    price: 150,
    amenities: ['WiFi', 'TV', 'Air Conditioning'],
    lastCleaned: new Date('2024-01-15T10:00:00Z')
  },
  {
    id: '2',
    number: '102',
    type: 'deluxe',
    status: 'occupied',
    floor: 1,
    capacity: 3,
    price: 220,
    amenities: ['WiFi', 'TV', 'Air Conditioning', 'Minibar', 'Balcony'],
    lastCleaned: new Date('2024-01-14T09:30:00Z')
  },
  {
    id: '3',
    number: '201',
    type: 'suite',
    status: 'maintenance',
    floor: 2,
    capacity: 4,
    price: 350,
    amenities: ['WiFi', 'TV', 'Air Conditioning', 'Minibar', 'Balcony', 'Kitchen'],
    nextMaintenance: new Date('2024-01-20T14:00:00Z')
  },
  {
    id: '4',
    number: '301',
    type: 'presidential',
    status: 'available',
    floor: 3,
    capacity: 6,
    price: 550,
    amenities: ['WiFi', 'TV', 'Air Conditioning', 'Minibar', 'Balcony', 'Kitchen', 'Jacuzzi'],
    lastCleaned: new Date('2024-01-15T11:00:00Z')
  }
];

export const mockGuests: Guest[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Smith',
    email: 'john.smith@email.com',
    phone: '+1-555-0123',
    nationality: 'USA',
    idType: 'passport',
    idNumber: 'P123456789',
    loyaltyTier: 'gold',
    totalStays: 12,
    preferences: ['Non-smoking', 'High floor', 'Ocean view']
  },
  {
    id: '2',
    firstName: 'Emma',
    lastName: 'Wilson',
    email: 'emma.wilson@email.com',
    phone: '+1-555-0456',
    nationality: 'Canada',
    idType: 'driving_license',
    idNumber: 'DL987654321',
    loyaltyTier: 'silver',
    totalStays: 5,
    preferences: ['Pet-friendly', 'Late checkout']
  }
];

export const mockBookings: Booking[] = [
  {
    id: 'BK-001',
    guestId: '1',
    guest: mockGuests[0],
    roomId: '2',
    room: mockRooms[1],
    checkIn: new Date('2024-01-16'),
    checkOut: new Date('2024-01-20'),
    adults: 2,
    children: 0,
    status: 'checked_in',
    source: 'direct',
    totalAmount: 880,
    specialRequests: 'Late checkout requested',
    createdAt: new Date('2024-01-10')
  },
  {
    id: 'BK-002',
    guestId: '2',
    guest: mockGuests[1],
    roomId: '1',
    room: mockRooms[0],
    checkIn: new Date('2024-01-18'),
    checkOut: new Date('2024-01-22'),
    adults: 1,
    children: 1,
    status: 'confirmed',
    source: 'booking.com',
    totalAmount: 600,
    createdAt: new Date('2024-01-12')
  }
];

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@grandhotel.com',
    role: 'manager',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=150',
    department: 'Front Office',
    shift: 'morning',
    status: 'active'
  },
  {
    id: '2',
    name: 'Mike Chen',
    email: 'mike.chen@grandhotel.com',
    role: 'front_desk',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?w=150',
    department: 'Reception',
    shift: 'evening',
    status: 'active'
  }
];

export const mockInvoices: Invoice[] = [
  {
    id: 'INV-001',
    bookingId: 'BK-001',
    amount: 800,
    tax: 80,
    total: 880,
    status: 'paid',
    paymentMethod: 'card',
    items: [
      {
        id: '1',
        description: 'Deluxe Room - 4 nights',
        quantity: 4,
        unitPrice: 220,
        total: 880,
        category: 'room'
      }
    ],
    issuedAt: new Date('2024-01-16'),
    paidAt: new Date('2024-01-16')
  }
];

export const mockOrders: Order[] = [
  {
    id: 'ORD-001',
    guestId: '1',
    guest: mockGuests[0],
    roomNumber: '102',
    items: [
      {
        id: '1',
        name: 'Caesar Salad',
        category: 'appetizer',
        quantity: 1,
        unitPrice: 18,
        total: 18
      },
      {
        id: '2',
        name: 'Grilled Salmon',
        category: 'main',
        quantity: 2,
        unitPrice: 35,
        total: 70
      }
    ],
    status: 'preparing',
    total: 88,
    orderTime: new Date('2024-01-16T19:30:00Z'),
    estimatedDelivery: new Date('2024-01-16T20:15:00Z'),
    specialInstructions: 'No onions in the salad'
  }
];

export const mockTickets: Ticket[] = [
  {
    id: 'TKT-001',
    title: 'Air conditioning not working',
    description: 'Guest reports AC unit in room 205 is not cooling properly',
    category: 'maintenance',
    priority: 'high',
    status: 'in_progress',
    assignedTo: 'maintenance-001',
    reportedBy: 'front-desk-001',
    roomNumber: '205',
    createdAt: new Date('2024-01-16T10:30:00Z'),
    slaDeadline: new Date('2024-01-16T14:30:00Z')
  },
  {
    id: 'TKT-002',
    title: 'Towels need replacement',
    description: 'Housekeeping request for fresh towels in room 301',
    category: 'housekeeping',
    priority: 'medium',
    status: 'open',
    reportedBy: 'housekeeping-001',
    roomNumber: '301',
    createdAt: new Date('2024-01-16T11:00:00Z'),
    slaDeadline: new Date('2024-01-16T15:00:00Z')
  }
];

export const mockDashboardStats: DashboardStats = {
  occupancyRate: 85,
  totalRevenue: 25400,
  averageRate: 235,
  totalGuests: 108,
  availableRooms: 18,
  maintenanceIssues: 3,
  pendingCheckIns: 12,
  pendingCheckOuts: 8
};