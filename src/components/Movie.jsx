function Movie({ Poster, Title, imdbRating, Runtime, Genre, Plot, imdbID }) {
    // constructor(data) {
    //     Object.assign(this, data)
    //     this.watchListed = data.watchListed || false;
    // }

    // toggleWatchlist() {
    //     this.watchListed = !this.watchListed;
    //     console.log(`added to watchist: ${this.watchListed}`);
    // }

    // getMovieHtml() {
    //     const { Poster, Title, imdbRating, Runtime, Genre, Plot, imdbID } = this;
    //     const innerHtml = this.watchListed ? "<i className='fa-solid fa-circle-minus'></i>Remove" : "<i className='fa-solid fa-circle-plus'></i>Watchlist";
    //     console.log(this.watchListed);
    //     return `
    //     <div className="movie-content">
    //         <img className="movie-art" src="${Poster}"
    //             alt="${Title} cover art" />
    //         <div className="movie-grid-block-one">
    //             <p className="movie-title">${Title}</p>
    //             <p className="movie-rating">
    //                 <icon className="fa-solid fa-star"></icon>
    //                 ${imdbRating}
    //             </p>
    //         </div>
    //         <div className="movie-grid-block-two">
    //             <p className="movie-duration">${Runtime}</p>
    //             <p className="movie-genres">${Genre}</p>
    //             <button className="toggle-watchlist-btn" data-imdbid="${imdbID}">
    //                 ${innerHtml}
    //             </button>
    //         </div>
    //         <p className="movie-description">${Plot}</p>
    //     </div>
    //     `
    // }
    return (
        < div className="movie-content" >
            <img className="movie-art" src={Poster}
                alt={`${Title} cover art`} />
            <div className="movie-grid-block-one">
                <p className="movie-title">${Title}</p>
                <p className="movie-rating">
                    <icon className="fa-solid fa-star"></icon>
                    {imdbRating}
                </p>
            </div>
            <div className="movie-grid-block-two">
                <p className="movie-duration">{Runtime}</p>
                <p className="movie-genres">{Genre}</p>
                <button className="toggle-watchlist-btn" data-imdbid={imdbID}>
                    {innerHtml}
                </button>
            </div>
            <p className="movie-description">{Plot}</p>
        </ div >
    )
}

export default Movie