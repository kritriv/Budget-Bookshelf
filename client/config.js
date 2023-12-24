let baseURL;

if (process.env.NODE_ENV === 'production') {
  baseURL = 'https://your-live-url.com';
} else {
  baseURL = 'http://localhost:5000';
}

export const DomainURL = baseURL;
