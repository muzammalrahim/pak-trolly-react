import React, { useState } from "react";
import "./nav.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";



const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
    
      <nav className="main-nav">
        <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMenu(!showMenu)}>
              <GiHamburgerMenu />
            </a>
        </div>
        {/* 2nd menu part  */}
        <div
          className={
            showMenu ? "menu-link mobile-menu-link" : "menu-link"
          }>
            <div className="container">
                <ul className="menu-links">
                    <li className="active">
                    <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                    <NavLink to="#">Electronics</NavLink>
                    </li>
                    <li>
                    <NavLink to="#">Today’s Deal</NavLink>
                    </li>
                    <li>
                    <NavLink to="#">Smart Mobiles</NavLink>
                    </li>
                    <li>
                    <NavLink to="#">CCTV Camera’s</NavLink>
                    </li>
                </ul>
          </div>
          
        </div>
      </nav>

      
    </>
  );
};

export default Nav;