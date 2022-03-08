import React from 'react';
import './banner-sec.css';

export default function BannerSec() {
  return (
    <>
    <div>
        <section>
            <div class="banner-section spad">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="single-banner">
                                <img src="assets/img/banner-1.jpg" alt="" />
                                <div class="inner-text">
                                    <h4>Men’s</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="single-banner">
                                <img src="assets/img/banner-2.jpg" alt="" />
                                <div class="inner-text">
                                    <h4>Women’s</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="single-banner">
                                <img src="assets/img/banner-3.jpg" alt="" />
                                <div class="inner-text">
                                    <h4>Kid’s</h4>
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
