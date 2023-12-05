import React from 'react'
import SideBar from '../sideBar/SideBar';
import "../../css/main.css";
import "./button.css";

const Button = () => {
  return (
    <div className='content sidebar-container'>
    <div className="sidebar-content">
      <SideBar/>
    </div>
  <div className="main-content">
    <h1>Button</h1>
  </div>
</div>
  )
}

export default Button
