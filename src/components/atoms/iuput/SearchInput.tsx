import React from "react";
import { SearchIuputProps } from "../../molecules/search/Serach";

const SearchInput = ({searchWord, onChange, onClear, placeholder}:SearchIuputProps) => {
  
    return (
        <div>
            <div className="searchWrap">
                <div className="searchBox">
                    <input 
                        type="text" 
                        className='input inputSearch' 
                        value={searchWord} 
                        onChange={(e) => onChange && onChange(e.target.value)}
                        placeholder={placeholder}
                    />
                    <button type='submit' className='btnSearch'>검색</button>
                    {
                        searchWord && 
                        <button type='button' className='btnClear' onClick={onClear}>초기화</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default SearchInput