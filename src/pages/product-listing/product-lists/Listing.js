import React from 'react';
import './listing.css';

const Listing = () => {
    return (
        <>
        <div>
            <div className="items_info">
                <span className="pull-left">427 items</span>
                <select className="form-control pull-right">
                    <option>Sort By</option>
                    <option>Sort By</option>
                    <option>Sort By</option>
                    <option>Sort By</option>
                </select>
            </div>
            <div className="row">
            <div className="col-md-4">
            <div className="product_box_info">
                <div className="Product_img">
                    <img src="../../../../src/images/product_1.png" alt="product" />
                </div>
                <div className="Product_text">
                    <ul className="rating_star">
                    <li className="deal_hot">
                        <i className="fa fa-star yellow"></i>
                        <i className="fa fa-star yellow"></i>
                        <i className="fa fa-star gray"></i>
                        <i className="fa fa-star gray"></i>
                        <i className="fa fa-star gray"></i>
                        <span>And Up </span>
                    </li>
                    </ul>
                    <h2>New Apple iphone 12 pro Max Gold</h2>
                    <div className="peice-tag">
                        <span className="old_price">$123.21</span>
                        <span className="new_price">$123.21</span>
                    </div>
                    <button type="button" className="add-trolley">Add to Trolley</button>
                </div>
            </div>
            </div>
            </div>
        </div>
        </>
    );
}

export default Listing;
