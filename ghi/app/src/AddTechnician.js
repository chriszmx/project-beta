import React, { useState } from "react";

function AddTechnician() {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        employee_id: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:8080/api/technicians/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        });

        if (response.ok) {
        alert("Technician added successfully!");
        setFormData({
            first_name: "",
            last_name: "",
            employee_id: "",
        });
        } else {
        alert("Failed to add technician.");
        }
    };

    return (
        <div className="container my-4">
        <div className="row justify-content-center">
            <div className="col-md-6">
            <div className="card">
                <div className="card-header">
                <h1 className="text-center mb-0">Add Technician</h1>
                </div>
                <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                    <label htmlFor="first_name">First Name</label>
                    <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        className="form-control"
                        value={formData.first_name}
                        onChange={handleChange}
                        required
                    />
                    </div>
                    <div className="form-group">
                    <label htmlFor="last_name">Last Name</label>
                    <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        className="form-control"
                        value={formData.last_name}
                        onChange={handleChange}
                        required
                    />
                    </div>
                    <div className="form-group">
                    <label htmlFor="employee_id">Employee ID</label>
                    <input
                        type="text"
                        name="employee_id"
                        id="employee_id"
                        className="form-control"
                        value={formData.employee_id}
                        onChange={handleChange}
                        required
                    />
                    </div>
                    <button type="submit" className="btn btn-primary">
                    Add Technician
                    </button>
                </form>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}

export default AddTechnician;


// remove this so i can re commit 
