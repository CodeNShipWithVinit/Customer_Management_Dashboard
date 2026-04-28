import React, { useState } from 'react';
import axios from 'axios';

function CustomerForm({ onCustomerAdded }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!name.trim() || !email.trim() || !phone.trim()) {
      setError('All fields are required.');
      return;
    }

    setLoading(true);
    try {
      await axios.post('https://customer-management-dashboard-2vat.onrender.com/customers', { name, email, phone });
      setName('');
      setEmail('');
      setPhone('');
      onCustomerAdded();
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to add customer. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="form-section">
      <h2 className="section-title">Add New Customer</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit} className="customer-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            type="text"
            placeholder="e.g. Jane Smith"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            placeholder="e.g. jane@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            type="tel"
            placeholder="e.g. +91 98765 43210"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button type="submit" className="btn-submit" disabled={loading}>
          {loading ? 'Adding…' : '+ Add Customer'}
        </button>
      </form>
    </section>
  );
}

export default CustomerForm;
