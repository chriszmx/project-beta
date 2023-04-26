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
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (searchVIN) {
        setFilteredAppointments(
            appointments.filter((appointment) =>
            appointment.vin.toLowerCase().includes(searchVIN.toLowerCase())
            )
        );
        } else {
        setFilteredAppointments(appointments);
        }
    }, [searchVIN, appointments]);

    const handleSearch = (e) => {
        setSearchVIN(e.target.value);
    };

    return (
        <div className="container my-4">
        <div className="row">
            <div className="col-12">
            <h1 className="text-center mb-4">Service History</h1>
            <form>
                <div className="form-group">
                <label htmlFor="vin">Search by VIN</label>
                <input
                    type="text"
                    name="vin"
                    id="vin"
                    className="form-control"
                    value={searchVIN}
                    onChange={handleSearch}
                />
                </div>
            </form>
            <table className="table table-striped table-bordered">
                <thead>
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
                    <td>{appointment.date_time}</td>
                    <td>
                        {appointment.technician.first_name}{" "}
                        {appointment.technician.last_name}
                    </td>
                    <td>{appointment.reason}</td>
                    <td>{appointment.status}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
        </div>
    );
}

export default ServiceHistory;
