import React from 'react'
import BannerSec from '../../components/banner-sec/BannerSec';
import Services from '../../components/services/Services';
import HomeTabs from '../../components/tab-slider/HomeTabs';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import HeroSection from './hero-section/HeroSection';
import Partner from '../../components/partners-logo/Partner';
import WeekDeal from '../../components/week-deals/WeekDeal';




export default function Home() {
  return (
    <>
    <div>
      <Header></Header>
      <HeroSection></HeroSection>
      <BannerSec></BannerSec>
      <Services></Services>
      <HomeTabs></HomeTabs>
      
      <WeekDeal></WeekDeal>
      <Partner></Partner>
      <Footer></Footer>
    </div>
    </>
  )
}

