import React from 'react';
import { FaUnlockAlt, FaTruck, FaBoxOpen } from "react-icons/fa";
import './security.css';

const SecurityInfo = () => {
    return (
    <>
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
    </>
    );
}

export default SecurityInfo;
