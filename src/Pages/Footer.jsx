import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-inner">
      <div className="footer-content">
        <div className="footer-quick-links">
          <h4>Quick Links</h4>
          <a href="/about">About Us</a>
          <a href="/contact">Contact Us</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/term">Terms & Conditions</a>
        </div>

        <div className="footer-courses">
          <h4>Course</h4>
          <a href="/login">Log In</a>
          <a href="/download">Download</a>
          <a href="/courses">All Courses</a>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>contact@email.com</p>
          <div className="social-icons">
            <img src="/facebook.png" alt="facebook icon" className="facebook" />
            <img src="/instagram.png" alt="instagram icon" className="instagram" />
          </div>
          <form className="email-form">
            <input type="email" className="email" placeholder="Email Address" required />
            <button type="submit" className="subscribe-btn">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        This website is developed by GTCoding © 2021
      </div>
      </div>
    </footer>
  );
};

export default Footer;
