import React, {Component} from 'react'
import "./Tables.css"

class ParentsOfAStudent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="content-container">
                <div className="content-table">
                    <table>
                        <tbody>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Contacts</th>
                            <th>Parent of</th>
                        </tr>
                        {this.props.tableContent.map((item, index) => {
                            item.forEach(parent => {
                                return (
                                    <tr key={index}>
                                        <td>{parent.personalId}</td>
                                        <td>{parent.name}</td>
                                        <td>
                                            <ul>
                                                <li>Email address: {parent.Email}</li>
                                                <li>Phone number: {parent.PhoneNumber}</li>
                                            </ul>
                                        </td>
                                        <td>
                                            <ul>
                                                {parent.Students.map((student, index) => {
                                                    return (
                                                        <li key={index}>{student.name}</li>
                                                    )/*
                                                    return (
                                                        <li key={index}><button className="buttons" id={student.personalId}>{student.name}</button></li>
                                                    )*/
                                                })}
                                            </ul>
                                        </td>
                                    </tr>
                                )
                            })
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ParentsOfAStudent
