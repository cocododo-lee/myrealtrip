import React from 'react'
import SearchInput from '../atoms/iuput/SearchInput'
import * as SearchStyles from '../atoms/iuput/SearchInput.css.ts'
import { AUTO_COMPLETE_DATA } from '../../mocks/autoComplete.ts';
import useSearch from '../../hook/useSearch.tsx';
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
  const { searchWord, setSearchWord, searchResults} = useSearch(AUTO_COMPLETE_DATA);

  const handlerDelete= () => {
    setSearchWord('');
  }

  return (
    <div>
        <SearchInput searchWord={searchWord} onChange={setSearchWord} onClear={handlerDelete} placeholder={`도시나 상품을 검색해보세요`}/>
        <div className='searchAutoComplete'>
          <ul className='completeList'>
              {
                  searchWord &&
                  searchResults?.map((items)=> (
                  <li className='completeItem' key={items.id}>
                      <a href="" className={clsx(SearchStyles.link, items.countries && `typeMap`)}>{items.word}</a>
                  </li>
                  ))
              }
          </ul>
      </div>
    </div>
  )
}

export default Serach