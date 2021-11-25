import React from 'react'
import sidebarBtns from './sidebarBtns.js'
import homeworkView from "./homeworkView.js";

function homework() {
    document.getElementById("homework").innerText = "HOMEWORK";
    let body = document.getElementById("content-body");
    body.innerText = "homework";
}

function exam() {
    let body = document.getElementById("content-body");
    body.innerText = "exam";
}

function mark() {
    let body = document.getElementById("content-body");
    body.innerText = "mark";
}

function schedule() {
    let body = document.getElementById("content-body");
    body.innerText = "schedule";
}

function sidebar() {
    return (
        <div id="sidebar">
            <ul>
                {sidebarBtns.map((item,index)=>{
                    return(
                        <li key={index}><button onClick={homeworkView} className={item.cname}>{item.title}</button></li>
                    )
                })}
            </ul>
        </div>
    )
}

export default sidebar
