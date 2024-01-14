import React from "react";

export default function Entry(attraction) {
    console.log("attraction: ", attraction)
    return (
        <div className="card">
            <img className="card--attraction-image" src={require(`../images/${attraction.image}`)}></img>
            <div className="card--information">
                <div className="card--info-line1">
                    <img className="maps-icon" src={require("../images/maps-icon.png")}></img>
                    {attraction.country} - View on Google Maps
                </div>
                <h1 className="card--info-line2">
                    {attraction.attraction}
                </h1>
                <div className="card--info-line3">
                    {attraction.dates.startDate} - {attraction.dates.endDate}
                </div>
                <div className="card--info-line4">
                    {attraction.description}
                </div>
            </div>
        </div>
    )
}