import React from 'react';
import './table-order.css';
import PL1 from '../../../../../../src/images/product_1.png';

const TableOrder = () => {
    return (
        <>
        <div>
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
                    <div className=""></div>
                </td>
                <td data-label="Qty">$1,190</td>
                <td data-label="Status">03/01/2016 - 03/31/2016</td>
                <td data-label="Order Date">03/01/2016 - 03/31/2016</td>
                </tr>
            </tbody>
        </table>

        </div>
        </>
    );
}

export default TableOrder;
