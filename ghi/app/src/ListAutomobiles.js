import React, { useState, useEffect } from "react";


function AutomobileList () {
    const[automobiles, setAutomobiles] = useState([]);
    const fetchData = async () => {
        const automobilesUrl = "http://localhost:8100/api/automobiles/";
        const response = await fetch (automobilesUrl);
        if (response.ok) {
            const data = await response.json()
            setAutomobiles(data.autos)
        }
    };
    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div className="container my-4">
        <div className="row">
            <div className="col-12">
                <h1 className="text-center mb-4">Automobiles</h1>
            <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Automobile VIN</th>
                    <th>Color</th>
                    <th>Year</th>
                    <th>Model</th>
                    <th>Manufacturer</th>
                    <th>Sold</th>
                </tr>
            </thead>
            <tbody>
                {automobiles?.map(automobile => {
                    return (
                        <tr key={automobile.id}>
                            <td>{automobile.vin}</td>
                            <td>{automobile.color}</td>
                            <td>{automobile.year}</td>
                            <td>{automobile.model.name}</td>
                            <td>{automobile.model.manufacturer.name}</td>
                            <td>{automobile.sold? 'yes' : 'no'}</td>
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

export default AutomobileList;
