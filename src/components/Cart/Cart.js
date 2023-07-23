import React from 'react'
import "./Cart.css"
import "./responsive/CartMedia.css"
const Cart = () => {
  return (
    <div id='Cart'>
        <div id="Cart-bg">

        </div>
      <div id="Cart-title">
            <img src="https://i.ibb.co/tzKQHRS/Meubel-House-Logos.png" alt="Logo" />
            <h1>Cart</h1>
            <h3>Home {">"} <span>Cart</span></h3>
      </div>
      <div id="Cart-main">
        <div id="Cart-main-lBox">
            <div id="Cart-main-lBox-top">
                <ul>
                    <li>Product</li>
                    <li>Price</li>
                    <li>Quantity</li>
                    <li>Subtotal</li>
                </ul>
            </div>
            <div id="Cart-main-lBox-bottom">
                <img src="https://www.sohomod.com/media/catalog/product/k/n/knotch_j___m_furniture_modern_furniture_contemporary.jpg" alt="CartImg" />
                <h3>Asgard sofa</h3>
                <h3>Rs. 250,000.00</h3>
                <button>1</button>
                <p>Rs. 250,000.00</p>
                <button>Delete</button>
            </div>
        </div>
        <div id="Cart-main-rBox">
            <div id="Cart-main-rBox-total">
                <h3>Cart Total</h3>
                <div id="Cart-main-rBox-sub">
                    <h5>Subtotal</h5>
                    <p>Rs. 250,000.00</p>
                </div>
                <div id="Cart-main-rBox-price">
                    <h5>Total</h5>
                    <p>Rs. 250,000.00</p>
                </div>
                <button>Check Out</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
