import React from 'react';
import { Button, Form } from 'react-bootstrap';
import EmailIcon from '@mui/icons-material/Email';
import { Helmet } from 'react-helmet';

const ContactUs = () => {
  const onChangeHandler = () => {};
  return (
    <>
      <Helmet>
        <style>{'body { background-color: #00000063; }'}</style>
      </Helmet>
      <div className="container d-flex flex-column align-items-center">
        <div
          className="mb-4 text-white"
          style={{ fontFamily: "'Roboto', sans-serif" }}
        >
          <div className="h1" style={{ fontSize: '4rem' }}>
            Chit Home Fund
          </div>
          <div className="h6 text-center" style={{ fontSize: '1.3rem' }}>
            <span>
              <EmailIcon /> Email :-
            </span>
            <span> Abcdef@gmail.com</span>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6">
            <div className="row">
              <div className="col-12">
                <Form.Group className="mb-3" controlId="CPassword">
                  <Form.Control
                    onChange={onChangeHandler}
                    name="fName"
                    type="text"
                    placeholder="Enter Your name"
                  />
                </Form.Group>
              </div>
              <div className="col-12">
                <Form.Group className="mb-3" controlId="CPassword">
                  <Form.Control
                    onChange={onChangeHandler}
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                </Form.Group>
              </div>
              <div className="col-12">
                <Form.Group className="mb-3" controlId="CPassword">
                  <Form.Control
                    onChange={onChangeHandler}
                    name="mobileNumber"
                    type="text"
                    placeholder="Enter your mobile Number"
                  />
                </Form.Group>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6">
            <Form.Group className="mb-3" controlId="CPassword">
              <textarea
                class="form-control"
                placeholder="ENTER YOUR MESSAGE"
                rows="5"
              ></textarea>
            </Form.Group>
          </div>
          <div className="col-12 my-3 text-center">
            <Button>SEND MESSAGE</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
