import React from 'react';
import Header from '../../components/header/Header';
import ProductFilter from  '../product-listing/product-filter/ProductFilter'
import Listing from '../product-listing/product-lists/Listing';

const Productlisting = () => {
    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                    <ProductFilter></ProductFilter>
                    </div>
                    <div className="col-md-9">
                        <Listing></Listing>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Productlisting;
