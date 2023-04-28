import React, { useState, useEffect } from "react";

function SaleForm() {
    const [salespeople, setSalespeople] = useState([]);
    const [customer, setCustomer] = useState([]);
    const [automobiles, setAutomobiles] = useState([]);
    const [formData, setFormData] = useState({
        customer: '',
        salespeople: '',
        automobile: '',
        price: '',
    })

const handleFormChange = (event) => {
    const inputName = event.target.name
    const value = event.target.value
    setFormData({
        ...formData,
        [inputName]: value,
    })
}


  const handleSubmit = async (event) => {
    event.preventDefault();

    const saleUrl = "http://localhost:8090/api/sales/";
    const config = {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(saleUrl, config);

    if (response.ok) {
      const newSale = await response.json();
      console.log(newSale);

        setFormData({
            customer: '',
            salespeople: '',
            automobile: '',
            price: '',
        })
    }
  };


    const fetchData = async () => {
      const url = "http://localhost:8090/api/salespeople/";
      const response = await fetch(url);

      if (response.ok) {
        const data = await response.json();
        setSalespeople(data.salespeople);
      }
    };

    useEffect(() => {
    fetchData();
  }, []);

    const fetchDatas = async () => {
        const custUrl = "http://localhost:8090/api/customers/";
        const response = await fetch(custUrl);

        if (response.ok) {
          const data = await response.json();
          setCustomer(data.customer);
        }
    };

    useEffect(() => {
      fetchDatas();
    }, []);

    const fetchedData = async () => {
      const autoUrl = "http://localhost:8100/api/automobiles/";
      const response = await fetch(autoUrl);

      if (response.ok) {
        const data = await response.json();
        setAutomobiles(data.autos);
      }
    };

    useEffect(() => {
    fetchedData();
  }, []);


  return (
    <div className="row">
      <div className="offset-3 col-6">
        <h1>Record a new Sale</h1>
          <form onSubmit={handleSubmit} id="record-sale-form">
          <div className="mb-3">
              <select
                value={formData.customer}
                onChange={handleFormChange}
                required
                name="customer"
                id="customer"
                className="form-select"
              >
                <option value="">Choose a Customer</option>
                {customer.map((customer) => (
                  <option value={customer.id} key={customer.id}>
                    {customer.first_name} {customer.last_name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <select
                value={formData.salesperson}
                onChange={handleFormChange}
                required
                name="salesperson"
                id="salesperson"
                className="form-select"
              >
                <option value="">Choose a Salesperson</option>
                {salespeople.map((salesperson) => (
                  <option value={salesperson.id} key={salesperson.id}>
                    {salesperson.first_name} {salesperson.last_name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <select
                value={formData.automobile}
                onChange={handleFormChange}
                required
                name="automobile"
                id="automobile"
                className="form-select"
              >
                <option value="">Select a VIN</option>
                {automobiles.map((automobile) => (
                  <option value={automobile.id} key={automobile.id}>
                    {automobile.model.name} - {automobile.vin}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleFormChange}
                placeholder="Price"
                required
                type="text"
                name="price"
                id="price"
                className="form-control"
                value={formData.price}
              />
              <label htmlFor="price">Price</label>
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
      </div>
    </div>
  );
}

export default SaleForm;
