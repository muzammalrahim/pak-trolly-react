import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Slick css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Home from "./pages/home/Home";
import ProductListing from "./pages/product-listing/ProductListing";
import ProductDetails from "./pages/product-detail/ProductDetails";
import Cart from "./pages/cart/Cart"
import PersonalDetail from "./pages/personal-detail/PersonalDetail";
import Thank from "./pages/thank-you/Thank";
import Orderhistory from "./pages/order-history/OrderHistory";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Redirect,
// } from "react-router-dom";


function App() {
return (
<div className="App">
    <div className='route-section'>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/lab" element={<Lab />} />
            <Route render={() => <Navigate to="/" />} /> */}
        </Routes>

        <Routes>
            <Route path="/product-listing" element={<ProductListing />} />
            {/* <Route path="/lab" element={<Lab />} />
            <Route render={() => <Navigate to="/" />} /> */}
        </Routes>

        <Routes>
            <Route path="/product-detail" element={<ProductDetails />} />
            {/* <Route path="/lab" element={<Lab />} />
            <Route render={() => <Navigate to="/" />} /> */}
        </Routes>

        <Routes>
            <Route path="/cart" element={<Cart />} />
            {/* <Route path="/lab" element={<Lab />} />
            <Route render={() => <Navigate to="/" />} /> */}
        </Routes>

        <Routes>
            <Route path="/personal-detail" element={<PersonalDetail />} />
            {/* <Route path="/lab" element={<Lab />} />
            <Route render={() => <Navigate to="/" />} /> */}
        </Routes>
        <Routes>
            <Route path="/thank-you" element={<Thank />} />
            {/* <Route path="/lab" element={<Lab />} />
            <Route render={() => <Navigate to="/" />} /> */}
        </Routes>
        <Routes>
            <Route path="/order-history" element={<Orderhistory />} />
            {/* <Route path="/lab" element={<Lab />} />
            <Route render={() => <Navigate to="/" />} /> */}
        </Routes>
    </BrowserRouter>
    {/* <Router>
        <Switch>
        <Route exact path="/" component={Home} />
        </Switch>
    </Router> */}
    </div>
</div>
);
}
export default App;



{/* <section class="man-banner spad">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="filter-control">
                            <ul>
                                <li class="active">Clothings</li>
                                <li>HandBag</li>
                                <li>Shoes</li>
                                <li>Accessories</li>
                            </ul>
                        </div>
                        <div class="product-slider owl-carousel">
                            <div class="product-item">
                                <div class="pi-pic">
                                    <img src="assets/img/man-1.jpg" alt="" />
                                    <div class="sale">Sale</div>
                                    <div class="icon">
                                        <i class="icon_heart_alt"></i>
                                    </div>
                                    <ul>
                                        <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                        <li class="quick-view"><a href="#">+ Quick View</a></li>
                                        <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                    </ul>
                                </div>
                                <div class="pi-text">
                                    <div class="catagory-name">Coat</div>
                                    <a href="#">
                                        <h5>Pure Pineapple</h5>
                                    </a>
                                    <div class="product-price">
                                        $14.00
                                        <span>$35.00</span>
                                    </div>
                                </div>
                            </div>
                            <div class="product-item">
                                <div class="pi-pic">
                                    <img src="assets/img/man-2.jpg" alt="" />
                                    <div class="icon">
                                        <i class="icon_heart_alt"></i>
                                    </div>
                                    <ul>
                                        <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                        <li class="quick-view"><a href="#">+ Quick View</a></li>
                                        <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                    </ul>
                                </div>
                                <div class="pi-text">
                                    <div class="catagory-name">Shoes</div>
                                    <a href="#">
                                        <h5>Guangzhou sweater</h5>
                                    </a>
                                    <div class="product-price">
                                        $13.00
                                    </div>
                                </div>
                            </div>
                            <div class="product-item">
                                <div class="pi-pic">
                                    <img src="assets/img/man-3.jpg" alt="" />
                                    <div class="icon">
                                        <i class="icon_heart_alt"></i>
                                    </div>
                                    <ul>
                                        <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                        <li class="quick-view"><a href="#">+ Quick View</a></li>
                                        <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                    </ul>
                                </div>
                                <div class="pi-text">
                                    <div class="catagory-name">Towel</div>
                                    <a href="#">
                                        <h5>Pure Pineapple</h5>
                                    </a>
                                    <div class="product-price">
                                        $34.00
                                    </div>
                                </div>
                            </div>
                            <div class="product-item">
                                <div class="pi-pic">
                                    <img src="assets/img/man-4.jpg" alt="" />
                                    <div class="icon">
                                        <i class="icon_heart_alt"></i>
                                    </div>
                                    <ul>
                                        <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                        <li class="quick-view"><a href="#">+ Quick View</a></li>
                                        <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                    </ul>
                                </div>
                                <div class="pi-text">
                                    <div class="catagory-name">Towel</div>
                                    <a href="#">
                                        <h5>Converse Shoes</h5>
                                    </a>
                                    <div class="product-price">
                                        $34.00
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 offset-lg-1">
                        <div class="product-large set-bg m-large" data-setbg="assets/img/man-large.jpg">
                            <h2>Men’s</h2>
                            <a href="#">Discover More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}