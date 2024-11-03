import React from "react";
import { SearchInputProps } from "../../molecules/search/Serach";

const SearchInput = ({searchWord, onClick, onKeyDown, onFocus, onChange, onClear, placeholder}:SearchInputProps) => {
    const handleClick = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if(searchWord !== '') {
            onClick(searchWord);
            onClear();
        }
    }
    
    const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if(searchWord !== '') {
                onKeyDown?.(searchWord);
            }
        }
    };
  
    
    return (
        <>
            <div className="searchWrap">
                <div className="searchBox">
                    <input 
                        type="text" 
                        className='input inputSearch' 
                        value={searchWord}
                        onFocus={() => onFocus?.(true)} 
                        onChange={(e)=>onChange?.(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder={placeholder}
                    />
                    <button type='submit' onClick={handleClick} className='btnSearch'>검색</button>
                    {
                        searchWord && 
                        <button type='button' className='btnClear' onClick={onClear}>초기화</button>
                    }
                </div>
            </div>
        </>
    )
}

export default SearchInput