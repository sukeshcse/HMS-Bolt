# LuxeStay Premium Hotel Management System

A modern, production-ready Hotel Management System built with React 18, TypeScript, and Vite. Features a beautiful, responsive UI with advanced animations and a comprehensive set of hotel management tools.

## 🌟 Features

### Core Modules
- **Dashboard** - Real-time hotel metrics and analytics
- **Front Office** - Guest check-in/check-out management
- **Bookings** - Reservation management and tracking
- **Rooms & Facilities** - Room status and facility management
- **Billing & Payments** - Invoice and payment processing
- **Room Service** - Food and beverage order management
- **Tickets & Support** - Guest complaints and maintenance requests
- **Reports & Analytics** - Business intelligence and insights
- **Staff Management** - Employee schedules and roles
- **Settings** - System configuration and preferences

### Design Features
- **Modern UI** - Glass morphism effects with backdrop blur
- **Gradient Design** - Beautiful violet-to-cyan color scheme
- **Smooth Animations** - Hover effects, transitions, and micro-interactions
- **Responsive Layout** - Mobile-first design approach
- **Dark/Light Mode** - Theme switching capability
- **Premium Typography** - Inter font family with proper hierarchy

### Technical Features
- **React 18** with TypeScript for type safety
- **Vite** for fast development and building
- **Tailwind CSS** for utility-first styling
- **Radix UI** components for accessibility
- **Recharts** for data visualization
- **Redux Toolkit** ready for state management
- **React Router** for navigation
- **Formik + Yup** for form handling

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd hms-premium-ui
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your configuration.

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── app/                 # Redux store configuration
├── components/          # Reusable UI components
│   ├── common/         # Generic components (Button, DataTable, etc.)
│   ├── layout/         # Layout components (Sidebar, Header)
│   ├── dashboard/      # Dashboard-specific components
│   ├── bookings/       # Booking management components
│   └── rooms/          # Room management components
├── features/           # Feature-based modules
├── hooks/              # Custom React hooks
├── layouts/            # Page layouts
├── pages/              # Page components
├── routes/             # Route definitions
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
└── data/               # Mock data and constants
```

## 🎨 Design System

### Color Palette
- **Primary**: Violet (#8b5cf6) to Cyan (#06b6d4) gradients
- **Success**: Emerald (#10b981)
- **Warning**: Amber (#f59e0b)
- **Error**: Rose (#f43f5e)
- **Neutral**: Gray scale with proper contrast

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800
- **Line Heights**: 120% for headings, 150% for body text

### Spacing System
- **Base Unit**: 8px
- **Scale**: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px

## 🔧 API Integration

The application is designed to work with RESTful APIs. Replace the mock data with real API calls:

### API Endpoints Structure
```
/api/auth/login          # Authentication
/api/auth/logout         # Logout
/api/dashboard/stats     # Dashboard metrics
/api/bookings           # Booking CRUD operations
/api/rooms              # Room management
/api/guests             # Guest profiles
/api/invoices           # Billing and payments
/api/orders             # Room service orders
/api/tickets            # Support tickets
/api/staff              # Staff management
/api/reports            # Analytics and reports
```

### Environment Configuration
Update `.env` file with your API base URL:
```env
VITE_API_BASE_URL=https://your-api-domain.com/api
```

## 🛠️ Development Scripts

```bash
# Development
npm run dev              # Start development server
npm run build           # Build for production
npm run preview         # Preview production build

# Code Quality
npm run lint            # Run ESLint
npm run type-check      # TypeScript type checking

# Testing (when implemented)
npm run test            # Run tests
npm run test:coverage   # Test coverage report
```

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px - 1440px
- **Large Desktop**: 1440px+

## 🎯 Performance Optimizations

- **Code Splitting**: Lazy loading for route components
- **Image Optimization**: WebP format with fallbacks
- **Bundle Analysis**: Webpack bundle analyzer integration
- **Caching**: Service worker for offline functionality
- **Tree Shaking**: Unused code elimination

## 🔒 Security Features

- **JWT Authentication**: Secure token-based auth
- **RBAC**: Role-based access control
- **Input Validation**: Formik + Yup validation
- **XSS Protection**: Sanitized user inputs
- **CSRF Protection**: Cross-site request forgery prevention

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

### Deploy to Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Radix UI** for accessible component primitives
- **Tailwind CSS** for utility-first CSS framework
- **Lucide React** for beautiful icons
- **Recharts** for data visualization
- **Inter Font** for typography

## 📞 Support

For support and questions:
- Create an issue on GitHub
- Email: support@luxestay-hms.com
- Documentation: [docs.luxestay-hms.com](https://docs.luxestay-hms.com)

---

Built with ❤️ for the hospitality industry
```