-- Kaloji Convention Centre Database Schema for Neon PostgreSQL
-- Run this in your Neon database console

-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_type VARCHAR(100) NOT NULL,
  event_name VARCHAR(200) NOT NULL,
  event_date DATE NOT NULL,
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  expected_guests INTEGER NOT NULL,
  organizer_name VARCHAR(100) NOT NULL,
  organization VARCHAR(200),
  phone VARCHAR(20) NOT NULL,
  email VARCHAR(100) NOT NULL,
  address TEXT,
  catering BOOLEAN DEFAULT FALSE,
  decoration BOOLEAN DEFAULT FALSE,
  photography BOOLEAN DEFAULT FALSE,
  security BOOLEAN DEFAULT FALSE,
  parking BOOLEAN DEFAULT FALSE,
  special_requirements TEXT,
  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_bookings_event_date ON bookings(event_date);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON bookings(status);
CREATE INDEX IF NOT EXISTS idx_bookings_created_at ON bookings(created_at);
CREATE INDEX IF NOT EXISTS idx_bookings_email ON bookings(email);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
DROP TRIGGER IF EXISTS update_bookings_updated_at ON bookings;
CREATE TRIGGER update_bookings_updated_at
  BEFORE UPDATE ON bookings
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Insert sample data for testing (optional - you can remove this if not needed)
INSERT INTO bookings (
  event_type, event_name, event_date, start_time, end_time,
  expected_guests, organizer_name, organization, phone, email,
  catering, decoration, status
) VALUES 
(
  'Cultural Festival', 'Telangana Formation Day Celebration', '2024-06-02', '10:00', '18:00',
  2000, 'Rajesh Kumar', 'Telangana Cultural Department', '+91 9876543210', 'rajesh@telangana.gov.in',
  true, true, 'confirmed'
),
(
  'Classical Performance', 'Kuchipudi Dance Recital', '2024-06-15', '19:00', '21:00',
  500, 'Priya Sharma', 'Kalakshetra Dance Academy', '+91 9876543211', 'priya@kalakshetra.org',
  false, true, 'pending'
) ON CONFLICT DO NOTHING;