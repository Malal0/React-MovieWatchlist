function Navbar(props) {
    const { handleClick } = props
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
                <input className="search-input" id="search-input" type="text" placeholder="Search for a movie" />
                <button className="search-btn" id="search-btn" onClick={handleClick}>Search</button>
            </div>
        </nav>
    )
}

export default Navbar