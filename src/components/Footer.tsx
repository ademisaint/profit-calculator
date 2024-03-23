import React from 'react'

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-column">
            <h3>About Us</h3>
            <ul className="footer-links">
              <li><a href="#our-mission">Our Mission</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#careers">Careers</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Support</h3>
            <ul className="footer-links">
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#help-center">Help Center</a></li>
              <li><a href="#contact-us">Contact Us</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Legal</h3>
            <ul className="footer-links">
              <li><a href="#terms-of-service">Terms of Service</a></li>
              <li><a href="#privacy-policy">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Follow Us</h3>
            <div className="footer-social-links">
              <a href="#facebook" className="social-link">Facebook</a>
              <a href="#twitter" className="social-link">Twitter</a>
              <a href="#linkedin" className="social-link">LinkedIn</a>
            </div>
          </div>
        </div>
        
        <div className="footer-row">
          <p className="footer-text">© 2024 Profit Calculator, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer