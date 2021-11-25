import { render } from '@testing-library/react'
import React from 'react'
import Navbar from '../Components/navbar'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import Sidebar from "../Components/sidebar";

function Homework() {
    const url ='https://localhost:44324/school/teacher/00000000-0000-0000-0000-000000000001/showhomework'
    const [Homework, sethomework] = useState(null);
    useEffect(() => {
        axios.get(url).then(response =>{
            sethomework(response.data)
        })
        return () => {
           
        }
    }, [url])

    if(Homework){
        return (
            <>
            <Navbar />
                <Sidebar />
            <div>
                <h2>{Homework}</h2>
            </div>
            </>
        )
    }else{
        return(
            <div>
                <Navbar />
                <Sidebar />
                <h2>Loading...</h2>
            </div>
        )
    }
}


export default Homework