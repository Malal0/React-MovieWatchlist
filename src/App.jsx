import { useState, useContext } from 'react'
import Navbar from "./components/Navbar"
import Movie from "./components/Movie"
import { SearchProvider, SearchContext } from './SearchProvider'


function App() {
  const [movies, setMovies] = useState([])
  const { searchInput, handleInput } = useContext(SearchContext)

  function getMovies() {
    setMovies([])
    fetch(`https://www.omdbapi.com/?apikey=beba8703&s=${searchInput}&type=movie`, { method: "GET" })
      .then(res => res.json())
      .then(data => {
        let idArray = data.Search.map(movie => movie.imdbID)
        idArray.forEach(id => {
          getMovie(id);
        })
      })
      .catch((e) => {
        console.log(e)
      })
  }

  function getMovie(id) {
    fetch(`https://www.omdbapi.com/?apikey=beba8703&i=${id}&plot=short`, { method: "GET" })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setMovies(prevMovies => [...prevMovies, data]);
      })
  }

  return (
    <div className="App">
      <header>
        <Navbar
          handleClick={getMovies}
          searchValue={searchInput}
          handleInput={handleInput}
        />
      </header>
      <main className="container" id="main">
        <div className="default-content-container" id="content-container">
          {movies.length ?
            movies.map(obj => <Movie key={obj.imdbID} {...obj} />) :
            <div className="default-content">
              <i className="fa-solid fa-film"></i>
              <p>Start exploring</p>
            </div>
          }
        </div>
      </main>
    </div>
  )
}

export default App
