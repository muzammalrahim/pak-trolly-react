import React from 'react';

const Address = () => {
    return (
        <>
        <div>
            <h2>2. Address</h2>
            <form>
                <div className="row client_info">                    
                    <div className="col-md-6 title_info">
                        <label>First Name *</label>
                        <input type="text" className="form-control" placeholder="First Name" required />
                    </div>
                    <div className="col-md-6 title_info">
                        <label>Last Name *</label>
                        <input type="text" className="form-control" placeholder="Last Name" required />
                    </div>
                    <div className="col-md-6 title_info">
                        <label>Company</label>
                        <input type="text" className="form-control" placeholder="Company" required />
                    </div>
                    <div className="col-md-6 title_info">
                        <label>VAT Number</label>
                        <input type="number" className="form-control" placeholder="VTA Number" required />
                    </div>
                    <div className="col-md-6 title_info">
                        <label>Company</label>
                        <input type="text" className="form-control" placeholder="Address" required />
                    </div>
                    <div className="col-md-6 title_info">
                        <label>Address Complement </label>
                        <input type="text" className="form-control" placeholder="Address Complement" required />
                    </div>
                    <div className="col-md-6 title_info">
                        <label>Zip/Postal Code </label>
                        <input type="number" className="form-control" placeholder="Zip/Postal Code" required />
                    </div>
                    <div className="col-md-6 title_info">
                        <label>Phone  </label>
                        <input type="number" className="form-control" placeholder="Phone" required />
                    </div>
                    <div className="col-md-6 title_info">
                        <label>Country </label>
                        <select className="form-control">
                            <option>Country</option>    
                        </select>
                    </div>
                    <div className="col-md-6 title_info">
                        <label>City </label>
                        <select className="form-control">
                            <option>City</option>    
                        </select>
                    </div>
                    <div className="col-md-12 title_info">
                        <div className="form-group clearfix">
                            <input type="checkbox" id="nike" />
                            <label className="save-time" for="nike"> Use this address for invoice too</label>
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

export default Address;
