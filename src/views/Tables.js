import {render} from '@testing-library/react'
import React from 'react'
import Navbar from '../Components/navbar'
import axios from 'axios'
import {useState} from 'react'
import {useEffect} from 'react'
import './Homework.css'
import Sidebar from "../Components/sidebar";
import background from "../background.jpg";

function apiGet(url) {
    let apiData;
    fetch(url, {method: "GET"})
        .then(response => response.json())
        .then(response => {
            apiData = response
        })
    return apiData;
}

function TableView(tableType, id) {
    let table = {}
    switch (tableType) {
        case "homework":
            let homework = apiGet(`https://localhost:44324/list-classes`)
            let background = `{homework.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>
                                    {item.description}
                                </td>
                            </tr>
                        )
                    })}`
            let foreground = `<h1>Homework</h1>
                    <table id="table">
                        <tr>
                            <th>Subject</th>
                            <th>Description</th>
                            <th>Due</th>
                        </tr>
                        {homework.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        {item.subject}
                                    </td>
                                    <td>
                                        {item.description}
                                    </td>
                                    <td>
                                        {item.date}
                                    </td>
                                </tr>
                            )
                        })}
                    </table>`
            table.background = background;
            table.foreground = foreground;
            break;
    }
    
    return (
        <>
            <img id="background-image" src={background} alt=""/>
            <div className="background-content-table">
                <table id="table">
                    {table.background}
                </table>
            </div>
            <Navbar/>
            <Sidebar/>
            <div id="content-container">
                <div className="content-table">
                    {table.foreground}
                </div>
            </div>
        </>
    )
}

export default TableView