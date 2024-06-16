import React from "react";
import "../style.css"

export default function Navbar () {
    return (
        <nav>
            <img className="nav--logo" src={require("../images/airbnb-logo.png")}></img>
        </nav>
    )
}