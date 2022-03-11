import React from 'react';
import Header from '../../components/header/Header';
import Aside from './cart-aside/Aside';
import CartDetail from './cart-detail/CartDetail';

const Cart = () => {
    return (
        <>
        <div>
        <Header></Header>
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
        </div>
        </>
    );
}

export default Cart;
