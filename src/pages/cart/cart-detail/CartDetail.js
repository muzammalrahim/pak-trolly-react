import React from 'react';
import PL1 from '../../../../src/images/product_1.png';
import { FaTrashAlt, FaAngleLeft } from "react-icons/fa";
import './cart.css';

const CartDetail = () => {
    return (
        <>
        <div className="shopping_cat">
            <div className="cart_info">
                <h2>Shopping Cart</h2>
                <ul className="clearfix">
                    <li className="checkbox clearfix">
                    <div className="form-group clearfix">
                        <input type="checkbox" id="nike" />
                        <label for="nike"></label>
                        </div>
                    </li>
                    <li className="inf0-items clearfix">
                        <div className="cart_item">
                            <img src={PL1} alt="items-img" />
                        </div>
                        <div className="cart-info">
                            <h3>New Apple iPhone 12 <br/>Pro Max Gold</h3>
                            <div className="price-tag">
                            <span className="old_price">$123.21</span>
                            <span className="new_price">$100.21</span>
                            </div>
                            <div className="size-info">
                                <p>Size: <span>S</span></p>
                                <p>color: <span>Red</span></p>
                            </div>
                        </div>
                    </li>
                    <li className="quantity clearfix">
                        <input type="number" placeholder="1" />
                        <i><FaTrashAlt /></i>
                    </li>
                </ul>

                <ul className="clearfix">
                    <li className="checkbox clearfix">
                    <div className="form-group clearfix">
                        <input type="checkbox" id="nike" />
                        <label for="nike"></label>
                        </div>
                    </li>
                    <li className="inf0-items clearfix">
                        <div className="cart_item">
                            <img src={PL1} alt="items-img" />
                        </div>
                        <div className="cart-info">
                            <h3>New Apple iPhone 12 <br/>Pro Max Gold</h3>
                            <div className="price-tag">
                            <span className="old_price">$123.21</span>
                            <span className="new_price">$100.21</span>
                            </div>
                            <div className="size-info">
                                <p>Size: <span>S</span></p>
                                <p>color: <span>Red</span></p>
                            </div>
                        </div>
                    </li>
                    <li className="quantity clearfix">
                        <input type="number" placeholder="1" />
                        <i><FaTrashAlt /></i>
                    </li>
                </ul>

                <ul className="clearfix">
                    <li className="checkbox clearfix">
                    <div className="form-group clearfix">
                        <input type="checkbox" id="nike" />
                        <label for="nike"></label>
                        </div>
                    </li>
                    <li className="inf0-items clearfix">
                        <div className="cart_item">
                            <img src={PL1} alt="items-img" />
                        </div>
                        <div className="cart-info">
                            <h3>New Apple iPhone 12 <br/>Pro Max Gold</h3>
                            <div className="price-tag">
                            <span className="old_price">$123.21</span>
                            <span className="new_price">$100.21</span>
                            </div>
                            <div className="size-info">
                                <p>Size: <span>S</span></p>
                                <p>color: <span>Red</span></p>
                            </div>
                        </div>
                    </li>
                    <li className="quantity clearfix">
                        <input type="number" placeholder="1" />
                        <i><FaTrashAlt /></i>
                    </li>
                </ul>

                <ul className="clearfix">
                    <li className="checkbox clearfix">
                    <div className="form-group clearfix">
                        <input type="checkbox" id="nike" />
                        <label for="nike"></label>
                        </div>
                    </li>
                    <li className="inf0-items clearfix">
                        <div className="cart_item">
                            <img src={PL1} alt="items-img" />
                        </div>
                        <div className="cart-info">
                            <h3>New Apple iPhone 12 <br/>Pro Max Gold</h3>
                            <div className="price-tag">
                            <span className="old_price">$123.21</span>
                            <span className="new_price">$100.21</span>
                            </div>
                            <div className="size-info">
                                <p>Size: <span>S</span></p>
                                <p>color: <span>Red</span></p>
                            </div>
                        </div>
                    </li>
                    <li className="quantity clearfix">
                        <input type="number" placeholder="1" />
                        <i><FaTrashAlt /></i>
                    </li>
                </ul>

                <ul className="clearfix">
                    <li className="checkbox clearfix">
                    <div className="form-group clearfix">
                        <input type="checkbox" id="nike" />
                        <label for="nike"></label>
                        </div>
                    </li>
                    <li className="inf0-items clearfix">
                        <div className="cart_item">
                            <img src={PL1} alt="items-img" />
                        </div>
                        <div className="cart-info">
                            <h3>New Apple iPhone 12 <br/>Pro Max Gold</h3>
                            <div className="price-tag">
                            <span className="old_price">$123.21</span>
                            <span className="new_price">$100.21</span>
                            </div>
                            <div className="size-info">
                                <p>Size: <span>S</span></p>
                                <p>color: <span>Red</span></p>
                            </div>
                        </div>
                    </li>
                    <li className="quantity clearfix">
                        <input type="number" placeholder="1" />
                        <i><FaTrashAlt /></i>
                    </li>
                </ul>
            </div>
        </div>
        <a href="#" className="continue-shopping"><FaAngleLeft />Continue Shopping</a>
        </>
    );
}

export default CartDetail;
