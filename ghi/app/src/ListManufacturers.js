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
        <div className="container my-4">
        <div className="row justify-content-center">
            <div className="col-md-8">
            <h1 className="text-center mb-4">Manufacturers</h1>
            <table className="table table-striped table-bordered">
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
        </div>
        </div>
    );
}

export default ListManufacturers;
