import React from 'react';
import './banner-sec.css';
import S1 from '../../images/s1.svg'
import S2 from '../../images/s2.svg'
import S3 from '../../images/s3.svg'

export default function BannerSec() {
  return (
    <>
    <div>
        <section>
            <div class="banner-section spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="single-banner">

                                <div class="inner-text">
                                   <p>Flat 10% Discount</p>
                                   <h3>Best Lenovo Tablet</h3>
                                   <button>Shop Now</button>
                                </div>

                                <div>
                                    <img src={S1} alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="single-banner">

                                <div class="inner-text">
                                   <p>Flat 10% Discount</p>
                                   <h3>Best Lenovo Tablet</h3>
                                   <button>Shop Now</button>
                                </div>

                                <div>
                                    <img src={S2} alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="single-banner">

                                <div class="inner-text">
                                   <p>Flat 10% Discount</p>
                                   <h3>Best Lenovo Tablet</h3>
                                   <button>Shop Now</button>
                                </div>

                                <div>
                                    <img src={S3} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    </>
  )
}
