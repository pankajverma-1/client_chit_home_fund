import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HostDetail = () => {
  return (
    <>
      <Row className="m-2 m-sm-5">
        <Col sm={12} md={6}>
          <Card className="m-1">
            <Card.Body>
              <Card.Title>Complete Fund</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">15000</Card.Subtitle>
              <Link to="../completeFund">
                <Button>Details</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6}>
          <Card className="m-1">
            <Card.Body>
              <Card.Title>Pending Fund</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">100</Card.Subtitle>
              <Link to="../pending">
                <Button>Details</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6}>
          <Card className="m-1">
            <Card.Body>
              <Card.Title>Running Fund</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">3000</Card.Subtitle>
              <Link to="../runningFund">
                <Button>Detail</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6}>
          <Card className="m-1">
            <Card.Body>
              <Card.Title>Total Fund</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">0000</Card.Subtitle>
              <Link to="other">
                <Button>Details</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default HostDetail;
