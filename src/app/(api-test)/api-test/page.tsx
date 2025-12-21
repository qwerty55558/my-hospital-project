'use client';

import { useState } from 'react';
import { fetchClient } from '@/lib/api';

export default function ApiTestPage() {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleTestConnection = async () => {
    setLoading(true);
    setError(null);
    setData(null);

    try {
      // Testing connection to /hello endpoint
      const result = await fetchClient('/hello');
      setData(result);
    } catch (err: any) {
      setError(err.message || 'Failed to connect');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-10 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">API Connection Test</h1>
      
      <div className="mb-6 p-4 bg-gray-50 rounded border">
        <p className="mb-2"><strong>Base URL:</strong> {process.env.NEXT_PUBLIC_API_URL}</p>
        <button
          onClick={handleTestConnection}
          disabled={loading}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400"
        >
          {loading ? 'Connecting...' : 'Test /api/hello'}
        </button>
      </div>

      {error && (
        <div className="p-4 bg-red-50 text-red-700 rounded mb-4">
          <strong>Error:</strong> {error}
        </div>
      )}

      {data && (
        <div className="p-4 bg-green-50 text-green-800 rounded">
          <strong>Success! Response:</strong>
          <pre className="mt-2 text-sm overflow-auto">{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
