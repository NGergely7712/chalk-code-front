import React from 'react'
import url from './URLs.js'
import ListClasses from './ListClasses.js'

async function TableDisplay(props) {
    function getTable(table) {
        switch(table){
            case "listClasses":
                return ListClasses()
        }
    }

    return (
        <>
            <table className="table-display">
                {async() => {
                    await getTable(props.table)
                }}
            </table>
        </>
    )
}

export default TableDisplay
