import React from 'react'
import './home-categories.css';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import BG from '../../images/cbg.svg';
import C1 from '../../images/c1.svg';
import C2 from '../../images/c2.svg';
import C3 from '../../images/c3.svg';
import C4 from '../../images/c4.svg';
import C5 from '../../images/c5.svg';




export default function HomeCategories() {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        initialSlide: 0,
        dots: true,
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
    <div className='h-cate-main cate-slider' style={{ backgroundImage: `url(${BG})` }}>
        <div className='container'>
            <Slider {...settings}>
                <div className='slide'>
                    <Link to="#">
                        <img src={C1} alt="slide-img"/>
                        <p>Shop Now</p>
                    </Link>  
                </div>
                <div>
                    <Link to="#">
                        <img src={C2} alt="slide-img"/>
                    </Link>  
                </div> 
                <div>
                    <Link to="#">
                        <img src={C3} alt="slide-img"/>
                    </Link>  
                </div>
                <div>
                    <Link to="#">
                        <img src={C4} alt="slide-img"/>
                    </Link>  
                </div> 
                <div>
                    <Link to="#">
                        <img src={C5} alt="slide-img"/>
                    </Link>  
                </div> 
                <div>
                    <Link to="#">
                        <img src={C1} alt="slide-img"/>
                    </Link>  
                </div>
                <div>
                    <Link to="#">
                        <img src={C2} alt="slide-img"/>
                    </Link>  
                </div> 
                <div>
                    <Link to="#">
                        <img src={C3} alt="slide-img"/>
                    </Link>  
                </div>
                <div>
                    <Link to="#">
                        <img src={C4} alt="slide-img"/>
                    </Link>  
                </div> 
            </Slider> 
        </div>
    </div>
  )
}
