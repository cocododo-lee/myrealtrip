import React from "react";
import { SearchIuputProps } from "../../molecules/search/Serach";

const SearchInput = ({searchWord, onClick, onKeyDown, onFocus, onBlur, onChange, onClear, placeholder}:SearchIuputProps) => {
    // 클로드의 도움을 받았습니다 
    const handleClick = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        localStorage.setItem('keywords', searchWord);
        onClick(searchWord);
    }
    
    const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            localStorage.setItem('keywords', searchWord);
            onKeyDown?.(searchWord);
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
                        onBlur={()=> onBlur?.(true)}
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