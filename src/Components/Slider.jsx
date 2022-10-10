import React from 'react';
import './Slider.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
  return (
    <>
      <Carousel
        autoFocus={true}
        autoPlay={true}
        showThumbs={false}
        showStatus={false}
        useKeyboardArrows
        className="presentation-mode"
      >
        <div>
          <img
            style={{ height: '25rem', objectFit: 'cover' }}
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="image1"
          />
          <div className="overlay"></div>
          <div className="legend">
            <div className="h2">Heading 1</div>
            <p className="h4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis,
              impedit.
            </p>
          </div>
        </div>
        <div>
          <img
            style={{ height: '25rem', objectFit: 'cover' }}
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="image2"
          />
          <div className="overlay"></div>
          <div className="legend">
            <div className="h2">Heading 1</div>
            <p className="h4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis,
              impedit.
            </p>
          </div>
        </div>
        <div>
          <img
            style={{ height: '25rem', objectFit: 'cover' }}
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="image2"
          />
          <div className="overlay"></div>
          <div className="legend">
            <div className="h2">Heading 1</div>
            <p className="h4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis,
              impedit.
            </p>
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default Slider;
