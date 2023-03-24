function ResultsSection({ searchResults }) {
    const resultsArr = searchResults.Search || []
    // const resultHtml = ''
    console.log(resultsArr)

    const errorHtml = <div className='default-content-container' id='content-container'>
        <div className='default-content'>
            <p>Unable to find what you’re looking for. Please try another search.</p>
        </div>
    </div>

    return (
        <main className="container" id="main">
            <div className="default-content-container" id="content-container">
                {movies.length ?
                    <>
                        <button className='clear-reults-btn' onClick={() => setMovies([])}>
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
    )
}

export default ResultsSection