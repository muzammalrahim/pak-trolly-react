import React from 'react'
import './footer.css';
import { Link } from 'react-router-dom';
import AdIcon from '../../images/adress.png';
import Phone from '../../images/phone.png';
import Mail from '../../images/mail.png';


export default function Footer() {
  return (
    <>
    <footer class="footer-section">
       
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="footer-left">
                            <div class="footer-logo"> 
                                <h3 className='f-heading'>About Information</h3>
                            </div>
                            <ul className='info'>
                                <li>
                                    <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard.
                                    </p>
                                </li>
                                {/* <li>
                                    <p>Phone: +00 00.000.000</p>
                                </li>
                                <li>
                                    <p>Email: therichposts@gmail.com</p>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-2">
                        <div class="footer-widget">
                        <h3 className='f-heading'>Product</h3>
                            <ul className='info'>
                                <li>
                                    <Link to="#">Lorem Ipsum </Link>  
                                </li>
                                <li>
                                    <Link to="#">Lorem Ipsum </Link>  
                                </li> 
                                <li>
                                    <Link to="#">Lorem Ipsum </Link>  
                                </li> 
                                <li>
                                    <Link to="#">Lorem Ipsum </Link>  
                                </li> 
                                <li>
                                    <Link to="#">Lorem Ipsum </Link>  
                                </li>    
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-2">
                        <div class="footer-widget">
                            <h3 className='f-heading'>Company</h3>
                            <ul className='info'>
                                <li>
                                    <Link to="#">Lorem Ipsum </Link>  
                                </li>
                                <li>
                                    <Link to="#">Lorem Ipsum </Link>  
                                </li> 
                                <li>
                                    <Link to="#">Lorem Ipsum </Link>  
                                </li> 
                                <li>
                                    <Link to="#">Lorem Ipsum </Link>  
                                </li> 
                                <li>
                                    <Link to="#">Lorem Ipsum </Link>  
                                </li>    
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <h3 className='f-heading'>Contact Information</h3>
                        <ul className='info adress'>
                                <li className=''>
                                    <div>
                                        <img src={AdIcon} alt='icon'/>
                                    </div>
                                    <p>
                                    Lorem Ipsum is simply dummy text of the printing and 
                                    </p>
                                </li>

                                <li className=''>
                                    <div>
                                        <img src={Phone} alt='icon'/>
                                    </div>
                                    <p>
                                        +21 123 12547 254
                                    </p>
                                </li>

                                <li className=''>
                                    <div>
                                        <img src={Mail} alt='icon'/>
                                    </div>
                                    <p>
                                    domain@example.com
                                    </p>
                                </li>
                                 
                        </ul>
                    </div>
                </div>
            </div>
            <div class="copyright-reserved">
                <div class="container">
                    <div class="row">
                        <div class="copyright-text">
                            &copy;Lorem Ipsum has been the industry's standard
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}
