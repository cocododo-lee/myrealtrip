import React, { useEffect } from 'react'
import { AUTO_COMPLETE_DATA } from '../../../mocks/autoComplete.ts';
import useSearch from '../../../hook/useSearch.tsx';
import SearchInput from '../../atoms/iuput/SearchInput.tsx';
import SearchResultList from './SearchResultList.tsx'; 
import * as SearchStyles from './Search.css.ts';
import useSearchHistory from '../../../hook/useSearchHistory.tsx';

export interface SearchIuputProps{
  searchWord:string;
  onChange?:(value:string) => void;
  // onChange?:(setSearchWord:string) => void;
  // onChange:(e: React.ChangeEvent<HTMLInputElement>) => void;
  // onChange:()=>void;
  onClear?:()=>void;
  placeholder : string;
  onFocus?:(value:boolean)=>void;
  historyView?:boolean;
  historyFocus?:boolean;
}
const Serach = () => {
  const { searchWord, handleChange, handlerDelete, searchResult} = useSearch({data:AUTO_COMPLETE_DATA});
  const { historyView, handelrFocus, handlerBulr} = useSearchHistory();
  

  useEffect(() => {
    
    return () => {
      
    }
  }, [])
  
  return (
    <div className={SearchStyles.SearchWrap}>
        <SearchInput searchWord={searchWord} historyView={historyView} onFocus={handelrFocus} onChange={handleChange} onClear={handlerDelete} onBlur={handlerBulr} placeholder={`도시나 상품을 검색해보세요`}/>
        <SearchResultList searchWord={searchWord} searchResult={searchResult} />
    </div>
  )
}

export default Serach