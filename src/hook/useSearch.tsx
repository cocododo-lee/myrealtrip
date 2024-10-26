import React, { useState } from 'react'
import { AutoCompleteProps } from '../types/autoComplete';
interface SearchProps {
    data : AutoCompleteProps[];
}

const useSearch = ({data} : SearchProps) => {
    const [searchWord, setSearchWord] = useState('');
    const searchResult = data?.filter((items) => items.word?.includes(searchWord))
        
    const handlerChange = (value:string) =>{
        setSearchWord(value);
    };
        
    const handlerDelete= () => {
        setSearchWord('');
    }
    
    return {
        searchWord, 
        handlerChange,
        handlerDelete,
        searchResult,
    }
}

export default useSearch