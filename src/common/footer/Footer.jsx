import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <footer>
      <div className='container grid2'>
        <div className='box'>
          <h1>ZoLo</h1>
          <p>Zolo dolor sit amet, consectetur adipiscing elit...</p>
          <div className='icon d_flex'>
            <div className='img d_flex'>
              <a href='link-to-google-play'>
                <i className='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </a>
            </div>
            <div className='img d_flex'>
              <a href='link-to-app-store'>
                <i className='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </a>
            </div>
          </div>
        </div>

        <div className='box'>
          <h2>About Us</h2>
          <ul>
            <li>Careers</li>
            <li>Our Stores</li>
            <li>Our Cares</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className='box'>
          <h2>Customer Care</h2>
          <ul>
            <li>Help Center </li>
            <li>How to Buy </li>
            <li>Track Your Order </li>
            <li>Corporate & Bulk Purchasing </li>
            <li>Returns & Refunds </li>
          </ul>
        </div>
        <div className='box'>
          <h2>Contact Us</h2>
          <ul>
            <li>70 old delhi Square South, New Delhi, IN 100210, India </li>
            <li>Email: Zolo.help@gmail.com</li>
            <li>Phone: +91987654321</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;