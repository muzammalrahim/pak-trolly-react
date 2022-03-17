import React from 'react';
import OrderNumber from '../order-detail/order-number/OrderNumber';
import PackageOrder from '../order-detail/package-order/PackageOrder';
import Shipping from '../order-detail/shipping-address/Shipping';
import TotalSummary from '../order-detail/total-summary/TotalSummary';


const OrderDetail = () => {
    return (
        <>
        <div className="Order-details-client">
            <OrderNumber></OrderNumber>
            <PackageOrder></PackageOrder>
            <div className="row mt-3">
                <div className="col-md-6">
                    <Shipping></Shipping>
                </div>
                <div className="col-md-6">
                    <TotalSummary></TotalSummary>
                </div>
            </div>
        </div>
        </>
    );
}

export default OrderDetail;
