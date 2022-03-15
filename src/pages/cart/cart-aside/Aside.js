import React from 'react';
import { FaUnlockAlt, FaTruck, FaBoxOpen } from "react-icons/fa";
import './cart-aside.css';

const Aside = () => {
    return (
        <>
        <div className="aside_info">
            <div className="itens_info">
                <ul>
                    <li className="clearfix">
                        <span>4 Items</span>
                        <span className="price-itam">$ 120.00</span>
                    </li>
                    <li className="clearfix">
                        <span>Shipping</span>
                        <span className="price-itam">$ 120.00</span>
                    </li>
                </ul>
                <button className="proceed-btn" type="button">Proceed To Checkout</button>
            </div>
            <div className="security_bg clearfix">
        <ul>
            <li className='clearfix'>
                <i><FaUnlockAlt /></i><p><span>Security policy</span>(edit with the Customer Reassurance module)</p>
            </li>
            <li className='clearfix'>
                <i><FaTruck /></i><p><span>Delivery policy</span>(edit with the Customer Reassurance module)</p>
            </li>
            <li className='clearfix'>
                <i><FaBoxOpen /></i><p><span>Return policy</span>(edit with the Customer Reassurance module)</p>
            </li>
        </ul>
            </div>
        </div>
        </>
    );
}

export default Aside;
