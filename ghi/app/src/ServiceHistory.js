import React, { useState, useEffect } from "react";

function ServiceHistory() {
    const [appointments, setAppointments] = useState([]);
    const [searchVIN, setSearchVIN] = useState("");
    const [filteredAppointments, setFilteredAppointments] = useState([]);

    const fetchData = async () => {
        const response = await fetch("http://localhost:8080/api/appointments/");
        if (response.ok) {
            const data = await response.json();
            setAppointments(data.appointments);
            setFilteredAppointments(data.appointments);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchVIN) {
            setFilteredAppointments(
                appointments.filter((appointment) =>
                    appointment.vin.toLowerCase().includes(searchVIN.toLowerCase())
                )
            );
        } else {
            setFilteredAppointments(appointments);
        }
    };

    const handleInputChange = (e) => {
        setSearchVIN(e.target.value);
    };

    const formatDate = (dateString) => {
        const options = {
            month: "2-digit",
            day: "2-digit",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true,
        };
        return new Date(dateString).toLocaleString("en-US", options);
    };

    return (
            <div className="container my-4">
            <div className="row">
                <div className="col-12">
                <h1 className="text-center mb-4">Service History</h1>
                <form onSubmit={handleSearch}>
                    <div className="form-group">
                    <label htmlFor="vin">Search by VIN</label>
                    <div className="input-group">
                        <input
                        type="text"
                        name="vin"
                        id="vin"
                        className="form-control"
                        value={searchVIN}
                        onChange={handleInputChange}
                        />
                        <div className="input-group-append">
                        <button type="submit" className="btn btn-primary" style={{ background: "linear-gradient(to right, #ff7f50, #ff4b2b)" }}>
                            <i className="bi bi-search"></i> Search
                        </button>
                        </div>
                    </div>
                    </div>
                </form>
                <div className="table-responsive">
                    <table className="table table-striped table-bordered">
                    <thead className="thead-dark">
                        <tr>
                        <th>VIN</th>
                        <th>Customer</th>
                        <th>Date & Time</th>
                        <th>Technician</th>
                        <th>Reason</th>
                        <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredAppointments.map((appointment) => (
                        <tr key={appointment.id}>
                            <td>{appointment.vin}</td>
                            <td>{appointment.customer}</td>
                            <td>{formatDate(appointment.date_time)}</td>
                            <td>{appointment.technician.first_name} {appointment.technician.last_name}</td>
                            <td>{appointment.reason}</td>
                            <td>
                            <span className={`badge badge-${appointment.status === "Completed" ? "success" : "warning"}`} style={{ color: "black" }}>
                                {appointment.status}
                            </span>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
            </div>
        );
}

export default ServiceHistory;
