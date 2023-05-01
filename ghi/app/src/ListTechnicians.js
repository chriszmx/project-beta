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

    const handleDeleteTechnician = async (id) => {
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

    const [buttonState, setButtonState] = useState("first-strike");

    const handleFireTechnician = async (id) => {
        if (buttonState === "first-strike") {
        setButtonState("thin-ice");
        } else if (buttonState === "thin-ice") {
        setButtonState("fire");
        } else if (buttonState === "fire") {
        const result = window.confirm(
            "You're fired! We can't have you running the dealership into the ground."
        );
        if (result) {
            handleDeleteTechnician(id);
        }
        }
    };

    return (
        <div className="technician-list-container">
        <h1>Technicians</h1>
        <table>
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
                        className={`fire-button animate__animated animate__shakeX ${buttonState}`}
                        onClick={() => {
                        handleFireTechnician(technician.id);
                        }}
                    >
                        {buttonState === "first-strike"
                        ? "First Strike"
                        : buttonState === "thin-ice"
                        ? "You Are on Thin Ice"
                        : "Fire!"}
                    </button>
                    </td>
                </tr>
                );
            })}
            </tbody>
        </table>
        </div>
    );
}

export default TechnicianList;
