import React, { useState, useEffect } from "react";

function ListManufacturers() {
    const [manufacturers, setManufacturers] = useState([]);

    const fetchData = async () => {
        const manufacturerUrl = "http://localhost:8100/api/models/";
        const response = await fetch(manufacturerUrl);
        if (response.ok) {
        const data = await response.json();
        setManufacturers(data.models);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="manufacturers-container">
        <h1 className="manufacturers-heading">Models</h1>
        <table className="manufacturers-table">
            <thead>
            <tr>
                <th>Name</th>
            </tr>
            </thead>
            <tbody>
            {manufacturers.map((manufacturer) => {
                return (
                <tr key={manufacturer.id}>
                    <td>{manufacturer.name}</td>
                </tr>
                );
            })}
            </tbody>
        </table>
        </div>
    );
}

export default ListManufacturers;
