import React, { useState } from "react";

function AddManufacturerForm() {
    const [name, setName] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch("http://localhost:8100/api/manufacturers/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
        });
        if (response.ok) {
        alert("Manufacturer created successfully");
        setName("");
        } else {
        alert("Failed to create manufacturer");
        }
    };

    return (
        <div className="container my-4">
        <div className="card">
            <div className="card-header">
            <h2 className="text-center mb-0">Add Manufacturer</h2>
            </div>
            <div className="card-body">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                />
                </div>
                <button type="submit" className="btn btn-primary btn-block mt-4">
                Create
                </button>
            </form>
            </div>
        </div>
        </div>
    );
}

export default AddManufacturerForm;
