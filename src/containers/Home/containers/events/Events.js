import React from 'react';
import event from '../../../../assets/bloodDonationDay.jpg';
import './events.css';
import { NavLink } from 'react-router-dom';

const Events = () => (
  <div className="events section__padding" >
    
    <div className="events-content">
      <h1 className="gradient__text">Blood Donations Events <br /> Blood Donation Day</h1>
      <p>Blood Donation Day is a special event dedicated to raising awareness about the critical need for blood donations and encouraging more people to become blood donors. It serves as a reminder that a single act of kindness can save multiple lives, as donated blood is used in various medical treatments and emergencies.</p>
      <NavLink to='/events'>
        <button type="button">Discover More Events</button>
      </NavLink>
      
    </div>

    <div className="events-image">
      <img src={event} alt="blood donation" />
    </div>
    
  </div>
);

export default Events;