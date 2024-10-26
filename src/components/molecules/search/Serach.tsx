import React from 'react'
import { AUTO_COMPLETE_DATA } from '../../../mocks/autoComplete.ts';
import useSearch from '../../../hook/useSearch.tsx';
import SearchInput from '../../atoms/iuput/SearchInput.tsx';
import SearchResultList from './SearchResultList.tsx';

export interface SearchIuputProps{
  searchWord:string;
  onChange?:(value:string) => void;
  // onChange?:(setSearchWord:string) => void;
  // onChange:(e: React.ChangeEvent<HTMLInputElement>) => void;
  // onChange:()=>void;
  onClear?:()=>void;
  placeholder : string;
}

const Serach = () => {
  const { searchWord, handlerChange, handlerDelete, searchResult} = useSearch({data:AUTO_COMPLETE_DATA});

  return (
    <div>
        <SearchInput searchWord={searchWord} onChange={handlerChange} onClear={handlerDelete} placeholder={`도시나 상품을 검색해보세요`}/>
        <SearchResultList searchWord={searchWord} searchResult={searchResult} />
    </div>
  )
}

export default Serach