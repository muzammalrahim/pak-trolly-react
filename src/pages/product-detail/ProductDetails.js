import React from 'react';
import Header from '../../components/header/Header';
import ProductSlider from '../product-detail/ProductSlider';
import ProductInfo from '../product-detail/ProductInfo';

const Productdetails = () => {
    return (
        <div>
        <Header></Header>
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                <ProductSlider></ProductSlider>
                </div>
                <div className="col-md-9">
                    <ProductInfo></ProductInfo>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Productdetails;
