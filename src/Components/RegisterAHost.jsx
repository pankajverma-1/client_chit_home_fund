import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const RegisterAHost = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    firstName: '',
    fatherName: '',
    address: '',
    AadharNumber: '',
    AadharPhoto: '',
    AccountNumber: '',
    bankPassbook: '',
    PanNumber: '',
    panCard: '',
    passportSizePhoto: '',
    signaturePhoto: '',
    conformPassword: '',
    choosePassword: '',
  });
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log('pankaj');
    navigate('/');
  };
  return (
    <>
      <div className="container d-flex flex-column align-items-center my-5">
        <div className="row flex-column align-items-center shadow-lg p-3 mb-5 bg-body rounded registrationForm">
          <div className="col-12 h1 text-center">Create a Host Account</div>
          <div className="col-12">
            <Form className="mt-2">
              <Form.Group className="mb-3" controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  onChange={onChangeHandler}
                  name="firstName"
                  type="text"
                  placeholder="Enter Name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="fatherName">
                <Form.Label>Father Name</Form.Label>
                <Form.Control
                  onChange={onChangeHandler}
                  name="fatherName"
                  type="text"
                  placeholder="Enter Father Name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  onChange={onChangeHandler}
                  name="address"
                  type="text"
                  placeholder="Enter Address"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="AadharNumber">
                <Form.Label>Aadhar Number</Form.Label>
                <Form.Control
                  onChange={onChangeHandler}
                  name="AadharNumber"
                  type="text"
                  placeholder="Enter Aadhar Number"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="AadharPhoto">
                <Form.Label>Aadhar Photo</Form.Label>
                <Form.Control
                  onChange={onChangeHandler}
                  name="AadharPhoto"
                  type="file"
                  placeholder="Select Aadhar Photo"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="AccountNumber">
                <Form.Label>Account Number</Form.Label>
                <Form.Control
                  onChange={onChangeHandler}
                  name="AccountNumber"
                  type="text"
                  placeholder="Enter Account Number"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="bankPassbook">
                <Form.Label>Bank Passbook Photo</Form.Label>
                <Form.Control
                  onChange={onChangeHandler}
                  name="bankPassbook"
                  type="file"
                  placeholder="Select Bank Passbook Photo"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="PanNumber">
                <Form.Label>PAN Number</Form.Label>
                <Form.Control
                  onChange={onChangeHandler}
                  name="PanNumber"
                  type="text"
                  placeholder="Enter Pan Number"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="panCard">
                <Form.Label>Pan Card Photo</Form.Label>
                <Form.Control
                  onChange={onChangeHandler}
                  name="panCard"
                  type="file"
                  placeholder="Select Pan Card Photo"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="passportSizePhoto">
                <Form.Label>Passport Size Photo</Form.Label>
                <Form.Control
                  onChange={onChangeHandler}
                  name="passportSizePhoto"
                  type="file"
                  placeholder="Select Passport Size Photo"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="signature">
                <Form.Label>Signature Photo</Form.Label>
                <Form.Control
                  onChange={onChangeHandler}
                  name="signaturePhoto"
                  type="file"
                  placeholder="Select Signature Photo"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Choose Password</Form.Label>
                <Form.Control
                  onChange={onChangeHandler}
                  name="choosePassword"
                  type="password"
                  placeholder="Enter  Password"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="CPassword">
                <Form.Label>Conform Password</Form.Label>
                <Form.Control
                  onChange={onChangeHandler}
                  name="conformPassword"
                  type="password"
                  placeholder="Re Enter Password"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  onChange={onChangeHandler}
                  name="formBasicCheckbox"
                  type="checkbox"
                  label="Check me out"
                />
              </Form.Group>

              <Button variant="primary" onClick={SubmitHandler}>
                Submit
              </Button>
              <Link to="../login" className="ms-2 text-decoration-none">
                Account Already Present ?
              </Link>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterAHost;
