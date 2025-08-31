import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Database = {
  public: {
    Tables: {
      bookings: {
        Row: {
          id: string;
          event_type: string;
          event_name: string;
          event_date: string;
          start_time: string;
          end_time: string;
          expected_guests: number;
          organizer_name: string;
          organization: string | null;
          phone: string;
          email: string;
          address: string | null;
          catering: boolean;
          decoration: boolean;
          photography: boolean;
          security: boolean;
          parking: boolean;
          special_requirements: string | null;
          status: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          event_type: string;
          event_name: string;
          event_date: string;
          start_time: string;
          end_time: string;
          expected_guests: number;
          organizer_name: string;
          organization?: string | null;
          phone: string;
          email: string;
          address?: string | null;
          catering?: boolean;
          decoration?: boolean;
          photography?: boolean;
          security?: boolean;
          parking?: boolean;
          special_requirements?: string | null;
          status?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          event_type?: string;
          event_name?: string;
          event_date?: string;
          start_time?: string;
          end_time?: string;
          expected_guests?: number;
          organizer_name?: string;
          organization?: string | null;
          phone?: string;
          email?: string;
          address?: string | null;
          catering?: boolean;
          decoration?: boolean;
          photography?: boolean;
          security?: boolean;
          parking?: boolean;
          special_requirements?: string | null;
          status?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
};