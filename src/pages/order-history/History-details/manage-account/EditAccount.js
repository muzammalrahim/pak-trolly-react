import React from 'react';
import './manage-account.css';

const EditAccount = () => {
    return (
        <>
        {/* <div className="manage-account-info">
			<h2 className="history-head">Manage Account</h2>
			
			<div className="account-info">
				<h3>Personal Information</h3>
				<ul className="mange-detail-ul">
					<li>
						<label>First Name</label>
						<input type="text" className="form-control" placeholder="Mike" />
					</li>
					<li>
						<label>Last Name</label>
						<input type="text" className="form-control" placeholder="Johan" />
					</li>
					<li>
						<label>Email</label>
						<input type="email" className="form-control" placeholder="mike@domain.com" />
					</li>
				</ul>
			</div>
			<div className="account-info">
				<h3>Personal Information</h3>
				<ul className="text-info">
					<li>
						<label>Home Address</label>
						<textarea className="form-control"></textarea>
					</li>
					<li>
						<label>Office Address</label>
						<textarea className="form-control"></textarea>
					</li>
				</ul>
			</div>
			<div className="edit-btn-dual clearfix">
			<button type="button" className="cancel-btn">Cancel</button>
			<button type="button" className="save-btn">Save</button>
			</div>
        </div> */}



		<div className="container">
			<div className="row">
				<div className="col-md-6">
					<h4>Welcome!   Please <a href="#" className="login-popup">Login</a> to continue</h4>
					<label>Rember me?  <a href="#" className="login-popup">Register here</a></label>
					<div className="">
						<label>Phone Number or Email</label>
						<input type="text" className="form-control" placeholder="Email number" />
					</div>
					<div className="">
						<label>Password</label>
						<input type="password" className="form-control" placeholder="Email number" />
					</div>
					<button className="save-btn">Login</button>
				</div>
				<div className="col-md-6"></div>
			</div>
		</div>
        </>
    );
}

export default EditAccount;