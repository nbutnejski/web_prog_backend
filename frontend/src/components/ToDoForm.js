import React from "react";
import Footer from "./Footer";

function ToDoForm(props){
//console.log(props)
    return(
        <div>
            <div className="toDoCard">
                _______________________
                <div>
                    <input style={{display:"inline-block"}}
                           checked={props.item.checkedd}
                           onChange={() => props.handleClick(props.item.id)}
                           type="checkbox"/>
                    <h3 style={{display:"inline-block"}}>{props.item.description}</h3>
                </div>
                <h4>{props.item.desc2}</h4>
                _______________________
            </div>
            <Footer/>
        </div>
        )
}

export default ToDoForm;