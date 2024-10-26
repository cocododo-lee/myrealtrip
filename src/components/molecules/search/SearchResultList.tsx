import React from 'react'
import SearchItem from './SearchItem'
interface SearchResultProps{
    searchWord?:string;
    searchResult?:object[];
}

const SearchResultList = ({...props}:SearchResultProps) => {
  return (
    <div className='searchAutoComplete'>
        <ul className='completeList'>
            {
                  props.searchWord &&
                  props.searchResult?.map((items)=> (
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