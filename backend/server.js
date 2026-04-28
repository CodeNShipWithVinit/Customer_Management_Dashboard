const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());


let customers = [];

app.get('/customers', (req, res) => {
  res.json(customers);
});

app.post('/customers', (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ error: 'Name, email, and phone are all required.' });
  }

  const newCustomer = {
    id: uuidv4(),
    name: name.trim(),
    email: email.trim(),
    phone: phone.trim(),
    createdAt: new Date().toISOString(),
  };

  customers.push(newCustomer);
  res.status(201).json(newCustomer);
});

app.delete('/customers/:id', (req, res) => {
  const { id } = req.params;
  const prevLength = customers.length;

  customers = customers.filter((c) => c.id !== id);

  if (customers.length === prevLength) {
    return res.status(404).json({ error: 'Customer not found.' });
  }

  res.json({ message: 'Customer deleted successfully.' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
