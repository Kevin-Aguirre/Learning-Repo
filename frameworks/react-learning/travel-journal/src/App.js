import React from "react";
import Header from "./components/Header.js"
import Country from "./components/Country.js";
import Entry from "./components/Entry.js"
import data from "./data.js"

export default function App() {
  const entries = data.map((entry) => {
    const attractions = entry.attractions.map((attraction) => {

      return (
        <Entry
          {...attraction}
        />
      )
    })
    return (
      <div>
        <Country
          {...entry}
        />
        {attractions}
  
      </div>
    )
  })  

  return (
    <div className="content">
      <Header/>
      <div className="entries-container">
        {entries}
      </div>
    </div>
  )
}