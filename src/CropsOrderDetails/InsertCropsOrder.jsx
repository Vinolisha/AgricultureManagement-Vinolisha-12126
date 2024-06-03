import React, { useState } from 'react';
import axios from 'axios';
import "../Style/card.css";

const InsertCropsOrder = () => {
    const [formData, setFormData] = useState({
        customerId: '',
        productId: '',
        orderDate: '',
        userName: '',
        buildingName: '',
        colonyName: '',
        cityName: '',
        stateName: '',
        contactNumber: '',
    });

    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8090/CropsOrder/insertCropsOrder', {
                customer: { customerId: formData.customerId },
                farmerProduct: { productId: formData.productId },
                orderDate: formData.orderDate,
                userName: formData.userName,
                buildingName: formData.buildingName,
                colonyName: formData.colonyName,
                cityName: formData.cityName,
                stateName: formData.stateName,
                contactNumber: formData.contactNumber,
            });
            console.log(response.data);
            // Reset form fields
            setFormData({
                customerId: '',
                productId: '',
                orderDate: '',
                userName: '',
                buildingName: '',
                colonyName: '',
                cityName: '',
                stateName: '',
                contactNumber: '',
            });
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const onInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="containerrs">
            <h1 className="forms-titles">Insert Crop Order</h1>
            <form onSubmit={handleSubmit}>
                <div className="mains-users-infos">
                    {/* <div className="users-inputs-boxs">
                        <label htmlFor="customerId">Customer ID</label>
                        <input
                            type="text"
                            id="customerId"
                            name="customerId"
                            placeholder="Enter Customer ID"
                            value={formData.customerId}
                            onChange={onInputChange}
                            required
                        />
                    </div>
                    <div className="users-inputs-boxs">
                        <label htmlFor="productId">Product ID</label>
                        <input
                            type="text"
                            id="productId"
                            name="productId"
                            placeholder="Enter Product ID"
                            value={formData.productId}
                            onChange={onInputChange}
                            required
                        />
                    </div> */}
                    <div className="users-inputs-boxs">
                        <label htmlFor="orderDate">Order Date</label>
                        <input
                            type="date"
                            id="orderDate"
                            name="orderDate"
                            value={formData.orderDate}
                            onChange={onInputChange}
                            required
                        />
                    </div>
                    <div className="users-inputs-boxs">
                        <label htmlFor="userName">User Name</label>
                        <input
                            type="text"
                            id="userName"
                            name="userName"
                            placeholder="Enter User Name"
                            value={formData.userName}
                            onChange={onInputChange}
                            required
                        />
                    </div>
                    <div className="users-inputs-boxs">
                        <label htmlFor="buildingName">Building Name</label>
                        <input
                            type="text"
                            id="buildingName"
                            name="buildingName"
                            placeholder="Enter Building Name"
                            value={formData.buildingName}
                            onChange={onInputChange}
                            required
                        />
                    </div>
                    <div className="users-inputs-boxs">
                        <label htmlFor="colonyName">Colony Name</label>
                        <input
                            type="text"
                            id="colonyName"
                            name="colonyName"
                            placeholder="Enter Colony Name"
                            value={formData.colonyName}
                            onChange={onInputChange}
                            required
                        />
                    </div>
                    <div className="users-inputs-boxs">
                        <label htmlFor="cityName">City Name</label>
                        <input
                            type="text"
                            id="cityName"
                            name="cityName"
                            placeholder="Enter City Name"
                            value={formData.cityName}
                            onChange={onInputChange}
                            required
                        />
                    </div>
                    <div className="users-inputs-boxs">
                        <label htmlFor="stateName">State Name</label>
                        <input
                            type="text"
                            id="stateName"
                            name="stateName"
                            placeholder="Enter State Name"
                            value={formData.stateName}
                            onChange={onInputChange}
                            required
                        />
                    </div>
                    <div className="users-inputs-boxs">
                        <label htmlFor="contactNumber">Contact Number</label>
                        <input
                            type="text"
                            id="contactNumber"
                            name="contactNumber"
                            placeholder="Enter Contact Number"
                            value={formData.contactNumber}
                            onChange={onInputChange}
                            required
                        />
                    </div>
                </div>
                <div className="forms-submits-btns">
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
        
        
    );
};

export default InsertCropsOrder;
