import React from 'react';
import { Link } from 'react-router-dom';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
  return (
    <>
      <div
        className="row pt-3 px-3 text-white"
        style={{
          fontFamily: "'Roboto', sans-serif",
          backgroundColor: '#00193ecf',
        }}
      >
        <div className="col-12 col-sm-6 col-lg-3 pt-3">
          <div className="h3">Home Chit Fund</div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            magnam soluta dolor perspiciatis animi eos necessitatibus facere
            laboriosam fuga ducimus.
          </p>
        </div>
        <div className="col-12 col-sm-6 col-lg-3 pt-3 ps-3 ps-sm-5">
          <div className="h5">Our Service</div>
          <div>Lorem, ipsum.</div>
          <div>Lorem, ipsum.</div>
          <div>Lorem, ipsum.</div>
          <div>Lorem, ipsum.</div>
          <div>Lorem, ipsum.</div>
        </div>
        <div className="col-12 col-sm-6 col-lg-3 pt-3">
          <div className="h5">Useful Link</div>
          <div>
            <Link className="text-decoration-none text-white" to="/">
              Home
            </Link>
          </div>
          <div>
            <Link className="text-decoration-none text-white" to="register">
              Register
            </Link>
          </div>

          <div>
            <Link className="text-decoration-none text-white" to="/userPenal">
              User Penal
            </Link>
          </div>
          <div>
            <Link className="text-decoration-none text-white" to="about">
              About
            </Link>
          </div>
          <div>
            <Link className="text-decoration-none text-white" to="contact">
              Contact
            </Link>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-3 pt-3 ">
          <div className="h5">Social Media</div>
          <div className="SocialIcon mt-3 w-100 h-100">
            <span className="border border-white p-2 m-2 rounded d-inline-block">
              <FacebookIcon />
            </span>
            <span className="border border-white p-2 m-2 rounded d-inline-block">
              <InstagramIcon />
            </span>
            <span className="border border-white p-2 m-2 rounded d-inline-block">
              <TelegramIcon />
            </span>
            <span className="border border-white p-2 m-2 rounded d-inline-block">
              <YouTubeIcon />
            </span>
          </div>
        </div>
        <div className="col-12 mt-3">
          <div className="h6 text-center">
            <CopyrightIcon /> 2022 All Rights Reserved.
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
