import React from "react"
import Navbar from "./components/Navbar.js"
import Hero from "./components/Hero.js"
import Card from "./components/Card.js"
import "./style.css"
import data from "./data.js"


export default function App() {
  const cards = data.map((entry) => {
    console.log(entry)
    return (
      <div>
        <Card
          key={entry.id}
          {...entry}
        />
      </div>
    )
  })
  
  return (
    <div>
      <Navbar/>
      <Hero/>
      <section className="cards-list">
        {cards}
      </section>
    </div>
  ) 
}