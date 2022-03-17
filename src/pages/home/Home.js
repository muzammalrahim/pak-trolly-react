import React from 'react'
import Header from '../../components/header/Header';
import HeroSection from './hero-section/HeroSection';
import BannerSec from '../../components/banner-sec/BannerSec';
import Services from '../../components/services/Services';
import HomeTabs from '../../components/tab-slider/HomeTabs';
import HomeCategories from '../../components/categories/HomeCategories';
import FeatureProducts from '../../components/feature-products/FeatureProducts';
import TestimonialSlider from '../../components/testimonial-slider/TestimonialSlider';
import Partner from '../../components/partners-logo/Partner';
import Subscribe from '../../components/subscribe/Subscribe';
import Footer from '../../components/footer/Footer';
import WeekDeal from '../../components/week-deals/WeekDeal';
import Ad from '../../images/ad-1.png';




export default function Home() {
  return (
    <>
    <div>
      <Header></Header>
      <HeroSection></HeroSection>
      <BannerSec></BannerSec>
      <Services></Services>
      <HomeTabs></HomeTabs>
      <div className='ads' style={{padding: '40px 0 20px 0'}}>
        <div className='container'>
          <img src={Ad} className="w-100 d-block" alt="ad-image"/> 
        </div>
      </div>
      <HomeCategories></HomeCategories>
      <FeatureProducts/>
      <div className='ads' style={{padding: '40px 0 20px 0'}}>
        <div className='container'>
          <img src={Ad} className="w-100 d-block" alt="ad-image"/> 
        </div>
      </div>
      <WeekDeal></WeekDeal>
      <div className='ads' style={{padding: '40px 0 20px 0'}}>
        <div className='container'>
          <img src={Ad} className="w-100 d-block" alt="ad-image"/> 
        </div>
      </div>
      <TestimonialSlider></TestimonialSlider>
      <Partner></Partner>
      <Subscribe/>
      <Footer></Footer>
    </div>
    </>
  )
}

