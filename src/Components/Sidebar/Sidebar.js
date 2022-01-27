import React, {Component} from 'react'
import SidebarBtns from './SidebarBtns.js'
import "./Sidebar.css"
import ReactDOM from "react-dom";
import ListClasses from "../TableView/ListClasses";
import Homework from "../TableView/Homework";
import urls from "../URLs";
import axios from "axios";

import AddStudent from "../FormView/AddStudent";
import ListStudents from "../TableView/ListStudents";

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            table: "",
            tableContent: ""
        }
    }

    getApiData = async (url) => {
        await axios.get(url).then(result => {
            this.state.tableContent = result.data
        }).catch(error => {
            console.log(error)
        })
    }

    clickHandler = async e => {
        const container = document.getElementById("main-body-container")
        await this.setState({clicked: !this.state.clicked, table: e.target.id, tableContent: ""})
        switch (this.state.table) {
            case "listClasses":
                await this.getApiData(urls.listClasses)
                if (this.state.tableContent.length > 1) {
                    ReactDOM.render(<ListClasses table={this.state.table}
                                                 tableContent={this.state.tableContent}/>, container)
                }
                break
            case "listStudents":
                await this.getApiData(urls.listStudents)
                if (this.state.tableContent.length > 1) {
                    ReactDOM.render(<ListStudents table={this.state.table}
                                                 tableContent={this.state.tableContent}/>, container)
                }
                break
            case "addStudent":
                ReactDOM.render(<AddStudent/>, container)
                break
            case "homework":
                //await this.getApiData(urls.homework + "S21AKEK/homework")
                //if (this.state.tableContent.length > 1) {
                ReactDOM.render(<Homework table={this.state.table}
                                          tableContent={this.state.tableContent}/>, container)
                //}
                break
        }
    }

    render() {
        return (
            <div id="sidebar">
                <ul>
                    {SidebarBtns.map((item, index) => {
                        if (item.role === "") {
                            return (
                                <li key={index}>
                                    <button className={item.cname} id={item.table}
                                            onClick={this.clickHandler}>{item.title}</button>
                                </li>
                            )
                        }
                        if (item.role === localStorage.getItem("role")) {
                            return (
                                <li key={index}>
                                    <button className={item.cname} id={item.table}
                                            onClick={this.clickHandler}>{item.title}</button>
                                </li>
                            )
                        }
                    })}
                </ul>
            </div>
        )
    }
}

export default Sidebar
