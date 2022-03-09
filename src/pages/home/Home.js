import React from 'react'
import BannerSec from '../../components/banner-sec/BannerSec';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import HeroSection from './hero-section/HeroSection';
import Partner from '../../components/partners-logo/Partner';
import WeekDeal from '../../components/week-deals/WeekDeal';
import Services from '../../components/services/Services';



export default function Home() {
  return (
    <>
    <div>
      <Header></Header>
      <HeroSection></HeroSection>
      <BannerSec></BannerSec>
      <Services></Services>
      <WeekDeal></WeekDeal>
      <Partner></Partner>
      <Footer></Footer>
    </div>
    </>
  )
}

