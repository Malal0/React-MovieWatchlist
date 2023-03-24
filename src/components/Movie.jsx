import { useState } from "react"

function Movie(props) {
    const { Poster, Title, imdbRating, Runtime, Genre, Plot, imdbID, isWatchlisted } = props
    const [watchListed, setWatchlisted] = useState(isWatchlisted)
    const watchlistButton = watchListed ?
        <button className="toggle-watchlist-btn watchlisted" data-imdbid={imdbID} onClick={() => setWatchlisted(prevBool => !prevBool)}>
            <i class='fa-solid fa-check'></i>
            Watchlisted
        </button> :
        <button className="toggle-watchlist-btn" data-imdbid={imdbID} onClick={() => setWatchlisted(prevBool => !prevBool)}>
            <i class='fa-solid fa-circle-plus'></i>
            Watchlist
        </button>

    return (
        < div className="movie-content" >
            <img className="movie-art" src={Poster}
                alt={`${Title} cover art`} />
            <div className="movie-grid-block-one">
                <p className="movie-title">{Title}</p>
                <p className="movie-rating">
                    <icon className="fa-solid fa-star"></icon>
                    {imdbRating}
                </p>
            </div>
            <div className="movie-grid-block-two">
                <p className="movie-duration">{Runtime}</p>
                <p className="movie-genres">{Genre}</p>
                {watchlistButton}
            </div>
            <p className="movie-description">{Plot}</p>
        </ div >
    )
}

Movie.defaultProps = {
    isWatchlisted: false
}

export default Movie

    // constructor(data) {
    //     Object.assign(this, data)
    //     this.watchListed = data.watchListed || false;
    // }