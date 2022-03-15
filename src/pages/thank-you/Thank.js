import React from 'react';
import Header from '../../components/header/Header';
import OrderInfo from './order-info/OrderInfo';
import Delivery from './delivery-date/Delivery';
import Summary from './order-summary/Summary';

const Thank = () => {
    return (
        <>
        <Header></Header>
        <div className="container">
            <OrderInfo></OrderInfo>
            <Delivery></Delivery>
            <Summary></Summary>
        </div>
        </>
    );
}

export default Thank;
