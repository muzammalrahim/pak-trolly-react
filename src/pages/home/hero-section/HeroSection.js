import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Slide1 from '../../../images/home/slide-1.png'
import './hero-section.css';

export default function HeroSection() {
  return (
      <>
        <section class="hero-section">
            <Carousel>
                <Carousel.Item interval={10000}>
                    <img
                    className="d-block w-100"
                    src={Slide1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <p>Up To 40% Discount</p>
                    <h3>Microsoft Surface Book Laptop</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item interval={50000}>
                    <img
                    className="d-block w-100"
                    src={Slide1}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Slide1}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
      </>
    
  )
}
