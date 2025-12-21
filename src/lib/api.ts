export const fetchClient = async (path: string, options?: RequestInit) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const url = `${baseUrl}${path}`;

  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      return await response.json();
    }
    
    return await response.text();
  } catch (error) {
    console.error('API Request Failed:', error);
    throw error;
  }
};
