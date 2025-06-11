import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { store } from './app/store';
import App from './App';
import './index.css';

// Premium Midnight Theme
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2B2F77',
      light: '#4A4F9A',
      dark: '#1E2154',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FFB703',
      light: '#FFC947',
      dark: '#E6A400',
      contrastText: '#000000',
    },
    background: {
      default: '#F5F6FA',
      paper: '#FFFFFF',
    },
    success: {
      main: '#34C759',
    },
    error: {
      main: '#FF453A',
    },
    text: {
      primary: '#1A1A1A',
      secondary: '#6B7280',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.75rem',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.25rem',
    },
    h6: {
      fontWeight: 600,
      fontSize: '1rem',
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    'none',
    '0px 2px 4px rgba(43, 47, 119, 0.1)',
    '0px 4px 8px rgba(43, 47, 119, 0.12)',
    '0px 8px 16px rgba(43, 47, 119, 0.14)',
    '0px 12px 24px rgba(43, 47, 119, 0.16)',
    '0px 16px 32px rgba(43, 47, 119, 0.18)',
    '0px 20px 40px rgba(43, 47, 119, 0.20)',
    '0px 24px 48px rgba(43, 47, 119, 0.22)',
    '0px 28px 56px rgba(43, 47, 119, 0.24)',
    '0px 32px 64px rgba(43, 47, 119, 0.26)',
    '0px 36px 72px rgba(43, 47, 119, 0.28)',
    '0px 40px 80px rgba(43, 47, 119, 0.30)',
    '0px 44px 88px rgba(43, 47, 119, 0.32)',
    '0px 48px 96px rgba(43, 47, 119, 0.34)',
    '0px 52px 104px rgba(43, 47, 119, 0.36)',
    '0px 56px 112px rgba(43, 47, 119, 0.38)',
    '0px 60px 120px rgba(43, 47, 119, 0.40)',
    '0px 64px 128px rgba(43, 47, 119, 0.42)',
    '0px 68px 136px rgba(43, 47, 119, 0.44)',
    '0px 72px 144px rgba(43, 47, 119, 0.46)',
    '0px 76px 152px rgba(43, 47, 119, 0.48)',
    '0px 80px 160px rgba(43, 47, 119, 0.50)',
    '0px 84px 168px rgba(43, 47, 119, 0.52)',
    '0px 88px 176px rgba(43, 47, 119, 0.54)',
    '0px 92px 184px rgba(43, 47, 119, 0.56)',
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 12,
          padding: '12px 24px',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0px 8px 16px rgba(43, 47, 119, 0.2)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0px 4px 8px rgba(43, 47, 119, 0.1)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0px 12px 24px rgba(43, 47, 119, 0.15)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              boxShadow: '0px 4px 8px rgba(43, 47, 119, 0.1)',
            },
            '&.Mui-focused': {
              boxShadow: '0px 4px 12px rgba(43, 47, 119, 0.15)',
            },
          },
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);