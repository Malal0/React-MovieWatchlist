function Movie(props) {
    const { Poster, Title, imdbRating, Runtime, Genre, Plot, imdbID } = props

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
                <button className="toggle-watchlist-btn" data-imdbid={imdbID}>
                    <i class='fa-solid fa-circle-plus'></i>Watchlist
                </button>
            </div>
            <p className="movie-description">{Plot}</p>
        </ div >
    )
}

export default Movie

    // constructor(data) {
    //     Object.assign(this, data)
    //     this.watchListed = data.watchListed || false;
    // }

    // toggleWatchlist() {
    //     this.watchListed = !this.watchListed;
    //     console.log(`added to watchist: ${this.watchListed}`);
    // }