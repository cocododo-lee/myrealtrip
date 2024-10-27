import React from 'react'
import SearchItem from './SearchItem'
import { AutoCompleteProps } from '../../../types/autoComplete';
interface SearchResultProps{
    searchWord:string;
    //searchResult?:object[]; ✏️정확한 타입표현하기 
    searchResult?:AutoCompleteProps[]; 
}

const SearchResultList = (props:SearchResultProps) => {
  const {searchWord, searchResult} = props;
  return (
    <div className='searchAutoComplete'>
        <ul className='completeList'>
            {
                  searchWord &&
                  searchResult?.map((items)=> (
                    // <li className='completeItem'>
                    //   <a href="" className={clsx(SearchStyles.link, items.countries && `typeMap`)}>{items.word}</a>
                    
                    <SearchItem key={items.id}  {...items}/>
                  ))
            }
        </ul>
    </div>
  )
}

export default SearchResultList