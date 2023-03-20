function ResultsSection({ searchResults }) {
    const resultsArr = searchResults.Search || []
    // const resultHtml = ''
    console.log(resultsArr)
    return (
        <main className="container" id="main">
            <div className="default-content-container" id="content-container">
                {resultsArr.length ?
                    <p>results</p> :
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