import { useState, createContext } from "react"
const MovieContext = createContext()

function MovieContextProvider(props) {
    const [movies, setMovies] = useState([])

    function getMovies(input) {
        setMovies([])
        fetch(`https://www.omdbapi.com/?apikey=beba8703&s=${input}&type=movie`, { method: "GET" })
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
                setMovies(prevMovies => [...prevMovies, data]);
            })
    }

    function removeMovies() {
        setMovies([])
    }

    return (
        <MovieContext.Provider value={{ movies, getMovies, removeMovies }}>
            {props.children}
        </MovieContext.Provider>
    )
}

export { MovieContextProvider, MovieContext }