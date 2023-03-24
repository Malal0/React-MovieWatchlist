import { useContext } from 'react'
import { SearchContext } from "../contexts/searchContext"
import { MovieContext } from '../contexts/moviesContext'

function Navbar() {
    const { searchInput, handleInput } = useContext(SearchContext)
    const { getMovies } = useContext(MovieContext)

    return (
        <nav className="navbar">
            <ul className="nav-list container">
                <li>
                    <a className="nav-link current" href="#">Home</a>
                </li>
                <li>
                    <a className="nav-link" target="_self" href="#">Watchlist</a>
                </li>
            </ul>
            <div className="search-container container">
                <i className="fa-solid fa-search"></i>
                <input
                    className="search-input"
                    id="search-input"
                    placeholder="Search for a movie"
                    type="text"
                    name="search-input"
                    value={searchInput}
                    onChange={handleInput}
                />
                <button className="search-btn" id="search-btn" onClick={() => getMovies(searchInput)}>Search</button>
            </div>
        </nav>
    )
}

export default Navbar