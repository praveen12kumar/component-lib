import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/main.css";
import "./index.css";
const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="Header">
      <div className="title" onClick={()=> navigate("/")}>
        <h2>UI Component</h2>
      </div>
      <div className="other-sections">
        <p onClick={()=> navigate('/installation')}>Installation</p>
        <p>Components</p>
      </div>
    </header>
  );
};

export default Header;
