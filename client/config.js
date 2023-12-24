let baseURL;

if (process.env.NODE_ENV === 'production') {
  baseURL = 'https://budget-bookshelf.vercel.app';
} else {
  baseURL = 'https://budget-bookshelf.vercel.app';
  // baseURL = 'http://localhost:5000';
}

export const DomainURL = baseURL;
