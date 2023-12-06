import React from 'react'
import {SideBar, TopBar} from '../sideBar/SideBar';
import "../../css/main.css";


import "./card.css";
const Card = () => {
  return (
    <div className='content sidebar-container'>
    <div className="topbar-container">
      <TopBar/>
    </div>
  <div className="page-content">
  <div className="sidebar-content">
      <SideBar/>
    </div>
  <div className="main-content">
  <h1 className="clh1">Cards</h1>
          <p className="description">
            CSS cards are great for organizing and enhancing a website's user
            interface. Each card is uniquely designed to make it easy for users
            to read the card content. CSS cards are great for organizing and
            enhancing a website's user interface. Each card is uniquely designed
            to make it easy for users to read the card content.
            <br />
            <br />
            Cards contain content and actions about a single subject.
          </p>

          <div className="section section--type-one">
            <h4 className="clh4">Basic Card with Shadow</h4>
            <div className="type-one--card">
              <div className="cardcom background">
                <div className="card">
                  <img
                    className="card-image-one"
                    src="https://fastly.picsum.photos/id/76/4912/3264.jpg?hmac=VkFcSa2Rbv0R0ndYnz_FAmw02ON1pPVjuF_iVKbiiV8"
                    alt="card"
                  />
                  <article className="card-text-one">
                    <figcaption>"That's my spot."</figcaption>
                    <h6>- Sheldon Cooper</h6>
                    <summary>
                      In an ever-changing world it is a single point of
                      consistency.
                    </summary>
                  </article>
                  <footer>
                    <span>Read</span>
                    <span>Bookmark</span>
                    <ul>
                      <i className="fas fa-heart"></i>
                      <i className="fas fa-share-alt"></i>
                      <i className="fas fa-ellipsis-v"></i>
                    </ul>
                  </footer>
                </div>
              </div>
              <div className="code-example-block">
                <iframe
                  title="Carbon Embed"
                  src="https://carbon.now.sh/embed/1oXjXNaKreHsKZG11Xi5"
                  style={{
                    width: "100%",
                    margin: "auto",
                    height: "577px",
                    border: "0",
                    transform: "scale(1)",
                    overflow: "hidden",
                  }}
                  sandbox="allow-scripts allow-same-origin"
                ></iframe>
              </div>
            </div>

            <h4 className="clh4">Horizontal Cards</h4>
            <div className="type-one--card">
              <div className="cardcom background">
                <div className="card noshadow">
                  <section>
                    <img
                      className="card-image-two"
                      src="https://fastly.picsum.photos/id/84/1280/848.jpg?hmac=YFRYDI4UsfbeTzI8ZakNOR98wVU7a-9a2tGF542539s"
                      alt="card"
                    />
                    <article className="card-text-two">
                      <h3>"That's my spot."</h3>
                      <h5>- Sheldon Cooper</h5>
                    </article>
                  </section>
                  <footer>
                    <span>Read</span>
                    <span>Bookmark</span>
                    <ul>
                      <i className="fas fa-heart"></i>
                      <i className="fas fa-share-alt"></i>
                      <i className="fas fa-ellipsis-v"></i>
                    </ul>
                  </footer>
                </div>
              </div>
              <div className="code-example-block">
                <iframe
                  title="Carbon Embed"
                  src="https://carbon.now.sh/embed/6dhAPNLE0QTBw9TKmvfH"
                  style={{
                    width: "100%",
                    margin: "auto",
                    height: "577px",
                    border: "0",
                    transform: "scale(1)",
                    overflow: "hidden",
                  }}
                  sandbox="allow-scripts allow-same-origin"
                ></iframe>
              </div>
            </div>

            <h4 className="clh4">Cards with badge</h4>
            <div className="type-one--card">
              <div className="cardcom white">
                <div className="card card-badge">
                  <span className="update-badge">Trending!</span>
                  <img
                    className="card-image"
                    src="https://fastly.picsum.photos/id/103/2592/1936.jpg?hmac=aC1FT3vX9bCVMIT-KXjHLhP6vImAcsyGCH49vVkAjPQ"
                    alt="card"
                  />

                  <div className="product-detail">
                    <p>GRU INC.</p>
                    <p>Yellow color Happy Minion</p>
                    <span className="rating">
                      {" "}
                      <i className="fas fa-star"></i>4.5
                    </span>

                    <div className="footer">
                      <p className="price">
                        Rs.1098 <span className="old-price">Rs.1598</span>{" "}
                        <span className="discount">32%off</span>
                      </p>
                      <i className="fas fa-heart"></i>
                      <i className="fas fa-share-alt"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="code-example-block">
                <iframe
                  title="Carbon Embed"
                  src="https://carbon.now.sh/embed/TdleOv9zq6SqFLa7GPDq"
                  style={{
                    width: "100%",
                    margin: "auto",
                    height: "577px",
                    border: "0",
                    transform: "scale(1)",
                    overflow: "hidden",
                  }}
                  sandbox="allow-scripts allow-same-origin"
                ></iframe>
              </div>
            </div>

            <h4 className="clh4">Cards with Dismiss</h4>
            <div className="type-one--card">
              <div className="cardcom white">
                <div className="card card-badge dismiss">
                  <span className="update-badge">Trending!</span>
                  <img
                    className="card-image"
                    src="https://fastly.picsum.photos/id/133/2742/1828.jpg?hmac=0X5o8bHUICkOIvZHtykCRL50Bjn1N8w1AvkenF7n93E"
                    alt="card"
                  />
                  <span className="close">
                    <i className="fas fa-times-circle"></i>
                  </span>
                  <div className="product-detail">
                    <p>GRU INC.</p>
                    <p>Purple color Devil Minion</p>
                    <span className="rating negative">
                      {" "}
                      <i className="fas fa-star"></i>2.5
                    </span>

                    <div className="footer">
                      <p className="price">
                        Rs.1098 <span className="old-price">Rs.1598</span>{" "}
                        <span className="discount">32%off</span>
                      </p>
                      <i className="fas fa-heart"></i>
                      <i className="fas fa-share-alt"></i>
                    </div>
                  </div>
                </div>
                <button>Bring back</button>
              </div>
              <div className="code-example-block">
                <iframe
                  title="Carbon Embed"
                  src="https://carbon.now.sh/embed/AsQGvueSnTtchaodSdPx"
                  style={{
                    width: "100%",
                    margin: "auto",
                    height: "595px",
                    border: "0",
                    transform: "scale(1)",
                    overflow: "hidden",
                  }}
                  sandbox="allow-scripts allow-same-origin"
                ></iframe>
              </div>
            </div>

            <h4 className="clh4">Text Over Cards</h4>
            <div className="type-one--card">
              <div className="cardcom white">
                <div className="card card-badge cardtext">
                  <span className="update-badge">Trending!</span>
                  <img
                    className="card-img"
                    src="https://fastly.picsum.photos/id/203/4032/3024.jpg?hmac=yeLnHOEAWUYBtMnanR0-0Q7gSvYbyxPG3PLJYvm170Q"
                    alt="card"
                  />
                  <div className="product-detail">
                    <p className="text-over">OUT OF STOCK</p>
                    <p>GRU INC.</p>
                    <p>Yellow color Happy Minion</p>
                    <span className="rating">
                      {" "}
                      <i className="fas fa-star"></i>4.5
                    </span>

                    <div className="footer">
                      <p className="price">
                        Rs.1098 <span className="old-price">Rs.1598</span>{" "}
                        <span className="discount">32%off</span>
                      </p>
                      <i className="fas fa-heart"></i>
                      <i className="fas fa-share-alt"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="code-example-block">
                <iframe
                  title="Carbon Embed"
                  src="https://carbon.now.sh/embed/Nv8oyCxvbFWYdByDqOTm"
                  style={{
                    width: "100%",
                margin: "auto",
                    height: "595px",
                    border: "0",
                    transform: "scale(1)",
                    overflow: "hidden",
                  }}
                  sandbox="allow-scripts allow-same-origin"
                ></iframe>
              </div>
            </div>

            <h4 className="remove clh4">Horizontal Cards II</h4>
            <div className="type-one--card remove">
              <div className="cardcom white">
                <div className="card horizontall">
                  <img
                    className="card-img"
                    src="https://fastly.picsum.photos/id/206/2880/1800.jpg?hmac=qqtAE4icI-2Tkxgul5jrduIkZu3JtmvLqpOIwLhzYZA"
                    alt="card"
                  />
                  <div className="product-detail">
                    <p>GRU INC.</p>
                    <p>Valentine's Gift Cat Toy</p>
                    <span className="rating">
                      {" "}
                      <i className="fas fa-star"></i>4.5
                    </span>
                    <p className="price">
                      Rs.1098 <span className="old-price">Rs.1598</span>{" "}
                      <span className="discount">32%off</span>
                    </p>
                    <div className="footer">
                      <button className="button">
                        <i className="fas fa-heart"></i>Wishlist
                      </button>
                      <button className="button">
                        <i className="fas fa-shopping-cart"></i> Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="code-example-block">
                <iframe
                  title="Carbon Embed"
                  src="https://carbon.now.sh/embed/I5iKmLvcj9YeIGHfaDPP"
                  style={{
                    width: "100%",
                    margin: "auto",
                    height: "558px",
                    border: "0",
                    transform: "scale(1)",
                    overflow: "hidden",
                  }}
                  sandbox="allow-scripts allow-same-origin"
                ></iframe>
              </div>
            </div>
          </div>
    
  </div>
    </div>
</div>
  )
}

export default Card
