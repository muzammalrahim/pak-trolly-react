import React from 'react';
import './order-number.css';

const OrderNumber = () => {
    return (
        <>
        <h2>Orders Details</h2>
        <div className="number-order clearfix">
            <strong>Order #139039235600286</strong>
            <span>Total $140.00</span>
            <p>Placed on 17 Feb 2022 15:23:36</p>
        </div>
        </>
    );
}

export default OrderNumber;
