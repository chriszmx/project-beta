import React, { useState, useEffect } from 'react';

function CustomerList() {
    const [customers, setCustomers] = useState([]);

    const fetchData = async () => {
        const url = "http://localhost:8090/api/customers/";
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            setCustomers(data.customer);
        }
    };

    const handleDelete = async (event, customerId) => {
        event.preventDefault();

        const customerUrl = `http://localhost:8090/api/customers/${customerId}`;
        const config = {
          method: "DELETE",
        };

        const response = await fetch(customerUrl, config);

        if (response.ok) {
            const newCustomer = await response.json();
            console.log(newCustomer);
        }
    }

useEffect(() => {
    fetchData();
}, []);

  return (
    <div className="row">
      <div className="col-12">
        <h1>Customers</h1>
        <table className="table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.first_name}</td>
                <td>{customer.last_name}</td>
                <td>{customer.address}</td>
                <td>{customer.phone_number}</td>
                <td>
                <button onClick={(event) => {handleDelete(event, customer.id)}}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default CustomerList;
