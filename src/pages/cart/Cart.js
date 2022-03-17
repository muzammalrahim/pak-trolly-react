import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import Header from '../../components/header/Header';
import Aside from './cart-aside/Aside';
import CartDetail from './cart-detail/CartDetail';
import BreadCrumb  from '../../components/bread-crums/BreadCrum';
import Subscribe from '../../components/subscribe/Subscribe'
import Footer from '../../components/footer/Footer'

const Cart = () => {
    return (
        <>
        <div>
        <Header></Header>
        <BreadCrumb/>
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <CartDetail></CartDetail>
                    </div>
                    <div className="col-md-3">
                        <Aside></Aside>
                    </div>
                </div>
            </div>
            <Subscribe/>
            <Footer/>
        </div>
        </>
    );
}

export default Cart;
