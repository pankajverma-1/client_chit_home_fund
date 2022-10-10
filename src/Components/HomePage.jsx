import React from 'react';
import Slider from './Slider';
import CountUp from 'react-countup';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <Slider />

      <div
        className="container d-flex flex-column align-items-center my-5"
        style={{ fontFamily: "'Roboto', sans-serif" }}
      >
        <div className="h2 mb-3">Welcome to Chit Home Fund</div>
        <p className="h4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          dignissimos itaque ex eum quidem velit laudantium numquam neque
          lorem3000 ratione porro?
        </p>

        <p className="mt-1">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
          voluptates ad obcaecati explicabo provident at, quae dolores natus
          ullam doloribus. Dolores dolorum quam obcaecati amet ex eum quisquam
          velit culpa? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Minima explicabo similique inventore odit quas odio aliquid nihil amet
          facilis nemo! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dicta doloribus necessitatibus deserunt totam provident unde. Sint
          minima architecto fugit repudiandae amet atque officiis molestiae
          excepturi, doloribus reiciendis vitae esse officia!{' '}
        </p>
      </div>

      <div
        className="my-5 container"
        style={{ fontFamily: "'Roboto', sans-serif" }}
      >
        <div className="row">
          <div className="col-12 col-sm-6">
            <div className="h1" style={{ color: 'green' }}>
              Total User
            </div>
            <div className="h2" style={{ color: '#00000099' }}>
              <CountUp
                enableScrollSpy={true}
                scrollSpyDelay={500}
                end={12000}
              />
              <span className="h1 text-black ms-1">+</span>
            </div>
          </div>
          <div className="col-12 col-sm-6">
            <div className="h1" style={{ color: 'green' }}>
              Total amount earn
            </div>
            <div className="h2" style={{ color: '#00000099' }}>
              <CountUp
                enableScrollSpy={true}
                scrollSpyDelay={500}
                end={9999999999}
              />
              <span className="h1 text-black ms-1">+</span>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-light w-100 p-5">
        <div className=" container">
          <div className="row">
            <div className="col-12 d-flex flex-column align-items-center">
              <div className="h2 fw-semibold">Our Service</div>
              <div className="h5 fw-semibold">All Service Type</div>
            </div>
            <div className="col-12 col-sm-6 p-4">
              <div className="h4">Service Name</div>
              <div className="fw-light">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quibusdam neque officia soluta culpa nulla saepe vitae obcaecati
                nemo pariatur! Deserunt.
              </div>
            </div>
            <div className="col-12 col-sm-6 p-4">
              <div className="h4">Service Name</div>
              <div className="fw-light">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quibusdam neque officia soluta culpa nulla saepe vitae obcaecati
                nemo pariatur! Deserunt.
              </div>
            </div>
            <div className="col-12 col-sm-6 p-4">
              <div className="h4">Service Name</div>
              <div className="fw-light">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quibusdam neque officia soluta culpa nulla saepe vitae obcaecati
                nemo pariatur! Deserunt.
              </div>
            </div>
            <div className="col-12 col-sm-6 p-4">
              <div className="h4">Service Name</div>
              <div className="fw-light">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quibusdam neque officia soluta culpa nulla saepe vitae obcaecati
                nemo pariatur! Deserunt.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="mt-4 p-5 container"
        style={{ fontFamily: "'Roboto', sans-serif" }}
      >
        <div className="row">
          <div className="col-12">
            <div className="h1 text-center pb-3">About us</div>
          </div>
          <div className="col-12 col-lg-5 col-xl-4">
            <img
              src="https://images.unsplash.com/photo-1663919009159-d776f2cd51c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="AboutUs"
              className=" img-fluid m-2"
              style={{ objectFit: 'cover', height: '13.5rem', width: '100%' }}
            />
          </div>

          <div className="col-12 mt-3 mt-lg-0 col-lg-7 col-xl-8 d-flex flex-column align-items-center align-items-lg-start ps-lg-3">
            <div className="h4">Lorem ipsum dolor sit amet consectetur.</div>
            <p className="fw-semibold">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              unde dolor voluptas? Ipsa repudiandae eum alias facilis dolorum
              commodi! Quam.
            </p>
            <div className="fw-light">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
              voluptates ad obcaecati explicabo provident at, quae dolores natus
              ullam doloribus. Dolores dolorum quam obcaecati amet ex eum
              quisquam velit culpa?
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mt-3 col-lg-7 col-xl-8 d-flex flex-column align-items-center align-items-lg-start">
            <div className="h4">Lorem ipsum dolor sit amet consectetur.</div>
            <p className="fw-semibold">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              unde dolor voluptas? Ipsa repudiandae eum alias facilis dolorum
              commodi! Quam.
            </p>
            <div className="fw-light">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
              voluptates ad obcaecati explicabo provident at, quae dolores natus
              ullam doloribus. Dolores dolorum quam obcaecati amet ex eum
              quisquam velit culpa?
            </div>
          </div>
          <div className="col-12 col-lg-5 col-xl-4 order-first order-lg-last">
            <img
              src="https://images.unsplash.com/photo-1663919009159-d776f2cd51c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="AboutUs"
              className=" img-fluid m-2"
              style={{ objectFit: 'cover', height: '13.5rem', width: '100%' }}
            />
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5">
          <Link to="about">
            <Button>Read more</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
