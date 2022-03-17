import React from 'react'
import './subscribe.css'
import Mail from '../../images/subscribe.svg'
import NavIcon from '../../images/mail-nav.png';
import Facebook from '../../images/facebook.png'
import Insta from '../../images/insta.png'
import Youtube from '../../images/youtube.png'

export default function Subscribe() {
  return (
    <div className='subscribe'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-9 col-md-12 col-sm-12'>
                    <div className='sl-side'>
                        
                        <div className='s-text'>
                            <div className='s-icon'>
                                <img src={Mail} alt="icon"/>    
                            </div>
                            <p>Connected With Our Email Updates</p>    
                        </div>
                        <div className='s-form'>
                            <input placeholder='Enter email address here' />
                            <img src={NavIcon} alt='icon'/>  
                        </div>    
                    </div>  
                </div>  
                <div className='col-lg-3 col-md-12 col-sm-12'>
                    <div className='social-icons'>
                        <img className='' src={Facebook} alt='facebook'/>
                        <img className='insta' src={Insta} alt='insta'/>
                        <img className='' src={Youtube} alt='youtube'/>
                    </div> 
                </div>  
            </div>
        </div>
    </div>
  )
}
