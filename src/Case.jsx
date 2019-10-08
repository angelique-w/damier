import React from "react"

const Case = ({color}) => {
    return (
        <td 
            style={{
                border: "1px solid black",
                width:"40px",
                height:"40px",
                backgroundColor: color
            }}
        >

        </td>
    )
}

export default Case