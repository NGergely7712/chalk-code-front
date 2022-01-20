import React, {Component} from 'react'
import "./Tables.css"

class Homework extends Component {
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
                            <th>Subject</th>
                            <th>Assigning Teacher</th>
                            <th>Description</th>
                        </tr>
                        {/*this.props.tableContent.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.subject}</td>
                                    <td>{item.teacher}</td>
                                    <td>{item.description}</td>
                                </tr>
                            )
                        })*/}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Homework
