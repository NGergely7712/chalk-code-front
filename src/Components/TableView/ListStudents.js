import React, {Component} from 'react'
import "./Tables.css"

class ListClasses extends Component {
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
                            <th>Name</th>
                            <th>Id</th>
                            <th>Date Of Birth</th>
                        </tr>
                        {this.props.tableContent.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.PersonalId}</td>
                                    <td>{item.DateOfBirth.toLocaleDateString()}</td>
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

export default ListClasses
