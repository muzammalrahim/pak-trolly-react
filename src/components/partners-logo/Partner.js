import React from 'react';
import './partners.css';
import Img1 from '../../images/client-logo.svg'
import Slider from "react-slick";

export default function Partner() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        mobileFirst:true,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        dots: false,
        arrows: false,
        autoplay:true,
        autoplaySpeed:1500,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
      <>
        <div class="partner-logo">
            <div class="container">
            <Slider {...settings}>
                <div class="logo-item">
                    <div class="tablecell-inner">
                        <img src={Img1} alt="" />
                    </div>
                </div>

                <div class="logo-item">
                    <div class="tablecell-inner">
                        <img src={Img1} alt="" />
                    </div>
                </div>

                <div class="logo-item">
                    <div class="tablecell-inner">
                        <img src={Img1} alt="" />
                    </div>
                </div>

                <div class="logo-item">
                    <div class="tablecell-inner">
                        <img src={Img1} alt="" />
                    </div>
                </div>

                <div class="logo-item">
                    <div class="tablecell-inner">
                        <img src={Img1} alt="" />
                    </div>
                </div>

                <div class="logo-item">
                    <div class="tablecell-inner">
                        <img src={Img1} alt="" />
                    </div>
                </div>

                <div class="logo-item">
                    <div class="tablecell-inner">
                        <img src={Img1} alt="" />
                    </div>
                </div>

                <div class="logo-item">
                    <div class="tablecell-inner">
                        <img src={Img1} alt="" />
                    </div>
                </div>

                <div class="logo-item">
                    <div class="tablecell-inner">
                        <img src={Img1} alt="" />
                    </div>
                </div>
            </Slider>
          
                
            </div>
        </div>
      </>
  )
}
