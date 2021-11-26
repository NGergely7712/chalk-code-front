import React from 'react'
import sidebarBtns from './sidebarBtns.js'
import homeworkView from "./homeworkView.js";
import Navbar from "./navbar";
import {Link} from "react-router-dom";

function sidebar() {
    return (
        <div id="sidebar" style={{height: window.innerHeight - 100}}>
            <ul>
                {sidebarBtns.map((item,index)=>{
                    return(
                        <Link className="navbar-link-container" to={item.url}><li key={index}><button className={item.cname}>{item.title}</button></li></Link>
                    )
                })}
            </ul>
        </div>
    )
}

export default sidebar
