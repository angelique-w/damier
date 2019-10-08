import React from "react"

import Row from "./Row"
import {makeArray} from "./utils"

const doDammier = (width, height) => {
    const boardWidth = makeArray(width);
    const finalArray = (boardWidth.map(() => {
        return makeArray(height);
    }));
    return finalArray;
}



const Damier = ({length, width}) => {
    const rows = makeArray(length)
    return(
        <table>
            {
                rows.map((_, index) => {                    
                    return <Row width={width} rowIndex={index} />
                })
            }
        </table>
    )
}

export default Damier;