import { useContext } from 'react'
import Navbar from "./components/Navbar"
import Movie from "./components/Movie"
import { MovieContext } from './contexts/moviesContext'


function App() {
  const { movies, removeMovies } = useContext(MovieContext)
  console.log(movies[0])
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main className="container" id="main">
        <div className="default-content-container" id="content-container">
          {movies.length ?
            <>
              <button className='clear-reults-btn' onClick={removeMovies}>
                <i className="fa-solid fa-remove"></i>
                clear results
              </button>
              {movies.map(obj => <Movie key={obj.imdbID} {...obj} />)}
            </> :
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
