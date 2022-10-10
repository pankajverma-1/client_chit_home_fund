import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DashBoard = () => {
  return (
    <>
      <div>
        <Row className="m-2 m-sm-5">
          <Col sm={12} md={6}>
            <Card className="m-1">
              <Card.Body>
                <Card.Title>Total Fund</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">15</Card.Subtitle>
                <Link to="../totalFund">
                  <Button>Detail</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6}>
            <Card className="m-1">
              <Card.Body>
                <Card.Title>Complete Fund</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">15</Card.Subtitle>
                <Link to="../completeFund">
                  <Button>Detail</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6}>
            <Card className="m-1">
              <Card.Body>
                <Card.Title>Running Fund</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">15</Card.Subtitle>
                <Link to="../runningFund">
                  <Button>Detail</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6}>
            <Card className="m-1">
              <Card.Body>
                <Card.Title>Pending Fund</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">15</Card.Subtitle>
                <Link to="../pendingFund">
                  <Button>Details</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div className="h1 text-center">Amount Status</div>

        <Row className="m-2 m-sm-5">
          <Col sm={12} md={6}>
            <Card className="m-1">
              <Card.Body>
                <Card.Title>Pending</Card.Title>
                <div className="h1">
                  &#8377;<span>2000</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6}>
            <Card className="m-1">
              <Card.Body>
                <Card.Title>Received Amount</Card.Title>
                <div className="h1">
                  &#8377;<span>2000</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6}>
            <Card className="m-1">
              <Card.Body>
                <Card.Title>Paid Amount</Card.Title>
                <div className="h1">
                  &#8377;<span>2000</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default DashBoard;
