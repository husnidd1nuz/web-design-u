import React from 'react'
import "./ShopCard.css"
import "./responsive/ShopCardMedia.css"
const ShopCard = () => {
    let ShopCards = [
        {
            ShopCardImg: "https://www.sohomod.com/media/catalog/product/k/n/knotch_j___m_furniture_modern_furniture_contemporary.jpg",
            ShopCardName: "Asgaard sofa",
            ShopCardSale: "1 *",
            ShopCardPrice: "Rs. 250,000.00",
        },
        {
            ShopCardImg: "https://yandex-images.clstorage.net/Vz1003O23/f55c49WG/TzvyzfNNOxLqu26xfuvT868cbOdAQY4lTj3MiUBUV5xpbN0A6UTC1etsAk_EJ0QOzwsAXlaB18HeOmUOPFPxMuq_96k3iY8zf15qwKurU8P_PbkzcVBLhQvsaKyFxTdp2czIE38jUKLti9QoFnWTyn8OwH5nELOlGNmkTKoHIHHMSdBvwc7YxqobP8cuKfFwfMxKd1LxSha5_cxtloSAeD85LLGOA8HybphHe8RGUru_LNJsBxRDpjoogx8bFEAR_wiynpA9GTRouGwnPHsgcM0M2KUSYlt3WO_Nb9dGgXpfWT2g79LCce6qNmpm9_KrDpxDrxbEYJY4SrJs26bRAn_YgHxz3mq2qwk9Nf3r4SDPLbhVIkA5pLvtT_0HpKAqH7t-cY5h4iBu-BSYlSchmR-sQy6X5NDW68pibuo2I7D_CGJtgZzbRxvJXOTO2rBzjw165QMgmpdZPZ7e5nQD2a7LXmDPwEDQrtvEexSEA1scPwGdB6dQ9tl6c0_Y5YND38vyrJBOaGSLKm8E3usRUK7P2Bbic_tVm9_tr7X1odn-2y0Q7hHwMO4IFdhWR4A5r-xgDzU04hY6WzA-CsQSUC5KcF4BPgrkaopOtT45M-G_jRqmARPKt6udD1x3VoPZfDiNsi2xICCsa9QYZMWRavyMAkwV9HGVygoBLvpHI2M9mMHvwD87V0k7jTTtO7BQzi-a1gLwKjdYnf1MJEaxSF8Y3qGN8QBxbDiH-yZkgAmdflEuZOaSlXpLwq5IFaAS7wvS_kLeCVZKeVzm39sR4f5u6pTzQCqnmr-cT9XFYYqdGHwDr-DAkHxIVlrHNUH7f3wCb7QXECSL6VFPOETzoT4JA84A_ooGiUhe1r248ZNebYj3gMIqtVt9b4z2ZiNJbonP0H5T8TOMu8cb1OYxyNxtcq0GtpAXaDsyDHmXIfHsOzPuQj5rRmrYf-beOlKQn115NfCBa3Toz-6v5GYg8",
            ShopCardName: "Casaliving Wood",
            ShopCardSale: "1 *",
            ShopCardPrice: "Rs. 270,000.00",
        }
    ]
  return (
    <div id='ShopCard'>
        <div className="container">
            <div id="ShopCard-top">
                <h3>Shopping Cart</h3>
                <i onClick={
                    ()=>{
                        let ShopCard = document.querySelector("#ShopCard");
                        let Header = document.querySelector("#Header");
                        let Home = document.querySelector("#Home");
                        let Footer = document.querySelector("#Footer");
                        let Checkout = document.querySelector("#Checkout");
                        Header.style = "opacity: 1"
                        Home.style = "opacity: 1"
                        Footer.style = "opacity: 1"
                        ShopCard.style = "display: none";
                    }
                } class="fa-regular fa-circle-xmark"></i>
            </div>
            <hr />
            <div id="ShopCard-main">
                {
                    ShopCards.map((item) => {
                        return(
                            <div id="ShopCard-main-sBox">

                                <img src={item.ShopCardImg} alt="" />
                                <div id="ShopCard-main-title">
                                <h3>{item.ShopCardName}</h3>
                                <p>{item.ShopCardSale}  <span>{item.ShopCardPrice}</span></p>
                                </div>
                                <i onClick={()=>{
                                    let ShopCard = document.querySelector("#ShopCard-main-sBox");
                                    ShopCard.style = "display: none" 
                                }} class="fa-regular fa-circle-xmark"></i>
                            </div>
                        )
                    })
                }
                <div id="ShopCard-main-price">
                    <h3>Subtotal</h3>
                    <p>Rs. 520,000.00</p>
                </div>
                <div id="ShopCard-main-bottom">
                    <button
                    onClick={()=>{
                        let HomeMainTop =document.querySelector("#Home-Main-top")
                        let HomeHeader = document.querySelector("#Home-Header")
                        let Furniro = document.querySelector("#Furniro")
                        let Rooms = document.querySelector("#HomeRoom")
                        let HeaderShop = document.querySelector("#HeaderShop")
                        let Contact = document.querySelector("#Contact")
                        let Products = document.querySelector("#MainProducts")
                        let AsgardSofa = document.querySelector("#AsgardSofa")
                        let Blog = document.querySelector("#Blog")
                        let Cart = document.querySelector("#Cart")
                        let Checkout = document.querySelector("#Checkout")
                        let Comparison = document.querySelector("#Comparison")
                        HomeHeader.style="display:none"
                        Furniro.style="display:none"
                        Rooms.style="display:none"
                        Products.style="display:none"
                        Contact.style="display:none"
                        AsgardSofa.style="display:none"
                        HomeMainTop.style="display:none"
                        HeaderShop.style="display:none"
                        Blog.style="display:none"
                        Checkout.style="display:none"
                        Comparison.style="display:none"
                        Cart.style="display:block"
                    }}
                    >Cart</button>
                    <button
                    onClick={()=>{
                        let HomeMainTop =document.querySelector("#Home-Main-top")
                        let HomeHeader = document.querySelector("#Home-Header")
                        let Furniro = document.querySelector("#Furniro")
                        let Rooms = document.querySelector("#HomeRoom")
                        let HeaderShop = document.querySelector("#HeaderShop")
                        let Contact = document.querySelector("#Contact")
                        let Products = document.querySelector("#MainProducts")
                        let AsgardSofa = document.querySelector("#AsgardSofa")
                        let Blog = document.querySelector("#Blog")
                        let Cart = document.querySelector("#Cart")
                        let Checkout = document.querySelector("#Checkout")
                        let Comparison = document.querySelector("#Comparison")
                        HomeHeader.style="display:none"
                        Furniro.style="display:none"
                        Rooms.style="display:none"
                        Products.style="display:none"
                        Contact.style="display:none"
                        AsgardSofa.style="display:none"
                        HomeMainTop.style="display:none"
                        HeaderShop.style="display:none"
                        Blog.style="display:none"
                        Cart.style="display:none"
                        Comparison.style="display:none"
                        Checkout.style="display:block"
                    }}
                    >Checkout</button>
                    <button
                    onClick={()=>{
                        let HomeMainTop =document.querySelector("#Home-Main-top")
                        let HomeHeader = document.querySelector("#Home-Header")
                        let Furniro = document.querySelector("#Furniro")
                        let Rooms = document.querySelector("#HomeRoom")
                        let HeaderShop = document.querySelector("#HeaderShop")
                        let Contact = document.querySelector("#Contact")
                        let Products = document.querySelector("#MainProducts")
                        let AsgardSofa = document.querySelector("#AsgardSofa")
                        let Blog = document.querySelector("#Blog")
                        let Cart = document.querySelector("#Cart")
                        let Checkout = document.querySelector("#Checkout")
                        let Comparison = document.querySelector("#Comparison")
                        HomeHeader.style="display:none"
                        Furniro.style="display:none"
                        Rooms.style="display:none"
                        Products.style="display:none"
                        Contact.style="display:none"
                        AsgardSofa.style="display:none"
                        HomeMainTop.style="display:none"
                        HeaderShop.style="display:none"
                        Blog.style="display:none"
                        Cart.style="display:none"
                        Checkout.style="display:none"
                        Comparison.style="display: block"
                    }}
                    >Comparison</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShopCard
