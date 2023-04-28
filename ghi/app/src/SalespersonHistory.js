import React, { useState, useEffect } from "react";

function SalespersonHistory(props) {
    const [salespeople, setSalespeople] = useState([]);
    const [filteredSales, setFilteredSales] = useState([]);
    const [salesperson, setSalesperson] = useState([]);

    const handleSalespersonChange = (event) => {
        const value = event.target.value;
        setSalesperson(value);
    }

    const fetchData = async () => {
        const salespeopleResponse = await fetch("http://localhost:8090/api/sales/");
        if (salespeopleResponse.ok) {
        const salespeopleData = await salespeopleResponse.json();
        setSalespeople(salespeopleData.salespeople);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (props.sales && salesperson) {
            const filteredSales = props.sales.filter(sale => {
                return String(sale.salesperson.employee_id) === String(salesperson);
            });
            setFilteredSales(filteredSales);
        }
    }, [props.sales, salesperson]);

    if (props.sales === undefined || props.salespeople === undefined) {
        return null;
    }



    return (
        <div className="container my-4">
        <div className="row">
            <div className="col-12">
            <h1 className="text-center mb-4">Salesperson History</h1>
            <div className="mb-3">
            <label htmlFor="salesperson">Salesperson</label>
            <select value={salesperson} onChange={handleSalespersonChange} required id="salesperson" name="salesperson" className="form-select">
                <option value="">Choose a salesperson</option>
                {salespeople.map(salesperson => {
                    return (
                        <option key={salesperson.employee_id} value={salesperson.employee_id}>
                            {salesperson.first_name + ' ' + salesperson.last_name}
                        </option>
                    );
                })}
            </select>
        </div>

            <table className="table table-striped table-bordered">
                <thead>
                <tr>
                    <th>Employee ID</th>
                    <th>Salesperson</th>
                    <th>Customer</th>
                    <th>VIN</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {filteredSales.map((sale) => {
                    console.log(sale);
                    return (
                    <tr key={sale.id}>
                        <td>{sale.salesperson.employee_id}</td>
                        <td>{sale.salesperson.first_name + " " + sale.salesperson.last_name}</td>
                        <td>{sale.customer.first_name + " " + sale.customer.last_name}</td>
                        <td>{sale.automobile.vin}</td>
                        <td>{sale.price}</td>
                    </tr>
                    );
                })}
                </tbody>
            </table>
            </div>
        </div>
        </div>
    );
}

export default SalespersonHistory;
