import React, { useState, useEffect } from "react";

function CustomerForm() {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        address: '',
        phone_number: '',
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

    const customerUrl = "http://localhost:8090/api/customers/";
    const config = {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(customerUrl, config);

    if (response.ok) {
      const newCustomer = await response.json();
      console.log(newCustomer);

        setFormData({
            first_name: '',
            last_name: '',
            address: '',
            phone_number: '',
        })
    }
  };


  return (
    <div className="row">
      <div className="offset-3 col-6">
        <h1>Create a new Customer</h1>
          <form onSubmit={handleSubmit} id="create-customer-form">
            <div className="form-floating mb-3">
              <input
                onChange={handleFormChange}
                placeholder="First Name"
                required
                type="text"
                name="first_name"
                id="first_name"
                className="form-control"
                value={formData.first_name}
              />
              <label htmlFor="first_name">First Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleFormChange}
                placeholder="Last Name"
                required
                type="text"
                name="last_name"
                id="last_name"
                className="form-control"
                value={formData.last_name}
              />
              <label htmlFor="last_name">Last Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleFormChange}
                placeholder="Address"
                required
                type="text"
                name="address"
                id="address"
                className="form-control"
                value={formData.address}
              />
              <label htmlFor="address">Address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleFormChange}
                placeholder="Phone Number"
                required
                type="text"
                name="phone_number"
                id="phone_number"
                className="form-control"
                value={formData.phone_number}
              />
              <label htmlFor="phone_number">Phone Number</label>
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
      </div>
    </div>
  );
}

export default CustomerForm;
