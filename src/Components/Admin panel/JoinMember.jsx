import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const JoinMember = () => {
  const location = useLocation();
  const [userData, setUserData] = useState({
    AadharNumber: '',
    payableAmount: '',
  });
  useEffect(() => {
    location.state
      ? setUserData({ AadharNumber: location.state.id })
      : setUserData({ AadharNumber: '' });
  }, [location]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div className="w-100 d-flex flex-column align-items-center">
      <div className="h2">Pending Amount</div>
      <Form className="m-2 m-sm-5 w-75">
        <Form.Group className="mb-3" controlId="AadharNumber">
          <Form.Label>Aadhar Number</Form.Label>
          <Form.Control
            onChange={onChangeHandler}
            value={userData.AadharNumber}
            name="AadharNumber"
            type="text"
            placeholder="Enter Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="payableAmount">
          <Form.Label>Payable Amount</Form.Label>
          <Form.Control
            onChange={onChangeHandler}
            value={userData.payableAmount}
            name="payableAmount"
            type="text"
            placeholder="Enter Name"
          />
        </Form.Group>
      </Form>

      <div className="h3">PayMent Method</div>
      <div className="w-100 h-100 bg-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
        aspernatur. Quaerat, provident! Nulla alias, dignissimos optio iusto
        sapiente laudantium similique dolorem placeat nobis inventore maxime
        voluptas id temporibus cumque sunt obcaecati aliquid rem odio! Dolor cum
        officia, in laborum quas repellat aliquam quisquam eveniet excepturi
        ratione tempore eius, rerum adipisci numquam debitis iusto. Numquam,
        voluptatibus consectetur dicta quo quasi veritatis?
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onChange={onChangeHandler}
            name="formBasicCheckbox"
            type="checkbox"
            label="Check me out"
          />
        </Form.Group>
      </Form>
      <Button variant="primary">Finish</Button>
    </div>
  );
};

export default JoinMember;
