import React from "react";

function Jokes(props) {

    return(
        <div>
            <h4 style={ {display:props.question ? "block":"none"}}>Question: {props.question} </h4>
            <h4 >Answer: {props.punchLine} </h4>
            <hr/>
        </div>
    )
}
export default Jokes