import React from 'react'
import sidebarBtns from './sidebarBtns.js'
import Navbar from "./navbar";
import {Link} from "react-router-dom";
import TableView from "../views/Tables.js";

function sidebar() {
    return (
        <div id="sidebar" style={{height: window.innerHeight - 100}}>
            <ul>
                {sidebarBtns.map((item,index)=>{
                    return(
                        <li key={index}><button className={item.cname} onClick={() => TableView(item.table, "S21AKEK")}>{item.title}</button></li>
                    )
                })}
            </ul>
        </div>
    )
}

export default sidebar
