import React from 'react'
import sidebarBtns from './sidebarBtns.js'
import Navbar from "./navbar";
import {Router} from "react-router-dom";
import TableView from "../views/TableView.js";

function sidebar() {
    return (
        <div id="sidebar" style={{height: window.innerHeight - 100}}>
            <ul>
                {sidebarBtns.map((item,index)=>{
                    return(
                        <Router className="navbar-link-container" to={item.url} history={""}> : <TableView dataNeeded={item.dataNeeded}/><li key={index}><button className={item.cname}>{item.title}</button></li></Router>
                    )
                })}
            </ul>
        </div>
    )
}

export default sidebar
