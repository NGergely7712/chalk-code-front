import React, {Component} from 'react'
import jwt from 'jwt-decode'
import axios from 'axios'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import url from '../URLs'
import "./Forms.css"
import background from "../../background.jpg";

class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Username: '',
            Password: ''
        }
    }


    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios
            .post(url.root + '/login/auth', this.state)
            .then(response => {
                console.log(response)
                const token = response.data.token;
                const user = jwt(token)
                localStorage.setItem('token', token)
                localStorage.setItem('name', user.unique_name)
                localStorage.setItem('role', user.role)
                console.log(localStorage.getItem('name'))
                return (
                    window.location.replace("/")

                )
            })
            .catch(error => {
                console.log(error)

                alert("Invalid Username or Password")
            })
    }

    logoutbtn = e => {

        localStorage.clear();
        return (
            window.location.replace("/")
        )

    }

    render() {
        const {userName, password} = this.state
        if (localStorage.getItem('name') == null) {


            return (
                <>
                    <img id="background-image" src={background} alt=""/>
                    <Navbar/>
                    <Sidebar/>
                    <div className="form-table">
                        <form id="form-body" onSubmit={this.submitHandler}>

                            <div>
                                <label htmlFor="exampleInputEmail">Email address</label>
                                <br />
                                <input type="text" name="Username" value={userName} onChange={this.changeHandler}
                                       className="input-field" id="exampleInputEmail1" aria-describedby="emailHelp"
                                       placeholder="Enter email"/>
                            </div>
                            <br />
                            <div>
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <br />
                                <input name="Password" value={password} onChange={this.changeHandler} type="password"
                                       className="input-field" id="exampleInputPassword1" placeholder="Password"/>
                            </div>
                            <br />
                            <button type="submit" id="submit-button" className="buttons">Login</button>

                        </form>

                    </div>
                </>
            )
        } else {
            return (
                <>
                    <img id="background-image" src={background} alt=""/>
                    <Navbar/>
                    <Sidebar/>
                    <div className="form-table">
                        <form id="form-body" onSubmit={this.submitHandler}>
                            <button type="submit" className="buttons" onClick={this.logoutbtn}>Logout</button>
                        </form>
                    </div>
                </>
            )

        }
    }
}

//
export default PostForm