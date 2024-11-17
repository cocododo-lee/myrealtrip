import React from 'react'
import SearchItem from './SearchItem'
import { AutoCompleteProps } from '../../../types/autoComplete';
interface SearchResultProps{
    searchWord:string;
    //searchResult?:object[]; ✏️정확한 타입표현하기 
    searchResult?:AutoCompleteProps[]; 
    onClear: () => void;
}

const SearchResultList = (props:SearchResultProps) => {
  const {searchWord, searchResult, onClear} = props;
  return (
    <div className='searchAutoComplete'>
        <ul className='completeList'>
            {
              searchWord &&
              searchResult?.map((items)=> (
                <SearchItem key={items.id}  {...items} onClear={onClear}/>
              ))
            }
        </ul>
    </div>
  )
}

export default SearchResultList