import React from 'react'
import '../CartStyles/Payment.css'
import PageTitle from '../Components/PageTitle'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import CheckoutPath from './CheckoutPath'
import { Link } from 'react-router-dom'

const Payment = () => {
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"))
  return (
   <>
   <PageTitle title="Payment Processing"/>
   <Navbar/>
   <CheckoutPath activePath={2}/>
   <div className="payment-container">
    <Link to="/order/confirm" className='payment-go-back'>Go Back</Link>
    <button className="payment-btn">Pay ({orderInfo.total})/-</button>
   </div>

   <Footer/>
   </>
  )
}

export default Payment