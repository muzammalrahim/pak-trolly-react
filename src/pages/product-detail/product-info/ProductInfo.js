import React from 'react';
import { FaStar, FaRegHeart, FaOpencart, FaExchangeAlt, FaYoutube, FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import './productinfo.css';

const Productinfo = () => {
    return (
    <>
        <div className="info_wrapper">
            <h2>Silicone Watch Band for Apple Series SIX</h2>
            <div className="price-tag">
                <span className="old_price">$123.21</span>
                <span className="new_price">$123.21</span>
            </div>
            <ul className="review-starts-new">
                    <li className="deal_hot clearfix">
                        <div className="stars">
                            <i className="yellow"><FaStar /></i>
                            <i className="yellow"><FaStar /></i>
                            <i className="yellow"><FaStar /></i>
                            <i className="yellow"><FaStar /></i>
                            <i className="yellow"><FaStar /></i>
                        </div>
                        <div className="info-review">
                        <span>0 Reviews </span>
                        <a href="#">Submit a review</a>
                        </div>
                    </li>
            </ul>
            <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
            </p>
            <div className="price-tag">
                <strong>Available In Stock:</strong>
                <span className="items_list">991 Items</span>
            </div>
            <div className="size_select clearfix">
            <label className="color-choose">Select Color:</label>
                <div className="select_size2">
                <ul className="color-selector">
                    <li className="active_color"><span className='color_blue'></span></li>
                    <li><span className='color_red'></span></li>
                    <li><span className='color_black'></span></li>
                    <li><span className='color_yellow'></span></li>
                    <li><span className='color_pink'></span></li>
                </ul>
                </div>
            </div>
            <div className="size_select clearfix">
                <label className="color-choose">Select Color:</label>
                <div className="select_size">
                    <select className="form-control">
                        <option>XS</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                    </select>
                </div>
            </div>
            <div className="size_select clearfix">
                <label className="color-choose">Quantity:</label>
                <div className="select_size">
                    <input type="number" className="form-control" />
                </div>
            </div>
            <div className="size_select clearfix">
                <label className="color-choose">Availability:</label>
                <div className="select_size">
                    <span>In stock</span>
                </div>
            </div>
            <div className="size_select clearfix">
                <label className="color-choose">Category:</label>
                <div className="select_size">
                    <span>Accessories</span>
                </div>
            </div>
            <div className="size_select clearfix">
                <label className="color-choose">Shipping:</label>
                <div className="select_size">
                    <span>Free</span>
                </div>
            </div>
            <div className="buttons_info">
                <button type="button"><i className="icon_btn"><FaOpencart /></i>Add to Cart</button>
                <button type="button"><i className="icon_btn"><FaRegHeart /></i>Add To Wishlist</button>
                <button type="button"><i className="icon_btn"><FaExchangeAlt /></i>Add To Compare</button>
            </div>
            <div className="social_btn clearfix">
            <button type="button" clasasName="check-out">CheckOut</button>
            <ul className="social_icons">
                <li><a className="facebook_icon"><FaFacebookSquare /></a></li>
                <li><a className="linked_icon"><FaLinkedin /></a></li>
                <li><a className="youtube_icon"><FaYoutube /></a></li>
            </ul>
            </div>
        </div>
    </>
    );
}

export default Productinfo;
