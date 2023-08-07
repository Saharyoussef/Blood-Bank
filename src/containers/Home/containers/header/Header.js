import React from 'react';
import './header.css';
import Navbar from '../../components/navbar/Navbar';

const Header=()=> {
  return (
    <div className='header section__padding'>
      
      <div className='header-content'>
        <Navbar></Navbar>

      </div>

    </div>
  )
}

export default Header
