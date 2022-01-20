import React, {Component} from 'react'
import "./Tables.css"

class Marks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subjects: {}
        }
    }

    async sortIntoSubjects() {
        this.props.tableContent.map((item, index) => {
            if (!this.state.subjects.contains(item.subject)) {
                this.state.subjects.add(item.subject)
            }
            this.state.subjects[item.subject] += [item.MarkValue, item.Weigth, item.DateOfAssignment, item.AssigningTeacher.name]
        })
    }

    render() {
        this.sortIntoSubjects()
            .then(() => {
                return (
                    <div id="content-container">
                        <div className="content-table">
                            <table>
                                <tbody>
                                <tr>
                                    <th>Subject</th>
                                    <th>Mark</th>
                                    <th>Weight</th>
                                    <th>Date assigned</th>
                                    <th>Assigning teacher</th>
                                </tr>
                                {this.state.subjects(subject => {
                                    return(
                                        <tr>
                                            <td>{subject.key}</td>
                                            {subject.forEach(element => {
                                                return(<td>{element}</td>)
                                            })}
                                        </tr>
                                    )
                                })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )
            })
    }
}

export default Marks
