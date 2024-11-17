import React, { useState } from 'react'
import { AutoCompleteProps } from '../types/autoComplete';
interface SearchProps {
    data : AutoCompleteProps[];
}

const useSearch = ({data} : SearchProps) => {
    const [searchWord, setSearchWord] = useState<string>('');
    // const [isFocused, setIsFocused] = useState(false);
    const searchResult = data.filter((items) => items.word.includes(searchWord))

  
    // const handleFocus = () => {
    //     setIsFocused(true);
    //   };
    
    //   const handleCloseLayer = () => {
    //     setIsFocused(false);
    //   };
  
    const handleChange = (value:string) =>{
        setSearchWord(value);
    };
    const handleDelete= () => {
        if(searchWord !== '') {
            setSearchWord('');
        }
    }
    
    return {
        // isFocused,
        searchWord, 
        handleChange,
        handleDelete,
        // handleFocus,
        // handleBlur,
        searchResult,
    }
}

export default useSearch