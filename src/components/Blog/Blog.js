import React from 'react'
import "./Blog.css"
import "./responsive/BlogMedia.css"
const Blog = () => {
  const BlogMainRCard  = [
    {
      BlogMainRCardImg: "https://study-z.net/img/is/iStock-506767036.jpg",
      BlogMainRCardTitle: "Going all-in with millennial design",
      BlogMainRCardDate: "03 Aug 2022",
    },
    {
      BlogMainRCardImg: "https://avatars.mds.yandex.net/i?id=df68e32b2807234634e8b181abc31176825dd27b-8348537-images-thumbs&n=13",
      BlogMainRCardTitle: "Exploring new ways of decorating",
      BlogMainRCardDate: "03 Aug 2022",
    },
    {
      BlogMainRCardImg: "https://avatars.mds.yandex.net/i?id=c8f08f6724dce766b8571a0d59880b1e290249b1-8474442-images-thumbs&n=13",
      BlogMainRCardTitle: "Handmade pieces that took time to make",
      BlogMainRCardDate: "03 Aug 2022",
    },
    {
      BlogMainRCardImg: "https://avatars.mds.yandex.net/i?id=650df7ac39c0944698b5ea9092b48e120b309b12-9224539-images-thumbs&n=13",
      BlogMainRCardTitle: "Modern home in Milan",
      BlogMainRCardDate: "03 Aug 2022",
    },
    {
      BlogMainRCardImg: "https://avatars.mds.yandex.net/i?id=a027ad0aa4d0e462a48a385b1709db1918949194-9181148-images-thumbs&n=13",
      BlogMainRCardTitle: "Modern home in Milan",
      BlogMainRCardDate: "03 Aug 2022",
    }
  ] 

  return (
    <div id='Blog'>
      <div id="Blog-bg">

      </div>
      <div id="Blog-title">
      <img src="https://i.ibb.co/tzKQHRS/Meubel-House-Logos.png" alt="Logo" />
            <h1>Blog</h1>
            <h3>Home {`>`} <span>Blog</span></h3>
      </div>
      <div id="Blog-main">
        <div id="Blog-main-lCard">
            <div id="Blog-main-card">
              <div id="Blog-main-sCard">
                  <img src="https://i.pinimg.com/originals/8d/56/6c/8d566cdba160e9e2f421ec2c80ba47e7.jpg" alt="sCard-bg" />
                  <div id="Blog-main-bottom-sCard">
                      <div id="Blog-main-bottom-miniCard">
                          <i className="fa-regular fa-user"></i>
                          <p>Admin</p>
                      </div>
                      <div id="Blog-main-bottom-miniCard">
                          <i className="fa-regular fa-calendar"></i>
                          
                          <p id='Blog-main-date'>
                            23 July 2023
                          </p>
                      </div>
                      <div id="Blog-main-bottom-miniCard">
                          <i class="fa-solid fa-thumbtack"></i>
                          <p id='Blog-main-date'>
                            Wood
                          </p>
                      </div>
                  </div>
              </div>
              <div id="Blog-main-sCard-title">
                <h1>
                Going all-in with millennial design
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                <button>Read more </button>
              </div>
            </div>
            <div id="Blog-main-card">
              <div id="Blog-main-sCard">
                  <img src="https://assets.entrepreneur.com/content/3x2/2000/20170516185910-dreamstime-m-40979477-crop.jpeg" alt="sCard-bg" />
                  <div id="Blog-main-bottom-sCard">
                      <div id="Blog-main-bottom-miniCard">
                          <i className="fa-regular fa-user"></i>
                          <p>Admin</p>
                      </div>
                      <div id="Blog-main-bottom-miniCard">
                          <i className="fa-regular fa-calendar"></i>
                          
                          <p id='Blog-main-date'>
                            23 July 2023
                          </p>
                      </div>
                      <div id="Blog-main-bottom-miniCard">
                          <i class="fa-solid fa-thumbtack"></i>
                          <p id='Blog-main-date'>
                          Handmade
                          </p>
                      </div>
                  </div>
              </div>
              <div id="Blog-main-sCard-title">
                <h1>
                  Exploring new ways of decorating
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                <button>Read more </button>
              </div>
            </div>
            <div id="Blog-main-card">
              <div id="Blog-main-sCard">
                  <img src="https://avatars.mds.yandex.net/i?id=9162a0f0612a2e9eaa23d8d3ff236baba6f7fd36-9099630-images-thumbs&n=13" alt="sCard-bg" />
                  <div id="Blog-main-bottom-sCard">
                      <div id="Blog-main-bottom-miniCard">
                          <i className="fa-regular fa-user"></i>
                          <p>Admin</p>
                      </div>
                      <div id="Blog-main-bottom-miniCard">
                          <i className="fa-regular fa-calendar"></i>
                          
                          <p id='Blog-main-date'>
                            23 July 2023
                          </p>
                      </div>
                      <div id="Blog-main-bottom-miniCard">
                          <i class="fa-solid fa-thumbtack"></i>
                          <p id='Blog-main-date'>
                            Wood
                          </p>
                      </div>
                  </div>
              </div>
              <div id="Blog-main-sCard-title">
                <h1>
                Handmade pieces that took time to make
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                <button>Read more </button>
              </div>
            </div>
        </div>
        <div id="Blog-main-rCard">
          <div id="Blog-main-rCard-top">
            <input type="text" placeholder='Search' />
            <h3>Categories</h3>
            <div id="Blog-main-rCard-top-sCard">
              <h5>Crafts</h5>
              <p>2</p>
            </div>
            <div id="Blog-main-rCard-top-sCard">
              <h5>Design</h5>
              <p>8</p>
            </div>
            <div id="Blog-main-rCard-top-sCard">
              <h5>Handmade</h5>
              <p>7</p>
            </div>
            <div id="Blog-main-rCard-top-sCard">
              <h5>Interior</h5>
              <p>1</p>
            </div>
            <div id="Blog-main-rCard-top-sCard">
              <h5>Wood</h5>
              <p>6</p>
            </div>
          </div>
          <div id="Blog-main-rCard-bottom">
            <h3>Recent Posts</h3>
            {
              BlogMainRCard.map((item)=>{
                return(
                  <div id="Blog-main-rCard-sCard">
                    <img src={item.BlogMainRCardImg} alt="BlogMainRCardImg" />
                    <div id="Blog-main-rCard-sCard-miniBox">
                        <h3>{item.BlogMainRCardTitle}</h3>
                        <p>{item.BlogMainRCardDate}</p>
                    </div>  
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <div id="Blog-footer">
          <div id="Blog-footer-sCard">
            <button id='Blog-footer-sBtn'>1</button>
            <button id='Blog-footer-sBtn'>2</button>
            <button id='Blog-footer-sBtn'>3</button>
            <button id='Blog-footer-btn'>Next</button>
          </div>
        </div>
    </div>
  )
}

export default Blog
