import React from 'react';
import './side.css'

const Side = () => {
    return (
        <>
        <div className="history-side">
            <ul>
                <li><span>Hello, Mike Johan</span></li>
                <li><a href="#">Manage My Account</a></li>
                <li><a href="#">My Orders</a></li>
                <li><a href="#">My Reviews</a></li>
                <li><a href="#">My WishList</a></li>
                <li><a href="#">Sell on PakTrolley</a></li>
            </ul>
        </div>
        </>
    );
}

export default Side;
