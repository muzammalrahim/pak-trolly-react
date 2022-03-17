import React from 'react';
import './info.css';

const PersonalInfo = () => {
    return (
        <>
        <div className="Container">
            <h2>1. Personal Information</h2>
            <form>
                <div className="row client_info">
                    <div className="social-title col-md-12 clearfix">
                        <span className="title_social">Social Title</span>
                        <div className="gender_info">
                        <span>
                            <input type="radio" id="test1" name="radio-group"  />
                            <label for="test1">Mr</label>
                        </span>
                        <span>
                            <input type="radio" id="test2" name="radio-group" />
                            <label for="test2">Mrs</label>
                        </span>
                        <span>
                            <input type="radio" id="test3" name="radio-group" />
                            <label for="test3">Miss</label>
                        </span>
                        <span>
                            <input type="radio" id="test4" name="radio-group" />
                            <label for="test4">Other</label>
                        </span>
                        </div>
                    </div>
                    <div className="col-md-6 title_info">
                        <label>First Name *</label>
                        <input type="text" className="form-control" placeholder="First Name" required />
                    </div>
                    <div className="col-md-6 title_info">
                        <label>Last Name *</label>
                        <input type="text" className="form-control" placeholder="Last Name" required />
                    </div>
                    <div className="col-md-6 title_info">
                        <label>Email *</label>
                        <input type="email" className="form-control" placeholder="Email" required />
                    </div>
                    <div className="col-md-6 title_info">
                        <label>Password</label>
                        <input type="password" className="form-control" required />
                    </div>
                    <div className="col-md-12 title_info">
                        <div className="form-group clearfix">
                            <input type="checkbox" id="nike" />
                            <label className="save-time" for="nike">And save time on your next order!</label>
                        </div>
                    </div>
                    <div className="col-md-6 title_info">
                        <label>Birthday</label>
                        <input type="number" className="form-control" required />
                    </div>
                    <div className="col-md-12 title_info">
                        <div className="form-group clearfix">
                            <input type="checkbox" id="nike2" />
                            <label className="save-time" for="nike2">Sign up for our newsletter <br/>
                            You may unsubscribe at any moment. For that purpose,
                            please find our contact info in the legal notice.</label>
                        </div>
                    </div>
                    <div className="col-md-12 title_info">
                       <button type="button" className="continue_btn">Continue</button>
                    </div>
                </div>
            </form>
        </div>
        </>
    );
}

export default PersonalInfo;
