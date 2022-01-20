import {render} from '@testing-library/react'
import React from 'react'
import Navbar from '../Components/navbar'
import axios from 'axios'
import {useState} from 'react'
import {useEffect} from 'react'
import './Homework.css'
import Sidebar from "../Components/sidebar";
import background from "../background.jpg";
import url from "./urls"
import homeworkTable from "./HomeworkTable.js"

function Homework() {
    this.state = {
        dataNeeded: "",
        jsonData: ""
    }
    
    const forURL = this.state.dataNeeded.toString()
    useEffect(() => {
        axios.get(url.getURL(this.state.dataNeeded).link).then(response =>{
            this.state.jsonData = response
        })
        return () => {
            console.log(this.state.jsonData)
        }
    }, [url.getURL(this.state.dataNeeded).link])

    return (
        <>
            <img id="background-image" src={background} alt=""/>
            <div className="background-content-table">
                <table id="table">
                    {this.state.jsonData.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>
                                    {item.description}
                                </td>
                            </tr>
                        )
                    })}
                </table>
            </div>
            <Navbar/>
            <Sidebar/>
            <div id="content-container">
                <div className="content-table">
                    <h1>{url.getURL(this.state.dataNeeded).name}</h1>
                    {homeworkTable(this.state.jsonData)}
                </div>
            </div>
        </>
    )
}


export default Homework