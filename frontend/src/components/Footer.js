import React from "react"
//
// <footer>
// <h3 className="bg-dark" style={styles1}>This is footer </h3>
// ______________________________________________
// </footer>
function Footer() {
    const styles1={color:"red", backgroundColor:"bg-dark",textAlign:"center"}
    return(
        <div className="    bg-light w-100 pl-0 pr-0  m-0">
            <div className="container text-primary mb-3  ">Pocetna | Site oglasi | Nov oglas | Marketing | Pomos  </div>
            <footer className="   w-100 bg-dark p-3 ">
                <div className="container">

                    <span className="text-muted"> Copyright © OglasnikMK - All rights are reserved </span>
                    <span className="text-muted">Head office contact: head.og@oglasnik.co </span>
                </div>
            </footer>
        </div>

    )
}

export default Footer;