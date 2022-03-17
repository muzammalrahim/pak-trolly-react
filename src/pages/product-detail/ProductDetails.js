import React from 'react';
import Header from '../../components/header/Header';
import ProductSlider from '../product-detail/product-slider/ProductSlider';
import ProductInfo from '../product-detail/product-info/ProductInfo';
import SecurityInfo from '../product-detail/security-detail/SecurityInfo';
import TabDetail from '../product-detail/tab-detail/TabDetail';
import Reviews from '../product-detail/reviews-rating/Reviews';
import Question from '../product-detail/question-answer/Question';

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
            <Reviews></Reviews>
            <Question></Question>
        </div>
    </div>
    );
}

export default Productdetails;
