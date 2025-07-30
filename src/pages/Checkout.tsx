import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../components/CheckoutForm';

const stripePromise = loadStripe('pk_test_12345');

const Checkout: React.FC = () => (
  <main style={{ marginTop: '6.5rem', minHeight: '60vh' }}>
    <div
      style={{
        width: '75%',
        maxWidth: '500px',
        margin: '0 auto',
        background: '#181818',
        padding: '2rem',
        borderRadius: '0.5rem',
        color: '#fff',
      }}
    >
      <h1
        style={{
          fontFamily: 'Georgia, serif',
          fontSize: '2rem',
          marginBottom: '1rem',
          textAlign: 'center',
        }}
      >
        Checkout
      </h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  </main>
);

export default Checkout;
