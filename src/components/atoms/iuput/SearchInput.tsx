import React from "react";
import { SearchIuputProps } from "../../molecules/search/Serach";
// import History from "../history/History";

const SearchInput = ({searchWord, onFocus, onBlur, onChange, onClear, placeholder}:SearchIuputProps) => {
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
                        placeholder={placeholder}
                    />
                    <button type='submit' className='btnSearch'>검색</button>
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