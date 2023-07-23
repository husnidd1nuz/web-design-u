import React from 'react'
import "./Comparison.css"
import "./responsive/ComparisonMedia.css"
const Comparison = () => {
  return (
    <div id='Comparison'>
        <div id="Comparison-bg">

        </div>
        <div id="Comparison-title">
            <img src="https://i.ibb.co/tzKQHRS/Meubel-House-Logos.png" alt="Logo" />
            <h1>Comparison</h1>
            <h3>Home {">"} <span>Comparison</span></h3>
        </div>
        <div id="Comparison-main">
          <div id="Comparison-main-sBox">
            <h1>Go to Product <br /> page for more <br /> Products</h1>
            <button>View More</button>
          </div>
          <div id="Comparison-main-sBox">
            <img src="https://i.ibb.co/n0cjw85/img1-png.jpg" alt="ComparisonImg" />
            <h3>Asgard Sofa</h3>
            <h5>Rs. 250,000.00</h5>
            <p>4.5</p>
            <button id='Comparison-sBtn'>204 Review</button>
          </div>
          <div id="Comparison-main-sBox">
            <img src="https://i.ibb.co/BVvwp1g/img2-1.jpg" alt="ComparisonImg" />
            <h3>Outdoor Sofa Set</h3>
            <h5>Rs. 224,000.00</h5>
            <p>4.2</p>
            <button id='Comparison-sBtn'>145 Review</button>
          </div>
          <div id="Comparison-main-sBox">
            <h1>Add A Product</h1>
            <button>Choose a Product</button>
          </div>
        </div>
    </div>
  )
}

export default Comparison
