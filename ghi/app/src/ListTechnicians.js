import React, { useState, useEffect } from "react";

function TechnicianList() {
    const [technicians, setTechnicians] = useState([]);

    const fetchData = async () => {
        const techniciansUrl = "http://localhost:8080/api/technicians/";
        const response = await fetch(techniciansUrl);
        if (response.ok) {
        const data = await response.json();
        setTechnicians(data.technician);
        }
    };

    const deleteTechnician = async (id) => {
        const deleteUrl = `http://localhost:8080/api/technicians/${id}/`;
        const response = await fetch(deleteUrl, {
        method: "DELETE",
        });
        if (response.ok) {
        setTechnicians(technicians.filter((technician) => technician.id !== id));
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="container my-4">
        <div className="row">
            <div className="col-12">
            <h1 className="text-center mb-4">Technicians</h1>
            <table className="table table-striped table-bordered">
                <thead>
                <tr>
                    <th>Employee ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {technicians?.map((technician) => {
                    return (
                    <tr key={technician.id}>
                        <td>{technician.employee_id}</td>
                        <td>{technician.first_name}</td>
                        <td>{technician.last_name}</td>
                        <td>
                        <button
                            className="btn btn-danger"
                            onClick={() => deleteTechnician(technician.id)}
                        >
                            FIRE!
                        </button>
                        </td>
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

export default TechnicianList;
