import { useState } from 'react'
import Navbar from "./components/Navbar"
import ResultsSection from "./components/ResultsSection"
function App() {
  const [resultsData, setResultsData] = useState([])
  const [searchInput, setSearchInput] = useState('')

  function handleInput(e) {
    setSearchInput(e.target.value)
  }

  // console.log(resultsData.Search)

  function search() {
    fetch(`https://www.omdbapi.com/?apikey=beba8703&s=${searchInput}`)
      .then(res => {
        if (res.ok) {
          console.log(res)
          return res.json()
        } else {
          console.log("response error")
          throw new Error
        }
      })
      .then(data => {
        if (data.Response === "True") {
          console.log(data)
          setResultsData([])
          setResultsData(data)
        } else {
          console.log("data error")
          throw new Error
        }
      })
      .catch(error => console.log(error))
  }

  return (
    <div className="App">
      <header>
        <Navbar
          handleClick={search}
          searchValue={searchInput}
          handleInput={handleInput}
        />
      </header>
      <ResultsSection
        searchResults={resultsData}
      />
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