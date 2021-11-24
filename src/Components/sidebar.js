import React from 'react'

function sidebar() {
    return (
        <div id="sidebar">
            <ul>
                <li>
                    <button className="sidebar-buttons" id="homework">Homeworks</button>
                </li>
                <li>
                    <button className="sidebar-buttons" id="exam">Exams</button>
                </li>
                <li>
                    <button className="sidebar-buttons" id="mark">Marks</button>
                </li>
                <li>
                    <button className="sidebar-buttons" id="schedule">Schedule</button>
                </li>
            </ul>
        </div>
    )
}

export default sidebar
