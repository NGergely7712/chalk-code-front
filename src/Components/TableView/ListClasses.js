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
                            <th>Class</th>
                            <th>Room</th>
                            <th>Homeworks</th>
                            <th>Students</th>
                        </tr>
                        {this.props.tableContent.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.className}</td>
                                    <td>{item.classRoom}</td>
                                    <td>
                                        <button className="buttons" onClick={this.showList}>Homework</button>
                                        <ul className="homework-list">
                                            {item.homework.map((item, index) => {
                                                return (
                                                    <li key={index}>{item.subject} - {item.description}</li>
                                                )
                                            })}
                                        </ul>
                                    </td>
                                    <td>
                                        <button className="buttons" onClick={this.showList}>Students</button>
                                        <ul className="student-list">
                                            {item.students.map((item, index) => {
                                                return (
                                                    <li key={index}>{item.personalId}  {item.name}</li>
                                                )
                                            })}
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

export default ListClasses
