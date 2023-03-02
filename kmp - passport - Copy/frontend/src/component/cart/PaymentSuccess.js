import React from 'react'
import { Link } from 'react-router-dom'
import "./paymentSuccess.css";

const PaymentSuccess = () => {
  return (
    <div className='paymentSuccess'>
        <h2>order confirmed</h2>
        <p>order placed successfully. check order status below.</p>
        <Link to='/myorders'>check status</Link>
    </div>
  )
}

export default PaymentSuccess