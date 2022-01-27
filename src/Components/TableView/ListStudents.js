import React, {Component} from 'react'
import "./Tables.css"

class ListStudents extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props)
        return (
            <div id="content-container">
                <div className="content-table">
                    <table>
                        <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Id</th>
                            <th>Date Of Birth</th>
                        </tr>
                        <tr>
                            <td>{this.props.tableContent.name}</td>
                            <td>{this.props.tableContent.personalId}</td>
                            <td>{this.props.tableContent.dateOfBirth.slice(0, 10)}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListStudents
