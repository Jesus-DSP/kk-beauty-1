import React, { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

const CheckoutForm: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    const card = elements.getElement(CardElement);
    if (!card) return;

    const result = await stripe.createToken(card);
    if (result.error) {
      setError(result.error.message || 'Payment failed');
      setToken(null);
    } else if (result.token) {
      setToken(result.token.id);
      setError(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <CardElement options={{ hidePostalCode: true }} />
      <button
        type="submit"
        disabled={!stripe}
        style={{
          padding: '0.5rem 1rem',
          background: '#2563eb',
          color: '#fff',
          borderRadius: '4px',
          border: 'none',
        }}
      >
        Pay
      </button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {token && <div style={{ color: 'green' }}>Token: {token}</div>}
    </form>
  );
};

export default CheckoutForm;
