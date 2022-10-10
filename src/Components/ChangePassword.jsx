import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import LockResetIcon from '@mui/icons-material/LockReset';
import TermsAndCondition from './TermsAndCondition';

const ChangePassword = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    AadharNumber: '',
    OldPassword: '',
    NewPassword: '',
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
      <div className="row flex-column align-items-center shadow-lg p-3 bg-body rounded">
        <div className="col-12 p-0 d-flex flex-column align-items-center">
          <LockResetIcon
            style={{
              color: 'darkslateblue',
              width: '18vmin',
              height: '18vmin',
            }}
          />
          <div className="h3">Change Password</div>
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
              name="OldPassword"
              type="password"
              placeholder="Enter Old Password"
              className="my-3 w-100"
            />

            <TextField
              variant="standard"
              onChange={onChangeHandler}
              name="NewPassword"
              type="password"
              placeholder="Enter New Password"
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
                  Change
                </Button>
              </div>
              <div className="col-12 col-sm-6">
                <Link to="/" className="text-decoration-none">
                  Forget Password ?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
