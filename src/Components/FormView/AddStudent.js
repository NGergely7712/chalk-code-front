import React, {Component} from 'react'
import axios from 'axios'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import url from '../URLs'
import "./Forms.css"

class AddStudent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            bDate: '',
            //password: ''
        }
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post(url.root + '9a/add-new-student', this.state)
            .then(response => {
                console.log(response)
                this.feedbackHandler();

            })
            .catch(error => {
                console.log(error)
            })
    }

    feedbackHandler = () => {
        const field = document.getElementById("feedback-field")
        field.innerText = "Student has been successfully registered!"
        setTimeout(() => field.innerText = "", 5000)
    }

    render() {
        return (
            <div className="form-table">
                <form id="form-body" onSubmit={this.submitHandler}>
                    <div>
                        <input name="class-option" id="9a" type="radio"/><label className="class-option" htmlFor="9a">9A</label>
                        <input name="class-option" id="9b" type="radio"/><label className="class-option" htmlFor="9b">9B</label>
                        <input name="class-option" id="9c" type="radio"/><label className="class-option" htmlFor="9c">9C</label>
                        <input name="class-option" id="9d" type="radio"/><label className="class-option" htmlFor="9d">9D</label>
                    </div>
                    <br/>
                    <div>
                        <label htmlFor="name">Name</label>
                        <br/>
                        <input
                            className="input-field"
                            type="text"
                            name="name"
                            required
                            onChange={this.changeHandler}
                        />
                    </div>
                    <br/>
                    <div>
                        <label htmlFor="bdate">Date of Birth</label>
                        <br/>
                        <input
                            className="input-field"
                            type="date"
                            name="bdate"
                            required
                            onChange={this.changeHandler}
                        />
                    </div>
                    <br/>
                    <button className="buttons" id="submit-button" type="submit">Register</button>
                </form>
                <br/>
                <p id="feedback-field"></p>
            </div>
        )
    }
}

export default AddStudent