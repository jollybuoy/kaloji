import { neon } from '@neondatabase/serverless';

// Get database URL from environment variables
const getDatabaseUrl = () => {
  // For development, you can set this directly or use import.meta.env
  // For production (Netlify), this should be set as an environment variable
  return import.meta.env.VITE_DATABASE_URL || process.env.DATABASE_URL;
};

const sql = neon(getDatabaseUrl());

export interface Booking {
  id?: string;
  event_type: string;
  event_name: string;
  event_date: string;
  start_time: string;
  end_time: string;
  expected_guests: number;
  organizer_name: string;
  organization?: string;
  phone: string;
  email: string;
  address?: string;
  catering: boolean;
  decoration: boolean;
  photography: boolean;
  security: boolean;
  parking: boolean;
  special_requirements?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  created_at?: string;
  updated_at?: string;
}

export const bookingService = {
  // Create a new booking
  async createBooking(booking: Omit<Booking, 'id' | 'created_at' | 'updated_at'>): Promise<Booking> {
    const result = await sql`
      INSERT INTO bookings (
        event_type, event_name, event_date, start_time, end_time,
        expected_guests, organizer_name, organization, phone, email,
        address, catering, decoration, photography, security, parking,
        special_requirements, status
      ) VALUES (
        ${booking.event_type}, ${booking.event_name}, ${booking.event_date},
        ${booking.start_time}, ${booking.end_time}, ${booking.expected_guests},
        ${booking.organizer_name}, ${booking.organization || null}, ${booking.phone},
        ${booking.email}, ${booking.address || null}, ${booking.catering},
        ${booking.decoration}, ${booking.photography}, ${booking.security},
        ${booking.parking}, ${booking.special_requirements || null}, ${booking.status}
      ) RETURNING *
    `;
    return result[0] as Booking;
  },

  // Get all bookings
  async getAllBookings(): Promise<Booking[]> {
    const result = await sql`
      SELECT * FROM bookings 
      ORDER BY created_at DESC
    `;
    return result as Booking[];
  },

  // Update booking status
  async updateBookingStatus(id: string, status: 'pending' | 'confirmed' | 'cancelled'): Promise<void> {
    await sql`
      UPDATE bookings 
      SET status = ${status}, updated_at = NOW()
      WHERE id = ${id}
    `;
  },

  // Delete booking
  async deleteBooking(id: string): Promise<void> {
    await sql`
      DELETE FROM bookings WHERE id = ${id}
    `;
  },

  // Get booking statistics
  async getBookingStats() {
    const result = await sql`
      SELECT 
        COUNT(*) as total_bookings,
        COUNT(CASE WHEN status = 'pending' THEN 1 END) as pending_bookings,
        COUNT(CASE WHEN status = 'confirmed' THEN 1 END) as confirmed_bookings,
        COUNT(CASE WHEN status = 'confirmed' AND event_date >= CURRENT_DATE THEN 1 END) as active_events
      FROM bookings
    `;
    return result[0];
  }
};