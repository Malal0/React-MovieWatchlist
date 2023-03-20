import { useState } from 'react'
function Navbar(props) {
    const { handleClick, searchValue, handleInput } = props

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
                    value={searchValue}
                    onChange={handleInput}
                />
                <button className="search-btn" id="search-btn" onClick={handleClick}>Search</button>
            </div>
        </nav>
    )
}

export default Navbar