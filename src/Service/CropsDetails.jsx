import React, { useState } from "react";
import { Button, Card, CardBody, Container, Form } from "react-bootstrap";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Row } from 'react-bootstrap';
import { toast,ToastContainer } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast 
import '../Style/CropsDetails.css';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import { useNavigate } from "react-router-dom";


const initialValues = {
    productName: "",
    category: "",
    description: "",
    quantity: "",
    price: "",
  imageProduct: null,
};

function CropsDetails() {
  const [values, setValues] = useState(initialValues);
  const  navigate = useNavigate();

  const handleInput = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setValues({
      ...values,
      petImage: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const response = await axios.post(
        "http://localhost:8090/FarmerProduct/insertFarmerProduct",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "Accept": "application/json",
          },
        }
      );

      toast.success("Posted successfully"); // Show success toast
      window.location.reload();
      console.log("Posted successfully:", response.data);
      // navigate('/adminpetdetails')
    } catch (error) {
      console.error("Post failure:", error);
      toast.error("Post failure"); // Show error toast
    }
  };

  return (
    <div>
      <Row>
        <Navbar className='navbar nav-head ' fixed="top" style={{ position: 'fixed' }}>
          <Container className='adminnav align-items-center mb-4'>
            <Navbar.Brand>
              <h4><span className='nav-text' style={{ color: 'black' }} >Pet Shop Mangement <PetsOutlinedIcon /></span></h4>
            </Navbar.Brand>
            <Nav className="justify-content-end me-3">
              <Navbar.Toggle aria-controls='basic-navbar-nav' />
              <Navbar.Collapse id='basic-navbar-nav'>
                <Nav.Item>
                  <Nav.Link className='nav-sidetext' style={{ color: 'black' }} ></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link to="/adminpage"><span className='nav-sidetext' style={{ color: 'black' }}>Admin</span></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link><span className='nav-sidetext' style={{ color: 'black' }}>PetDetailsPage</span></Nav.Link>
                </Nav.Item>
              </Navbar.Collapse>
            </Nav>
          </Container>
        </Navbar>
      </Row>

      <Container className="createpetcontainer">
        <Card>
          <CardBody>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>PetName:</Form.Label>
                <Form.Control
                  type="text"
                  name="productName"
                  value={values.productName}
                  onChange={handleInput}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>PetCategory:</Form.Label>
                <Form.Control
                  type="text"
                  name="category"
                  value={values.category}
                  onChange={handleInput}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>PetBreed:</Form.Label>
                <Form.Control
                  type="text"
                  name="description"
                  value={values.description}
                  onChange={handleInput}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Price:</Form.Label>
                <Form.Control
                  type="number"
                  name="price"
                  value={values.price}
                  onChange={handleInput}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Petdescription:</Form.Label>
                <Form.Control
                  type="text"
                  name="quantity"
                  value={values.quantity}
                  onChange={handleInput}
                />
              </Form.Group>

              {/* <Form.Group className="mb-3">
                <Form.Label>Petstock:</Form.Label>
                <Form.Control
                  type="number"
                  name="petStock"
                  value={values.petStock}
                  onChange={handleInput}
                />
              </Form.Group> */}

              <Form.Group className="mb-3">
                <Form.Label>Profile Image:</Form.Label>
                <Form.Control
                  type="file"
                  name="imageProduct"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </Form.Group>

              <Button type="submit">Submit</Button>
            </Form>
          </CardBody>
        </Card>
      </Container>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl pauseOnFocusLoss draggable pauseOnHover />

    </div>
  );
}

export default CropsDetails;