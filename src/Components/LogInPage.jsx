import './loginPage.css';
import { TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TermsAndCondition from './TermsAndCondition';

const LogInPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    AadharNumber: '',
    choosePassword: '',
  });
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const SubmitHandler = (e) => {
    e.preventDefault();
    navigate('/');
  };
  return (
    <>
      <div className="container d-flex flex-column align-items-center my-5 ">
        <div className="row flex-column align-items-center shadow-lg p-3 bg-body rounded">
          <div className="col-12 p-0 d-flex flex-column align-items-center">
            <AccountCircleIcon
              style={{
                color: 'darkslateblue',
                width: '18vmin',
                height: '18vmin',
              }}
            />
            <div className="h3">Log In</div>
          </div>
          <div className="col-12 d-flex flex-column align-items-center">
            <div className="form  d-flex flex-column align-items-center">
              <TextField
                variant="standard"
                onChange={onChangeHandler}
                name="AadharNumber"
                type="text"
                placeholder="Enter Aadhar Number"
                className="my-3 w-100"
              />

              <TextField
                variant="standard"
                onChange={onChangeHandler}
                name="choosePassword"
                type="password"
                placeholder="Enter  Password"
                className="my-3 w-100"
              />

              <Form.Group className="mb-3 w-100" controlId="formBasicCheckbox">
                <Form.Check
                  onChange={onChangeHandler}
                  name="formBasicCheckbox"
                  type="checkbox"
                  label={<TermsAndCondition />}
                />
              </Form.Group>

              <div className="w-100 row">
                <div className="col-12 col-sm-6">
                  <Button
                    variant="primary"
                    className="me-5"
                    onClick={SubmitHandler}
                  >
                    Submit
                  </Button>
                </div>
                <div className="col-12 col-sm-6">
                  <Link to="/" className="text-decoration-none">
                    Forget Password ?
                  </Link>
                </div>

                <div className="my-2 ">
                  <Link to="../register" className="text-decoration-none">
                    You want to register an Host ?
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogInPage;
