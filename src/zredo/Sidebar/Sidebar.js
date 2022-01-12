import React, {Component} from 'react'
import SidebarBtns from './SidebarBtns.js'
import "./Sidebar.css"
import TableDisplay from "../ContentBody/TableDisplay";
import ReactDOM from "react-dom";

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            table: null,
            url: null
        }
    }
    
    
}

export default Sidebar
