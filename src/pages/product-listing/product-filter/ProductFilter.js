import React from 'react';
import './product-filter.css';
import { FaStar } from "react-icons/fa";
import webroukCustomRange from "https://cdn.skypack.dev/webrouk-custom-range@1.0.2";

const ProductFilter = () => {
    return (
        <>
        <div>

        <div className="dropdown show">
        <a className="filter_btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            Filters
        </a>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <form>
            <div className='filter_box'>
                <h2>Hot Deal</h2>
                <ul className="hot_deal">
                    <li className="deal_hot">
                        <div className="form-group clearfix">
                        <input type="checkbox" id="nike" />
                        <label for="nike">Nike</label>
                        <span>2</span>
                        </div>
                    </li>
                    <li className="deal_hot">
                        <div className="form-group clearfix">
                        <input type="checkbox" id="nike1" />
                        <label for="nike1">Airmax</label>
                        <span>48</span>
                        </div>
                    </li>
                    <li className="deal_hot">
                        <div className="form-group clearfix">
                        <input type="checkbox" id="nike2" />
                        <label for="nike2">Adidas</label>
                        <span>1423</span>
                        </div>
                    </li>
                    <li className="deal_hot">
                        <div className="form-group clearfix">
                        <input type="checkbox" id="nike3" />
                        <label for="nike3">Vans</label>
                        <span>10</span>
                        </div>
                    </li>
                    <li className="deal_hot">
                        <div className="form-group clearfix">
                        <input type="checkbox" id="nike4" />
                        <label for="nike4">All Stars</label>
                        <span>25</span>
                        </div>
                    </li>
                </ul>
                
            </div>
            <div className='filter_box'>
                <h2>Prices Range</h2>
                <div data-role="rangeslider">
                <webrouk-custom-range start="0" end="1000" from="300" to="700" prefix-char="$">
                    <input type="hidden" />
                </webrouk-custom-range>
                </div>
            </div>
            <div className='filter_box'>
                <h2>Color</h2>
                <ul className="color-selector">
                    <li className="active_color"><span className='color_blue'></span></li>
                    <li><span className='color_red'></span></li>
                    <li><span className='color_black'></span></li>
                    <li><span className='color_yellow'></span></li>
                    <li><span className='color_pink'></span></li>
                </ul>
            </div>
            <div className='filter_box'>
                <h2>Hot Deal</h2>
                <ul className="hot_deal">
                <li className="deal_hot">
                        <div className="form-group clearfix">
                        <input type="checkbox" id="nike5" />
                        <label for="nike5">Airmax</label>
                        <span>2</span>
                        </div>
                    </li>
                    <li className="deal_hot">
                        <div className="form-group clearfix">
                        <input type="checkbox" id="nike6" />
                        <label for="nike6">Airmax</label>
                        <span>2</span>
                        </div>
                    </li>
                    <li className="deal_hot">
                        <div className="form-group clearfix">
                        <input type="checkbox" id="nike7" />
                        <label for="nike7">Airmax</label>
                        <span>2</span>
                        </div>
                    </li>
                    <li className="deal_hot">
                        <div className="form-group clearfix">
                        <input type="checkbox" id="nike8" />
                        <label for="nike8">Airmax</label>
                        <span>2</span>
                        </div>
                    </li>
                </ul>
            </div>

            <div className='filter_box'>
                <h2>Warrenty Period</h2>
                <ul className="hot_deal">
                <li className="deal_hot">
                        <div className="form-group clearfix">
                        <input type="checkbox" id="nike9" />
                        <label for="nike9">1 Year</label>
                        </div>
                    </li>
                    <li className="deal_hot">
                        <div className="form-group clearfix">
                        <input type="checkbox" id="nike10" />
                        <label for="nike10">2 Year</label>
                        </div>
                    </li>
                    <li className="deal_hot">
                        <div className="form-group clearfix">
                        <input type="checkbox" id="nike11" />
                        <label for="nike11">3 Year</label>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='filter_box'>
                <h2>Service</h2>
                <ul className="hot_deal">
                <li className="deal_hot">
                        <div className="form-group clearfix">
                        <input type="checkbox" id="nike12" />
                        <label for="nike12">Installments</label>
                        </div>
                    </li>
                    <li className="deal_hot">
                        <div className="form-group clearfix">
                        <input type="checkbox" id="nike13" />
                        <label for="nike13">Cash On Delivery</label>
                        </div>
                    </li>
                    <li className="deal_hot">
                        <div className="form-group clearfix">
                        <input type="checkbox" id="nike14" />
                        <label for="nike14">Free Shipping</label>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='filter_box'>
                <h2>Location</h2>
                <ul className="hot_deal">
                <li className="deal_hot">
                        <div className="form-group clearfix">
                        <input type="checkbox" id="nike15" />
                        <label for="nike15">Lahore</label>
                        </div>
                    </li>
                    <li className="deal_hot">
                        <div className="form-group clearfix">
                        <input type="checkbox" id="nike16" />
                        <label for="nike16">Islamabad</label>
                        </div>
                    </li>
                    <li className="deal_hot">
                        <div className="form-group clearfix">
                        <input type="checkbox" id="nike17" />
                        <label for="nike17">Karachi</label>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='filter_box'>
                <h2>Ratings</h2>
                <ul className="hot_deal rating_stars">
                    <li className="deal_hot">
                        <i className="yellow"><FaStar /></i>
                        <i className="yellow"><FaStar /></i>
                        <i className="yellow"><FaStar /></i>
                        <i className="yellow"><FaStar /></i>
                        <i className="yellow"><FaStar /></i>
                    </li>
                    <li className="deal_hot">
                        <i className="yellow"><FaStar /></i>
                        <i className="yellow"><FaStar /></i>
                        <i className="gray"><FaStar /></i>
                        <i className="gray"><FaStar /></i>
                        <i className="gray"><FaStar /></i>
                        <span>And Up </span>
                    </li>
                    <li className="deal_hot">
                    <i className="yellow"><FaStar /></i>
                        <i className="yellow"><FaStar /></i>
                        <i className="gray"><FaStar /></i>
                        <i className="gray"><FaStar /></i>
                        <i className="gray"><FaStar /></i>
                        <span>And Up </span>
                    </li>
                    <li className="deal_hot">
                    <i className="yellow"><FaStar /></i>
                        <i className="yellow"><FaStar /></i>
                        <i className="gray"><FaStar /></i>
                        <i className="gray"><FaStar /></i>
                        <i className="gray"><FaStar /></i>
                        <span>And Up </span>
                    </li>
                    <li className="deal_hot">
                    <i className="yellow"><FaStar /></i>
                        <i className="yellow"><FaStar /></i>
                        <i className="gray"><FaStar /></i>
                        <i className="gray"><FaStar /></i>
                        <i className="gray"><FaStar /></i>
                        <span>And Up </span>
                    </li>
                </ul>
            </div>
        </form>
        </div>
        </div>

        </div>
        </>
    );
}

export default ProductFilter;
