import React from 'react';
import './home-tab.css';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Slider from "react-slick";
import '../../pages/product-listing/product-lists/listing.css';
import { FaHeart, FaExchangeAlt, FaEye } from "react-icons/fa";
import PL1 from '../../images/product_1.png';
import PL2 from '../../images/product_2.png';
import PL3 from '../../images/product_3.png';
import ViewModal from '../view-product-modal/ViewModal'



export default function HomeTabs() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        dots: false,
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
    <div className='home-tabs-main'>
       <div className='container'>
       <Tabs defaultActiveKey="Headphone" id="uncontrolled-tab-example" className="mb-3">

        <Tab eventKey="Headphone" title="Headphone">
            <Slider {...settings}>
                <div>
                    <div className="product_box_info">
                        <span className="stock-tag">New</span>
                        <div className="overlay_icons">
                            <span className="heart-icon"><FaHeart /><ViewModal/></span>
                            <span className="exchange-icon"><FaExchangeAlt /></span>
                            <span className="eye-icon"><FaEye /></span>
                        </div>
                        <div className="Product_img">
                            <img src={PL2} alt="product" />
                        </div>
                        <div className="Product_text clearfix">
                            <ul className="rating_star">
                                <li className="deal_hot">
                                    <i className="fa fa-star yellow"></i>
                                    <i className="fa fa-star yellow"></i>
                                    <i className="fa fa-star gray"></i>
                                    <i className="fa fa-star gray"></i>
                                    <i className="fa fa-star gray"></i>
                                    <span>(2 Review) </span>
                                </li>
                            </ul>
                            <h2>New Apple iphone 12 pro Max Gold</h2>
                            <div className="price-tag">
                                <span className="old_price">$123.21</span>
                                <span className="new_price">$123.21</span>
                            </div>
                            <button type="button" className="add-trolley">Add to Trolley</button>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="product_box_info">
                        <span className="stock-tag">New</span>
                        <div className="overlay_icons">
                            <span className="heart-icon"><FaHeart /></span>
                            <span className="exchange-icon"><FaExchangeAlt /></span>
                            <span className="eye-icon"><FaEye /></span>
                        </div>
                        <div className="Product_img">
                            <img src={PL3} alt="product" />
                        </div>
                        <div className="Product_text clearfix">
                            <ul className="rating_star">
                                <li className="deal_hot">
                                    <i className="fa fa-star yellow"></i>
                                    <i className="fa fa-star yellow"></i>
                                    <i className="fa fa-star gray"></i>
                                    <i className="fa fa-star gray"></i>
                                    <i className="fa fa-star gray"></i>
                                    <span>(2 Review) </span>
                                </li>
                            </ul>
                            <h2>New Apple iphone 12 pro Max Gold</h2>
                            <div className="price-tag">
                                <span className="old_price">$123.21</span>
                                <span className="new_price">$123.21</span>
                            </div>
                            <button type="button" className="add-trolley">Add to Trolley</button>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="product_box_info">
                        <span className="stock-tag">New</span>
                        <div className="overlay_icons">
                            <span className="heart-icon"><FaHeart /></span>
                            <span className="exchange-icon"><FaExchangeAlt /></span>
                            <span className="eye-icon"><FaEye /></span>
                        </div>
                        <div className="Product_img">
                            <img src={PL1} alt="product" />
                        </div>
                        <div className="Product_text clearfix">
                            <ul className="rating_star">
                                <li className="deal_hot">
                                    <i className="fa fa-star yellow"></i>
                                    <i className="fa fa-star yellow"></i>
                                    <i className="fa fa-star gray"></i>
                                    <i className="fa fa-star gray"></i>
                                    <i className="fa fa-star gray"></i>
                                    <span>(2 Review) </span>
                                </li>
                            </ul>
                            <h2>New Apple iphone 12 pro Max Gold</h2>
                            <div className="price-tag">
                                <span className="old_price">$123.21</span>
                                <span className="new_price">$123.21</span>
                            </div>
                            <button type="button" className="add-trolley">Add to Trolley</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="product_box_info">
                        <span className="stock-tag">New</span>
                        <div className="overlay_icons">
                            <span className="heart-icon"><FaHeart /></span>
                            <span className="exchange-icon"><FaExchangeAlt /></span>
                            <span className="eye-icon"><FaEye /></span>
                        </div>
                        <div className="Product_img">
                            <img src={PL2} alt="product" />
                        </div>
                        <div className="Product_text clearfix">
                            <ul className="rating_star">
                                <li className="deal_hot">
                                    <i className="fa fa-star yellow"></i>
                                    <i className="fa fa-star yellow"></i>
                                    <i className="fa fa-star gray"></i>
                                    <i className="fa fa-star gray"></i>
                                    <i className="fa fa-star gray"></i>
                                    <span>(2 Review) </span>
                                </li>
                            </ul>
                            <h2>New Apple iphone 12 pro Max Gold</h2>
                            <div className="price-tag">
                                <span className="old_price">$123.21</span>
                                <span className="new_price">$123.21</span>
                            </div>
                            <button type="button" className="add-trolley">Add to Trolley</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="product_box_info">
                        <span className="stock-tag">New</span>
                        <div className="overlay_icons">
                            <span className="heart-icon"><FaHeart /></span>
                            <span className="exchange-icon"><FaExchangeAlt /></span>
                            <span className="eye-icon"><FaEye /></span>
                        </div>
                        <div className="Product_img">
                            <img src={PL3} alt="product" />
                        </div>
                        <div className="Product_text clearfix">
                            <ul className="rating_star">
                                <li className="deal_hot">
                                    <i className="fa fa-star yellow"></i>
                                    <i className="fa fa-star yellow"></i>
                                    <i className="fa fa-star gray"></i>
                                    <i className="fa fa-star gray"></i>
                                    <i className="fa fa-star gray"></i>
                                    <span>(2 Review) </span>
                                </li>
                            </ul>
                            <h2>New Apple iphone 12 pro Max Gold</h2>
                            <div className="price-tag">
                                <span className="old_price">$123.21</span>
                                <span className="new_price">$123.21</span>
                            </div>
                            <button type="button" className="add-trolley">Add to Trolley</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="product_box_info">
                        <span className="stock-tag">New</span>
                        <div className="overlay_icons">
                            <span className="heart-icon"><FaHeart /></span>
                            <span className="exchange-icon"><FaExchangeAlt /></span>
                            <span className="eye-icon"><FaEye /></span>
                        </div>
                        <div className="Product_img">
                            <img src={PL1} alt="product" />
                        </div>
                        <div className="Product_text clearfix">
                            <ul className="rating_star">
                                <li className="deal_hot">
                                    <i className="fa fa-star yellow"></i>
                                    <i className="fa fa-star yellow"></i>
                                    <i className="fa fa-star gray"></i>
                                    <i className="fa fa-star gray"></i>
                                    <i className="fa fa-star gray"></i>
                                    <span>(2 Review) </span>
                                </li>
                            </ul>
                            <h2>New Apple iphone 12 pro Max Gold</h2>
                            <div className="price-tag">
                                <span className="old_price">$123.21</span>
                                <span className="new_price">$123.21</span>
                            </div>
                            <button type="button" className="add-trolley">Add to Trolley</button>
                        </div>
                    </div>
                </div>
            </Slider>
        </Tab>
        
        <Tab eventKey="Computer & Laptop" title="Computer & Laptop">
        <div className='row'>
                <div className='col-md-3'>
                    <div className="product_box_info">
                        <span className="stock-tag">New</span>
                        <div className="overlay_icons">
                            <span className="heart-icon"><FaHeart /></span>
                            <span className="exchange-icon"><FaExchangeAlt /></span>
                            <span className="eye-icon"><FaEye /></span>
                        </div>
                        <div className="Product_img">
                            <img src={PL3} alt="product" />
                        </div>
                        <div className="Product_text clearfix">
                            <ul className="rating_star">
                                <li className="deal_hot">
                                    <i className="fa fa-star yellow"></i>
                                    <i className="fa fa-star yellow"></i>
                                    <i className="fa fa-star gray"></i>
                                    <i className="fa fa-star gray"></i>
                                    <i className="fa fa-star gray"></i>
                                    <span>(2 Review) </span>
                                </li>
                            </ul>
                            <h2>New Apple iphone 12 pro Max Gold</h2>
                            <div className="price-tag">
                                <span className="old_price">$123.21</span>
                                <span className="new_price">$123.21</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="product_box_info">
                            <div className="overlay_icons">
                                <span className="heart-icon"><FaHeart /></span>
                                <span className="exchange-icon"><FaExchangeAlt /></span>
                                <span className="eye-icon"><FaEye /></span>
                            </div>
                            <div className="Product_img">
                                <img src={PL2} alt="product" />
                            </div>
                            <div className="Product_text clearfix">
                                <ul className="rating_star">
                                    <li className="deal_hot">
                                        <i className="fa fa-star yellow"></i>
                                        <i className="fa fa-star yellow"></i>
                                        <i className="fa fa-star gray"></i>
                                        <i className="fa fa-star gray"></i>
                                        <i className="fa fa-star gray"></i>
                                        <span>(2 Review) </span>
                                    </li>
                                </ul>
                                <h2>New Apple iphone 12 pro Max Gold</h2>
                                <div className="price-tag">
                                    <span className="old_price">$123.21</span>
                                    <span className="new_price">$123.21</span>
                                </div>
                                <button type="button" className="add-trolley">Add to Trolley</button>
                            </div>
                        </div>
                    </div>
                
                    <div className="col-md-3">
                        <div className="product_box_info">
                            <div className="overlay_icons">
                                <span className="heart-icon"><FaHeart /></span>
                                <span className="exchange-icon"><FaExchangeAlt /></span>
                                <span className="eye-icon"><FaEye /></span>
                            </div>
                            <div className="Product_img">
                                <img src={PL2} alt="product" />
                            </div>
                            <div className="Product_text clearfix">
                                <ul className="rating_star">
                                    <li className="deal_hot">
                                        <i className="fa fa-star yellow"></i>
                                        <i className="fa fa-star yellow"></i>
                                        <i className="fa fa-star gray"></i>
                                        <i className="fa fa-star gray"></i>
                                        <i className="fa fa-star gray"></i>
                                        <span>(2 Review) </span>
                                    </li>
                                </ul>
                                <h2>New Apple iphone 12 pro Max Gold</h2>
                                <div className="price-tag">
                                    <span className="old_price">$123.21</span>
                                    <span className="new_price">$123.21</span>
                                </div>
                                <button type="button" className="add-trolley">Add to Trolley</button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-3">
                        <div className="product_box_info">
                            <div className="overlay_icons">
                                <span className="heart-icon"><FaHeart /></span>
                                <span className="exchange-icon"><FaExchangeAlt /></span>
                                <span className="eye-icon"><FaEye /></span>
                            </div>
                            <div className="Product_img">
                                <img src={PL2} alt="product" />
                            </div>
                            <div className="Product_text clearfix">
                                <ul className="rating_star">
                                    <li className="deal_hot">
                                        <i className="fa fa-star yellow"></i>
                                        <i className="fa fa-star yellow"></i>
                                        <i className="fa fa-star gray"></i>
                                        <i className="fa fa-star gray"></i>
                                        <i className="fa fa-star gray"></i>
                                        <span>(2 Review) </span>
                                    </li>
                                </ul>
                                <h2>New Apple iphone 12 pro Max Gold</h2>
                                <div className="price-tag">
                                    <span className="old_price">$123.21</span>
                                    <span className="new_price">$123.21</span>
                                </div>
                                <button type="button" className="add-trolley">Add to Trolley</button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </Tab>

            </Tabs>

        </div>
    </div>
)
}
