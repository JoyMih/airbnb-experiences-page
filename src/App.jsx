// import { useState } from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

function App() {
  const uniqueCards = data.map((info) => {
    return (
      < Card
        key={info.id}
        img={info.coverImg}
        rating={info.stats.rating}
        reviewCount={info.stats.reviewCount}
        location={info.location}
        title={info.title}
        price={info.price}
        openSpots={info.openSpots}// Creating prop called openSpots
      />
    )
  });

  return (
    <>
      < Navbar />
      < Hero />
      <section className="card-row">
        {uniqueCards}
      </section>
    </>
  )
}

export default App
