import React from 'react';
import './review.css';
import PL1 from '../../../../../src/images/product_1.png';
import Header from '../../../../components/header/Header';
import BreadCrum from '../../../../components/bread-crums/BreadCrum';
import Subscribe from '../../../../components/subscribe/Subscribe';
import Footer from '../../../../components/footer/Footer';

const ReviewHis = () => {
    return (
        <>
		<Header/>
		<BreadCrum/>
        <div className="review-info container">
			<h2 className="history-head">My Reviews</h2>
        <table>
            <thead>
                <tr>
                <th scope="col">Image</th>
                <th scope="col">Detail</th>
                <th scope="col">Reviews</th>
                <th scope="col">Sender Name</th>
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
					<td data-label="Reviews"><p className="review-his">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p></td>
					<td data-label="Sender Name">
						<div className="send-name">
							<strong>Sold by</strong>
							<p>Hidefashion</p>
						</div>
					</td>
                </tr>


            </tbody>
        </table>

        </div>
		<Subscribe/>
		<Footer/>
        </>
    );
}

export default ReviewHis;