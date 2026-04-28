import React from 'react';

function CustomerTable({ customers, onDelete }) {
  if (customers.length === 0) {
    return (
      <section className="table-section">
        <h2 className="section-title">All Customers</h2>
        <div className="empty-state">
          <p>No customers yet. Add one using the form above.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="table-section">
      <h2 className="section-title">
        All Customers <span className="customer-count">{customers.length}</span>
      </h2>
      <div className="table-wrapper">
        <table className="customer-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr key={customer.id} className={index % 2 === 0 ? 'row-even' : 'row-odd'}>
                <td className="row-number">{index + 1}</td>
                <td className="td-name">{customer.name}</td>
                <td className="td-email">{customer.email}</td>
                <td className="td-phone">{customer.phone}</td>
                <td>
                  <button
                    className="btn-delete"
                    onClick={() => onDelete(customer.id)}
                    title={`Delete ${customer.name}`}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default CustomerTable;
