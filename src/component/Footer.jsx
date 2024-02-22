// Footer.js

import React from 'react';
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>Company Address</h4>
            
            <p>123 Main Street</p>
            <p>Fake City, FC 12345</p>
            <p>Fake Country</p>
          </div>
          <div className="col-md-4">
            <h4>Follow Us</h4>
            <ul className="social-links">
              <li><a className='footersocialbtn' href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaInstagramSquare /></a></li>
              <li><a className='footersocialbtn' href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaSquareTwitter /></a></li>
              <li><a className='footersocialbtn' href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a></li>
            </ul>
            
          </div>
          <div className="col-md-4">
          <h4>Contact Us</h4>
            <p>Email: contact@fakecompany.com</p>
            <p>Phone: 123-456-7890</p>
            </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
