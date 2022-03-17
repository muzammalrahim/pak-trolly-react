import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import './nav.css';



export default function Nav() {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
      <>
      <div class="nav-item">
                <div class="container">
                    
                    <nav class="nav-menu mobile-menu">
                        
                    
                        <ul>
                            <li class="active"><a href="#">Home</a></li>
                            <li><a href="#">Electronics</a></li>
                            <li><a href="#">Today’s Deal</a>
                                <ul class="dropdown">
                                    <li><a href="#">Men's</a></li>
                                    <li><a href="#">Women's</a></li>
                                    <li><a href="#">Kid's</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Smart Mobiles</a></li>
                            <li><a href="#">CCTV Camera’s</a>
                                <ul class="dropdown">
                                    <li><a href="#">Blog Details</a></li>
                                    <li><a href="#">Shopping Cart</a></li>
                                    <li><a href="#">Checkout</a></li>
                                    <li><a href="#">Faq</a></li>
                                    <li><a href="#">Register</a></li>
                                    <li><a href="#">Login</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Contact</a></li> 
                        </ul>
                    </nav>
                    <div id="mobile-menu-wrap"></div>
                </div>
            </div>
      </>
  )
}
