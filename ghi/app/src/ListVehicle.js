import React, { useState, useEffect } from "react";

    const AutomobileList = () => {
    const [automobiles, setAutomobiles] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        const automobileUrl = "http://localhost:8100/api/automobiles/";
        const response = await fetch(automobileUrl);
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setAutomobiles(data.autos);
        };
        fetchData();
    }, []);

    return (
        <div className="automobile-list-container">
        <h1 className="automobile-list-heading">Automobile List</h1>
        <table className="automobile-table">
            <thead>
            <tr>
                <th>VIN</th>
                <th>Year</th>
                <th>Model</th>
                <th>Manufacturer</th>
                <th>Picture</th>
            </tr>
            </thead>
            <tbody>
            {Array.isArray(automobiles) &&
                automobiles.map((automobile) => (
                <tr key={automobile.vin}>
                    <td>{automobile.vin}</td>
                    <td>{automobile.year}</td>
                    <td>{automobile.model.name}</td>
                    <td>{automobile.model.manufacturer.name}</td>
                    <td>
                    <img
                        src={automobile.model.picture_url}
                        alt={automobile.model.name}
                        className="automobile-image"
                    />
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
};

export default AutomobileList;


// import React, { useState, useEffect } from "react";

// const AutomobileList = () => {
//     const [automobiles, setAutomobiles] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//         const automobileUrl = "http://localhost:8100/api/automobiles/";
//         const response = await fetch(automobileUrl);
//         if (!response.ok) {
//             throw new Error("Failed to fetch data");
//         }
//         const data = await response.json();
//         setAutomobiles(data.autos);
//         };
//         fetchData();
//     }, []);

//     return (
//         <div className="container my-4">
//         <div className="row">
//             <div className="col-12">
//             <h1 className="text-center mb-4">Automobile List</h1>
//             <table className="table table-striped table-bordered">
//                 <thead>
//                 <tr>
//                     <th>VIN</th>
//                     <th>Year</th>
//                     <th>Model</th>
//                     <th>Manufacturer</th>
//                     <th>Picture</th>
//                 </tr>
//                 </thead>
//                 <tbody>
//                 {Array.isArray(automobiles) &&
//                     automobiles.map((automobile) => (
//                     <tr key={automobile.vin}>
//                         <td>{automobile.vin}</td>
//                         <td>{automobile.year}</td>
//                         <td>{automobile.model.name}</td>
//                         <td>{automobile.model.manufacturer.name}</td>
//                         <td>
//                         <img
//                             src={automobile.model.picture_url}
//                             alt={automobile.model.name}
//                             style={{ width: "100px", height: "auto" }}
//                         />
//                         </td>
//                     </tr>
//                     ))}
//                 </tbody>
//             </table>
//             </div>
//         </div>
//         </div>
//     );
// };

// export default AutomobileList;
