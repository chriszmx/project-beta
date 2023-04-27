import React, { useState, useEffect } from "react";

function ServiceAppointments() {
    const [appointments, setAppointments] = useState([]);

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

    const handleCancelAppointment = async (id) => {
        const response = await fetch(`http://localhost:8080/api/appointments/${id}/cancel/`, {
            method: "PUT",
        });
        if (response.ok) {
            fetchData();
        } else {
            alert("Failed to cancel the appointment.");
        }
    };

    const handleFinishAppointment = async (id) => {
        const response = await fetch(`http://localhost:8080/api/appointments/${id}/finish/`, {
            method: "PUT",
        });
        if (response.ok) {
            fetchData();
        } else {
            alert("Failed to finish the appointment....");
        }
    };

    const handleDeleteAppointment = async (id) => {
        const deleteUrl = `http://localhost:8080/api/appointments/${id}/`;
        const response = await fetch(deleteUrl, {
        method: "DELETE",
        });
        if (response.ok) {
        setAppointments(appointments.filter((appointment) => appointment.id !== id));
        } else {
            alert("failed to delete the appointment...")
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="container my-4">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center mb-4">Service Appointments</h1>
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>VIN</th>
                                <th>Customer</th>
                                <th>Date & Time</th>
                                <th>Technician</th>
                                <th>Reason</th>
                                <th>VIP</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        {appointments
                                .filter((appointment) => appointment.status === "SCHEDULED")
                                .map((appointment) => (
                                    <tr key={appointment.id}>
                                    <td>{appointment.vin}</td>
                                    <td>{appointment.customer}</td>
                                    <td>{new Date(appointment.date_time).toLocaleString()}</td>
                                    <td>
                                        {appointment.technician.first_name}{" "}
                                        {appointment.technician.last_name}
                                    </td>
                                    <td>{appointment.reason}</td>
                                    <td>{appointment.VIP}</td>
                                    <td>
                                        <button
                                        className="btn btn-danger mr-2"
                                        onClick={() => handleCancelAppointment(appointment.id)}
                                        >
                                        Cancel
                                        </button>
                                        <button
                                        className="btn btn-success mr-2"
                                        onClick={() => handleFinishAppointment(appointment.id)}
                                        >
                                        Finish
                                        </button>
                                        <button
                                        className="btn btn-warning"
                                        onClick={() => handleDeleteAppointment(appointment.id)}
                                        >›
                                        Delete
                                        </button>
                                    </td>
                                    </tr>
                                ))}
                            </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ServiceAppointments;
