import React from 'react';
import './Footer.css';
import footer_logo from '../../assets/sovit-logo.svg';
import user_icon from '../../assets/user_icon.svg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        {/* LEFT SIDE: Logo + Paragraph */}
        <div className="footer-top-left">
          <img src={footer_logo} alt="Footer Logo" />
          <p>
            Crafted with creativity, code, and coffee. Thanks for stopping by — let’s build the future together!
          </p>
        </div>

        {/* RIGHT SIDE: Email input + Subscribe */}
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="User Icon" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>

      <hr />

      {/* BOTTOM FOOTER */}
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2025 Sovit Singh. All rights reserved.</p>
        <div className="footer-bottom-right">
          <p>Terms of services</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
