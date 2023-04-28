import React, { useState, useEffect } from "react";

function SalespersonForm() {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        employee_id: '',
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

    const salespersonUrl = "http://localhost:8090/api/salespeople/";
    const config = {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(salespersonUrl, config);

    if (response.ok) {
      const newSalesperson = await response.json();
      console.log(newSalesperson);

        setFormData({
            first_name: '',
            last_name: '',
            employee_id: '',
        })
    }
  };


  return (
    <div className="row">
      <div className="offset-3 col-6">
        <h1>Create a new Salesperson</h1>
          <form onSubmit={handleSubmit} id="create-salesperson-form">
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
                placeholder="Employee ID"
                required
                type="text"
                name="employee_id"
                id="employee_id"
                className="form-control"
                value={formData.employee_id}
              />
              <label htmlFor="employee_id">Employee ID</label>
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
      </div>
    </div>
  );
}

export default SalespersonForm;
