import React from "react";

export default function Country (props) {
    console.log("props: ", props)
    return (
        <div className="country-header">
            <div className="country-header-info">
                <h2 className="country-header-name">
                    {props.country}
                </h2>
                <img className="country-flag" src={require(`../images/${props.flag}`)}></img>
            </div>
        </div>
    )
}