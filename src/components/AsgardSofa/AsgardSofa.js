import React from 'react'
import "./AsgardSofa.css"
import "./responsive/AsgardSofaMedia.css"
const AsgardSofa = () => {
  return (
    <div id='AsgardSofa'>
        <div id="AsgardSofa-header">  
            <div id="AsgardSofa-header-lBox">
                <h3>Home <span>{">"}</span> Shop <span>{">"}</span></h3>
            </div>
            <div id="AsgardSofa-header-rBox">
                <h3>Asgard sofa</h3>
            </div>
        </div>
        <div id="AsgardSofa-top">
          <div id="AsgardSofa-top-main">
          <ul id='ImgUl'>
            <li><a href=""><img src="https://avatars.mds.yandex.net/i?id=84f7a7de6f8aa776c920cc39dfa612b4c123ae41-8493932-images-thumbs&n=13"/></a></li>
            <li><a href=""><img src="https://avatars.mds.yandex.net/i?id=9bd0859cabae17b6214ddb0ba79081106eb8c0c4-9065839-images-thumbs&n=13"/></a></li>
            <li><a href=""><img src="https://avatars.mds.yandex.net/i?id=2c81b1fda831f559b19b2bac498d55e0-5614810-images-thumbs&n=13"/></a></li>
            <li><a href=""><img src="https://avatars.mds.yandex.net/i?id=67c9a74b0593a3e556386aac7aa855d611a6b5a0-8497946-images-thumbs&n=13"/></a></li>
          </ul>
          <div id="AsgardSofa-top-main-title">
            <h1>Asgaard sofa</h1>
            <h3>Rs. 250,000.00</h3>
            <div id="AsgardSofa-top-title-price">
              {/* * stars.. */}
              <button>
                5 Customer Review
              </button>
            </div>
            <p>
            Setting the bar as one of the loudest speakers in its class, the <br /> Kilburn is a compact, stout-hearted hero with a well-balanced <br /> audio which boasts a clear midrange and extended highs for a <br /> sound.
            </p>
            <span>Size</span>
            <div id="AsgardSofa-top-size-btn">
              <button>L</button>
              <button>XL</button>
              <button>XS</button>
            </div>
            <span>Color</span>
            <div id="AsgardSofa-top-size-colors">
              <button></button>
              <button></button>
              <button></button>
            </div>
            <div id="AsgardSofa-top-Inc">
              <div id="AsgardSofa-top-Ins-lBox">
                <button>-</button>
                <p>1</p>
                <button>+</button>
              </div>
              <button>Add to cart</button>
              <button>+ Compare</button>
            </div>
            <hr />
            <div id="AsgardSofa-top-footer">
                <div id="AsgardSofa-footer-lBox">
                  <li>SKU</li>
                  <li>Category</li>
                  <li>Tags</li>
                  <li>Share</li>
                </div>
                <div id="AsgardSofa-footer-rBox">
                  <li>: SS001</li>
                  <li>: Sofas</li>
                  <li>: Sofa, Chair, Home, Shop</li>
                </div>
            </div>
          </div>
          </div>
        </div>
        <div id="AsgardSofa-main">
          <div id="AsgardSofa-main-top">
            <h3>Description</h3>
            <h5>Additional Information</h5>
            <h5>Reviews [5]</h5>
          </div>
          <p>
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and <br /> sound of Marshall, unplugs the chords, and takes the show on the road. <br /> <br />
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest <br /> speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange <br /> and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls <br /> to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
          </p>
          <div id="AsgardSofa-main-bottom">
          <img src="https://avatars.mds.yandex.net/i?id=ceda9b156a0f25592f4b97fba48ddbdc271059c5-8496938-images-thumbs&n=13" alt="Mask-group"/>
          <img src="https://avatars.mds.yandex.net/i?id=e927a48a7d24f1e07b9d97ff382096cde2ae8be6-8406302-images-thumbs&n=13" alt="Mask-group-2"/>
          </div>
        </div>
    </div>
  )
}

export default AsgardSofa
