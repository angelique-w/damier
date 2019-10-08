import React from "react";

import Case from "./Case"
import {makeArray} from "./utils"



const Row = ({width, rowIndex}) => {
    const cells = makeArray(width)
    return(
        <tr>
            {
                cells.map((_, cellIndex)=> {             
                    const color = rowIndex%2 === cellIndex%2 ? "black": "white"
                    return <Case color={color} />
                })
            }
        </tr>
    )

}

export default Row