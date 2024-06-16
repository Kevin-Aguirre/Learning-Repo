import React from "react";

export default function Header () {
    return (
        <div className="header">    
            <img className="earth" src={require("../images/earth-res.png")}></img>
            <h1>
                jho's travel journal 
            </h1>
        </div>
    )
}