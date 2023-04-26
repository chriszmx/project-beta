import React, { useState, useEffect } from 'react';

function SalespersonList() {
    const [salespeople, setSalespeople] = useState([]);

    const fetchData = async () => {
        const url = "http://localhost:8090/api/salespeople/";
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            setSalespeople(data.salespeople);
        }
    };

    const handleDelete = async (event, salespersonId) => {
        event.preventDefault();

        const salespersonUrl = `http://localhost:8090/api/salespeople/${salespersonId}`;
        const config = {
          method: "DELETE",
        };

        const response = await fetch(salespersonUrl, config);

        if (response.ok) {
            const newSalesperson = await response.json();
            console.log(newSalesperson);
        }
    }

useEffect(() => {
    fetchData();
}, []);

  return (
    <div className="row">
      <div className="col-12">
        <h1>Salespeople</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {salespeople.map((salesperson) => (
              <tr key={salesperson.id}>
                <td>{salesperson.employee_id}</td>
                <td>{salesperson.first_name}</td>
                <td>{salesperson.last_name}</td>
                <td>
                <button onClick={(event) => {handleDelete(event, salesperson.id)}}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default SalespersonList;
