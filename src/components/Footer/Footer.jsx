import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt='logo' />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet, tortor sed suscipit tincidunt, justo enim posuere turpis, id viverra risus magna sit amet lectus. Phasellus a est vitae orci malesuada vehicula. Aenean fermentum libero et ligula hendrerit, id pulvinar arcu dapibus.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt='facebook-icon' />
                <img src={assets.twitter_icon} alt='twitter-icon' />
                <img src={assets.linkedin_icon} alt='linked-in' />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 011 23456789</li>
                <li>contact@foodferry.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 @ FoodFerry.com - All Right Reserved</p>
    </div>
  )
}

export default Footer;
