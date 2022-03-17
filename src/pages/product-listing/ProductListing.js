import React from 'react';
import Header from '../../components/header/Header';
import ProductFilter from  '../product-listing/product-filter/ProductFilter'
import Listing from '../product-listing/product-lists/Listing';
import Footer from '../../components/footer/Footer';
import BreadCrum from '../../components/bread-crums/BreadCrum';
import Subscribe from '../../components/subscribe/Subscribe'

const Productlisting = () => {
    return (
        <div>
            <Header></Header>
            <BreadCrum/>
            <div className="container">
                <div className="row mt-5 mb-5">
                    <div className="col-md-3">
                    <ProductFilter></ProductFilter>
                    </div>
                    <div className="col-md-9">
                        <Listing></Listing>
                    </div>
                </div>
            </div>
            <Subscribe />
            <Footer></Footer>
        </div>
    );
}

export default Productlisting;
