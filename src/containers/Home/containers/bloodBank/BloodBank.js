import React from 'react';
import Feature from '../../components/feature/Feature';
import './bloodBank.css';

const BloodBank = () => (
  <div className="bloodBank section__margin">

    <div className="bloodBank-heading">
      <h1 className="gradient__text">What is a Blood Bank?</h1>
    </div>
    
    <div className="bloodBank-container">
      <Feature title="Immediate Access to Blood" text="Blood banks maintain a ready-to-use inventory of various blood types. This availability ensures that hospitals can quickly access the required blood type." />
      <Feature title="Safe and Tested Blood Supply" text="Blood banks follow stringent screening and testing protocols to ensure the safety and quality of donated blood. " />
      <Feature title="Encouraging Voluntary Donations" text="Blood banks actively promote voluntary blood donations, cultivating a culture of altruism and community support. " />
    </div>

  </div>
);

export default BloodBank;