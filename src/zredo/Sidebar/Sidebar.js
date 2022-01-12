import React, {Component} from 'react'
import SidebarBtns from './SidebarBtns.js'
import "./Sidebar.css"
import TableDisplay from "../ContentBody/TableDisplay";
import ReactDOM from "react-dom";
import ListClasses from "../ContentBody/ListClasses";

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            table: "",
            url: ""
        }
    }

    displayTable(table){
        this.state.table = table
        const container = document.getElementById("main-body-container")
        return (
            ListClasses()
        )
    }
    
    render() {
        //const { userId, title, body } = this.state
        return (
            <div id="sidebar">
                <ul>
                    {SidebarBtns.map((item,index)=>{
                        return(
                            <li key={index}><button className={item.cname} onClick={this.displayTable(item.table)}>{item.title}</button></li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default Sidebar
