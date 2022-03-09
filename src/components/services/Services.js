import React from 'react';
import './services.css'
import Ser1 from '../../images/ser-1.svg';
import Ser2 from '../../images/ser-2.png';
import Ser3 from '../../images/ser-3.png';
import Ser4 from '../../images/ser-4.png';

export default function Services() {
  return (
      <>
      <div className='services-main'>
          <div className='container'>
              <div className='ser-inner'>
                  <div className=''>
                    <div class="single-service">
                        <div>
                            <img src={Ser1} alt="img"/>
                        </div>
                        <div className='in-text'>
                            <h4>Free shiping</h4>
                            <p>Orders over $100</p>
                        </div> 
                    </div>
                  </div>

                  <div className=''>
                    <div class="single-service">
                        <div>
                            <img src={Ser2} alt="img"/>
                        </div>
                        <div className='in-text'>
                            <h4>Free shiping</h4>
                            <p>Orders over $100</p>
                        </div> 
                    </div>
                  </div>

                  <div className=''>
                    <div class="single-service">
                        <div>
                            <img src={Ser3} alt="img"/>
                        </div>
                        <div className='in-text'>
                            <h4>Free shiping</h4>
                            <p>Orders over $100</p>
                        </div> 
                    </div>
                  </div>

                  <div className=''>
                    <div class="single-service last-child">
                        <div>
                            <img src={Ser4} alt="img"/>
                        </div>
                        <div className='in-text'>
                            <h4>Free shiping</h4>
                            <p>Orders over $100</p>
                        </div> 
                    </div>
                  </div>
              </div>
          </div>
        </div>
      </>
    
  )
}
