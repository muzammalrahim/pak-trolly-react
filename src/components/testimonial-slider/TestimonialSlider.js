import { useState } from 'react';
import {FaQuoteLeft} from "react-icons/fa";
import Carousel from 'react-bootstrap/Carousel'
import Slide1 from '../../images/product_1.png'
import Slider from "react-slick";
import './testimonial.css'

export default function TestimonialSlider() {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        dots: false,
        // responsive: [
        //   {
        //     breakpoint: 1024,
        //     settings: {
        //       slidesToShow: 3,
        //       slidesToScroll: 3,
        //       infinite: true,
        //       dots: true
        //     }
        //   },
        //   {
        //     breakpoint: 600,
        //     settings: {
        //       slidesToShow: 2,
        //       slidesToScroll: 2,
        //       initialSlide: 2
        //     }
        //   },
        //   {
        //     breakpoint: 480,
        //     settings: {
        //       slidesToShow: 1,
        //       slidesToScroll: 1
        //     }
        //   }
        // ]
      };

    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className='testimonial-main'>
        <div className='container'>
           <Slider {...settings}>
               <div>
                   <div className='row t-slider-inner'>
                        <div className='col-sm-12 col-md-12 col-lg-2'>
                           <div className='s-wrap'>
                               <img src={Slide1} alt=""/>
                            </div> 
                        </div>
                        <div className='col-sm-12 col-md-12 col-lg-10'>
                            <div className='testi-info'>
                                <div className='qoutes'><FaQuoteLeft/></div>
                                <div className='slider-content'>
                                    <p>
                                    Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web 
                                    sites still in their infancy. Various versions have evolved over the years, sometimes by accident. 
                                    sed do eiusmod tempor tempor enim..
                                    </p>
                                    <h6>Robot Mark</h6>
                                </div>
                            </div>      
                        </div>
                    </div>
               </div>
               <div>1</div>
               <div>1</div>
            </Slider>
        </div>  
    </div>
  )
}
