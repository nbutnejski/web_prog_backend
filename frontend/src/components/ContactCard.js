import React from "react";

function ContactCard(props) {
    console.log(props);
    return(
        <div className="contact-card">
            <img src={props.imgUrl}/>
            <h3>{props.name}</h3>
            <p>Phone: {props.phone}</p>
            <p>Email: {<props className="email"></props>}</p>
        </div>

    )

}
export default ContactCard