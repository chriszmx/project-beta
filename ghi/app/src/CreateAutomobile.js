import React, { useState, useEffect } from "react";
import { Toast, Form, Button } from "react-bootstrap";

function AutomobileForm() {
    const [models, setModel] = useState([]);
    const [formData, setFormData] = useState({
        color: "",
        year: "",
        vin: "",
        model_id: "",
    });
    const [showToast, setShowToast] = useState(false);

    const handleFormChange = (event) => {
        const value = event.target.value;
        const inputName = event.target.name;
        setFormData({
        ...formData,
        [inputName]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const automobileUrl = "http://localhost:8100/api/automobiles/";
        const fetchConfig = {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            "Content-Type": "application/json",
        },
        };

        const response = await fetch(automobileUrl, fetchConfig);
        if (response.ok) {
        setFormData({
            color: "",
            year: "",
            vin: "",
            model_id: "",
        });
        setShowToast(true);
        }
    };

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
            <div className="card">
                <div className="card-body">
                    <Form onSubmit={handleSubmit} id="create-automobile-model">
                        <h1 className="mb-3">Add New Automobile to Inventory</h1>
                        <Form.Group className="mb-3" controlId="color">
                            <Form.Label>Color</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter color"
                                name="color"
                                value={formData.color}
                                onChange={handleFormChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="year">
                            <Form.Label>Year</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter year"
                                name="year"
                                value={formData.year}
                                onChange={handleFormChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="vin">
                            <Form.Label>VIN</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter VIN"
                                name="vin"
                                value={formData.vin}
                                onChange={handleFormChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="model_id">
                            <Form.Label>Model</Form.Label>
                            <Form.Select
                                name="model_id"
                                value={formData.model_id}
                                onChange={handleFormChange}
                                required
                            >
                                <option value="">Select a model</option>
                                {models.map((model) => (
                                    <option key={model.id} value={model.id}>
                                        {model.name}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>

                        <Button
                            type="submit"
                            className="btn btn-lg btn-primary my-3"
                            style={{ backgroundImage: "linear-gradient(to right, #FF416C, #FF4B2B)" }}
                        >
                            Add
                        </Button>

                        <Toast
                            onClose={() => setShowToast(false)}
                            show={showToast}
                            delay={3000}
                            autohide
                            style={{
                                position: "absolute",
                                top: 20,
                                right: 20,
                                minWidth: 200,
                            }}
                        >
                            <Toast.Header>
                                <strong className="me-auto">Success</strong>
                            </Toast.Header>
                            <Toast.Body>New automobile added to inventory!</Toast.Body>
                        </Toast>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default AutomobileForm;
