import React from 'react';
import './manage-account.css';

const EditAccount = () => {
    return (
        <>
        <div className="manage-account-info">
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
        </div>

        </>
    );
}

export default EditAccount;