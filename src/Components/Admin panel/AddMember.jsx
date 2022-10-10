import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import TermsAndCondition from '../TermsAndCondition';
import { useFormik } from 'formik';
import { formValidate } from '../../Schema';

const AddMember = () => {
  const navigate = useNavigate();
  const initialValues = {
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
    Mobile: '',
    email: '',
    formBasicCheckbox: '',
  };
  // const [userData, setUserData] = useState({
  //   firstName: '',
  //   fatherName: '',
  //   address: '',
  //   AadharNumber: '',
  //   AadharPhoto: '',
  //   AccountNumber: '',
  //   bankPassbook: '',
  //   PanNumber: '',
  //   panCard: '',
  //   passportSizePhoto: '',
  //   signaturePhoto: '',
  //   Mobile: '',
  //   email: '',
  // });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: formValidate,
      onSubmit: (values, action) => {
        SubmitHandler(values, action);
        // action.resetForm();
      },
    });

  // const onChangeHandler = (e) => {
  //   const { name, value } = e.target;
  //   setUserData({ ...userData, [name]: value });
  // };
  const SubmitHandler = (values, action) => {
    console.log(
      '🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values',
      values
    );
    action.resetForm();
  };
  return (
    <>
      <div
        className="d-flex justify-content-center"
        style={{ margin: '50px 0px' }}
      >
        <div className="shadow-lg bg-body rounded">
          <div className="text-center h3 mt-2">Add Member</div>
          <Form className="m-2 m-sm-5 w-75" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                type="text"
                placeholder="Enter Name"
              />
              {errors.firstName && touched.firstName ? (
                <p className=" text-danger">{errors.firstName}</p>
              ) : null}
            </Form.Group>
            <Form.Group className="mb-3" controlId="fatherName">
              <Form.Label>Father Name</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={values.fatherName}
                name="fatherName"
                type="text"
                placeholder="Enter Father Name"
              />
              {errors.fatherName && touched.fatherName ? (
                <p className=" text-danger">{errors.fatherName}</p>
              ) : null}
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Email ID</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={values.email}
                name="email"
                type="email"
                placeholder="Enter  Your Email"
              />
              {errors.email && touched.email ? (
                <p className=" text-danger">{errors.email}</p>
              ) : null}
            </Form.Group>

            <Form.Group className="mb-3" controlId="CPassword">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={values.Mobile}
                name="Mobile"
                type="text"
                placeholder="Enter your Phone Number"
              />
              {errors.Mobile && touched.Mobile ? (
                <p className=" text-danger">{errors.Mobile}</p>
              ) : null}
            </Form.Group>
            <Form.Group className="mb-3" controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={values.address}
                name="address"
                type="text"
                placeholder="Enter Address"
              />
              {errors.address && touched.address ? (
                <p className=" text-danger">{errors.address}</p>
              ) : null}
            </Form.Group>
            <Form.Group className="mb-3" controlId="AadharNumber">
              <Form.Label>Aadhar Number</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={values.AadharNumber}
                name="AadharNumber"
                type="text"
                placeholder="Enter Aadhar Number"
              />
              {errors.AadharNumber && touched.AadharNumber ? (
                <p className=" text-danger">{errors.AadharNumber}</p>
              ) : null}
            </Form.Group>
            <Form.Group className="mb-3" controlId="AadharPhoto">
              <Form.Label>Aadhar Photo</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={values.AadharPhoto}
                name="AadharPhoto"
                type="file"
                placeholder="Select Aadhar Photo"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="AccountNumber">
              <Form.Label>Account Number</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={values.AccountNumber}
                name="AccountNumber"
                type="text"
                placeholder="Enter Account Number"
              />
              {errors.AccountNumber && touched.AccountNumber ? (
                <p className=" text-danger">{errors.AccountNumber}</p>
              ) : null}
            </Form.Group>

            <Form.Group className="mb-3" controlId="bankPassbook">
              <Form.Label>Bank Passbook Photo</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={values.bankPassbook}
                name="bankPassbook"
                type="file"
                placeholder="Select Bank Passbook Photo"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="PanNumber">
              <Form.Label>PAN Number</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={values.PanNumber}
                name="PanNumber"
                type="text"
                placeholder="Enter Pan Number"
              />
              {errors.PanNumber && touched.PanNumber ? (
                <p className=" text-danger">{errors.PanNumber}</p>
              ) : null}
            </Form.Group>

            <Form.Group className="mb-3" controlId="panCard">
              <Form.Label>Pan Card Photo</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={values.panCard}
                name="panCard"
                type="file"
                placeholder="Select Pan Card Photo"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="passportSizePhoto">
              <Form.Label>Passport Size Photo</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={values.passportSizePhoto}
                name="passportSizePhoto"
                type="file"
                placeholder="Select Passport Size Photo"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="signature">
              <Form.Label>Signature Photo</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={values.signaturePhoto}
                name="signaturePhoto"
                type="file"
                placeholder="Select Signature Photo"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                onChange={handleChange}
                name="formBasicCheckbox"
                type="checkbox"
                label={<TermsAndCondition />}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default AddMember;
