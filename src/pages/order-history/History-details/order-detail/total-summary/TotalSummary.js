import React from 'react';
import './summary.css'

const TotalSummary = () => {
    return (
        <>
        <div className="summary-info">
            <h3>Total Summary</h3>
            <ul>
                <li className="clearfix">
                    <span className="shipping_text">Subtotal(2 Items)</span>
                    <span className="price-tag">$ 140.00</span>
                </li>
                <li className="clearfix">
                    <span className="shipping_text">Shipping Fee</span>
                    <span className="price-tag">0.00</span>
                </li>
                <li className="total_line clearfix">
                    <span className="shipping_text">Total Amount</span>
                    <span className="price-tag">$ 140.00</span>
                </li>
            </ul>
        </div>
        </>
    );
}

export default TotalSummary;
