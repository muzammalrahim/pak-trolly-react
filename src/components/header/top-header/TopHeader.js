import React from 'react'
import { Link } from 'react-router-dom'
import './top-header.css'

export default function TopHeader() {
    // let navigate = useNavigate()
  return (
    <>
    <div class="header-top">
        <div class="container">
            <div className='row'>
                <div className='col-lg-6 col-md-12 col-sm-12'>
                    <div className='left-side'>
                        <p>
                        Tell a friends about Electshop Electronics & get 30% off your next order.
                        </p>
                    </div>  
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12'>
                    <ul className='right-side'>
                        <li className='pr-3 border-right'>
                            <Link to="#"> Need Help?</Link>
                        </li>
                        <li className='px-3 border-right'>
                            <Link to="#"> Track Order </Link>
                        </li>
                        <li className='pl-3'>
                            <Link to="#">  Gift Cards </Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
            
        </div>
    </div>
    </>
  )
}
