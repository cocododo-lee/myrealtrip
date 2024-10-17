import React, { useState } from 'react'

const useSearch = (data) => {
    const [searchWord, setSearchWord] = useState('');
    const searchResults = data.filter((items) => items.word.includes(searchWord))

    return {
        searchWord,
        setSearchWord,
        searchResults
    }
}

export default useSearch