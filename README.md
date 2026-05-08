# CargoGo - Modern Cargo Transportation Marketplace 🚐

An Uber-style marketplace platform that connects people who need to transport items with drivers who own vans or small trucks.

## Features

### 🎯 Core Features

- **Landing Page** - Modern hero section with CTA buttons
- **Authentication** - Signup/Login with role selection (Customer/Driver)
- **Customer Dashboard**
  - Create transport requests
  - Upload cargo images
  - View and track requests
  - See request status

- **Driver Dashboard**
  - Browse available requests
  - Filter by city/date
  - Accept requests
  - View earnings and trip statistics

- **User Profiles**
  - Customer profile management
  - Driver profile with vehicle info
  - Rating system
  - Verification status

### 🎨 Design

- Modern SaaS aesthetic
- Dark mode support
- Mobile-responsive design
- Beautiful cards and smooth animations
- Professional dashboard interface

## Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: TailwindCSS + shadcn/ui components
- **Backend**: Supabase (Auth, Database, Storage)
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/dionmah47/cargogo.git
cd cargogo
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env
```

Then add your Supabase credentials:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Start the development server
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Build

```bash
npm run build
```

## Database Schema

Create these tables in Supabase:

### profiles
```sql
CREATE TABLE profiles (
  id UUID PRIMARY KEY,
  email VARCHAR NOT NULL,
  role VARCHAR NOT NULL CHECK (role IN ('customer', 'driver')),
  full_name VARCHAR,
  phone_number VARCHAR,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### drivers
```sql
CREATE TABLE drivers (
  id UUID PRIMARY KEY REFERENCES profiles(id),
  vehicle_type VARCHAR,
  license_plate VARCHAR,
  capacity NUMERIC,
  rating NUMERIC DEFAULT 5,
  verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### transport_requests
```sql
CREATE TABLE transport_requests (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  customer_id UUID REFERENCES profiles(id),
  driver_id UUID REFERENCES drivers(id),
  pickup_location VARCHAR NOT NULL,
  destination VARCHAR NOT NULL,
  description TEXT,
  cargo_image_url VARCHAR,
  estimated_distance NUMERIC,
  offered_price NUMERIC,
  status VARCHAR DEFAULT 'pending' CHECK (status IN ('pending', 'accepted', 'completed')),
  preferred_date TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### ratings
```sql
CREATE TABLE ratings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  request_id UUID REFERENCES transport_requests(id),
  rater_id UUID REFERENCES profiles(id),
  ratee_id UUID REFERENCES profiles(id),
  rating NUMERIC NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## Project Structure

```
src/
├── components/          # Reusable UI components
├── context/            # React Context (Auth, Theme)
├── lib/                # Utilities and Supabase client
├── pages/              # Page components
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## Key Components

- **Button** - Customizable button with variants
- **Card** - Reusable card component
- **Input** - Form input with validation
- **Badge** - Status indicators
- **Navigation** - Sticky navbar with theme toggle
- **Sidebar** - Dashboard navigation
- **StatCard** - Statistics display
- **EmptyState** - Empty state placeholders

## Authentication Flow

1. User signs up with email, password, and role
2. Supabase auth creates user account
3. User profile is created in profiles table
4. User is redirected to appropriate dashboard
5. AuthContext manages session state

## Next Steps

- [ ] Connect Supabase database
- [ ] Implement real request listing
- [ ] Add image upload functionality
- [ ] Integrate payment system
- [ ] Add real-time notifications
- [ ] Implement location services
- [ ] Add review/rating system
- [ ] Deploy to production

## License

MIT

## Support

For support, email support@cargogo.com or create an issue on GitHub.
