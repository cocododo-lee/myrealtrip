import React from "react";
import { SearchIuputProps } from "../../molecules/search/Serach";
import History from "../history/History";

const SearchInput = ({searchWord, historyView,  onFocus, onChange, onClear, placeholder}:SearchIuputProps) => {
    const handleInputChange  = (e:React.ChangeEvent<HTMLInputElement>) => {
        if(onChange) {
            onChange(e.target.value);
        }
    }
    return (
        <>
            <div className="searchWrap">
                <div className="searchBox">
                    <input 
                        type="text" 
                        className='input inputSearch' 
                        value={searchWord}
                        onFocus={() => onFocus?.(true)}
                        onBlur={()=> onFocus?.(false)}
                        onChange={handleInputChange}
                        placeholder={placeholder}
                    />
                    <button type='submit' className='btnSearch'>검색</button>
                    {
                        searchWord && 
                        <button type='button' className='btnClear' onClick={onClear}>초기화</button>
                    }
                </div>
            </div>
            { !(searchWord) && 
                historyView &&  
                <History/> 
            }
        </>
    )
}

export default SearchInput