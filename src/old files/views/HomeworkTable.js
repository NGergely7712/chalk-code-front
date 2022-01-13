import {render} from '@testing-library/react'
import React from 'react'
import Navbar from '../Components/navbar'
import axios from 'axios'
import {useState} from 'react'
import {useEffect} from 'react'
import './Homework.css'
import Sidebar from "../Components/sidebar";
import background from "../background.jpg";

function HomeworkTable(homework) {
    this.state = {
        homeworkData: homework
    }
    
    return (
        <table id="table">
            <tr>
                <th>Subject</th>
                <th>Description</th>
                <th>Assigned on</th>
            </tr>
            {this.state.homeworkData.map((item, index) => {
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
        </table>
    )
}


export default HomeworkTable