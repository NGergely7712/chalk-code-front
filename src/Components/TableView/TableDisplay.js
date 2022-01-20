import React, {Component} from 'react'

class TableDisplay extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="content-container">
                <div className="content-table">
                    <table className="table-view">
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
                                    <td></td>
                                    <td>
                                        <button onClick={this.showList}>Students</button>
                                        <ul className="student-list">
                                            {item.students.map((item, index) => {
                                                return (
                                                    <li key={index}>{item.personalId} - {item.name}</li>
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

export default TableDisplay
