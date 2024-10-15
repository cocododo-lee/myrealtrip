import React from 'react'
import * as SearchStyles from './SearchInput.css.ts'
import clsx from 'clsx';
import { SearchIuputProps } from '../../molecules/Serach.tsx';

const SearchInput = ({searchWord, onChange, onClear, placeholder}:SearchIuputProps) => {
    return (
        <div>
            <div className="searchWrap">
                <div className="searchBox">
                    <input 
                        type="text" 
                        className='input inputSearch' 
                        value={searchWord} 
                        onChange={onChange}
                        placeholder={placeholder}
                    />
                    <button type='submit' className='btnSearch'>검색</button>
                    {
                        searchWord && 
                        <button type='button' className='btnClear' onClick={onClear}>초기화</button>
                    }
                    
                </div>
                <div className='searchAutoComplete'>
                    <ul className='completeList'>
                        {
                            searchWord &&
                            searchList?.map((items)=> (
                            <li className='completeItem' key={items.id}>
                                <a href="" className={clsx(SearchStyles.link, items.countries && `typeMap`)}>{items.word}</a>
                            </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SearchInput