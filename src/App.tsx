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
  billing: { title: 'Billing & Payments', subtitle: 'Invoice and payment processing', component: () => (
    <div className="p-8 min-h-screen bg-gradient-to-br from-violet-50 via-white to-cyan-50">
      <div className="text-center py-16">
        <div className="rounded-3xl bg-white/80 backdrop-blur-xl p-12 shadow-xl max-w-md mx-auto">
          <div className="rounded-full bg-gradient-to-r from-violet-100 to-cyan-100 p-4 w-16 h-16 mx-auto mb-4">
            <span className="text-2xl">💳</span>
          </div>
          <p className="text-gray-500 font-medium">Billing module coming soon...</p>
        </div>
      </div>
    </div>
  ) },
  'room-service': { title: 'Room Service', subtitle: 'Food and beverage orders management', component: () => (
    <div className="p-8 min-h-screen bg-gradient-to-br from-violet-50 via-white to-cyan-50">
      <div className="text-center py-16">
        <div className="rounded-3xl bg-white/80 backdrop-blur-xl p-12 shadow-xl max-w-md mx-auto">
          <div className="rounded-full bg-gradient-to-r from-violet-100 to-cyan-100 p-4 w-16 h-16 mx-auto mb-4">
            <span className="text-2xl">🍽️</span>
          </div>
          <p className="text-gray-500 font-medium">Room service module coming soon...</p>
        </div>
      </div>
    </div>
  ) },
  tickets: { title: 'Tickets & Support', subtitle: 'Guest complaints and maintenance requests', component: () => (
    <div className="p-8 min-h-screen bg-gradient-to-br from-violet-50 via-white to-cyan-50">
      <div className="text-center py-16">
        <div className="rounded-3xl bg-white/80 backdrop-blur-xl p-12 shadow-xl max-w-md mx-auto">
          <div className="rounded-full bg-gradient-to-r from-violet-100 to-cyan-100 p-4 w-16 h-16 mx-auto mb-4">
            <span className="text-2xl">🎫</span>
          </div>
          <p className="text-gray-500 font-medium">Tickets module coming soon...</p>
        </div>
      </div>
    </div>
  ) },
  reports: { title: 'Reports & Analytics', subtitle: 'Business intelligence and insights', component: () => (
    <div className="p-8 min-h-screen bg-gradient-to-br from-violet-50 via-white to-cyan-50">
      <div className="text-center py-16">
        <div className="rounded-3xl bg-white/80 backdrop-blur-xl p-12 shadow-xl max-w-md mx-auto">
          <div className="rounded-full bg-gradient-to-r from-violet-100 to-cyan-100 p-4 w-16 h-16 mx-auto mb-4">
            <span className="text-2xl">📊</span>
          </div>
          <p className="text-gray-500 font-medium">Reports module coming soon...</p>
        </div>
      </div>
    </div>
  ) },
  staff: { title: 'Staff Management', subtitle: 'Employee schedules and roles', component: () => (
    <div className="p-8 min-h-screen bg-gradient-to-br from-violet-50 via-white to-cyan-50">
      <div className="text-center py-16">
        <div className="rounded-3xl bg-white/80 backdrop-blur-xl p-12 shadow-xl max-w-md mx-auto">
          <div className="rounded-full bg-gradient-to-r from-violet-100 to-cyan-100 p-4 w-16 h-16 mx-auto mb-4">
            <span className="text-2xl">👥</span>
          </div>
          <p className="text-gray-500 font-medium">Staff management module coming soon...</p>
        </div>
      </div>
    </div>
  ) },
  settings: { title: 'Settings', subtitle: 'System configuration and preferences', component: () => (
    <div className="p-8 min-h-screen bg-gradient-to-br from-violet-50 via-white to-cyan-50">
      <div className="text-center py-16">
        <div className="rounded-3xl bg-white/80 backdrop-blur-xl p-12 shadow-xl max-w-md mx-auto">
          <div className="rounded-full bg-gradient-to-r from-violet-100 to-cyan-100 p-4 w-16 h-16 mx-auto mb-4">
            <span className="text-2xl">⚙️</span>
          </div>
          <p className="text-gray-500 font-medium">Settings module coming soon...</p>
        </div>
      </div>
    </div>
  ) }
};

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const currentPage = pageConfig[activeTab as keyof typeof pageConfig];
  const PageComponent = currentPage.component;

  return (
    <AuthProvider>
      <div className="flex h-screen bg-gradient-to-br from-violet-100 via-white to-cyan-100">
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header title={currentPage.title} subtitle={currentPage.subtitle} />
          <main className="flex-1 overflow-y-auto">
            <PageComponent />
          </main>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;