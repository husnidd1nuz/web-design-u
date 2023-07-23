import React from 'react'
import "./Checkout.css"
import "./responsive/CheckoutMedia.css"
const Checkout = () => {
  return (
    <div id='Checkout'>
        <div id="Checkout-bg">

        </div>
        <div id="Checkout-title">
            <img src="https://i.ibb.co/tzKQHRS/Meubel-House-Logos.png" alt="Logo" />
            <h1>Checkout</h1>
            <h3>Home {">"} <span>Checkout</span></h3>
        </div>
        <div id="Checkout-main">
          <div id="Checkout-main-lBox">
            <h1>Billing details</h1>
            <div id="Checkout-main-lBox-miniBox">
              <div id="Checkout-main-miniBoxs">
                <p>First Name</p>
                <input type="text" placeholder='First Name'/>
              </div>
              <div id="Checkout-main-miniBoxs">
                <p>Last Name</p>
                <input type="text" placeholder='Last Name' />
              </div>
            </div>
            <p>Company Name (Optional)</p>
            <input type="text" placeholder='Company Name'/>
            <p>Country / Region</p>
            <input type="text" placeholder='Country / Region' />
            <p>Street address</p>
            <input type="Your Street" />
            <p>Town / City</p>
            <input type="text" placeholder='Your town/city' />
            <p>Province</p>
            <input type="text" placeholder='Western Province' />
            <p>Phone</p>
            <input type="text" placeholder='Your Phone' />
            <p>ZIP code</p>
            <input type="text" placeholder='Zip Code' />
            <p>Email address</p>
            <input type="text" placeholder='Your Email address' />
            <p></p>
            <input type="text" placeholder='Additional information' />
          </div>
          <div id="Checkout-main-rBox">
            <div id="Checkout-main-rBox-miniBox">
              <h3>Product</h3>
              <h3>Subtotal</h3>
            </div>
            <div id="Checkout-main-rBox-miniBox">
              <h4>Asgaard sofa <span>x 1</span></h4>
              <p>Rs. 250,000.00</p>
            </div>
            <div id="Checkout-main-rBox-miniBox">
              <h5>Asgaard sofa <span>x 1</span></h5>
              <p>Rs. 250,000.00</p>
            </div>
            <div id="Checkout-main-rBox-miniBox">
              <h5>Total</h5>
              <h2>Rs. 250,000.00</h2>
            </div>
            <hr />
            <h3>Direct Bank Transfer</h3>
            <p>Make your payment directly into our bank account. Please use <br /> your Order ID as the payment reference. Your order will not be <br /> shipped until the funds have cleared in our account.</p>
            <ul>
              <ul>
                <li >Direct Bank Transfer</li>
                <li >Cash On Delivery</li>
              </ul>
            </ul>
            <h5>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span>privacy policy.</span></h5>
            <button>Place order</button>
          </div>
        </div>
    </div>
  )
}

export default Checkout
