import { render } from '@testing-library/react'
import React from 'react'
import Navbar from '../Components/Navbar'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

function Homework() {
    const url ='https://localhost:44324/school/teacher/4d4a57ee-dab3-4b40-b2ad-b9566d5adb45/showhomework'
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
            <div>
                <h2>{Homework}</h2>
            </div>
            </>
        )
    }else{
        return(
            <div>
                <Navbar />
                <h2>Loading...</h2>
            </div>
        )
    }
}


export default Homework