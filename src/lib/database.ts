import { neon } from '@neondatabase/serverless';

// For Netlify deployment, the DATABASE_URL will be available as an environment variable
const getDatabaseUrl = () => {
  // Check for Netlify environment variables (prefer unpooled for serverless)
  if (typeof process !== 'undefined' && process.env.NETLIFY_DATABASE_URL_UNPOOLED) {
    return process.env.NETLIFY_DATABASE_URL_UNPOOLED;
  }
  
  if (typeof process !== 'undefined' && process.env.NETLIFY_DATABASE_URL) {
    return process.env.NETLIFY_DATABASE_URL;
  }
  
  // Fallback to Vite env variables
  return import.meta.env.VITE_DATABASE_URL_UNPOOLED ||
         import.meta.env.VITE_DATABASE_URL || 
         import.meta.env.VITE_NETLIFY_DATABASE_URL ||
         import.meta.env.VITE_NETLIFY_DATABASE_URL_UNPOOLED ||
         (typeof process !== 'undefined' ? process.env.DATABASE_URL : null);
};

const databaseUrl = getDatabaseUrl();

// Only initialize SQL if database URL is available
let sql: any = null;
if (databaseUrl) {
  try {
    sql = neon(databaseUrl);
  } catch (error) {
    console.error('Database connection error:', error);
  }
}

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
    if (!sql) {
      throw new Error('Database not configured. Please set VITE_DATABASE_URL environment variable.');
    }
    
    try {
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
    } catch (error) {
      console.error('Error creating booking:', error);
      throw new Error('Failed to create booking. Please try again.');
    }
  },

  // Get all bookings
  async getAllBookings(): Promise<Booking[]> {
    if (!sql) {
      console.warn('Database not configured. Returning empty array.');
      return [];
    }
    
    try {
      const result = await sql`
        SELECT * FROM bookings 
        ORDER BY created_at DESC
      `;
      return result as Booking[];
    } catch (error) {
      console.error('Error fetching bookings:', error);
      return [];
    }
  },

  // Update booking status
  async updateBookingStatus(id: string, status: 'pending' | 'confirmed' | 'cancelled'): Promise<void> {
    if (!sql) {
      throw new Error('Database not configured.');
    }
    
    try {
      await sql`
        UPDATE bookings 
        SET status = ${status}, updated_at = NOW()
        WHERE id = ${id}
      `;
    } catch (error) {
      console.error('Error updating booking status:', error);
      throw new Error('Failed to update booking status.');
    }
  },

  // Delete booking
  async deleteBooking(id: string): Promise<void> {
    if (!sql) {
      throw new Error('Database not configured.');
    }
    
    try {
      await sql`
        DELETE FROM bookings WHERE id = ${id}
      `;
    } catch (error) {
      console.error('Error deleting booking:', error);
      throw new Error('Failed to delete booking.');
    }
  },

  // Get booking statistics
  async getBookingStats() {
    if (!sql) {
      return {
        total_bookings: 0,
        pending_bookings: 0,
        confirmed_bookings: 0,
        active_events: 0
      };
    }
    
    try {
      const result = await sql`
        SELECT 
          COUNT(*) as total_bookings,
          COUNT(CASE WHEN status = 'pending' THEN 1 END) as pending_bookings,
          COUNT(CASE WHEN status = 'confirmed' THEN 1 END) as confirmed_bookings,
          COUNT(CASE WHEN status = 'confirmed' AND event_date >= CURRENT_DATE THEN 1 END) as active_events
        FROM bookings
      `;
      return result[0];
    } catch (error) {
      console.error('Error fetching booking stats:', error);
      return {
        total_bookings: 0,
        pending_bookings: 0,
        confirmed_bookings: 0,
        active_events: 0
      };
    }
  }
};