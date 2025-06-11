import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Chip,
  Badge,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Notifications,
  Settings,
  Logout,
  DarkMode,
  LightMode,
  Dashboard,
  Hotel,
  People,
  CalendarMonth,
  CleaningServices,
  Build,
  Inventory,
  SupportAgent,
  Restaurant,
  Payment,
  Analytics,
  Person,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLogoutMutation } from '../app/services/authApi';
import { useAppDispatch } from '../hooks/redux';
import { logout as logoutAction } from '../app/slices/authSlice';

const drawerWidth = 280;

const menuItems = [
  { text: 'Dashboard', icon: Dashboard, path: '/', color: '#2B2F77' },
  { text: 'Bookings', icon: CalendarMonth, path: '/bookings', color: '#FFB703' },
  { text: 'Rooms', icon: Hotel, path: '/rooms', color: '#34C759' },
  { text: 'Guests', icon: People, path: '/guests', color: '#FF453A' },
  { text: 'Staff', icon: Person, path: '/staff', color: '#007AFF' },
  { text: 'Housekeeping', icon: CleaningServices, path: '/housekeeping', color: '#AF52DE' },
  { text: 'Maintenance', icon: Build, path: '/maintenance', color: '#FF9500' },
  { text: 'Inventory', icon: Inventory, path: '/inventory', color: '#5AC8FA' },
  { text: 'Tickets', icon: SupportAgent, path: '/tickets', color: '#FFCC02' },
  { text: 'Orders', icon: Restaurant, path: '/orders', color: '#FF2D92' },
  { text: 'Payments', icon: Payment, path: '/payments', color: '#30D158' },
  { text: 'Reports', icon: Analytics, path: '/reports', color: '#64D2FF' },
];

const MainLayout: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [darkMode, setDarkMode] = useState(false);
  
  const [logout] = useLogoutMutation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      await logout().unwrap();
      dispatch(logoutAction());
      navigate('/auth/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
    handleProfileMenuClose();
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  const drawer = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Logo */}
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              background: 'linear-gradient(135deg, #2B2F77 0%, #FFB703 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 1,
            }}
          >
            LuxeStay
          </Typography>
          <Chip
            label="Premium HMS"
            size="small"
            sx={{
              background: 'linear-gradient(135deg, #2B2F77 0%, #FFB703 100%)',
              color: 'white',
              fontWeight: 600,
              fontSize: '0.75rem',
            }}
          />
        </motion.div>
      </Box>

      <Divider />

      {/* Navigation */}
      <List sx={{ flex: 1, px: 2, py: 1 }}>
        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <motion.div
              key={item.text}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <ListItem disablePadding sx={{ mb: 1 }}>
                <ListItemButton
                  onClick={() => handleNavigation(item.path)}
                  sx={{
                    borderRadius: 3,
                    py: 1.5,
                    px: 2,
                    background: isActive
                      ? `linear-gradient(135deg, ${item.color}20 0%, ${item.color}10 100%)`
                      : 'transparent',
                    border: isActive ? `2px solid ${item.color}30` : '2px solid transparent',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      background: `linear-gradient(135deg, ${item.color}15 0%, ${item.color}05 100%)`,
                      transform: 'translateX(8px)',
                      boxShadow: `0 4px 12px ${item.color}20`,
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 40,
                      color: isActive ? item.color : theme.palette.text.secondary,
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <Icon />
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    sx={{
                      '& .MuiListItemText-primary': {
                        fontWeight: isActive ? 700 : 500,
                        color: isActive ? item.color : theme.palette.text.primary,
                        fontSize: '0.95rem',
                      },
                    }}
                  />
                  {isActive && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    >
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          background: item.color,
                          boxShadow: `0 0 8px ${item.color}60`,
                        }}
                      />
                    </motion.div>
                  )}
                </ListItemButton>
              </ListItem>
            </motion.div>
          );
        })}
      </List>

      {/* User Profile */}
      <Box sx={{ p: 2 }}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Box
            sx={{
              p: 2,
              borderRadius: 3,
              background: 'linear-gradient(135deg, #2B2F7710 0%, #FFB70310 100%)',
              border: '1px solid #2B2F7720',
              cursor: 'pointer',
            }}
            onClick={handleProfileMenuOpen}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Avatar
                sx={{
                  width: 40,
                  height: 40,
                  background: 'linear-gradient(135deg, #2B2F77 0%, #FFB703 100%)',
                }}
              >
                SJ
              </Avatar>
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                  Sarah Johnson
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Manager
                </Typography>
              </Box>
            </Box>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      {/* App Bar */}
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 1px 3px rgba(43, 47, 119, 0.1)',
          borderBottom: '1px solid rgba(43, 47, 119, 0.1)',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' }, color: theme.palette.primary.main }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              color: theme.palette.primary.main,
              fontWeight: 600,
            }}
          >
            {menuItems.find(item => item.path === location.pathname)?.text || 'Dashboard'}
          </Typography>

          {/* Header Actions */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton
              onClick={() => setDarkMode(!darkMode)}
              sx={{
                color: theme.palette.primary.main,
                '&:hover': {
                  background: 'rgba(43, 47, 119, 0.1)',
                  transform: 'scale(1.1)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              {darkMode ? <LightMode /> : <DarkMode />}
            </IconButton>

            <IconButton
              sx={{
                color: theme.palette.primary.main,
                '&:hover': {
                  background: 'rgba(43, 47, 119, 0.1)',
                  transform: 'scale(1.1)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <Badge badgeContent={3} color="error">
                <Notifications />
              </Badge>
            </IconButton>

            <IconButton
              onClick={handleProfileMenuOpen}
              sx={{
                color: theme.palette.primary.main,
                '&:hover': {
                  background: 'rgba(43, 47, 119, 0.1)',
                  transform: 'scale(1.1)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <Avatar
                sx={{
                  width: 32,
                  height: 32,
                  background: 'linear-gradient(135deg, #2B2F77 0%, #FFB703 100%)',
                }}
              >
                SJ
              </Avatar>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Profile Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleProfileMenuClose}
        PaperProps={{
          sx: {
            borderRadius: 3,
            mt: 1,
            minWidth: 200,
            boxShadow: '0 8px 32px rgba(43, 47, 119, 0.15)',
          },
        }}
      >
        <MenuItem onClick={handleProfileMenuClose}>
          <Settings sx={{ mr: 2 }} />
          Settings
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout} sx={{ color: 'error.main' }}>
          <Logout sx={{ mr: 2 }} />
          Logout
        </MenuItem>
      </Menu>

      {/* Drawer */}
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              background: 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(20px)',
              borderRight: '1px solid rgba(43, 47, 119, 0.1)',
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              background: 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(20px)',
              borderRight: '1px solid rgba(43, 47, 119, 0.1)',
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { md: `calc(100% - ${drawerWidth}px)` },
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #F5F6FA 0%, #FFFFFF 100%)',
        }}
      >
        <Toolbar />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Outlet />
        </motion.div>
      </Box>
    </Box>
  );
};

export default MainLayout;