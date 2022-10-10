import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Notification.css';
import { Avatar } from '@material-ui/core';

const Notification = () => {
  const photo =
    'https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80';
  return (
    <>
      <div className="d-flex flex-column align-content-center h-100 w-75">
        <div className="h1 text-start" style={{ color: 'cornflowerblue' }}>
          Notification
        </div>
        <div className="notification-item">
          <Accordion>
            <Accordion.Item eventKey="0" className="shadow-lg  bg-body rounded">
              <Accordion.Header>
                <div className="row">
                  <div className="col-12 col-sm-4 col-md-2">
                    <Avatar
                      alt="Remy Sharp"
                      src={photo}
                      style={{
                        width: '75px',
                        height: '75px',
                        position: 'unset',
                      }}
                      className="m-auto"
                    />
                  </div>
                  <div className="col-12 col-sm-8 col-md-10 ps-md-5 ps-lg-0  d-flex flex-column justify-content-center">
                    <div className="h5 text-center text-sm-start">
                      By Host Name
                    </div>
                    <p
                      style={{ maxWidth: '50vw', marginBottom: '0.25rem' }}
                      className="text-truncate"
                    >
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Deserunt veniam ipsa perspiciatis maiores laboriosam culpa
                      eos? Deleniti porro architecto dolorum!
                    </p>
                    <p style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>
                      10 min ago
                    </p>
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body style={{ fontSize: '1.2rem' }}>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              eventKey="1"
              className="shadow-lg mt-1 bg-body rounded"
            >
              <Accordion.Header>
                <div className="row">
                  <div className="col-12 col-sm-4 col-md-2">
                    <Avatar
                      alt="Remy Sharp"
                      src={photo}
                      style={{
                        width: '75px',
                        height: '75px',
                        position: 'unset',
                      }}
                      className="m-auto"
                    />
                  </div>
                  <div className="col-12 col-sm-8 col-md-10 ps-md-5 ps-lg-0  d-flex flex-column justify-content-center">
                    <div className="h5 text-center text-sm-start">
                      By Host Name
                    </div>
                    <p
                      style={{ maxWidth: '50vw', marginBottom: '0.25rem' }}
                      className="text-truncate"
                    >
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Deserunt veniam ipsa perspiciatis maiores laboriosam culpa
                      eos? Deleniti porro architecto dolorum!
                    </p>
                    <p style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>
                      10 min ago
                    </p>
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body style={{ fontSize: '1.2rem' }}>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default Notification;
