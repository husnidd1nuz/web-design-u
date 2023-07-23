import React from 'react'
import "./MainProducts.css"
import "./responsive/MainProductMedia.css"
const Products = [
  {
    ProductImg: "https://i.ibb.co/TbyYRxz/img1.png",
    ProductSaleBtn: "-30%",
    ProductName: "Syltherine",
    ProductTitle: "Stylish cafe chair",
    ProductPrice: "Rp 2.500.000",
    ProductSale: "Rp 3.500.000"
  },
  {
    ProductImg: "https://i.ibb.co/kHC7bLy/image-2.png",
    ProductSaleBtn: "-40%",
    ProductName: "Leviosa",
    ProductTitle: "Stylish cafe chair",
    ProductPrice: "Rp 2.500.000",
    ProductSale: "Rp 3.500.000"
  },
  {
    ProductImg: "https://i.ibb.co/HYd4YQB/image-3-2.png",
    ProductSaleBtn: "-50%",
    ProductName: "Lolito",
    ProductTitle: "Luxury big sofa",
    ProductPrice: "Rp 7.000.000",
    ProductSale: "Rp 14.000.000"
  },
  {
    ProductImg: "https://i.ibb.co/R71sz53/image-4.png",
    ProductSaleBtn: "New",
    ProductName: "Respira",
    ProductTitle: "Outdoor bar table and stool",
    ProductPrice: "Rp 500.000",
  },
  {
    ProductImg: "https://i.ibb.co/zs4cQbq/image-5.png",
    ProductSaleBtn: "New",
    ProductName: "Grifo",
    ProductTitle: "Night lamp",
    ProductPrice: "Rp 1.500.000",
  },
  {
    ProductImg: "https://i.ibb.co/hstw3wW/image-6.png",
    ProductSaleBtn: "New",
    ProductName: "Muggo",
    ProductTitle: "Small mug",
    ProductPrice: "Rp 150.000",
  },
  {
    ProductImg: "https://i.ibb.co/K2wMWD6/image-7.png",
    ProductSaleBtn: "-50%",
    ProductName: "Pingky",
    ProductTitle: "Cute bed set",
    ProductPrice: "Rp 7.000.000",
    ProductSale: "Rp 14.000.000"
  },
  {
    ProductImg: "https://i.ibb.co/xfNRgmQ/image-8.png",
    ProductSaleBtn: "New",
    ProductName: "Potty",
    ProductTitle: "Minimalist flower pot",
    ProductPrice: "Rp 500.000",
  },
  // {
  //   ProductImg: "https://i.ibb.co/TbyYRxz/img1.png",
  //   ProductSaleBtn: "-30%",
  //   ProductName: "Syltherine",
  //   ProductTitle: "Stylish cafe chair",
  //   ProductPrice: "Rp 2.500.000",
  //   ProductSale: "Rp 3.500.000"
  // },
  // {
  //   ProductImg: "https://i.ibb.co/kHC7bLy/image-2.png",
  //   ProductSaleBtn: "-40%",
  //   ProductName: "Leviosa",
  //   ProductTitle: "Stylish cafe chair",
  //   ProductPrice: "Rp 2.500.000",
  //   ProductSale: "Rp 3.500.000"
  // },
  // {
  //   ProductImg: "https://i.ibb.co/HYd4YQB/image-3-2.png",
  //   ProductSaleBtn: "-50%",
  //   ProductName: "Lolito",
  //   ProductTitle: "Luxury big sofa",
  //   ProductPrice: "Rp 7.000.000",
  //   ProductSale: "Rp 14.000.000"
  // },
  // {
  //   ProductImg: "https://i.ibb.co/R71sz53/image-4.png",
  //   ProductSaleBtn: "New",
  //   ProductName: "Respira",
  //   ProductTitle: "Outdoor bar table and stool",
  //   ProductPrice: "Rp 500.000",
  // },
  // {
  //   ProductImg: "https://i.ibb.co/zs4cQbq/image-5.png",
  //   ProductSaleBtn: "New",
  //   ProductName: "Grifo",
  //   ProductTitle: "Night lamp",
  //   ProductPrice: "Rp 1.500.000",
  // },
  // {
  //   ProductImg: "https://i.ibb.co/hstw3wW/image-6.png",
  //   ProductSaleBtn: "New",
  //   ProductName: "Muggo",
  //   ProductTitle: "Small mug",
  //   ProductPrice: "Rp 150.000",
  // },
  // {
  //   ProductImg: "https://i.ibb.co/K2wMWD6/image-7.png",
  //   ProductSaleBtn: "-50%",
  //   ProductName: "Pingky",
  //   ProductTitle: "Cute bed set",
  //   ProductPrice: "Rp 7.000.000",
  //   ProductSale: "Rp 14.000.000"
  // },
  // {
  //   ProductImg: "https://i.ibb.co/xfNRgmQ/image-8.png",
  //   ProductSaleBtn: "New",
  //   ProductName: "Potty",
  //   ProductTitle: "Minimalist flower pot",
  //   ProductPrice: "Rp 500.000",
  // },
]
const MainProducts = () => {
  return (
    <div id='MainProducts'>
      <div className="container">
        <h1>Our Products</h1>
        <div id="MainProducts-card">
          {
            Products.map((item,index)=>{
                return(
                    <div id="MainProducts-sBox" onClick={()=>{
                      let MainProductsBg = document.querySelector("#MainProducts-bgBox");
                      MainProductsBg.style = `display: block`
                    }}>
                      <img src={item.ProductImg} alt="" />
                      <button>{item.ProductSaleBtn}</button>
                      <h3>{item.ProductName}</h3>
                      <p>{item.ProductTitle}</p>
                      <div id="Product-price">
                        <h3>{item.ProductPrice}</h3>
                        <strike>{item.ProductSale}</strike>
                      </div>
                      
                    <div id="MainProducts-bgBox">
                      <button id="MainProducts-bgBox-btn">
                        Add to card
                      </button>
                      <div id="MainProducts-bgBox-notfBox">
                        <div id="MainProducts-notfSBox">
                        <i class="fa-solid fa-share-nodes"></i>
                        <p>Share</p>
                        </div>
                        <div id="MainProducts-notfSBox">
                        <i class="fa-sharp fa-solid fa-right-left"></i>
                        <p>Compare</p>
                        </div>
                        <div id="MainProducts-notfSBox">
                        <i class="fa-regular fa-heart"></i>
                        <p>Like</p>
                        </div>
                      </div>
                    </div>
                    </div>
                  
                )
            })
          }
        </div>
        <button id="MainProducts_btn">
          Show More
        </button>
      </div>
    </div>
  )
}

export default MainProducts
