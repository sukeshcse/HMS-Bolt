# LuxeStay Premium Hotel Management System

A complete, production-ready Hotel Management System built with modern technologies and premium design aesthetics.

## 🏗️ Architecture

### Frontend
- **React 18** with TypeScript
- **Material-UI v5** with custom premium midnight theme
- **Redux Toolkit** with RTK Query for state management
- **Framer Motion** for smooth animations
- **React Router v6** for navigation
- **Chart.js** for data visualization

### Backend
- **Node.js 18** with TypeScript
- **Express.js** REST API
- **PostgreSQL** with Prisma ORM
- **JWT** authentication with refresh tokens
- **Socket.IO** for real-time features
- **BullMQ** for background jobs
- **Swagger** API documentation

### Infrastructure
- **Docker Compose** for development
- **Nginx** reverse proxy
- **Redis** for caching and sessions
- **pgAdmin** for database management

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Docker & Docker Compose
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd luxestay-hms
   ```

2. **Install dependencies**
   ```bash
   npm run install:all
   ```

3. **Set up environment variables**
   ```bash
   # Backend
   cp backend/.env.example backend/.env
   
   # Frontend
   cp frontend/.env.example frontend/.env
   ```

4. **Start with Docker (Recommended)**
   ```bash
   npm run docker:up
   ```

5. **Or start manually**
   ```bash
   # Start database and Redis
   docker-compose up postgres redis -d
   
   # Set up database
   npm run db:setup
   
   # Start development servers
   npm run dev
   ```

## 🌐 Access Points

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001
- **API Documentation**: http://localhost:3001/api/docs
- **pgAdmin**: http://localhost:5050 (admin@luxestay.com / admin123)

## 📁 Project Structure

```
luxestay-hms/
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── app/             # Redux store & API services
│   │   ├── components/      # Reusable components
│   │   ├── layouts/         # Page layouts
│   │   ├── pages/           # Page components
│   │   ├── hooks/           # Custom hooks
│   │   └── contexts/        # React contexts
│   └── public/
├── backend/                 # Node.js backend
│   ├── src/
│   │   ├── modules/         # Feature modules
│   │   ├── config/          # Configuration
│   │   ├── middlewares/     # Express middlewares
│   │   └── scripts/         # Utility scripts
│   ├── prisma/             # Database schema & migrations
│   └── tests/              # Test files
├── nginx/                  # Nginx configuration
└── docker-compose.yml     # Docker services
```

## 🎨 Design System

### Color Palette
- **Primary**: #2B2F77 (Premium Midnight)
- **Secondary**: #FFB703 (Golden Accent)
- **Success**: #34C759
- **Error**: #FF453A
- **Background**: #F5F6FA
- **Surface**: #FFFFFF

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 400, 500, 600, 700, 800
- **Scale**: 8pt grid system

### Components
- **Border Radius**: 12px default
- **Shadows**: Soft, layered shadows
- **Animations**: Smooth 300ms transitions
- **Hover Effects**: Scale, glow, and color transitions

## 🔧 API Endpoints

### Authentication
- `POST /api/v1/auth/login` - User login
- `POST /api/v1/auth/register` - User registration
- `POST /api/v1/auth/refresh` - Refresh token
- `GET /api/v1/auth/profile` - Get user profile
- `POST /api/v1/auth/logout` - User logout

### Core Modules
- **Guests**: `/api/v1/guests`
- **Bookings**: `/api/v1/bookings`
- **Rooms**: `/api/v1/rooms`
- **Staff**: `/api/v1/staff`
- **Housekeeping**: `/api/v1/housekeeping`
- **Maintenance**: `/api/v1/maintenance`
- **Inventory**: `/api/v1/inventory`
- **Tickets**: `/api/v1/tickets`
- **Orders**: `/api/v1/orders`
- **Payments**: `/api/v1/payments`
- **Reports**: `/api/v1/reports`

## 🧪 Testing

```bash
# Run all tests
npm run test

# Frontend tests
npm run test:frontend

# Backend tests
npm run test:backend

# Test coverage
cd backend && npm run test:coverage
```

## 🏗️ Development

### Frontend Development
```bash
cd frontend
npm run dev          # Start dev server
npm run build        # Build for production
npm run storybook    # Start Storybook
```

### Backend Development
```bash
cd backend
npm run dev          # Start with hot reload
npm run build        # Build TypeScript
npm run db:studio    # Open Prisma Studio
npm run db:migrate   # Run migrations
```

### Database Management
```bash
# Generate Prisma client
cd backend && npm run db:generate

# Create migration
cd backend && npx prisma migrate dev --name migration_name

# Reset database
cd backend && npx prisma migrate reset

# Seed database
npm run db:seed
```

## 🐳 Docker Commands

```bash
# Start all services
npm run docker:up

# Stop all services
npm run docker:down

# View logs
docker-compose logs -f

# Rebuild services
docker-compose up --build
```

## 🔒 Security Features

- **JWT Authentication** with httpOnly cookies
- **Role-Based Access Control** (RBAC)
- **Input Validation** with Zod schemas
- **SQL Injection Protection** via Prisma
- **CORS Configuration**
- **Helmet.js** security headers
- **Rate Limiting** (TODO)
- **File Upload Validation** (TODO)

## 📊 Features

### Core Modules
- ✅ **Dashboard** - KPI cards, charts, recent activity
- ✅ **Authentication** - Login, register, JWT tokens
- 🚧 **Bookings** - Reservation management
- 🚧 **Rooms** - Room status and management
- 🚧 **Guests** - Guest profiles and history
- 🚧 **Staff** - Employee management
- 🚧 **Housekeeping** - Task management
- 🚧 **Maintenance** - Issue tracking
- 🚧 **Inventory** - Stock management
- 🚧 **Tickets** - Help desk system
- 🚧 **Orders** - Room service orders
- 🚧 **Payments** - Billing and payments
- 🚧 **Reports** - Analytics and exports

### Technical Features
- ✅ **Real-time Updates** via Socket.IO
- ✅ **API Documentation** with Swagger
- ✅ **Database Migrations** with Prisma
- ✅ **Error Handling** with global handlers
- ✅ **Logging** with Winston
- ✅ **Caching** with Redis
- 🚧 **Background Jobs** with BullMQ
- 🚧 **File Uploads** with Multer
- 🚧 **Email Notifications**
- 🚧 **PDF Generation**
- 🚧 **CSV Exports**

## 🚀 Deployment

### Production Build
```bash
# Build frontend
npm run build:frontend

# Build backend
npm run build:backend

# Build all
npm run build
```

### Environment Variables

#### Backend (.env)
```env
NODE_ENV=production
PORT=3001
DATABASE_URL=postgresql://user:password@localhost:5432/luxestay_hms
REDIS_URL=redis://localhost:6379
JWT_SECRET=your-super-secret-jwt-key
JWT_REFRESH_SECRET=your-super-secret-refresh-key
FRONTEND_URL=http://localhost:3000
```

#### Frontend (.env)
```env
VITE_API_BASE_URL=http://localhost:3001/api/v1
VITE_WS_URL=http://localhost:3001
```

## 📈 Performance

- **Frontend**: Code splitting, lazy loading, memoization
- **Backend**: Database indexing, query optimization, caching
- **Infrastructure**: Nginx compression, static file serving

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Material-UI** for the component library
- **Prisma** for the database toolkit
- **Framer Motion** for animations
- **Chart.js** for data visualization

---

Built with ❤️ for the hospitality industry