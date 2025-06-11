import React from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  Chip,
  LinearProgress,
  IconButton,
} from '@mui/material';
import {
  TrendingUp,
  TrendingDown,
  Hotel,
  People,
  AttachMoney,
  EventAvailable,
  MoreVert,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Line, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const statsCards = [
  {
    title: 'Total Revenue',
    value: '$45,280',
    change: '+12.5%',
    trend: 'up',
    icon: AttachMoney,
    color: '#34C759',
    gradient: 'linear-gradient(135deg, #34C759 0%, #30D158 100%)',
  },
  {
    title: 'Occupancy Rate',
    value: '87%',
    change: '+5.2%',
    trend: 'up',
    icon: Hotel,
    color: '#2B2F77',
    gradient: 'linear-gradient(135deg, #2B2F77 0%, #4A4F9A 100%)',
  },
  {
    title: 'Total Guests',
    value: '1,248',
    change: '+8.1%',
    trend: 'up',
    icon: People,
    color: '#FFB703',
    gradient: 'linear-gradient(135deg, #FFB703 0%, #FFC947 100%)',
  },
  {
    title: 'Available Rooms',
    value: '23',
    change: '-3.2%',
    trend: 'down',
    icon: EventAvailable,
    color: '#FF453A',
    gradient: 'linear-gradient(135deg, #FF453A 0%, #FF6B6B 100%)',
  },
];

const recentActivities = [
  {
    id: 1,
    guest: 'John Smith',
    action: 'Checked in',
    room: '205',
    time: '2 minutes ago',
    avatar: 'JS',
  },
  {
    id: 2,
    guest: 'Emma Wilson',
    action: 'New booking',
    room: '412',
    time: '15 minutes ago',
    avatar: 'EW',
  },
  {
    id: 3,
    guest: 'Michael Brown',
    action: 'Payment received',
    room: '301',
    time: '32 minutes ago',
    avatar: 'MB',
  },
  {
    id: 4,
    guest: 'Sarah Davis',
    action: 'Checked out',
    room: '108',
    time: '1 hour ago',
    avatar: 'SD',
  },
];

const lineChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Revenue',
      data: [30000, 35000, 32000, 40000, 38000, 45000],
      borderColor: '#2B2F77',
      backgroundColor: 'rgba(43, 47, 119, 0.1)',
      tension: 0.4,
      fill: true,
    },
    {
      label: 'Bookings',
      data: [120, 140, 130, 160, 150, 180],
      borderColor: '#FFB703',
      backgroundColor: 'rgba(255, 183, 3, 0.1)',
      tension: 0.4,
      fill: true,
    },
  ],
};

const doughnutData = {
  labels: ['Standard', 'Deluxe', 'Suite', 'Presidential'],
  datasets: [
    {
      data: [45, 30, 20, 5],
      backgroundColor: ['#2B2F77', '#FFB703', '#34C759', '#FF453A'],
      borderWidth: 0,
    },
  ],
};

const Dashboard: React.FC = () => {
  return (
    <Box sx={{ p: 3 }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              background: 'linear-gradient(135deg, #2B2F77 0%, #FFB703 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 1,
            }}
          >
            Welcome back, Sarah! 👋
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Here's what's happening at your hotel today.
          </Typography>
        </Box>
      </motion.div>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {statsCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <Grid item xs={12} sm={6} lg={3} key={card.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      boxShadow: '0 12px 40px rgba(43, 47, 119, 0.15)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                      <Avatar
                        sx={{
                          background: card.gradient,
                          width: 56,
                          height: 56,
                        }}
                      >
                        <Icon sx={{ fontSize: 28 }} />
                      </Avatar>
                      <IconButton size="small">
                        <MoreVert />
                      </IconButton>
                    </Box>
                    
                    <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                      {card.value}
                    </Typography>
                    
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {card.title}
                    </Typography>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      {card.trend === 'up' ? (
                        <TrendingUp sx={{ fontSize: 16, color: '#34C759' }} />
                      ) : (
                        <TrendingDown sx={{ fontSize: 16, color: '#FF453A' }} />
                      )}
                      <Typography
                        variant="caption"
                        sx={{
                          color: card.trend === 'up' ? '#34C759' : '#FF453A',
                          fontWeight: 600,
                        }}
                      >
                        {card.change}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        vs last month
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          );
        })}
      </Grid>

      {/* Charts and Activity */}
      <Grid container spacing={3}>
        {/* Revenue Chart */}
        <Grid item xs={12} lg={8}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card
              sx={{
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
                  Revenue & Bookings Trend
                </Typography>
                <Box sx={{ height: 300 }}>
                  <Line
                    data={lineChartData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          position: 'top' as const,
                        },
                      },
                      scales: {
                        y: {
                          beginAtZero: true,
                        },
                      },
                    }}
                  />
                </Box>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>

        {/* Room Distribution */}
        <Grid item xs={12} lg={4}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card
              sx={{
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                mb: 3,
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
                  Room Distribution
                </Typography>
                <Box sx={{ height: 200 }}>
                  <Doughnut
                    data={doughnutData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          position: 'bottom' as const,
                        },
                      },
                    }}
                  />
                </Box>
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card
              sx={{
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
                  Recent Activity
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {recentActivities.map((activity, index) => (
                    <motion.div
                      key={activity.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2,
                          p: 2,
                          borderRadius: 2,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            background: 'rgba(43, 47, 119, 0.05)',
                          },
                        }}
                      >
                        <Avatar
                          sx={{
                            width: 40,
                            height: 40,
                            background: 'linear-gradient(135deg, #2B2F77 0%, #FFB703 100%)',
                            fontSize: '0.875rem',
                            fontWeight: 600,
                          }}
                        >
                          {activity.avatar}
                        </Avatar>
                        <Box sx={{ flex: 1, minWidth: 0 }}>
                          <Typography variant="body2" sx={{ fontWeight: 600 }}>
                            {activity.guest}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {activity.action} • Room {activity.room}
                          </Typography>
                        </Box>
                        <Typography variant="caption" color="text.secondary">
                          {activity.time}
                        </Typography>
                      </Box>
                    </motion.div>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;