import React from 'react'
import {NavLink } from 'react-router-dom';
import { AllcomponentRoutes } from '../../App';
import "../../css/main.css";
import "./sidebar.css"

const SideBar = () => {


    const getStyles = ({ isActive }) => ({
        color: isActive ? "#3A93C0": "#3A93C0",
        textDecoration:"none",
        fontWeight: isActive ? "600" : "400",
        fontSize: isActive ? "1.3rem": "1.1rem",
        
      });

  return (
    <div className='content sideBar'>
        <ul className='sidebar-list' >
            {
                AllcomponentRoutes.map((component, index)=>(
                    <li className='side-name' key={index}>
                    <NavLink style={getStyles}
                        to={(`/${component.path}`)}
                    >{component.name}</NavLink>
                    </li>
                ))
            }
        </ul>
        
    </div>
  )
}

export default SideBar
