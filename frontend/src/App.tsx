import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

// Layouts
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';

// Pages
import Dashboard from './pages/Dashboard';
import Login from './pages/auth/Login';
import Bookings from './pages/bookings/Bookings';
import Rooms from './pages/rooms/Rooms';
import Guests from './pages/guests/Guests';
import Staff from './pages/staff/Staff';
import Housekeeping from './pages/housekeeping/Housekeeping';
import Maintenance from './pages/maintenance/Maintenance';
import Inventory from './pages/inventory/Inventory';
import Tickets from './pages/tickets/Tickets';
import Orders from './pages/orders/Orders';
import Payments from './pages/payments/Payments';
import Reports from './pages/reports/Reports';

// Components
import RequireAuth from './components/common/RequireAuth';
import { ToastProvider } from './contexts/ToastContext';

const pageVariants = {
  initial: {
    opacity: 0,
    x: -20,
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: 20,
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.4,
};

function App() {
  const location = useLocation();

  return (
    <ToastProvider>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Auth Routes */}
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route index element={<Navigate to="/auth/login\" replace />} />
          </Route>

          {/* Protected Routes */}
          <Route
            path="/"
            element={
              <RequireAuth>
                <MainLayout />
              </RequireAuth>
            }
          >
            <Route
              index
              element={
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <Dashboard />
                </motion.div>
              }
            />
            <Route
              path="bookings"
              element={
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <Bookings />
                </motion.div>
              }
            />
            <Route
              path="rooms"
              element={
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <Rooms />
                </motion.div>
              }
            />
            <Route
              path="guests"
              element={
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <Guests />
                </motion.div>
              }
            />
            <Route
              path="staff"
              element={
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <Staff />
                </motion.div>
              }
            />
            <Route
              path="housekeeping"
              element={
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <Housekeeping />
                </motion.div>
              }
            />
            <Route
              path="maintenance"
              element={
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <Maintenance />
                </motion.div>
              }
            />
            <Route
              path="inventory"
              element={
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <Inventory />
                </motion.div>
              }
            />
            <Route
              path="tickets"
              element={
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <Tickets />
                </motion.div>
              }
            />
            <Route
              path="orders"
              element={
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <Orders />
                </motion.div>
              }
            />
            <Route
              path="payments"
              element={
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <Payments />
                </motion.div>
              }
            />
            <Route
              path="reports"
              element={
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <Reports />
                </motion.div>
              }
            />
          </Route>

          {/* Redirect to dashboard */}
          <Route path="*" element={<Navigate to="/\" replace />} />
        </Routes>
      </AnimatePresence>
    </ToastProvider>
  );
}

export default App;