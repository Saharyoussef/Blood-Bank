import React from 'react';
import './bloodEmergencies.css';
import Feature from '../../components/feature/Feature';
import { NavLink } from 'react-router-dom';

const BloodEmergenciesData=[
  {
    title:'Urgent Blood Emergency: Help Save a Life!',
    text:'In these critical moments, a life hangs in the balance. Sarah, a young mother, is fighting for her life after a severe accident. Her condition is critical, and she urgently needs O-negative blood. Time is of the essence, and your swift action can make a life-saving difference.',
  },  
  {
    title:'Race Against Time: Amir Needs A-positive Blood',
    text:'Amir, a 12-year-old boy, is bravely battling a life-threatening illness. His treatment requires regular blood transfusions of A-positive blood. However, the hospitals supply is running critically low. Your donation today could be the lifeline that keeps Amir fight alive.',
  },
  {
    title:'Emergency Surgery: Nadine Requires B-negative Blood',
    text:'Nadine, a dedicated nurse, is now on the other side of the hospital bed. Due to an unforeseen medical emergency, she requires immediate surgery and B-negative blood to ensure a successful procedure. Your generosity can be the light of hope that guides her towards recovery.',
  },
];

const BloodEmergencies=()=> {
  return (
    <div className='BloodEmergencies section__padding' >
      
      <div className='BloodEmergencies-heading'>
        <h1 className='gradient__text'>Blood Emergency: Time to Be a Lifesaver.</h1>
        <p>Together, let's be the heroes they desperately seek during their most critical moments.</p>
        <NavLink to='/donation'>
          <button type="button">Save Lives</button>
        </NavLink>
      </div>

      <div className='BloodEmergencies-container'> 
        {BloodEmergenciesData.map((item,index)=>(
          <Feature title={item.title} text={item.text} key={item.title +index}/>
        ))}
      </div>

    </div>
  )
}

export default BloodEmergencies