import React, { useState } from 'react';
import { useEffect } from 'react';
import { 
  ArrowLeft, 
  Calendar, 
  Users, 
  DollarSign, 
  TrendingUp,
  Plus,
  Edit,
  Trash2,
  Search,
  Filter,
  Download,
  Clock
} from 'lucide-react';
import { bookingService, Booking } from '../lib/database';

interface AdminDashboardProps {
  onBackToPublic: () => void;
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onBackToPublic, onLogout }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalBookings: 0,
    activeEvents: 0,
    pendingBookings: 0,
    confirmedBookings: 0
  });

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      // Check if database is configured
      const databaseUrl = import.meta.env.VITE_DATABASE_URL_UNPOOLED ||
                         import.meta.env.VITE_DATABASE_URL || 
                         import.meta.env.VITE_NETLIFY_DATABASE_URL ||
                         import.meta.env.VITE_NETLIFY_DATABASE_URL_UNPOOLED ||
                         (typeof process !== 'undefined' ? process.env.NETLIFY_DATABASE_URL : null);
      
      if (!databaseUrl) {
        // Load from localStorage as fallback
        const localBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
        setBookings(localBookings);
        setStats({
          totalBookings: localBookings.length,
          activeEvents: localBookings.filter((b: any) => b.status === 'confirmed').length,
          pendingBookings: localBookings.filter((b: any) => b.status === 'pending').length,
          confirmedBookings: localBookings.filter((b: any) => b.status === 'confirmed').length
        });
        setLoading(false);
        return;
      }

      const data = await bookingService.getAllBookings();
      const statsData = await bookingService.getBookingStats();
      
      setBookings(data);
      setStats({
        totalBookings: parseInt(statsData.total_bookings) || 0,
        activeEvents: parseInt(statsData.active_events) || 0,
        pendingBookings: parseInt(statsData.pending_bookings) || 0,
        confirmedBookings: parseInt(statsData.confirmed_bookings) || 0
      });

    } catch (error) {
      console.error('Error fetching bookings:', error);
      // Try loading from localStorage as fallback
      try {
        const localBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
        setBookings(localBookings);
        setStats({
          totalBookings: localBookings.length,
          activeEvents: localBookings.filter((b: any) => b.status === 'confirmed').length,
          pendingBookings: localBookings.filter((b: any) => b.status === 'pending').length,
          confirmedBookings: localBookings.filter((b: any) => b.status === 'confirmed').length
        });
      } catch (fallbackError) {
        console.error('Error loading fallback data:', fallbackError);
      }
    } finally {
      setLoading(false);
    }
  };

  const updateBookingStatus = async (bookingId: string, newStatus: string) => {
    try {
      if (!import.meta.env.VITE_DATABASE_URL) {
        // Update localStorage
        const localBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
        const updatedBookings = localBookings.map((b: any) => 
          b.id === bookingId ? { ...b, status: newStatus } : b
        );
        localStorage.setItem('bookings', JSON.stringify(updatedBookings));
        await fetchBookings();
        alert('Booking status updated locally');
        return;
      }

      await bookingService.updateBookingStatus(bookingId, newStatus as 'pending' | 'confirmed' | 'cancelled');
      await fetchBookings(); // Refresh the data
      alert('Booking status updated successfully');

    } catch (error) {
      console.error('Error updating booking:', error);
      alert('Error updating booking status');
    }
  };

  const deleteBooking = async (bookingId: string) => {
    if (confirm('Are you sure you want to delete this booking?')) {
      try {
        if (!import.meta.env.VITE_DATABASE_URL) {
          // Delete from localStorage
          const localBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
          const updatedBookings = localBookings.filter((b: any) => b.id !== bookingId);
          localStorage.setItem('bookings', JSON.stringify(updatedBookings));
          await fetchBookings();
          alert('Booking deleted locally');
          return;
        }

        await bookingService.deleteBooking(bookingId);
        await fetchBookings(); // Refresh the data
        alert('Booking deleted successfully');

      } catch (error) {
        console.error('Error deleting booking:', error);
        alert('Error deleting booking');
      }
    }
  };

  const statsDisplay = [
    { title: 'Total Bookings', value: stats.totalBookings.toString(), icon: Calendar, color: 'blue' },
    { title: 'Active Events', value: stats.activeEvents.toString(), icon: Users, color: 'green' },
    { title: 'Pending', value: stats.pendingBookings.toString(), icon: Clock, color: 'orange' },
    { title: 'Confirmed', value: stats.confirmedBookings.toString(), icon: TrendingUp, color: 'purple' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={onBackToPublic}
                className="flex items-center space-x-2 text-gray-600 hover:text-orange-600 transition-colors duration-200"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Back to Website</span>
              </button>
              <div className="h-6 w-px bg-gray-300"></div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200">
                <Plus className="h-4 w-4 inline mr-2" />
                New Booking
              </button>
              <button
                onClick={onLogout}
                className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-all duration-200"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', name: 'Overview' },
              { id: 'bookings', name: 'Bookings' },
              { id: 'events', name: 'Events' },
              { id: 'clients', name: 'Clients' },
              { id: 'reports', name: 'Reports' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-orange-500 text-orange-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {statsDisplay.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                        <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                      </div>
                      <div className={`w-12 h-12 bg-${stat.color}-100 rounded-lg flex items-center justify-center`}>
                        <Icon className={`h-6 w-6 text-${stat.color}-600`} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Recent Bookings */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="px-6 py-4 border-b border-gray-100">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">Recent Bookings</h3>
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                      <Search className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                      <Filter className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                      <Download className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
              {loading ? (
                <div className="p-8 text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-600 mx-auto"></div>
                  <p className="text-gray-600 mt-2">Loading bookings...</p>
                </div>
              ) : bookings.length === 0 ? (
                <div className="p-8 text-center">
                  <p className="text-gray-600">No bookings found</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Event
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Organizer
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Guests
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {bookings.slice(0, 10).map((booking) => (
                      <tr key={booking.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{booking.event_name}</div>
                          <div className="text-xs text-gray-500">{booking.event_type}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{booking.organizer_name}</div>
                          <div className="text-xs text-gray-500">{booking.organization}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{booking.event_date}</div>
                          <div className="text-xs text-gray-500">{booking.start_time} - {booking.end_time}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{booking.expected_guests}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <select
                            value={booking.status}
                            onChange={(e) => updateBookingStatus(booking.id, e.target.value)}
                            className={`text-xs font-semibold rounded-full px-2 py-1 border-0 ${
                              booking.status === 'confirmed' 
                                ? 'bg-green-100 text-green-800' 
                                : booking.status === 'cancelled'
                                ? 'bg-red-100 text-red-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}
                          >
                            <option value="pending">Pending</option>
                            <option value="confirmed">Confirmed</option>
                            <option value="cancelled">Cancelled</option>
                          </select>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <button className="text-blue-600 hover:text-blue-900">
                              <Edit className="h-4 w-4" />
                            </button>
                            <button 
                              onClick={() => deleteBooking(booking.id)}
                              className="text-red-600 hover:text-red-900"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              )}
            </div>
          </div>
        )}

        {/* Other tabs content */}
        {activeTab === 'bookings' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="px-6 py-4 border-b border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900">All Bookings</h3>
            </div>
            {loading ? (
              <div className="p-8 text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-600 mx-auto"></div>
                <p className="text-gray-600 mt-2">Loading bookings...</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event Details</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Organizer</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Services</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {bookings.map((booking) => (
                      <tr key={booking.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="text-sm font-medium text-gray-900">{booking.event_name}</div>
                          <div className="text-xs text-gray-500">{booking.event_type}</div>
                          <div className="text-xs text-gray-500">{booking.event_date} | {booking.start_time} - {booking.end_time}</div>
                          <div className="text-xs text-gray-500">{booking.expected_guests} guests</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900">{booking.organizer_name}</div>
                          <div className="text-xs text-gray-500">{booking.organization}</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900">{booking.phone}</div>
                          <div className="text-xs text-gray-500">{booking.email}</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-wrap gap-1">
                            {booking.catering && <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Catering</span>}
                            {booking.decoration && <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Decoration</span>}
                            {booking.photography && <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Photography</span>}
                            {booking.security && <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">Security</span>}
                            {booking.parking && <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Parking</span>}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <select
                            value={booking.status}
                            onChange={(e) => updateBookingStatus(booking.id, e.target.value)}
                            className={`text-xs font-semibold rounded-full px-2 py-1 border-0 ${
                              booking.status === 'confirmed' 
                                ? 'bg-green-100 text-green-800' 
                                : booking.status === 'cancelled'
                                ? 'bg-red-100 text-red-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}
                          >
                            <option value="pending">Pending</option>
                            <option value="confirmed">Confirmed</option>
                            <option value="cancelled">Cancelled</option>
                          </select>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium">
                          <div className="flex space-x-2">
                            <button className="text-blue-600 hover:text-blue-900">
                              <Edit className="h-4 w-4" />
                            </button>
                            <button 
                              onClick={() => deleteBooking(booking.id)}
                              className="text-red-600 hover:text-red-900"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Other tabs content */}
        {activeTab !== 'overview' && activeTab !== 'bookings' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Management
            </h3>
            <p className="text-gray-600">
              This section is under development. Advanced {activeTab} management features will be available soon.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;