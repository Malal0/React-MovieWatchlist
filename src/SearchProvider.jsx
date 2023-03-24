import React, { useState } from "react"

const SearchContext = React.createContext()

function SearchProvider(props) {
    const [searchInput, setSearchInput] = useState('')

    function handleInput(e) {
        setSearchInput(e.target.value)
    }

    return (
        <SearchContext.Provider value={{ searchInput, handleInput }}>
            {props.children}
        </SearchContext.Provider>
    )
}

export { SearchProvider, SearchContext }