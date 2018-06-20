const PAYMENT_SERVER_URL = process.env.NODE_ENV === 'production'
  ? 'https://bucket3proj.firebaseapp.com'
  : 'http://localhost:3000/stripe';

export default PAYMENT_SERVER_URL;