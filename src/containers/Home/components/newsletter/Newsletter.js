import React from 'react';
import './newsletter.css';

const Newsletter = () => (
  <div className="newsletter">
    
    <div className="newsletter-content">
      <p>Join Our Blood Donation Community</p>
      <h3>Subscribe to our newsletter and become part of a caring blood donation community. </h3>
    </div>

    <div className="newsletter-btn">
      <input type='email' placeholder='Your email please'></input>
      <button type="button">Subscribe</button>
    </div>
    
  </div>
);

export default Newsletter;