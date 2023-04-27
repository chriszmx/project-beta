import React, { useState, useEffect } from "react";

function CreateServiceAppointment() {
    const [technicians, setTechnicians] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [formData, setFormData] = useState({
        vin: "",
        customer: "",
        date_time: "",
        technician_id: "",
        reason: "",
    });

    const fetchCustomers = async () => {
        const customerUrl = "http://localhost:8090/api/customers/";
        const response = await fetch(customerUrl);
        if (response.ok) {
            const data = await response.json();
            setCustomers(data.customer || []);
        }
    };

    useEffect(() => {
        fetchCustomers();
    }, []);

    const fetchData = async () => {
        const response = await fetch("http://localhost:8080/api/technicians/");
        if (response.ok) {
            const data = await response.json();
            setTechnicians(data.technician);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch("http://localhost:8080/api/appointments/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        if (response.ok) {
            alert("Service appointment created successfully!");
            setFormData({
                vin: "",
                customer: "",
                date_time: "",
                technician_id: "",
                reason: "",
            });
        } else {
            alert("Failed to create service appointment.");
        }
    };

    return (
        <div className="container my-4">
            <div className="row">
                <div className="col-md-8 col-lg-6 mx-auto">
                    <div className="card shadow">
                        <div className="card-body">
                            <h1 className="text-center mb-4">Create Service Appointment</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="vin">VIN:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="vin"
                                        name="vin"
                                        value={formData.vin}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="customer">Customer:</label>
                                    <select onChange={handleChange} value={formData.customer} name="customer" id="customer" className="form-control" required>
                                        <option value="">Select Customer</option>
                                        {customers.map(customer => {
                                            return (
                                                <option key={customer.id} value={customer.first_name + ' ' + customer.last_name}>
                                                    {customer.first_name + ' ' + customer.last_name}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="date_time">Date & Time:</label>
                                    <input
                                        type="datetime-local"
                                        className="form-control"
                                        id="date_time"
                                        name="date_time"
                                        value={formData.date_time}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="technician">Technician:</label>
                                    <select
                                        className="form-control"
                                        id="technician"
                                        name="technician_id"
                                        value={formData.technician_id}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select Technician</option>
                                        {technicians.map((technician) => (
                                            <option key={technician.id} value={technician.id}>
                                                {technician.first_name} {technician.last_name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="reason">Reason:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="reason"
                                        name="reason"
                                        value={formData.reason}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary btn-block mt-4">
                                    Create Appointment
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    }

    export default CreateServiceAppointment;
