import { useState } from "react"

function searchContext() {
    const [searchInput, setSearchInput] = useState('')

    function handleInput(e) {
        setSearchInput(e.target.value)
    }

    return { searchInput, handleInput }
}

export default searchContext