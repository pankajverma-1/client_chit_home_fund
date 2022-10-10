import React from 'react';
import { Button } from 'react-bootstrap';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './TermsAndCondition.css';

const contentStyle = {
  maxWidth: '600px',
  width: '90%',
};

const TermsAndCondition = () => (
  <Popup
    trigger={<div className="text-primary terms">terms & conditions</div>}
    modal
    contentStyle={contentStyle}
  >
    {(close) => (
      <div
        className="modal1 shadow-lg p-3 bg-body rounded"
        style={{ fontFamily: "'Roboto', sans-serif" }}
      >
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className=" d-flex flex-column align-items-center justify-content-center">
          <div className="h1" style={{ color: 'cornflowerblue' }}>
            Terms & Conditions
          </div>
          <div className="content">
            <div className="h6 text-info">Last Update 12/12/20022</div>
            <div className="" style={{ height: '20rem', overflowY: 'auto' }}>
              <div className="h4 text-secondary">Lorem ipsum dolor sit.</div>
              <p style={{ fontSize: '1.1rem' }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
                labore, quam amet officia nobis molestias exercitationem,
                quaerat assumenda aut accusantium sit laboriosam animi, harum
                ipsa.
              </p>
              <div className="h4 text-secondary">Lorem ipsum dolor sit.</div>
              <p style={{ fontSize: '1.1rem' }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
                labore, quam amet officia nobis molestias exercitationem,
                quaerat assumenda aut accusantium sit laboriosam animi, harum
                ipsa.
              </p>
              <div className="h4 text-secondary">Lorem ipsum dolor sit.</div>
              <p style={{ fontSize: '1.1rem' }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
                labore, quam amet officia nobis molestias exercitationem,
                quaerat assumenda aut accusantium sit laboriosam animi, harum
                ipsa.
              </p>
              <div className="h4 text-secondary">Lorem ipsum dolor sit.</div>
              <p style={{ fontSize: '1.1rem' }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
                labore, quam amet officia nobis molestias exercitationem,
                quaerat assumenda aut accusantium sit laboriosam animi, harum
                ipsa.
              </p>
              <div className="h4 text-secondary">Lorem ipsum dolor sit.</div>
              <p style={{ fontSize: '1.1rem' }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
                labore, quam amet officia nobis molestias exercitationem,
                quaerat assumenda aut accusantium sit laboriosam animi, harum
                ipsa.
              </p>
            </div>
          </div>
        </div>
        <div className="actions">
          <Button
            className="button"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            Close
          </Button>
        </div>
      </div>
    )}
  </Popup>
);

export default TermsAndCondition;
