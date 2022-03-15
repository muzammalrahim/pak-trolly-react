import React from 'react';
import './delivery.css';
import PL1 from '../../../../src/images/product_1.png';

const Delivery = () => {
    return (
        <>
        <div className="delivery-date">
            <h2>Your Delivery Dates</h2>
            <div className="date-wrap">
                <div className="prod-img clearfix">
                    <img src={PL1} alt="product" />
                    <span>Est.21 Feb-24 Feb</span>
                </div>
                <div className="prod-delete clearfix">
                    <span>For more details, track your delivery status under My Account <a href="#">My Orde</a></span>
                    <button type="button" className="order-btn">View Order</button>
                </div>
            </div>
        </div>
        </>
    );
}

export default Delivery;
