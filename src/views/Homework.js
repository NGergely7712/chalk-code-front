import {render} from '@testing-library/react'
import React from 'react'
import Navbar from '../Components/navbar'
import axios from 'axios'
import {useState} from 'react'
import {useEffect} from 'react'
import './Homework.css'
import Sidebar from "../Components/sidebar";
import background from "../background.jpg";

function Homework() {/*
    const url ='https://localhost:44324/school/teacher/00000000-0000-0000-0000-000000000001/showhomework'
    const [Homework, sethomework] = useState(null);
    useEffect(() => {
        axios.get(url).then(response =>{
            sethomework(response.data)
        })
        return () => {
           
        }
    }, [url])
*/
    const homework = [
        {
            "class": "10b",
            "subject": "History",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "date": "dec/13"
        },
        {
            "class": "10b",
            "subject": "Grammar",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "date": "dec/01"
        },
        {
            "class": "10b",
            "subject": "Chemistry",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "date": "nov/31"
        },
        {
            "class": "10b",
            "subject": "Biology",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "date": "dec/09"
        },
        {
            "class": "10b",
            "subject": "Sociology",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "date": "dec/15"
        }
    ]
    return (
        <>
            <img id="background-image" src={background} alt=""/>
            <div className="background-content-table">
                <table id="table">
                    {homework.map((item, index) => {
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
                    <h1>Homework</h1>
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
                    </table>
                </div>
            </div>
        </>
    )
}


export default Homework