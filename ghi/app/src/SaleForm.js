import React, { useState, useEffect } from "react";

function SaleForm() {
    const [salespeople, setSalespeople] = useState([]);
    const [formData, setFormData] = useState({
        salesperson: '',
        customer: '',
        automobile: '',
        price: '',
    })

const handleFormChange = (event) => {
    const inputName = event.target.name
    const value = event.target.value
    setFormData({
        ...formData,
        [inputName]: value,
    })
}


  const handleSubmit = async (event) => {
    event.preventDefault();

    const saleUrl = "http://localhost:8090/api/sales/";
    const config = {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(saleUrl, config);

    if (response.ok) {
      const newSale = await response.json();
      console.log(newSale);

        setFormData({
            salesperson: '',
            customer: '',
            automobile: '',
            price: '',
        })
    }
  };


    const fetchData = async () => {
      const url = "http://localhost:8090/api/salespeople/";
      const response = await fetch(url);

      if (response.ok) {
        const data = await response.json();
        setSalespeople(data.salespeople);
      }
    };

    useEffect(() => {
    fetchData();
  }, []);

    // const fetchDatas = async () => {
    //     const custUrl = "http://localhost:8090/api/customers/";
    //     const response = await fetch(url);
    // }

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <h1>Record a new Sale</h1>
          <form onSubmit={handleSubmit} id="create-hat-form">
            <div className="form-floating mb-3">
              <input
                onChange={handleFormChange}
                placeholder="Style Name"
                required
                type="text"
                name="style_name"
                id="style_name"
                className="form-control"
                value={formData.style_name}
              />
              <label htmlFor="style_name">Style Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleFormChange}
                placeholder="Fabric"
                required
                type="text"
                name="fabric"
                id="fabric"
                className="form-control"
                value={formData.fabric}
              />
              <label htmlFor="fabric">Fabric</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleFormChange}
                placeholder="Color"
                required
                type="text"
                name="color"
                id="color"
                className="form-control"
                value={formData.color}
              />
              <label htmlFor="color">Color</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleFormChange}
                placeholder="Price"
                required
                type="text"
                name="price"
                id="price"
                className="form-control"
                value={formData.price}
              />
              <label htmlFor="price">Price</label>
            </div>
            {/* <div className="mb-3">
              <select
                value={formData.location}
                onChange={handleFormChange}
                required
                name="location"
                id="location"
                className="form-select"
              >
                <option value="">Choose a Location</option>
                {closetNames.map((closetName) => (
                  <option value={closetName.id} key={closetName.id}>
                    {closetName.closet_name} Section #: {closetName.section_number}
                    Shelf #:{" "} {closetName.shelf_number}
                  </option>
                ))}
              </select>
            </div>*/}
            <button className="btn btn-primary">Create</button>
          </form>
      </div>
    </div>
  );
}

export default SaleForm;
