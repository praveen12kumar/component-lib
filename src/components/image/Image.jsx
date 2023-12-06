import React from 'react';
import {SideBar, TopBar} from '../sideBar/SideBar';
import "./image.css";
const Image = () => {
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
      <h1 className="clh1">Images</h1>
          <p className="description">
            Images play an important role in any webpage. CSS plays a good role
            to control image display. You can set the following image properties
            using CSS. The border property is used to set the width of an image
            border. The height property is used to set the height of an image.
            <br />
            <br />
          </p>

          <div className="section section--type-one">
            <h4 className="clh4">Images</h4>
            <img
              src="https://fastly.picsum.photos/id/206/2880/1800.jpg?hmac=qqtAE4icI-2Tkxgul5jrduIkZu3JtmvLqpOIwLhzYZA"
              alt="picture"
              className="image basic"
            />

            <img
              src="https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I"
              alt="picture"
              className="image basic"
            />
            <div className="code-example-block">
              <iframe
                title="Carbon Embed"
                src="https://carbon.now.sh/embed/ldXtsIJUxv6rzZvVn1zl"
                style={{
                  width: "100%",
                margin: "auto",
                  height: "223px",
                  border: "0",
                  transform: "scale(1)",
                  overflow: "hidden",
                }}
                sandbox="allow-scripts allow-same-origin"
              ></iframe>
            </div>
          </div>

          <div className="section section--type-two">
            <h4 className="clh4">Bordered Images</h4>
            <img
              src="https://fastly.picsum.photos/id/206/2880/1800.jpg?hmac=qqtAE4icI-2Tkxgul5jrduIkZu3JtmvLqpOIwLhzYZA"
              alt="picture"
              className="image border"
            />

            <img
              src="https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I"
              alt="picture"
              className="image border"
            />
            <div className="code-example-block">
              <iframe
                title="Carbon Embed"
                src="https://carbon.now.sh/embed/7ha0zesiF8guREn3UK6u"
                style={{
                  width: "100%",
                margin: "auto",
                  height: "223px",
                  border: "0",
                  transform: "scale(1)",
                  overflow: "hidden",
                }}
                sandbox="allow-scripts allow-same-origin"
              ></iframe>
            </div>
          </div>

          <div className="section section--type-three">
            <h4 className="clh4">Opacity in Images</h4>
            <img
              src="https://fastly.picsum.photos/id/206/2880/1800.jpg?hmac=qqtAE4icI-2Tkxgul5jrduIkZu3JtmvLqpOIwLhzYZA"
              alt="picture"
              className="image opacity"
            />

            <img
              src="https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I"
              alt="picture"
              className="image opacity"
            />
            <div className="code-example-block">
              <iframe
                title="Carbon Embed"
                src="https://carbon.now.sh/embed/qaHFazWghK0RUOPJRrnB"
                style={{
                  width: "100%",
                  margin: "auto",
                  height: "223px",
                  border: "0",
                  transform: "scale(1)",
                  overflow: "hidden",
                }}
                sandbox="allow-scripts allow-same-origin"
              ></iframe>
            </div>
          </div>

          <div className="section section--type-four">
            <h4 className="clh4">Responsive Images</h4>
            <img
              src="https://fastly.picsum.photos/id/29/4000/2670.jpg?hmac=rCbRAl24FzrSzwlR5tL-Aqzyu5tX_PA95VJtnUXegGU"
              alt="picture"
              className="responsive"
            />

            <div className="code-example-block">
              <iframe
                title="Carbon Embed"
                src="https://carbon.now.sh/embed/pEv1y22mTaRTQmlOeDDf"
                style={{
                  width: "100%",
                  margin: "auto",
                  height: "223px",
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
  )
};
export default Image
