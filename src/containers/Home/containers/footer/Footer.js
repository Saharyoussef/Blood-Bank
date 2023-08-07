import React from 'react';
import Logo from '../../../../assets/logoBlood.png'
import './footer.css';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const Footer = () => (
  <div className="footer section__padding">

    <div className="footer-links">
      <div className="footer-links_logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="footer-links_div">
        
        <h4>Company</h4>
        <div className='footer-links_div_icon'>
          <AssignmentIcon style={{ color: 'white' }}></AssignmentIcon>
          <p>Terms & Conditions </p>
        </div>
        <div className='footer-links_div_icon'>
          <PrivacyTipIcon style={{ color: 'white' }}></PrivacyTipIcon>
          <p>Privacy Policy</p>
        </div>
        <div className='footer-links_div_icon'>
          <LiveHelpIcon style={{ color: 'white' }}></LiveHelpIcon>
          <p>FAQ</p>
        </div>
      </div>
      
      <div className="footer-links_div">
        
        <h4>Get in touch</h4>
        <div className='footer-links_div_icon'>
          <LocationCityIcon style={{ color: 'white' }}></LocationCityIcon>
          <p>Elkhadra Street , Tunis Tunisia</p>
        </div>
        <div className='footer-links_div_icon'>
          <LocalPhoneIcon style={{ color: 'white' }}></LocalPhoneIcon>
          <p>+216 71 258 946</p>
        </div>
        <div className='footer-links_div_icon'>
          <EmailIcon style={{ color: 'white' }}></EmailIcon>
          <p>bloodDonation@gmail.com</p>
        </div>
      </div>
    </div>

    <div className="social-icons">
        <a href="https://fr-fr.facebook.com/" target="_blank" rel="noopener noreferrer">
          <Facebook style={{ color: 'white' , margin:'1.5'}}/>
        </a>
        <a href="https://twitter.com/?lang=fr" target="_blank" rel="noopener noreferrer">
          <Twitter style={{ color: 'white' , margin:'1.5'}}/>
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <Instagram style={{ color: 'white' , margin:'1.5'}}/>
        </a>
    </div>

    <div className="footer-copyright">
      <p>@2023 Blood Donation. All rights reserved.</p>
    </div>
    
  </div>
);

export default Footer;