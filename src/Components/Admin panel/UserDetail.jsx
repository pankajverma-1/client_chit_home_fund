import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';

const UserDetail = () => {
  const openNewTab = (url) => {
    window.open(url);
  };
  return (
    <>
      <div className="d-flex flex-column align-items-center w-100 bg-light h-100">
        <div className=" h3 my-3">User Detail</div>
        <div className="row w-100 m-2">
          <div className="col-sm-12 col-md-6">
            <div className="d-flex flex-column align-items-center">
              <img
                src="https://images.unsplash.com/photo-1663081692819-bcc628d5c9b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80"
                alt="aaaaaaaa"
                className="img-thumbnail "
                style={{ width: '30rem' }}
              />
              <div className="h5">NAME</div>
              <div className="h6">AadharXXXXXX</div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h6 className="h6 me-auto">Name</h6>
                <span className="rightSide">malxxxx</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <h6 className="h6 me-auto">Father Name</h6>
                <span className="rightSide">xxxaj</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <h6 className="h6 me-auto">Aadhar Number</h6>
                <span className="rightSide">xxx123400dbtx584</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <h6 className="h6 me-auto">Bank Account No.</h6>
                <span className="rightSide">xxxxxxxxxxxxxx</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <h6 className="h6 me-auto">Pan Number</h6>
                <span className="rightSide">xxwoxmk23</span>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </div>
        <div className=" h3">Document Photo</div>
        <div className="row w-100 m-2">
          <div className="col-sm-12 col-md-4 col-lg-3">
            <div className="d-flex flex-column align-items-center">
              <img
                src="https://images.unsplash.com/photo-1663081692819-bcc628d5c9b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80"
                alt="aaaaaaaa"
                className="img-thumbnail "
                style={{ width: '50rem' }}
              />
              <div className="h5">Document</div>
              <div className="h6">AadharXXXXXX</div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-3">
            <div className="d-flex flex-column align-items-center">
              <img
                src="https://images.unsplash.com/photo-1663081692819-bcc628d5c9b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80"
                alt="aaaaaaaa"
                className="img-thumbnail "
                style={{ width: '50rem' }}
              />
              <div className="h5">Document</div>
              <div className="h6">AadharXXXXXX</div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-3">
            <div className="d-flex flex-column align-items-center">
              <img
                src="https://images.unsplash.com/photo-1663081692819-bcc628d5c9b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80"
                alt="aaaaaaaa"
                className="img-thumbnail "
                style={{ width: '50rem' }}
              />
              <div className="h5">Document</div>
              <div className="h6">AadharXXXXXX</div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-3">
            <div className="d-flex flex-column align-items-center">
              <img
                src="https://images.unsplash.com/photo-1663081692819-bcc628d5c9b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80"
                alt="aaaaaaaa"
                className="img-thumbnail "
                style={{ width: '50rem' }}
              />
              {/* <Button
                variant="outline-primary"
                size="lg"
                onClick={() =>
                  openNewTab(
                    'https://images.unsplash.com/photo-1663081692819-bcc628d5c9b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80'
                  )
                }
              >
                View
              </Button> */}
              <div className="h5">Document</div>
              <div className="h6">AadharXXXXXX</div>
            </div>
          </div>
        </div>
        <div className="mb-2">
          <Button variant="outline-primary" size="lg">
            EDIT
          </Button>{' '}
          <Button variant="outline-danger" size="lg">
            DELETE
          </Button>
        </div>
      </div>
    </>
  );
};

export default UserDetail;
