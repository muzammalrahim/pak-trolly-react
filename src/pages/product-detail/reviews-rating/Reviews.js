import React from 'react';
import { FaStar } from "react-icons/fa";
import { BsShieldFillCheck } from "react-icons/bs";
import './review.css';

const Reviews = () => {
    return (
        <>
        <div className="reviews-rating">
            <div className="main-title"><h2>Deal Of The Day</h2></div>
                <div className='clearfix rating_info'>
                <strong>4.0/<span>5</span></strong>
                <ul className="hot_deal rating_stars">
                    <li className="deal_hot">
                        <i className="yellow"><FaStar /></i>
                        <i className="yellow"><FaStar /></i>
                        <i className="yellow"><FaStar /></i>
                        <i className="yellow"><FaStar /></i>
                        <i className="gray"><FaStar /></i>
                    </li>
                </ul>
                </div>
                <h3>Product Reviews</h3>
                <div className='client_name'>
                    <ul className="review-star rating_stars">
                        <li className="deal_hot">
                            <i className="yellow"><FaStar /></i>
                            <i className="yellow"><FaStar /></i>
                            <i className="yellow"><FaStar /></i>
                            <i className="yellow"><FaStar /></i>
                            <i className="gray"><FaStar /></i>
                        </li>
                    </ul>
                    <strong>By Robat Mark</strong>
                    <span><i><BsShieldFillCheck /></i>Verified Purchase</span>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className='client_name'>
                <ul className="review-star rating_stars">
                    <li className="deal_hot">
                        <i className="yellow"><FaStar /></i>
                        <i className="yellow"><FaStar /></i>
                        <i className="yellow"><FaStar /></i>
                        <i className="yellow"><FaStar /></i>
                        <i className="gray"><FaStar /></i>
                    </li>
                </ul>
                    <strong>By Robat Mark</strong>
                    <span><i><BsShieldFillCheck /></i>Verified Purchase</span>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <a href="#" className="view-all">View All</a>
        </div>
        </>
    );
}

export default Reviews;
