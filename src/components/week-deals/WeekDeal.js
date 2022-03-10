import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Slider from "react-slick";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import PL1 from '../../images/product_1.png';
import PL2 from '../../images/product_2.png';
import './week-deal.css';

export default function WeekDeal() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
      };
  return (
    <>
         <section class="deal-of-week set-bg spad">
            <div class="container">
                <div className='main-title'>
                    <h2>Deal Of The Day</h2> 
                </div>
            <Slider {...settings}>
                {/* ------------------slide 1--------------- */}
                <div>
                    <div class="wd-block">
                        <div className='ws-section'>
                        <Carousel>
                            <Carousel.Item interval={10000}>
                                <img src={PL1} alt="img"/>
                                {/* <Carousel.Caption>
                                    test
                                </Carousel.Caption> */}
                            </Carousel.Item> 
                            <Carousel.Item interval={10000}>
                                <img src={PL2} alt="img"/>
                            </Carousel.Item> 
                        </Carousel>
                        </div>
                        <div className='ws-info'>
                            <div class="section-title">
                                <h5>
                                    Best security cameras that work with Alexa
                                </h5>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...
                                </p>
                            </div>
                            <div class="product-price">
                                <span className='old-proce'>$ 125.00</span> 
                                <span className='new-proce'>$85.00</span>  
                            </div>
                            <div className='reviews'>
                                <span className='star'><FaStar/></span>
                                <span className='star'><FaStar/></span>
                                <span className='star'><FaStar/></span>
                                <span className='star'><FaStarHalfAlt/></span>
                                <span className='star'><FaRegStar/></span>
                                <span className='rc'>(1 Review)</span>
                            </div>
                            <div class="countdown-timer" id="countdown">
                                <div class="cd-item">
                                    <span>56</span>
                                    <p>Days</p>
                                </div>
                                <div class="cd-item">
                                    <span>12</span>
                                    <p>Hrs</p>
                                </div>
                                <div class="cd-item">
                                    <span>40</span>
                                    <p>Mins</p>
                                </div>
                                <div class="cd-item">
                                    <span>52</span>
                                    <p>Secs</p>
                                </div>
                            </div>
                            <a href="#" class="primary-btn trolly-btn">Add To Trolley</a>
                        </div> 
                    </div>
                </div>
                
                {/* ------------------slide 2--------------- */}
                <div>
                    <div class="wd-block">
                        <div className='ws-section'>
                        <Carousel>
                            <Carousel.Item interval={10000}>
                                <img src={PL1} alt="img"/>
                            </Carousel.Item> 
                            <Carousel.Item interval={10000}>
                                <img src={PL2} alt="img"/>
                            </Carousel.Item> 
                        </Carousel>
                        </div>
                        <div className='ws-info'>
                            <div class="section-title">
                                <h5>
                                    Best security cameras that work with Alexa
                                </h5>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...
                                </p>
                            </div>
                            <div class="product-price">
                                <span className='old-proce'>$ 125.00</span> 
                                <span className='new-proce'>$85.00</span>  
                            </div>
                            <div className='reviews'>
                                <span className='star'><FaStar/></span>
                                <span className='star'><FaStar/></span>
                                <span className='star'><FaStar/></span>
                                <span className='star'><FaStarHalfAlt/></span>
                                <span className='star'><FaRegStar/></span>
                                <span className='rc'>(1 Review)</span>
                            </div>
                            <div class="countdown-timer" id="countdown">
                                <div class="cd-item">
                                    <span>56</span>
                                    <p>Days</p>
                                </div>
                                <div class="cd-item">
                                    <span>12</span>
                                    <p>Hrs</p>
                                </div>
                                <div class="cd-item">
                                    <span>40</span>
                                    <p>Mins</p>
                                </div>
                                <div class="cd-item">
                                    <span>52</span>
                                    <p>Secs</p>
                                </div>
                            </div>
                            <a href="#" class="primary-btn trolly-btn">Add To Trolley</a>
                        </div> 
                    </div>
                </div>


                {/* ------------------slide 1--------------- */}
                <div>
                    <div class="wd-block">
                        <div className='ws-section'>
                        <Carousel>
                            <Carousel.Item interval={10000}>
                                <img src={PL1} alt="img"/>
                            </Carousel.Item> 
                            <Carousel.Item interval={10000}>
                                <img src={PL2} alt="img"/>
                            </Carousel.Item> 
                        </Carousel>
                        </div>
                        <div className='ws-info'>
                            <div class="section-title">
                                <h5>
                                    Best security cameras that work with Alexa
                                </h5>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...
                                </p>
                            </div>
                            <div class="product-price">
                                <span className='old-proce'>$ 125.00</span> 
                                <span className='new-proce'>$85.00</span>  
                            </div>
                            <div className='reviews'>
                                <span className='star'><FaStar/></span>
                                <span className='star'><FaStar/></span>
                                <span className='star'><FaStar/></span>
                                <span className='star'><FaStarHalfAlt/></span>
                                <span className='star'><FaRegStar/></span>
                                <span className='rc'>(1 Review)</span>
                            </div>
                            <div class="countdown-timer" id="countdown">
                                <div class="cd-item">
                                    <span>56</span>
                                    <p>Days</p>
                                </div>
                                <div class="cd-item">
                                    <span>12</span>
                                    <p>Hrs</p>
                                </div>
                                <div class="cd-item">
                                    <span>40</span>
                                    <p>Mins</p>
                                </div>
                                <div class="cd-item">
                                    <span>52</span>
                                    <p>Secs</p>
                                </div>
                            </div>
                            <a href="#" class="primary-btn trolly-btn">Add To Trolley</a>
                        </div> 
                    </div>
                </div>
               
            </Slider>
            
                
            </div>
        </section>
    </>
  )
}
