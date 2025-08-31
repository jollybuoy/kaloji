import React, { useState } from 'react';
import { Database, CheckCircle, XCircle, Loader } from 'lucide-react';

const DatabaseTest: React.FC = () => {
  const [testResult, setTestResult] = useState<'idle' | 'testing' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const testDatabaseConnection = async () => {
    setTestResult('testing');
    setErrorMessage('');

    try {
      // Import the database module dynamically to catch any import errors
      const { bookingService } = await import('../lib/database');
      
      // Try to get booking stats (this will test the connection)
      const stats = await bookingService.getBookingStats();
      
      console.log('Database connection successful:', stats);
      setTestResult('success');
    } catch (error) {
      console.error('Database connection failed:', error);
      setTestResult('error');
      setErrorMessage(error instanceof Error ? error.message : 'Unknown error');
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="bg-white rounded-lg shadow-lg p-4 border border-gray-200">
        <div className="flex items-center space-x-3">
          <Database className="w-5 h-5 text-blue-600" />
          <span className="font-medium text-gray-900">Database Status</span>
        </div>
        
        <div className="mt-3">
          <button
            onClick={testDatabaseConnection}
            disabled={testResult === 'testing'}
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            {testResult === 'testing' ? (
              <div className="flex items-center justify-center space-x-2">
                <Loader className="w-4 h-4 animate-spin" />
                <span>Testing...</span>
              </div>
            ) : (
              'Test Connection'
            )}
          </button>
        </div>

        {testResult === 'success' && (
          <div className="mt-3 flex items-center space-x-2 text-green-600">
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm">Database Connected!</span>
          </div>
        )}

        {testResult === 'error' && (
          <div className="mt-3">
            <div className="flex items-center space-x-2 text-red-600 mb-2">
              <XCircle className="w-4 h-4" />
              <span className="text-sm">Connection Failed</span>
            </div>
            <p className="text-xs text-gray-600 bg-gray-50 p-2 rounded">
              {errorMessage}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DatabaseTest;