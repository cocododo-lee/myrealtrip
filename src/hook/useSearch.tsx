import React, { useState } from 'react'
import { AutoCompleteProps } from '../types/autoComplete';
interface SearchProps {
    data : AutoCompleteProps[];
}
interface searchWordStateProps{
    searchWord:string;
    searchResult:AutoCompleteProps[];
}

const useSearch = ({data} : SearchProps) => {
    const [searchWords, setsearchWords] = useState<searchWordStateProps>({
        searchWord : '',
        searchResult :[],
    })

    const handleChange = (value:string) =>{
        setsearchWords({
            ...searchWords,
            searchWord:value,
            searchResult : data.filter((items) => items.word.includes(searchWords.searchWord)),
        });
        
    };
    const handleDelete= () => {
        setsearchWords({
            ...searchWords,
            searchWord:'',
        });
    }
    
    return { 
        searchWords,
        handleChange,
        handleDelete,
    }
}

export default useSearch