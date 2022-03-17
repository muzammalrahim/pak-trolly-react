import React from 'react';
import './payment.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Header from '../../../components/header/Header';
import BreadCrum from '../../../components/bread-crums/BreadCrum';
import Subscribe from '../../../components/subscribe/Subscribe';
import Footer from '../../../components/footer/Footer';

const Payment = () => {
    return (
        <>
        <Header/>
        <BreadCrum/>
        <div className='container'>
            <h2>3. Shipping Method & Payment</h2>
            <form>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3 payment_tabs">
                <Tab eventKey="profile" title="EasyPasa" className='easy' >
                    <div className="easy-pasa">
                        <h4>Experience easy payments – save your Easypaisa account as default method to pay! <br />
                            Please ensure your Easypaisa account is Active and has sufficient balance.</h4>
                        <h4>To confirm your payment after providing OTP:</h4>
                        <ul>
                            <li><p>USSD prompt for Telenor Customers Only</p></li>
                            <li><p>Unlock your phone and enter 5 digit PIN in the prompt to pay</p></li>
                            <li className="or-li"><span>OR</span></li>
                            <li><p>Approve Payment in your Easypaisa App (Telenor and Other Networks)</p></li>
                            <li><p>Login to Easypaisa App and tap on payment notification to approve</p></li>
                            <li><p>If you miss the notification, go to My Approvals in side menu to confirm</p></li>
                        </ul>
                        <div className="pass-info">
                            <label>Easypaisa Account Number</label>
                            <input type="number" className="form-control" />
                        </div>
                        <button type="button" className="btn-continue">Confirm</button>
                    </div>
                </Tab>
                <Tab eventKey="Computer & Laptop" title="JazzCash"  className='jazz'>
                    <div className="jazz-cash">
                        <div className="jazz-ward">
                            <h4>FOR JAZZ/WARID</h4>
                            <p>Unlock your phone and you will receive a MPIN Input Prompt</p>
                        </div>
                        <div className="jazz-ward">
                            <h4>FOR OTHER NETWORKS</h4>
                            <p>Log-in to your JazzCash App and enter your MPIN</p>
                        </div>
                        <div className="jazz-ward">
                            <h5>Note</h5>
                            <p>Ensure your JazzCash account is Active and has sufficient balance.</p>
                        </div>
                        <div className="pass-info">
                            <label>JazzCash Account Number</label>
                            <input type="number" className="form-control" />
                        </div>
                        <div className="form-group check-box clearfix">
                            <input type="checkbox" id="nike" />
                            <label for="nike">Save your JazzCash Account for future use.</label>
                        </div>
                        <button type="button" className="btn-continue">Pay Now</button>
                    </div>
                </Tab>

                <Tab eventKey="Mobile & Tablet" title="Cash on Delivery"  className='cod'>
                    <button type="button" className="btn-continue">Pay Now</button>
                </Tab>
            </Tabs>
            </form>
        </div>
        <Subscribe/>
        <Footer/>
        </>
    );
}

export default Payment;
