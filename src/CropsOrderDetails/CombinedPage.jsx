import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "../Style/card.css";
import { Link } from "react-router-dom";

const CombinedPage = () => {
  const initialFormData = {
    customerId: "",
    productId: "",
    orderDate: "", // No need to initialize here
    userName: "",
    buildingName: "",
    colonyName: "",
    cityName: "",
    stateName: "",
    contactNumber: "",
    cardNum: "",
    name: "",
    exp: "",
    cvv: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    setCurrentDate(formattedDate);
    setFormData({ ...formData, orderDate: formattedDate });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8090/CropsOrder/insertCropsOrder",
        formData
      );
      if (response.status === 200) {
        setConfirmationMessage("Your order has been confirmed!");
        setShowConfirmation(true);
        setFormData(initialFormData); // Reset form fields
      } else {
        setConfirmationMessage("Failed to submit order.");
        setShowConfirmation(true);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    let updatedValue = value; // Initialize updated value with the entered value

    // Validation for each field
    switch (name) {
      case "userName":
        // Allow only letters
        updatedValue = value.replace(/[^A-Za-z\s]/gi, "");
        break;
      case "buildingName":
        // Allow only letters
        updatedValue = value.replace(/[^A-Za-z\s]/gi, "");
        break;
      case "colonyName":
        // Allow only letters
        updatedValue = value.replace(/[^A-Za-z\s]/gi, "");
        break;
      case "cityName":
        // Allow only letters
        updatedValue = value.replace(/[^A-Za-z\s]/gi, "");
        break;
      case "stateName":
        // Allow only letters
        updatedValue = value.replace(/[^A-Za-z\s]/gi, "");
        break;
      case "contactNumber":
        // Allow only numbers
        updatedValue = value.replace(/[^0-9]/g, "");
        break;
      case "cardNum":
        // Allow only numbers and spaces (for card number)
        updatedValue = value.replace(/[^0-9\s]/g, "");
        break;
      case "exp":
        // Allow only numbers and '/' character (for expiration date)
        updatedValue = value.replace(/[^0-9/]/g, "");
        break;
      case "cvv":
        // Allow only numbers (for CVV)
        updatedValue = value.replace(/[^0-9]/g, "");
        break;
      default:
        // No specific validation for other fields
        break;
    }

    // Update the form data with the validated value
    setFormData({ ...formData, [name]: updatedValue });
  };

  return (
    <Container>
      <Row>
        <Col md={8}>
          <div className="containerrs">
            <h1 className="forms-titles">Fill the Address</h1>
            <form onSubmit={handleSubmit}>
              <div className="mains-users-infos">
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
                <div className="users-inputs-boxs">
                  <label htmlFor="contactNumber">Card Number</label>
                  <input
                    type="text"
                    id="cardNum"
                    name="cardNum"
                    placeholder="Enter Card Number"
                    value={formData.cardNum}
                    onChange={onInputChange}
                    required
                  />
                </div>
                <div className="users-inputs-boxs">
                  <label htmlFor="contactNumber">Expiration Date</label>
                  <input
                    type="text"
                    id="exp"
                    name="exp"
                    placeholder="Enter Expiry Date"
                    value={formData.exp}
                    onChange={onInputChange}
                    required
                  />
                </div>
                <div className="users-inputs-boxs">
                  <label htmlFor="contactNumber">CVV Number</label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    placeholder="Enter CVV Number"
                    value={formData.cvv}
                    onChange={onInputChange}
                    required
                  />
                </div>
              </div>
              <Button type="submit">Submit</Button>
            </form>
          </div>
        </Col>
      </Row>
      {/* Modal for order confirmation */}
      <Modal show={showConfirmation} onHide={() => setShowConfirmation(false)}>
        <Modal.Header
          closeButton
          style={{
            backgroundColor: "#007bff",
            color: "white",
            borderBottom: "none",
          }}
        >
          <Modal.Title style={{ fontSize: "24px" }}>
            Order Confirmation
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            backgroundColor: "#f8f9fa",
            color: "#212529",
            fontSize: "18px",
            padding: "20px",
            borderBottom: "1px solid #dee2e6",
          }}
        >
          {confirmationMessage}
        </Modal.Body>
        <Modal.Footer
          style={{
            borderTop: "none",
            backgroundColor: "#03642b ",
            justifyContent: "center",
          }}
        >
         
         <Link to="/sample"><Button
          
          variant="secondary"
          
          onClick={() => setShowConfirmation(false)}
          style={{
            backgroundColor: "#6c757d",
            borderColor: "#6c757d",
            fontWeight: "bold",
          }} 
        >
          Close
        </Button></Link>
          
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default CombinedPage;
