import React, { useState, useEffect } from "react";

function NewAutomobileModelForm () {
    const [manufacturers, setManufacturer] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        picture_url: '',
        manufacturer_id: '',
    });

    const handleFormChange = (event) => {
        const value = event.target.value;
        const inputName = event.target.name;
        setFormData({
        ...formData,
        [inputName]: value,
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const automobileModelUrl = 'http://localhost:8100/api/models/';
        const fetchConfig = {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application.json'
        },
        };

        const response = await fetch (automobileModelUrl, fetchConfig);
        if (response.ok) {
        setFormData({
            name: '',
            picture_url: '',
            manufacturer_id: '',
        });
        }
    }

    const fetchManufacturer = async () => {
        const manufacturerUrl = "http://localhost:8100/api/manufacturers/";
        const response = await fetch(manufacturerUrl);
        if (response.ok) {
        const data = await response.json();
        setManufacturer(data.manufacturers);
        }
    };

    useEffect(() => {
        fetchManufacturer();
    }, []);

    return (
        <div className="my-5 container" style={{ maxWidth: "800px" }}>
            <div className="row justify-content-center">
            <form onSubmit={handleSubmit} id="create-automobile-model" className="col-md-8 col-lg-6 p-4 border rounded" style={{ background: "#f8f9fa" }}>
                <h1 className="mb-3 text-center">New Model</h1>
                <div className="row">
                <div className="col">
                    <div className="form-floating mb-3">
                    <input onChange={handleFormChange} value={formData.name} required placeholder="name" type="text" id="name" name="name" className="form-control"/>
                    <label htmlFor="name">Model Name</label>
                    </div>
                </div>
                <div className="col">
                    <div className="form-floating mb-3">
                    <input onChange={handleFormChange} value={formData.picture_url} required placeholder="picture_url" type="url" id="picture_url" name="picture_url" className="form-control" />
                    <label htmlFor="picture_url">Picture URL</label>
                    </div>
                </div>
                <div className="mb-3">
                    <select onChange={handleFormChange} value={formData.manufacturer_id} name="manufacturer_id" id="manufacturer_id" className="dropdownClasses form-select" required>
                    <option value="">Choose a Manufacturer</option>
                    {manufacturers.map(manufacturer => {
                        return (
                        <option key={manufacturer.id} value={manufacturer.id}>
                            {manufacturer.name}
                        </option>
                        );
                    })}
                    </select>
                </div>
                </div>
                <div className="d-grid">
                <button className="btn btn-lg" type="submit" style={{ background: "linear-gradient(to right, #ff416c, #ff4b2b)", color: "white", border: "none", transition: "all 0.3s ease-in-out" }}>Create!</button>
                </div>
            </form>
            </div>
        </div>
    );
}

export default NewAutomobileModelForm;
