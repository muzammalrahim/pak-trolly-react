import React from 'react';
import './order-info.css'
import Icon from '../../../../src/images/clock.png';

const Orderinfo = () => {
    return (
        <>
        <div className="order-thank">
            <div className="order-number">
                <h3><img src={Icon} alt="product" /> Thank you for your purchase!</h3>
                <p>Your order number is 139039235600286</p>
            </div>
            <div className="amount-ready">
             <p>Please have this amount ready on delivery day.</p>
             <strong>$ 140.00</strong>
            </div>
        </div>
        </>
    );
}

export default Orderinfo;
