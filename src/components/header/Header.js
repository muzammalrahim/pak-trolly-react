import React from 'react';
import Search from './search-area/Search';
import TopHeader from './top-header/TopHeader';
import Nav from './navbar/Nav';
// import '../../../public/assets/css//slicknav.css';

export default function Header() {
  return (
      <>
        <div className='header-main'>
            <TopHeader></TopHeader>
            <Search></Search>
            <Nav></Nav>
        </div>
      </>
  )
}
