import React from 'react';
import './search.css';
import Logo from '../../../images/logo.svg';

export default function Search() {
  return (
    <>
        <div className='search-main'>
        <div class="container">
                <div class="inner-header">
                    <div class="row">
                        <div class="col-lg-2 col-md-6 col-sm-6 col-6 order-1">
                            <div class="logo">
                                <a href="#">
                                    <img src={Logo} alt='logo'/>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-7 col-md-12 col-sm-12 order-3 order-lg-2">
                            <div class="advanced-search">
                                <button type="button" class="category-btn">All Categories</button>
                                <div class="input-group">
                                    <input type="text" placeholder="What do you need?" />
                                    {/* <button type="button"><i class="ti-search"></i></button> */}
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 text-right col-md-6 col-sm-6 col-6 order-2 order-lg-3">
                            <ul class="nav-right">
                                <li class="heart-icon">
                                    <a href="#">
                                    <i class="fa fa-heart"></i>
                                        <span>1</span>
                                    </a>
                                </li>
                                <li class="cart-icon">
                                    <a href="#">
                                        <i class="icon_user_alt"></i>
                                        <span>3</span>
                                    </a>
                                    <div class="cart-hover">
                                        <div class="select-items">
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td class="si-pic"><img src="assets/img/select-product-1.jpg" alt="" /></td>
                                                        <td class="si-text">
                                                            <div class="product-selected">
                                                                <p>$60.00 x 1</p>
                                                                <h6>Kabino Bedside Table</h6>
                                                            </div>
                                                        </td>
                                                        <td class="si-close">
                                                            <i class="ti-close"></i>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="si-pic"><img src="assets/img/select-product-2.jpg" alt="" /></td>
                                                        <td class="si-text">
                                                            <div class="product-selected">
                                                                <p>$60.00 x 1</p>
                                                                <h6>Kabino Bedside Table</h6>
                                                            </div>
                                                        </td>
                                                        <td class="si-close">
                                                            <i class="ti-close"></i>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="select-total">
                                            <span>total:</span>
                                            <h5>$120.00</h5>
                                        </div>
                                        <div class="select-button">
                                            <a href="#" class="primary-btn view-card">VIEW CARD</a>
                                            <a href="#" class="primary-btn checkout-btn">CHECK OUT</a>
                                        </div>
                                    </div>
                                </li>
                                <li class="cart-price">$150.00</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
