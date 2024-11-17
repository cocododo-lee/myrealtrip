import React from "react";
import { SearchInputProps } from "../../molecules/search/Serach";
import { useNavigate } from "react-router-dom";

const SearchInput = ({searchWord, onClick, onKeyDown, onFocus, onChange, onClear, placeholder}:SearchInputProps) => {
    
    const navigate = useNavigate();

    const handleClick = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if(searchWord !== '') {
            onClick(searchWord);
            navigate(`/search?keywords=${encodeURIComponent(searchWord)}`);
            onClear();
            onFocus(false);
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

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(searchWord.trim()){ 
        // if(searchWord !== '') {
            navigate(`/search?keywords=${encodeURIComponent(searchWord)}`);
            onClear();
        }
    }
  
    
    return (
        <>
            <div className="searchWrap">
                <div className="searchBox">
                    <form onSubmit={handleSubmit} >
                    <input 
                        type="text" 
                        className='input inputSearch' 
                        value={searchWord}
                        onFocus={() => onFocus?.(true)} 
                        onChange={(e)=>onChange?.(e.target.value)}
                        // onKeyDown={handleKeyDown}
                        placeholder={placeholder}
                    />
                    <button type='submit' onClick={handleClick} className='btnSearch'>검색</button>
                    {
                        searchWord && 
                        <button type='button' className='btnClear' onClick={onClear}>초기화</button>
                    }
                    </form>
                </div>
            </div>
        </>
    )
}

export default SearchInput