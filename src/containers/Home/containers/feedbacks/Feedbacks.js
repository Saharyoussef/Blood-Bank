import React from 'react';
import './feedbacks.css';
import feedback1 from '../../../../assets/feedback1.jpg';
import feedback2 from '../../../../assets/feedback2.jpg';
import feedback3 from '../../../../assets/feedback3.jpg';

const Feedbacks=()=> {
  return (
  
   <div className="tem">

          <h1 className="gradient__text">Blood Donors Feedbacks</h1>

          <div className="container1">
              
              <div className="container">
                  <div className="person">
                      <div className="personi">
                          
                          <div className="front">
                            <img src={feedback1} alt='people'></img>
                          </div>
                          
                          <div className="back">
                            <p>"After needing a blood transfusion during a medical emergency, I became a blood donor to give back. I cannot thank blood donors enough for their selflessness."</p>
                            <h2>Sarra Ali 22 years old</h2>
                          </div>
                      
                      </div>
                  </div>
              </div>
              
              <div className="container">
                <div className="person">
                  <div className="personi">
                      
                      <div className="front">
                          <img src={feedback2} alt='people'></img>
                      </div>
                      
                      <div class="back">
                          <p>"I've been a regular blood donor for years, and it's one of the most rewarding experiences. Knowing that my blood can help save lives is incredibly gratifying."</p>
                          <h2>Adam 25 years old</h2>
                      </div>

                  </div>
              </div>
          </div>

          <div className="container">
                  <div className="person">
                      <div className="personi">
                          
                          <div className="front">
                            <img src={feedback3} alt='people'></img>
                          </div>
                          
                          <div className="back">
                            <p>"I recently donated blood for the first time, and it was such a fulfilling experience! Knowing that my donation could potentially save a life made me feel happy. "</p>
                            <h2>Rayan 28 years old</h2>
                          </div>
                      
                      </div>
                  </div>
          </div>

        </div>
        
      </div>
  )
}

export default Feedbacks