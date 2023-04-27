import React, { useState, useEffect } from "react";

function ModelList () {
    const [models, setModels] = useState([]);
    const fetchData = async () => {
    const modelsUrl = "http://localhost:8100/api/models/";
    const response = await fetch(modelsUrl);

    if (response.ok) {
        const data = await response.json();
        setModels(data.models);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    const deleteModel = async(id) => {
        const modelUrl = `http://localhost:8100/api/models/${id}`;
        const response = await fetch(modelUrl, {method: "DELETE"});
        if (response.ok) {
            setModels(models.filter(model => model.id !== id));
        }
    };


    return (
        <div className="container my-4">
        <div className="row">
            <div className="col-12">
                <h1 className="text-center mb-4">Automobile Models</h1>
            <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Manufacturer</th>
                    <th>Picture</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                {models?.map(model => {
                    return (
                        <tr key={model.id}>
                            <td>{model.name}</td>
                            <td>{model.manufacturer.name}</td>
                            <td>
                                <img src={ model.picture_url } width="130" height="100" className="img-fluid"/>
                            </td>
                            <td>
                                <button className="btn btn-secondary" onClick={() => deleteModel(model.id)}>Remove</button>
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

export default ModelList;
