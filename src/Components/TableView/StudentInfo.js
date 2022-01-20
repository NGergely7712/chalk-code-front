import React, {Component} from 'react'
import "./Tables.css"

class StudentInfo extends Component {
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
                            <th>Date of birth</th>
                            <th>Contacts</th>
                        </tr>
                        {this.props.tableContent.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.personalId}</td>
                                    <td>{item.name}</td>
                                    <td>{item.DateOfBirth}</td>
                                    <td>
                                        <ul>
                                            <li>Email address: {item.Email}</li>
                                            <li>Phone number:  {item.PhoneNumber}</li>
                                        </ul>
                                    </td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default StudentInfo
