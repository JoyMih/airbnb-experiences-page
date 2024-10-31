// import { useState } from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

function App() {
  const uniqueCards = data.map((info) => { // Mapping the data from data.jsx onto a new card component for each data object
    return (
      < Card
        key={info.id} // The key is needed when using .map() method
        {...info} // This spread operator usage for spreading props 

      // The mass of shorthand notation below can be reduced to singular info={info} object as well, with the caveat that every props accessed in the child component must follow a "props.info.___"" format
      /*
      img={info.coverImg}
      rating={info.stats.rating}
      reviewCount={info.stats.reviewCount}
      location={info.location}
      title={info.title}
      price={info.price}
      openSpots={info.openSpots}// Creating prop called openSpots
      */
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
