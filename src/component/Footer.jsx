import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa'; // Import social media icons
import 'bootstrap/dist/css/bootstrap.min.css';

const footerStyle = {
  minHeight: '600px',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  backgroundColor: '#343a40', // Bootstrap dark color
  color: 'white',
  padding: '1.5rem 0'
};

const sectionStyle = {
  textAlign: 'left',
  marginBottom: '20px', // Add gap between sections
};

const linkStyle = {
  textDecoration: 'underline',
};

const copyrightStyle = {
  marginTop: '35px',
  textAlign: 'center',
};

const socialIconStyle = {
  margin: '0 10px',
  color: 'white'
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div className="container">
        <div className="row">
          {/* Left Column: Quick Links */}
          <div className="col-md-3" style={sectionStyle}>
            <h5 className="font-weight-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Help</li>
              <li>Rooms</li>
            </ul>
          </div>

          {/* Middle Column: Support Links */}
          <div className="col-md-3" style={sectionStyle}>
            <h5 className="font-weight-bold mb-3">Support</h5>
            <ul className="list-unstyled">
              <li>Our Location</li>
              <li>The Hosts</li>
              <li>About</li>
              <li>Contact</li>
              <li>Restaurant</li>
            </ul>
          </div>

          {/* Right Column: Contact Info */}
          <div className="col-md-3" style={sectionStyle}>
            <h5 className="font-weight-bold mb-3">Contact Info</h5>
            <p>Address: 98 West 21th Street, Suite 721 New York NY 10016</p>
            <p>Phone: (+1) 435 3533</p>
            <p style={linkStyle}>info@yourdomain.com</p>
          </div>

          {/* Right Side Column: Subscribe Section */}
          <div className="col-md-3" style={sectionStyle}>
            <h5 className="font-weight-bold mb-3">Subscribe</h5>
            <p>Sign up for our newsletter</p>
            <p style={linkStyle}>email@yourdomain.com</p>
          </div>
        </div>
      </div>
      
      <hr />
      {/* Copyright Section with Increased Margin */}
      <div style={copyrightStyle}>
        <p className="mb-0">
          Copyright © 2024 All rights reserved | This template is made with{' '}
          <span style={{ color: 'red' }}>❤️</span> by Colorlib
        </p>
      </div>

      {/* Social Media Icons at the Very Bottom */}
      <div className="text-center mb-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={socialIconStyle}>
          <FaFacebook size={24} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={socialIconStyle}>
          <FaTwitter size={24} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={socialIconStyle}>
          <FaInstagram size={24} />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={socialIconStyle}>
          <FaYoutube size={24} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={socialIconStyle}>
          <FaLinkedin size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
