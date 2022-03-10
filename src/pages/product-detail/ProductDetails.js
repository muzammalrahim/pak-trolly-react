import React from 'react';
import Header from '../../components/header/Header';
import ProductSlider from '../product-detail/product-slider/ProductSlider';
import ProductInfo from '../product-detail/product-info/ProductInfo';
import SecurityInfo from '../product-detail/security-detail/SecurityInfo';
import TabDetail from '../product-detail/tab-detail/TabDetail';

const Productdetails = () => {
    return (
        <div>
        <Header></Header>
        <div className="container">
            <div className="row">
                <div className="col-md-5">
                <ProductSlider></ProductSlider>
                </div>
                <div className="col-md-7">
                    <ProductInfo></ProductInfo>
                </div>
            </div>
            <SecurityInfo></SecurityInfo>
            <TabDetail></TabDetail>
        </div>
    </div>
    );
}

export default Productdetails;
