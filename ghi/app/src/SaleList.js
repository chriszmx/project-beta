import React, { useState, useEffect } from 'react';

function SaleList() {
    const [sales, setSales] = useState([]);

    const fetchData = async () => {
        const url = "http://localhost:8090/api/sales/";
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            setSales(data.sale);
        }
    };

    const handleDelete = async (event, saleId) => {
        event.preventDefault();

        const saleUrl = `http://localhost:8090/api/sales/${saleId}`;
        const config = {
          method: "DELETE",
        };

        const response = await fetch(saleUrl, config);

        if (response.ok) {
            const newSale = await response.json();
            console.log(newSale);
        }
    }

useEffect(() => {
    fetchData();
}, []);

  return (
    <div className="row">
      <div className="col-12">
        <h1>Sales</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Salesperson</th>
              <th>Customer</th>
              <th>Automobile</th>
              <th>Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((sale) => (
              <tr key={sale.id}>
                <td>{sale.salesperson.employee_id}</td>
                <td>{sale.customer.first_name}</td>
                <td>{sale.automobile.vin}</td>
                <td>{sale.price}</td>
                <td>
                <button onClick={(event) => {handleDelete(event, sale.id)}}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default SaleList;
