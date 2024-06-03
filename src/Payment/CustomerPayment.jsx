import React, { useState } from "react";
import "../Style/card.css";

export default function CustomerPayment() {
  const [formData, setFormData] = useState({
    userName: "",
    buildingName: "",
    colonyName: "",
    cityName: "",
    stateName: "",
    contactNumber: "",
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    const newErrors = {};
    if (!formData.userName.trim()) {
      newErrors.userName = "Full Name is required";
    }
    if (!formData.buildingName.trim()) {
      newErrors.buildingName = "Building Name/Door No is required";
    }
    if (!formData.colonyName.trim()) {
      newErrors.colonyName = "Colony Name is required";
    }
    if (!formData.cityName.trim()) {
      newErrors.cityName = "City Name is required";
    }
    if (!formData.stateName.trim()) {
      newErrors.stateName = "State Name is required";
    }
    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = "Contact Number is required";
    } else if (!/^\d{10}$/.test(formData.contactNumber.trim())) {
      newErrors.contactNumber = "Invalid Contact Number";
    }

    if (Object.keys(newErrors).length === 0) {
      // If no errors, submit the form
      console.log("Form submitted!");
    } else {
      // If there are errors, set the state with errors
      setErrors(newErrors);
    }
  };

  const onInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="containerrs">
      <h1 className="forms-titles">Address</h1>
      <form onSubmit={handleSubmit}>
        <div className="mains-users-infos">
          <div className="users-inputs-boxs">
            <label htmlFor="userName">Full Name</label>
            <input
              type="text"
              id="userName"
              name="userName"
              placeholder="Enter Full Name"
              value={formData.userName}
              onChange={onInputChange}
            />
            {errors.userName && <p className="error">{errors.userName}</p>}
          </div>

          <div className="users-inputs-boxs">
            <label htmlFor="buildingName">Building Name/Door No</label>
            <input
              type="text"
              id="buildingName"
              name="buildingName"
              placeholder="Enter Building Name/Door No"
              value={formData.buildingName}
              onChange={onInputChange}
            />
            {errors.buildingName && (
              <p className="error">{errors.buildingName}</p>
            )}
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
            />
            {errors.contactNumber && (
              <p className="error">{errors.contactNumber}</p>
            )}
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
            />
            {errors.colonyName && <p className="error">{errors.colonyName}</p>}
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
            />
            {errors.cityName && <p className="error">{errors.cityName}</p>}
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
            />
            {errors.stateName && <p className="error">{errors.stateName}</p>}
          </div>
        </div>
        <div className="forms-submits-btns">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}
