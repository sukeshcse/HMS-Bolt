import React, { useState } from 'react';
import { AuthProvider } from '@/contexts/AuthContext';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { Dashboard } from '@/pages/Dashboard';
import { FrontOffice } from '@/pages/FrontOffice';
import { Bookings } from '@/pages/Bookings';
import { Rooms } from '@/pages/Rooms';

const pageConfig = {
  dashboard: { title: 'Dashboard', subtitle: 'Hotel overview and key metrics', component: Dashboard },
  'front-office': { title: 'Front Office', subtitle: 'Guest check-in and check-out management', component: FrontOffice },
  bookings: { title: 'Bookings', subtitle: 'Reservation management and tracking', component: Bookings },
  rooms: { title: 'Rooms & Facilities', subtitle: 'Room status and facility management', component: Rooms },
  billing: { title: 'Billing & Payments', subtitle: 'Invoice and payment processing', component: () => <div className="p-8 text-center text-gray-500">Billing module coming soon...</div> },
  'room-service': { title: 'Room Service', subtitle: 'Food and beverage orders management', component: () => <div className="p-8 text-center text-gray-500">Room service module coming soon...</div> },
  tickets: { title: 'Tickets & Support', subtitle: 'Guest complaints and maintenance requests', component: () => <div className="p-8 text-center text-gray-500">Tickets module coming soon...</div> },
  reports: { title: 'Reports & Analytics', subtitle: 'Business intelligence and insights', component: () => <div className="p-8 text-center text-gray-500">Reports module coming soon...</div> },
  staff: { title: 'Staff Management', subtitle: 'Employee schedules and roles', component: () => <div className="p-8 text-center text-gray-500">Staff management module coming soon...</div> },
  settings: { title: 'Settings', subtitle: 'System configuration and preferences', component: () => <div className="p-8 text-center text-gray-500">Settings module coming soon...</div> }
};

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const currentPage = pageConfig[activeTab as keyof typeof pageConfig];
  const PageComponent = currentPage.component;

  return (
    <AuthProvider>
      <div className="flex h-screen bg-gray-50">
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header title={currentPage.title} subtitle={currentPage.subtitle} />
          <main className="flex-1 overflow-y-auto p-6">
            <PageComponent />
          </main>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;