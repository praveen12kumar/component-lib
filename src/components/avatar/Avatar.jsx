import React from 'react'
import SideBar from '../sideBar/SideBar';
import "../../css/main.css";
import "./avatar.css";


const Avatar = () => {
  return (
    <div className='content sidebar-container'>
    <div className="sidebar-content">
      <SideBar/>
    </div>
  <div className="main-content">
    <h1>Avatar</h1>
  </div>
</div>
  )
}

export default Avatar
