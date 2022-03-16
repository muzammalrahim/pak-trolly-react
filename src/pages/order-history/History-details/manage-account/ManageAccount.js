import React from 'react';
import './manage-account.css';

const ManageAccount = () => {
    return (
        <>
        <div className="manage-account-info">
			<h2 className="history-head">Manage Account</h2>
			<div className="clearfix">
			<button type="button" className="edit-btn">Edit</button>
			</div>
			<div className="account-info">
				<h3>Personal Information</h3>
				<ul>
					<li>
						<label>First Name</label>
						<span>Mike </span>
					</li>
					<li>
						<label>Last Name</label>
						<span>Johan</span>
					</li>
					<li>
						<label>Email</label>
						<span>mike@domain.com</span>
					</li>
				</ul>
			</div>
			<div className="account-info">
				<h3>Personal Information</h3>
				<ul>
					<li>
						<label>Home Address</label>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
					</li>
					<li>
						<label>office Address</label>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
					</li>
				</ul>
			</div>
        </div>
        </>
    );
}

export default ManageAccount;