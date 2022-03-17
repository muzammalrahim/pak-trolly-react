import React from 'react'
import Slider from "react-slick";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import PL1 from '../../images/product_22.png';
import PL2 from '../../images/product_2.png';
import PL3 from '../../images/product_33.png';
import './feature-products.css'

export default function FeatureProducts() {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        dots: false,
        mobileFirst:true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
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
    <div className='fp-main'>
        <div className='container'>
            <div className='main-title'>
                <h2>Featured Product</h2> 
            </div>  
            <Slider {...settings}>
                {/* ------------------slide 1--------------- */}
                <div className='fp-mian-slide'>
                    <div style={{margin: '0 0 30px 0'}}>
                        <div class="fp-block">
                            <div className='row fp-inner'>
                                <div className='col-md-5'>
                                    <div className='fp-section'>
                                        <img src={PL1} alt=''/>
                                    </div>   
                                </div> 
                                <div className='col-md-7'>
                                <div className='fp-info'>
                                <div className='f-reviews'>
                                    <span className='star'><FaStar/></span>
                                    <span className='star'><FaStar/></span>
                                    <span className='star'><FaStar/></span>
                                    <span className='star'><FaStarHalfAlt/></span>
                                    <span className='star'><FaRegStar/></span>
                                    <span className='rc'>(1 Review)</span>
                                </div>
                                <div class="section-title">
                                    <h5>
                                        Best security cameras that work with Alexa
                                    </h5>
                                
                                </div>
                                <div class="product-price">
                                    <span className='old-proce'>$ 125.00</span> 
                                    <span className='new-proce'>$85.00</span>  
                                </div>
                            
                                
                                <div className='cart-btn'>
                                    <a href="#" class="primary-btn trolly-btn">Add To Trolley</a>
                                </div>
                            </div>  
                                </div>  
                            </div> 

                            
                        </div>
                    </div>

                    <div>
                        <div class="fp-block">
                            <div className='row fp-inner'>
                                <div className='col-md-5'>
                                    <div className='fp-section'>
                                        <img src={PL1} alt=''/>
                                    </div>   
                                </div> 
                                <div className='col-md-7'>
                                <div className='fp-info'>
                                <div className='f-reviews'>
                                    <span className='star'><FaStar/></span>
                                    <span className='star'><FaStar/></span>
                                    <span className='star'><FaStar/></span>
                                    <span className='star'><FaStarHalfAlt/></span>
                                    <span className='star'><FaRegStar/></span>
                                    <span className='rc'>(1 Review)</span>
                                </div>
                                <div class="section-title">
                                    <h5>
                                        Best security cameras that work with Alexa
                                    </h5>
                                
                                </div>
                                <div class="product-price">
                                    <span className='old-proce'>$ 125.00</span> 
                                    <span className='new-proce'>$85.00</span>  
                                </div>
                            
                                
                                <div className='cart-btn'>
                                    <a href="#" class="primary-btn trolly-btn">Add To Trolley</a>
                                </div>
                            </div>  
                                </div>  
                            </div> 

                            
                        </div>
                    </div>
                    
                </div>
                
                {/* ------------------slide 2--------------- */}
                
                <div className='fp-mian-slide'>
                    <div style={{margin: '0 0 30px 0'}}>
                        <div class="fp-block">
                            <div className='row fp-inner'>
                                <div className='col-md-5'>
                                    <div className='fp-section'>
                                        <img src={PL1} alt=''/>
                                    </div>   
                                </div> 
                                <div className='col-md-7'>
                                <div className='fp-info'>
                                <div className='f-reviews'>
                                    <span className='star'><FaStar/></span>
                                    <span className='star'><FaStar/></span>
                                    <span className='star'><FaStar/></span>
                                    <span className='star'><FaStarHalfAlt/></span>
                                    <span className='star'><FaRegStar/></span>
                                    <span className='rc'>(1 Review)</span>
                                </div>
                                <div class="section-title">
                                    <h5>
                                        Best security cameras that work with Alexa
                                    </h5>
                                
                                </div>
                                <div class="product-price">
                                    <span className='old-proce'>$ 125.00</span> 
                                    <span className='new-proce'>$85.00</span>  
                                </div>
                            
                                
                                <div className='cart-btn'>
                                    <a href="#" class="primary-btn trolly-btn">Add To Trolley</a>
                                </div>
                            </div>  
                                </div>  
                            </div> 

                            
                        </div>
                    </div>

                    <div>
                        <div class="fp-block">
                            <div className='row fp-inner'>
                                <div className='col-md-5'>
                                    <div className='fp-section'>
                                        <img src={PL1} alt=''/>
                                    </div>   
                                </div> 
                                <div className='col-md-7'>
                                <div className='fp-info'>
                                <div className='f-reviews'>
                                    <span className='star'><FaStar/></span>
                                    <span className='star'><FaStar/></span>
                                    <span className='star'><FaStar/></span>
                                    <span className='star'><FaStarHalfAlt/></span>
                                    <span className='star'><FaRegStar/></span>
                                    <span className='rc'>(1 Review)</span>
                                </div>
                                <div class="section-title">
                                    <h5>
                                        Best security cameras that work with Alexa
                                    </h5>
                                
                                </div>
                                <div class="product-price">
                                    <span className='old-proce'>$ 125.00</span> 
                                    <span className='new-proce'>$85.00</span>  
                                </div>
                            
                                
                                <div className='cart-btn'>
                                    <a href="#" class="primary-btn trolly-btn">Add To Trolley</a>
                                </div>
                            </div>  
                                </div>  
                            </div> 

                            
                        </div>
                    </div>
                    
                </div>

                {/* ------------------slide 1--------------- */}
                <div className='fp-mian-slide'>
                    <div style={{margin: '0 0 30px 0'}}>
                        <div class="fp-block">
                            <div className='row fp-inner'>
                                <div className='col-md-5'>
                                    <div className='fp-section'>
                                        <img src={PL1} alt=''/>
                                    </div>   
                                </div> 
                                <div className='col-md-7'>
                                <div className='fp-info'>
                                <div className='f-reviews'>
                                    <span className='star'><FaStar/></span>
                                    <span className='star'><FaStar/></span>
                                    <span className='star'><FaStar/></span>
                                    <span className='star'><FaStarHalfAlt/></span>
                                    <span className='star'><FaRegStar/></span>
                                    <span className='rc'>(1 Review)</span>
                                </div>
                                <div class="section-title">
                                    <h5>
                                        Best security cameras that work with Alexa
                                    </h5>
                                
                                </div>
                                <div class="product-price">
                                    <span className='old-proce'>$ 125.00</span> 
                                    <span className='new-proce'>$85.00</span>  
                                </div>
                            
                                
                                <div className='cart-btn'>
                                    <a href="#" class="primary-btn trolly-btn">Add To Trolley</a>
                                </div>
                            </div>  
                                </div>  
                            </div> 

                            
                        </div>
                    </div>

                    <div>
                        <div class="fp-block">
                            <div className='row fp-inner'>
                                <div className='col-md-5'>
                                    <div className='fp-section'>
                                        <img src={PL1} alt=''/>
                                    </div>   
                                </div> 
                                <div className='col-md-7'>
                                <div className='fp-info'>
                                <div className='f-reviews'>
                                    <span className='star'><FaStar/></span>
                                    <span className='star'><FaStar/></span>
                                    <span className='star'><FaStar/></span>
                                    <span className='star'><FaStarHalfAlt/></span>
                                    <span className='star'><FaRegStar/></span>
                                    <span className='rc'>(1 Review)</span>
                                </div>
                                <div class="section-title">
                                    <h5>
                                        Best security cameras that work with Alexa
                                    </h5>
                                
                                </div>
                                <div class="product-price">
                                    <span className='old-proce'>$ 125.00</span> 
                                    <span className='new-proce'>$85.00</span>  
                                </div>
                            
                                
                                <div className='cart-btn'>
                                    <a href="#" class="primary-btn trolly-btn">Add To Trolley</a>
                                </div>
                            </div>  
                                </div>  
                            </div> 

                            
                        </div>
                    </div>
                    
                </div>

                {/* Portion 1 */}
                {/* ------------------slide 1--------------- */}
                <div className='fp-mian-slide'>
                    <div style={{margin: '0 0 30px 0'}}>
                        <div class="fp-block">
                            <div className='row fp-inner'>
                                <div className='col-md-5'>
                                    <div className='fp-section'>
                                        <img src={PL1} alt=''/>
                                    </div>   
                                </div> 
                                <div className='col-md-7'>
                                <div className='fp-info'>
                                <div className='f-reviews'>
                                    <span className='star'><FaStar/></span>
                                    <span className='star'><FaStar/></span>
                                    <span className='star'><FaStar/></span>
                                    <span className='star'><FaStarHalfAlt/></span>
                                    <span className='star'><FaRegStar/></span>
                                    <span className='rc'>(1 Review)</span>
                                </div>
                                <div class="section-title">
                                    <h5>
                                        Best security cameras that work with Alexa
                                    </h5>
                                
                                </div>
                                <div class="product-price">
                                    <span className='old-proce'>$ 125.00</span> 
                                    <span className='new-proce'>$85.00</span>  
                                </div>
                            
                                
                                <div className='cart-btn'>
                                    <a href="#" class="primary-btn trolly-btn">Add To Trolley</a>
                                </div>
                            </div>  
                                </div>  
                            </div> 

                            
                        </div>
                    </div>

                    <div>
                        <div class="fp-block">
                            <div className='row fp-inner'>
                                <div className='col-md-5'>
                                    <div className='fp-section'>
                                        <img src={PL1} alt=''/>
                                    </div>   
                                </div> 
                                <div className='col-md-7'>
                                <div className='fp-info'>
                                <div className='f-reviews'>
                                    <span className='star'><FaStar/></span>
                                    <span className='star'><FaStar/></span>
                                    <span className='star'><FaStar/></span>
                                    <span className='star'><FaStarHalfAlt/></span>
                                    <span className='star'><FaRegStar/></span>
                                    <span className='rc'>(1 Review)</span>
                                </div>
                                <div class="section-title">
                                    <h5>
                                        Best security cameras that work with Alexa
                                    </h5>
                                
                                </div>
                                <div class="product-price">
                                    <span className='old-proce'>$ 125.00</span> 
                                    <span className='new-proce'>$85.00</span>  
                                </div>
                            
                                
                                <div className='cart-btn'>
                                    <a href="#" class="primary-btn trolly-btn">Add To Trolley</a>
                                </div>
                            </div>  
                                </div>  
                            </div> 

                            
                        </div>
                    </div>
                    
                </div>
                
                {/* ------------------slide 2--------------- */}
                
                <div className='fp-mian-slide'>
                    <div style={{margin: '0 0 30px 0'}}>
                        <div class="fp-block">
                            <div className='row fp-inner'>
                                <div className='col-md-5'>
                                    <div className='fp-section'>
                                        <img src={PL1} alt=''/>
                                    </div>   
                                </div> 
                                <div className='col-md-7'>
                                <div className='fp-info'>
                                <div className='f-reviews'>
                                    <span className='star'><FaStar/></span>
                                    <span className='star'><FaStar/></span>
                                    <span className='star'><FaStar/></span>
                                    <span className='star'><FaStarHalfAlt/></span>
                                    <span className='star'><FaRegStar/></span>
                                    <span className='rc'>(1 Review)</span>
                                </div>
                                <div class="section-title">
                                    <h5>
                                        Best security cameras that work with Alexa
                                    </h5>
                                
                                </div>
                                <div class="product-price">
                                    <span className='old-proce'>$ 125.00</span> 
                                    <span className='new-proce'>$85.00</span>  
                                </div>
                            
                                
                                <div className='cart-btn'>
                                    <a href="#" class="primary-btn trolly-btn">Add To Trolley</a>
                                </div>
                            </div>  
                                </div>  
                            </div> 

                            
                        </div>
                    </div>

                    <div>
                        <div class="fp-block">
                            <div className='row fp-inner'>
                                <div className='col-md-5'>
                                    <div className='fp-section'>
                                        <img src={PL1} alt=''/>
                                    </div>   
                                </div> 
                                <div className='col-md-7'>
                                <div className='fp-info'>
                                <div className='f-reviews'>
                                    <span className='star'><FaStar/></span>
                                    <span className='star'><FaStar/></span>
                                    <span className='star'><FaStar/></span>
                                    <span className='star'><FaStarHalfAlt/></span>
                                    <span className='star'><FaRegStar/></span>
                                    <span className='rc'>(1 Review)</span>
                                </div>
                                <div class="section-title">
                                    <h5>
                                        Best security cameras that work with Alexa
                                    </h5>
                                
                                </div>
                                <div class="product-price">
                                    <span className='old-proce'>$ 125.00</span> 
                                    <span className='new-proce'>$85.00</span>  
                                </div>
                            
                                
                                <div className='cart-btn'>
                                    <a href="#" class="primary-btn trolly-btn">Add To Trolley</a>
                                </div>
                            </div>  
                                </div>  
                            </div> 

                            
                        </div>
                    </div>
                    
                </div>

                {/* ------------------slide 1--------------- */}
                <div className='fp-mian-slide'>
                    <div style={{margin: '0 0 30px 0'}}>
                        <div class="fp-block">
                            <div className='row fp-inner'>
                                <div className='col-md-5'>
                                    <div className='fp-section'>
                                        <img src={PL1} alt=''/>
                                    </div>   
                                </div> 
                                <div className='col-md-7'>
                                <div className='fp-info'>
                                <div className='f-reviews'>
                                    <span className='star'><FaStar/></span>
                                    <span className='star'><FaStar/></span>
                                    <span className='star'><FaStar/></span>
                                    <span className='star'><FaStarHalfAlt/></span>
                                    <span className='star'><FaRegStar/></span>
                                    <span className='rc'>(1 Review)</span>
                                </div>
                                <div class="section-title">
                                    <h5>
                                        Best security cameras that work with Alexa
                                    </h5>
                                
                                </div>
                                <div class="product-price">
                                    <span className='old-proce'>$ 125.00</span> 
                                    <span className='new-proce'>$85.00</span>  
                                </div>
                            
                                
                                <div className='cart-btn'>
                                    <a href="#" class="primary-btn trolly-btn">Add To Trolley</a>
                                </div>
                            </div>  
                                </div>  
                            </div> 

                            
                        </div>
                    </div>

                    <div>
                        <div class="fp-block">
                            <div className='row fp-inner'>
                                <div className='col-md-5'>
                                    <div className='fp-section'>
                                        <img src={PL1} alt=''/>
                                    </div>   
                                </div> 
                                <div className='col-md-7'>
                                <div className='fp-info'>
                                <div className='f-reviews'>
                                    <span className='star'><FaStar/></span>
                                    <span className='star'><FaStar/></span>
                                    <span className='star'><FaStar/></span>
                                    <span className='star'><FaStarHalfAlt/></span>
                                    <span className='star'><FaRegStar/></span>
                                    <span className='rc'>(1 Review)</span>
                                </div>
                                <div class="section-title">
                                    <h5>
                                        Best security cameras that work with Alexa
                                    </h5>
                                
                                </div>
                                <div class="product-price">
                                    <span className='old-proce'>$ 125.00</span> 
                                    <span className='new-proce'>$85.00</span>  
                                </div>
                            
                                
                                <div className='cart-btn'>
                                    <a href="#" class="primary-btn trolly-btn">Add To Trolley</a>
                                </div>
                            </div>  
                                </div>  
                            </div> 

                            
                        </div>
                    </div>
                    
                </div>
            </Slider>  
        </div>
        
    </div>
  )
}
