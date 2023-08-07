import React from 'react';
import Header from './containers/header/Header'
import Footer from './containers/footer/Footer';
import Blog from './containers/blog/Blog';
import BloodEmergencies from './containers/bloodEmergencies/BloodEmergencies';
import Events from './containers/events/Events';
import BloodBank from './containers/bloodBank/BloodBank';
import Newsletter from './components/newsletter/Newsletter';
import Hospitals from'./containers/hospitals/Hospitals';
import Feedbacks from './containers/feedbacks/Feedbacks';
import Contact from './containers/contact/Contact';
import './Home.css';

const App=()=> {
  return (
    <div className='App'>
      <div>
        <Header></Header>
      </div>
      <BloodEmergencies></BloodEmergencies>
      <BloodBank></BloodBank>
      <Hospitals></Hospitals>
      <Blog></Blog>
      <Events></Events>
      <Feedbacks></Feedbacks>
      <Newsletter></Newsletter>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App


