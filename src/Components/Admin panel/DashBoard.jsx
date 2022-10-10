import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DashBoard = () => {
  return (
    <>
      <Row className="m-2 m-sm-5">
        <Col sm={12} md={6}>
          <Card className="m-1">
            <Card.Body>
              <Card.Title>Total User</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">15</Card.Subtitle>
              <Link to="../allUsers">
                <Button>Total User</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6}>
          <Card className="m-1">
            <Card.Body>
              <Card.Title>Total Fund</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">15</Card.Subtitle>
              <Link to="../host">
                <Button>Total Fund</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6}>
          <Card className="m-1">
            <Card.Body>
              <Card.Title>Benefit</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">15</Card.Subtitle>
              <Link to="totalUser">
                <Button>Benefit Detail</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6}>
          <Card className="m-1">
            <Card.Body>
              <Card.Title>Pending a month</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">15</Card.Subtitle>
              <Link to="paddingAmount">
                <Button>Details</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default DashBoard;
