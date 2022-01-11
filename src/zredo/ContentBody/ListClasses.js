import React from 'react'

async function ListClasses() {
    async function apiGet(callback) {
        await fetch("https://localhost:44324/list-classes", {method: "GET"})
            .then(response => response.json())
            .then(response => {
                callback = response;
            })
    }

    await apiGet(response => {
        return [
            <>
                <tr>
                    <th>Class</th>
                    <th>Room</th>
                    <th>Homeworks</th>
                    <th>Students</th>
                </tr>

                {response.map((item, index) => {
                    return (
                        <tr>
                            <td>{item.className}</td>
                            <td>{item.classRoom}</td>
                            <td>{item.homework}</td>
                            <td>{item.students}</td>
                        </tr>
                    )//buttons for the lists?
                })}
            </>
        ]
    })
}

export default ListClasses
