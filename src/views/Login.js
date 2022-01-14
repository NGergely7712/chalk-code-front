import React, { Component } from 'react'
import axios from 'axios'
import Navbar from '../Components/navbar'
import Sidebar from '../Components/sidebar'
import '../Components/Css/Loginform.css'
class PostForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			Username: '',
			Password:''
		}
	}
    

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
			.post('https://localhost:44324/login/auth', this.state)
			.then(response => {
				console.log(response)
                localStorage.setItem('token',response.data.result.access_token)
                localStorage.setItem('name',response.data.result.username)
                console.log(localStorage)
                return (
                    window.location.replace("/")
                    )
			})
			.catch(error => {
                console.log(error)

				alert("Invalid Username or Password") 
			})
	}

    logoutbtn = e =>{
        
        localStorage.clear();
        return (
            window.location.replace("/")
            )
        
    }

	render() {
		const { userName, password } = this.state
        if(localStorage.getItem('name') == null){

        
		return (
			<div>
                <Navbar />
                <Sidebar />
				<form onSubmit={this.submitHandler}>
                    
  <div class="form-group">
    <label for="exampleInputEmail">Email address</label>
    <input type="text" name="Username" value={userName} onChange={this.changeHandler} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input name="Password" value={password} onChange={this.changeHandler} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <button type="submit" class="btn btn-primary">Login</button>
  
</form>
	
			</div>
		)
    }else{
        return(
            <div>
                <Navbar />
                <Sidebar />
				<form onSubmit={this.submitHandler}>
                <button type="submit" class="btn btn-primary" onClick={this.logoutbtn}>Logout</button>
</form>
</div>
        )
        
    }
	}
}
//
export default PostForm