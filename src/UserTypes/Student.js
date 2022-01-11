import {render} from '@testing-library/react'
import React from 'react'
import Navbar from '../Components/navbar'
import axios from 'axios'
import {useState} from 'react'
import {useEffect} from 'react'
import Sidebar from "../Components/sidebar";
import background from "../background.jpg";

function Student() {/*
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
    return (
        <>
            <img id="background-image" src={background} alt=""/>
            <Navbar/>
            <Sidebar/>
        </>
    )
}


export default Student