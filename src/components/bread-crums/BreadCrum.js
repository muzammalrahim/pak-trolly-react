import React from 'react'
import { Link } from 'react-router-dom'
import './bread-crum.css'

export default function BreadCrum() {
  return (
    <div className='brc-main'>
        <div className='container'>
                <ul class="breadcrumb">
                <li>
                    <Link to ="#">Home</Link>
                </li>
                <li>
                    <Link to ="#">Hot Deal</Link>
                </li>
                <li>Nike Airmax 270 React</li>
            </ul>
        </div>
    </div>
  )
}
