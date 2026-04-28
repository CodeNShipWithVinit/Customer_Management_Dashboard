# Customer Management Dashboard

A full-stack web application to add, view, and delete customers. Built with **React** (frontend) and **Node.js + Express** (backend), with in-memory storage.

---

## Features

- Add a customer with Name, Email, and Phone Number
- View all customers in a responsive table with alternating row colours
- Delete any customer with a single click
- Form validation with clear error messages
- Fully responsive — works on mobile and desktop

---

## Project Structure

```
customer-dashboard/
├── backend/
│   ├── server.js        ← Express server + all API routes
│   └── package.json
└── frontend/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.jsx
    │   │   ├── CustomerForm.jsx
    │   │   └── CustomerTable.jsx
    │   ├── App.js
    │   ├── App.css
    │   └── index.js
    └── package.json
```

---

## Setup & Running Locally

### Prerequisites
- Node.js v18+
- npm v9+

### 1. Backend

```bash
cd backend
npm install
npm start
# Server runs on http://localhost:5000
```

For development with auto-reload:
```bash
npm run dev
```

### 2. Frontend

```bash
cd frontend
npm install
npm start
# App opens at http://localhost:3000
```

The frontend proxies API calls to `http://localhost:5000` via the `"proxy"` field in `package.json`.

---

## API Endpoints

| Method | Endpoint            | Description               | Response                  |
|--------|---------------------|---------------------------|---------------------------|
| GET    | `/customers`        | Get all customers         | Array of customer objects |
| POST   | `/customers`        | Add a new customer        | New customer object       |
| DELETE | `/customers/:id`    | Delete customer by ID     | Success message           |

### Customer Object Shape

```json
{
  "id": "uuid-v4-string",
  "name": "Jane Smith",
  "email": "jane@example.com",
  "phone": "+91 98765 43210",
  "createdAt": "2024-01-01T00:00:00.000Z"
}
```

---

## Assumptions

- Data is stored in a JavaScript array in memory. It resets on server restart — this is intentional for this assignment.
- The frontend uses React's `proxy` field to avoid CORS issues in development. In production, configure the backend URL explicitly via an environment variable.
- UUIDs are generated server-side using the `uuid` package.
