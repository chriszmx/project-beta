import React, { useState, useEffect } from "react";


function NewAutomobileForm () {
    const[models, setModel] = useState([]);
    const[formData, setFormData] = useState({
        color: '',
        year: '',
        vin: '',
        model_id: '',
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
        const automobileUrl = 'http://localhost:8100/api/automobiles/';
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application.json'
            },
        };


        const response = await fetch (automobileUrl, fetchConfig);
        if (response.ok) {
            setFormData({
                color: '',
                year: '',
                vin: '',
                model_id: '',
            });
        }
    }


    const fetchModel = async () => {
        const modelUrl = "http://localhost:8100/api/models/";
        const response = await fetch(modelUrl);
        if (response.ok) {
            const data = await response.json();
            setModel(data.models);
        }
    };
    useEffect(() => {
        fetchModel();
    }, []);


    return (
        <div className="my-5 container">
            <div className="row">
                <form onSubmit={handleSubmit} id="create-automobile-model">
                    <h1 className="mb-3">Add New Automobile to Inventory</h1>
                    <div className="row">
                    <div className="col">
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} value={formData.color} required placeholder="color" type="text" id="color" name="color" className="form-control"/>
                            <label htmlFor="color">Color</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} value={formData.year} required placeholder="year" type="year" id="year" name="year" className="form-control"/>
                            <label htmlFor="year">Year</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} value={formData.vin} required placeholder="vin" type="text" id="vin" name="vin" className="form-control"/>
                            <label htmlFor="vin">Automobile VIN</label>
                        </div>
                    </div>
                    <div className="mb-3">
                        <select onChange={handleFormChange} value={formData.model_id} name="model_id" id="model_id" className="dropdownClasses" required>
                            <option value="">Model</option>
                            {models.map(model => {
                                return (
                                    <option key={model.id} value={model.id}>
                                        {model.name}
                                    </option>
                                );
                                })}
                        </select>
                    </div>
                    </div>
                    <button className="btn btn-lg btn-secondary">Add</button>
                </form>
            </div>
        </div>
    )
}

export default NewAutomobileForm;
