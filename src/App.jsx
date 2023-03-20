import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from "./components/Navbar"
import ResultsSection from "./components/ResultsSection"
function App() {
  const [resultsData, setResultsData] = useState([])

  console.log("rendered")
  console.log(resultsData.Search)

  function search() {
    fetch("https://www.omdbapi.com/?apikey=beba8703&s=veggietales")
      .then(res => res.json())
      .then(data => setResultsData(data))
      .catch(error => console.log(error))
  }

  return (
    <div className="App">
      <header>
        <Navbar
          handleClick={search}
        />
      </header>
      <ResultsSection />
    </div>
  )
}

export default App

/*
      <h1>Hello New Project</h1>

      // useEffect(() => {
      //   fetch("https://www.omdbapi.com/?apikey=beba8703&s=veggietales")
      //     .then(res => res.json())
      //     .then(data => setResultsData(data))
      //     .catch(error => console.log(error))
      // }, [])
*/