import React from 'react';
import './wish.css';
import { FaHeart, FaExchangeAlt, FaEye, FaAngleDown } from "react-icons/fa";
import PL1 from '../../../../../src/images/product_1.png';
import PL2 from '../../../../../src/images/product_2.png';
import PL3 from '../../../../../src/images/product_3.png';

const WishList = () => {
    return (
        <>
        <div className="review-info container">
			<h2 className="history-head">My WishList</h2>
			<div className="row">
                <div className="col-md-4">
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
                <div className="col-md-4">
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
                <div className="col-md-4">
                    <div className="product_box_info">
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
                <div className="col-md-4">
                    <div className="product_box_info">
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
                <div className="col-md-4">
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
                <div className="col-md-4">
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
                <div className="col-md-4">
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
                <div className="col-md-4">
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
                <div className="col-md-4">
                    <div className="product_box_info">
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
                <div className="col-md-4">
                    <div className="product_box_info">
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
                <div className="col-md-4">
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
                <div className="col-md-4">
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
            </div>
        </div>
        </>
    );
}

export default WishList;