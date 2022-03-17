import React from 'react';
import './table-order.css';
import PL1 from '../../../../../../src/images/product_1.png';

const TableOrder = () => {
    return (
        <>
        <div className="order-table-info">
           <h2 className="history-head">My Reviews</h2>
            <table>
                <thead>
                    <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Detail</th>
                    <th scope="col">Qty</th>
                    <th scope="col">Status</th>
                    <th scope="col">Order Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td data-label="Image">
                        <div className="item-img">
                        <img src={PL1} alt="product" />
                    </div>
                    </td>
                    <td data-label="Detail">
                        <div className="detail-info clearfix">
                            <h2>New Apple iPhone 12 Pro Max Gold</h2>
                            <div className="price-tag clearfix">
                                <span className="old_price">$123.21</span>
                                <span className="new_price">$123.21</span>
                            </div>
                            
                        </div>
                        <ul className="info-size-color">
                                <li>
                                    <label>Size:</label>
                                    <span>4'* 4.9'</span>
                                </li>
                                <li>
                                    <label>Color:</label>
                                    <span>Red</span>
                                </li>
                            </ul>
                    </td>
                    <td data-label="Qty"><span>4</span></td>
                    <td data-label="Status"><span className="inprocess-status">In Processor</span></td>
                    <td data-label="Order Date"><span>03/01/2016</span></td>
                    </tr>
                    <tr>
                    <td data-label="Image">
                        <div className="item-img">
                        <img src={PL1} alt="product" />
                    </div>
                    </td>
                    <td data-label="Detail">
                        <div className="detail-info clearfix">
                            <h2>New Apple iPhone 12 Pro Max Gold</h2>
                            <div className="price-tag clearfix">
                                <span className="old_price">$123.21</span>
                                <span className="new_price">$123.21</span>
                            </div>
                            
                        </div>
                        <ul className="info-size-color">
                                <li>
                                    <label>Size:</label>
                                    <span>4'* 4.9'</span>
                                </li>
                                <li>
                                    <label>Color:</label>
                                    <span>Red</span>
                                </li>
                            </ul>
                    </td>
                    <td data-label="Qty"><span>4</span></td>
                    <td data-label="Status"><span className="cancel-status">Canceled</span></td>
                    <td data-label="Order Date"><span>03/01/2016</span></td>
                    </tr>


                </tbody>
            </table>
        </div>
        </>
    );
}

export default TableOrder;
