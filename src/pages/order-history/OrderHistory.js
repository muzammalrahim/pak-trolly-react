import React from 'react';
import Header from '../../components/header/Header';
import Side from '../order-history/side-menu/Side'
import History from '../order-history/History-details/History';

const OrderHistory = () => {
    return (
        <>
        <Header></Header>
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <Side></Side>
                </div>
                <div className="col-md-9">
                    <History></History>
                </div>
            </div>
        </div>
        </>
    );
}

export default OrderHistory;
