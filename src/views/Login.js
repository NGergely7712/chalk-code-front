import React, { Component } from 'react'
import axios from 'axios'
import Navbar from '../Components/navbar'
import Sidebar from '../Components/sidebar'
class PostForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			name: '',
			birthDate: '1998-02-01'
		}
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
			.post('https://localhost:44324/9a/add-new-student', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
	}

	render() {
		const { userId, title, body } = this.state
		return (
			<div>
                <Navbar />
                <Sidebar />
				<form onSubmit={this.submitHandler}>
					<div>
						<input
							type="text"
							name="name"
							value={userId}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input
							type="text"
							name="title"
							value={title}
							//onChange={this.changeHandler}
						/>
					</div>
					<button type="submit">Register</button>
				</form>
			</div>
		)
	}
}

export default PostForm