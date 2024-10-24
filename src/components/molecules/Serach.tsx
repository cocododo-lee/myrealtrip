import React from 'react'
import SearchInput from '../atoms/iuput/SearchInput'

import { AUTO_COMPLETE_DATA } from '../../mocks/autoComplete.ts';
import useSearch from '../../hook/useSearch.tsx';
import * as SearchStyles from '../atoms/iuput/SearchInput.css'
import clsx from 'clsx';

export interface SearchIuputProps{
  searchWord:string;
  onChange?:(setSearchWord:string) => void;
  // onChange:(e: React.ChangeEvent<HTMLInputElement>) => void;
  // onChange:()=>void;
  onClear?:()=>void;
  placeholder : string;
}

const Serach = () => {
  const { searchWord, handlerChange, handlerDelete, searchResults} = useSearch(AUTO_COMPLETE_DATA);

  return (
    <div>
        <SearchInput searchWord={searchWord} onChange={handlerChange} onClear={handlerDelete} placeholder={`도시나 상품을 검색해보세요`}/>
        <div className='searchAutoComplete'>
          <ul className='completeList'>
              {
                  searchWord &&
                  searchResults?.map((items)=> (
                    <li className='completeItem'>
                      <a href="" className={clsx(SearchStyles.link, items.countries && `typeMap`)}>{items.word}</a>
                     </li>
                      // <SearchItem key={items.id} {...items}/>
                  ))
              }
          </ul>
      </div>
    </div>
  )
}

export default Serach