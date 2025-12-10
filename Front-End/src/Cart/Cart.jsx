import React from 'react'
import '../CartStyles/Cart.css'
import PageTitle from '../Components/PageTitle'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import CartItems from './CartItems'
import { useSelector } from 'react-redux'

const Cart = () => {
  const {cartItems}=useSelector((state)=>state.cart)
  return (
  <>
  <PageTitle title="Cart"/>
  <Navbar/>
   <div className="cart-page">
    <div className="cart-items">
      <div className="cart-items-heading">Your Cart</div>
      <div className="cart-table">
        <div className="cart-table-header">
          <div className="header-product">Product</div>
          <div className="header-quantity">Quantity</div>
          <div className="header-total item-total-heading">Item Total</div>
          <div className="header-action">Actions</div>
        </div>
        {/*Cart Items  */}
       {cartItems && cartItems.map(item=><CartItems item={item} key={item.name}/>)}
      </div>
    </div>
       
       {/* Price Summary */}
       <div className="price-summary">
        <h3 className="price-summary-heading">Price Summary</h3>
        <div className="summary-item">
          <p className="summary-label">Subtotal : </p>
          <div className="summary-value">200/-</div>
        </div>
        <div className="summary-item">
          <p className="summary-label">Tax (18%) : </p>
          <div className="summary-value">10/-</div>
        </div>
        <div className="summary-item">
          <p className="summary-label">Shipping : </p>
          <div className="summary-value">50/-</div>
        </div>
        <div className="summary-total">
          <p className="total-label">Total : </p>
          <div className="Total-value">260/-</div>
        </div>
        <button className="checkout-btn">Proceed to CheckOut</button>
       </div>
   </div>
  <Footer/>
  </>
  )
}

export default Cart