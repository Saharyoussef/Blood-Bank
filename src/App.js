import React, { Component } from 'react';
import './App.css';
import Home from './containers/Home/Home';
import {Route ,Routes} from 'react-router';
import { BrowserRouter } from "react-router-dom";
import BloodDonation from './components/BloodDonation/BloodDonation'
import BloodRequest from './components/BloodRequest/BloodRequest';
import BloodBank from './components/BloodBank/BloodBank';
import Hospitals from './components/Hospitals/Hospitals';
import Dashboard from './components/BloodDonation/Dashboard/Dashboard';
import Blog from './components/Blog/Blog';
import Events from './components/Events/Events';
import hospitalDonor from './components/BloodDonation/Dashboard/Hospitals/Hospitals';
import BloodBankDonor from './components/BloodDonation/Dashboard/BloodBanks/BloodBanks';
import Calendar from './components/Global/CalendarEvents';
import Bilan from './components/BloodDonation/Dashboard/Bilan/Bilan';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
              {/*Home Pages */}
              <Route path='/' Component={Home}></Route>
              <Route path='/donation' Component={BloodDonation}></Route>
              <Route path='/request' Component={BloodRequest}></Route>
              <Route path='/bank' Component={BloodBank}></Route>
              <Route path='/hospital' Component={Hospitals}></Route>
              <Route path='/dashboard' Component={Dashboard}></Route>
              <Route path='/blog' Component={Blog}></Route>
              <Route path='/events' Component={Events}></Route>

              {/*Blood Donation:donors dashboard */}
              <Route path='/hospitals-Donors' Component={hospitalDonor}></Route>
              <Route path='/bloodBanks-Donors' Component={BloodBankDonor}></Route>
              <Route path='/calendar' Component={Calendar}></Route>
              <Route path='/bilan' Component={Bilan}></Route>


          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
