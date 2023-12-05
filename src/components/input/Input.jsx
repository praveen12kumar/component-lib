import React from 'react';
import {SideBar, TopBar} from '../sideBar/SideBar';
import "./input.css";
import "../../css/main.css"
const Input = () => {
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
        <h1 >Input</h1>
        
      </div>
        </div>
    </div>
  )
}

export default Input
