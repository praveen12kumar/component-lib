import React from 'react';
import { useNavigate } from 'react-router';
import "./index.css";
import "../../css/main.css";
import {AllcomponentRoutes}from "../../App";


const ComponentList = () => {
    const navigate = useNavigate();
  return (
    <div className='content componentList'>
      <div className="component-listing">
        {
            AllcomponentRoutes.map((component, index)=>{
                return(
                    <div className="component-btn" key={index}
                    onClick={()=> navigate(`../${component.path}`)}
                    >
                        <p>{component.name}</p>
                    </div>
                )
            })
        }
      </div>
      
    </div>
  )
}

export default ComponentList
