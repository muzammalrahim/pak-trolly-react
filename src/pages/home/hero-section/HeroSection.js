import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Slide1 from '../../../images/home/slide-1.png'
import './hero-section.css';

export default function HeroSection() {
  return (
      <>
        <section class="hero-section">
            <Carousel>
                <Carousel.Item interval={1000} style={{ backgroundImage: `url(${Slide1})` }}>
                    {/* <img
                    className="d-block w-100"
                    src={Slide1}
                    alt="First slide"
                    /> */}
                    <Carousel.Caption>
                    <p>Up To 40% Discount</p>
                    <h3>Microsoft Surface Book Laptop</h3>
                    <button className='cta-btn'>Shop Now</button>
                    </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item interval={5000} style={{ backgroundImage: `url(${Slide1})` }}>
                    <img
                    className="d-block w-100"
                    src={Slide1}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <p>Up To 40% Discount</p>
                    <h3>Microsoft Surface Book Laptop</h3>
                    <button className='cta-btn'>Shop Now</button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={5000} style={{ backgroundImage: `url(${Slide1})` }}>
                    <img
                    className="d-block w-100"
                    src={Slide1}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <p>Up To 40% Discount</p>
                    <h3>Microsoft Surface Book Laptop</h3>
                    <button className='cta-btn'>Shop Now</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
      </>
    
  )
}
