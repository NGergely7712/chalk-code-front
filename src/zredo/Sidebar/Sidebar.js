import React from 'react'
import SidebarBtns from './SidebarBtns.js'
import "./Sidebar.css"
import TableDisplay from "../ContentBody/TableDisplay";
import ReactDOM from "react-dom";

function Sidebar() {
    return (
        <div id="sidebar">
            <ul>
                {SidebarBtns.map((item, index) => {
                    return (
                        <li key={index}>
                            <button className={item.cname} onClick={async() => await ReactDOM.render(<TableDisplay table="listClasses"/>, document.getElementById("main-body-container"))}>{item.title}</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Sidebar
