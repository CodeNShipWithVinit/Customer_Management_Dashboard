import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import CustomerForm from './components/CustomerForm';
import CustomerTable from './components/CustomerTable';
import './App.css';

function App() {
  const [customers, setCustomers] = useState([]);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get('/customers');
      setCustomers(response.data);
    } catch (err) {
      console.error('Failed to fetch customers:', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/customers/${id}`);
      fetchCustomers();
    } catch (err) {
      console.error('Failed to delete customer:', err);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <CustomerForm onCustomerAdded={fetchCustomers} />
        <CustomerTable customers={customers} onDelete={handleDelete} />
      </main>
    </div>
  );
}

export default App;
