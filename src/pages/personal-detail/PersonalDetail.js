import React from 'react';
import Header from '../../components/header/Header';
import Aside from '../cart/cart-aside/Aside';
import PersonalInfo from './personal-info/PersonalInfo';
import Payment from './payment/Payment';
import Address from './address/Address'
import './personal.css'

const PersonalDetail = () => {
    return (
        <>
        <Header></Header>
        <div className="container">
        <div className="row">
                    <div className="col-md-9">
                        <div className="personal-details">
                            <PersonalInfo></PersonalInfo>
                            <Address></Address>
                            <Payment></Payment>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <Aside></Aside>
                    </div>
                </div>
        </div>
        </>
    );
}

export default PersonalDetail;
