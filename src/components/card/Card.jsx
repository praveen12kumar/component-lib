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
    <h1 >Card</h1>
    
  </div>
    </div>
</div>
  )
}

export default Card
