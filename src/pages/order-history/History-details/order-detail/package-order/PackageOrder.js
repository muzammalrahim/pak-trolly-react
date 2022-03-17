import React from 'react';
import './package-order.css';
import PL1 from '../../../../../../src/images/product_1.png';
import { FaGift, FaCircle, FaCaretUp, FaExclamationCircle } from "react-icons/fa";

const Packageorder = () => {
    return (
        <>
        <div className="package-wrap">
            <div className="package-info">
                <h3><i><FaGift /></i>Package 1</h3>
                <p><span>Sold By:</span> Lorem Ipsum is simply dummy text</p>
            </div>
            <div className="step-package">
                <p>Get by Mon 21 Feb - Thu 24 Feb</p>
                <ul>
                    <i className="border-line"></i>
                    <li className="procesor-li"><span><FaCircle /></span><p>Processing</p></li>
                    <li className="non-procesor-li"><span><FaCircle /></span><p>Processing</p></li>
                    <li className="non-procesor-li"><span><FaCircle /></span><p>Processing</p></li>
                </ul>
                <div className="box-processor">
                    <i><FaCaretUp /></i>
                    <ul>
                        <li><p><span>17 Feb 2022 - 16:35</span>Your package has been packed and is being handed over
                        to a logistics partner.</p></li>
                        <li><p><span>17 Feb 2022 - 16:35</span>Your order has been successfully verified.</p></li>
                        <li><p><span>17 Feb 2022 - 16:35</span>Thank you for shopping at Daraz! Your order is being verified.</p></li>
                    </ul>
                </div>
            </div>
            <ul className="product-line clearfix">
                <li className="product-img">
                    <img src={PL1} alt="product" />
                </li>
                <li className="product-info">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.</p>
                </li>
                <li className="product-price">
                    <p>$ 140.00</p>
                </li>
                <li className="product-price">
                    <p>Qty: 4</p>
                </li>
                 <li className="product-cancel">
                    <p>Cancel <i><FaExclamationCircle /></i></p>
                    <div className="tool-tip-cancel">
                        <h5>Cancellation Not Available</h5>
                        <p>Sorry, you cannot cancel this package as it has already been shipped by
                            the seller. If you still wish to cancel the package please contact
                            PAKTROLLEY customer support.</p>
                    </div>
                </li>
            </ul>
        </div>
        </>
    );
}

export default Packageorder;
