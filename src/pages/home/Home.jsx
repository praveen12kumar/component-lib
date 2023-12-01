import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import "../../css/main.css";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="content">
      <main>
        <div className="header">
          Get started with your <span>Project Designs</span>.
        </div>
        <div className="head_description">
          <p>
            UI Components is a simple yet engaging CSS library, integrated with
            pre-defined styled classes and utilities for quickly creating
            websites.
          </p>
        </div>
        <div className="main_btn">
          <div1
            onClick={() => navigate("./installation")}
            className="btn btn_primary a"
          >
            Get Started
          </div1>
          <Link
            to="https://github.com/OpenSourcePundit/css_component_lib"
            className="btn btn_secondary a"
          >
            GitHub
          </Link>
        </div>
        <img
          className="main-img"
          src="https://i.ibb.co/ZKYjg8y/bb59d62d439e44fe90090260b37aed07.webp"
          alt="Creative Team"
        />
      </main>
    </div>
  );
};

export default Home;
