import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./install.css";
import "../../css/main.css";
const InstallationPage = () => {
  const navigate = useNavigate();
  return (
    <div className='installation-container'>
      <section className="about-section">
      <h4>
          To begin using the styles provided by <span>UI Components</span>{" "}
          <br /> in your project, put the URL supplied in the code snippet below
          stylesheets link in your project. <br /> This is a free, open source
          library that provides ready-to-use frontend components
        </h4>
      </section>
      <section className="installation-link">
        <iframe
          title="unique"
          src="https://carbon.now.sh/embed/CSmU5Eo1y7UOfyXzRJi2"
          style={{
            width: "100%",
            margin: "auto",
            height: "300px",
            border: "0",
            transform: "scale(1)",
            overflow: "hidden",
          }}
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </section>
      <section className='nav-btn-section'>
      <div onClick={()=>navigate('/')} className="foot-item " >
              Home
            </div>
            <div onClick={()=>navigate('/components')} className="foot-item ">
              Components
            </div>
      </section>
    </div>
  )
}

export default InstallationPage;
