/*
  # Create bookings management system

  1. New Tables
    - `bookings`
      - `id` (uuid, primary key)
      - `event_type` (text)
      - `event_name` (text)
      - `event_date` (date)
      - `start_time` (time)
      - `end_time` (time)
      - `expected_guests` (integer)
      - `organizer_name` (text)
      - `organization` (text)
      - `phone` (text)
      - `email` (text)
      - `address` (text)
      - `catering` (boolean)
      - `decoration` (boolean)
      - `photography` (boolean)
      - `security` (boolean)
      - `parking` (boolean)
      - `special_requirements` (text)
      - `status` (text, default 'pending')
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `bookings` table
    - Add policy for public to insert bookings
    - Add policy for authenticated users to read all bookings
    - Add policy for authenticated users to update bookings
*/

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_type text NOT NULL,
  event_name text NOT NULL,
  event_date date NOT NULL,
  start_time time NOT NULL,
  end_time time NOT NULL,
  expected_guests integer NOT NULL,
  organizer_name text NOT NULL,
  organization text,
  phone text NOT NULL,
  email text NOT NULL,
  address text,
  catering boolean DEFAULT false,
  decoration boolean DEFAULT false,
  photography boolean DEFAULT false,
  security boolean DEFAULT false,
  parking boolean DEFAULT false,
  special_requirements text,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert bookings (public booking form)
CREATE POLICY "Anyone can create bookings"
  ON bookings
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users (admin) to read all bookings
CREATE POLICY "Authenticated users can read all bookings"
  ON bookings
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow authenticated users (admin) to update bookings
CREATE POLICY "Authenticated users can update bookings"
  ON bookings
  FOR UPDATE
  TO authenticated
  USING (true);

-- Allow authenticated users (admin) to delete bookings
CREATE POLICY "Authenticated users can delete bookings"
  ON bookings
  FOR DELETE
  TO authenticated
  USING (true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_bookings_updated_at
  BEFORE UPDATE ON bookings
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();