import React, { useState } from 'react'
import { AUTO_COMPLETE_DATA } from '../../../mocks/autoComplete.ts';
import useSearch from '../../../hook/useSearch.tsx';
import SearchInput from '../../atoms/iuput/SearchInput.tsx';
import SearchResultList from './SearchResultList.tsx'; 
import * as SearchStyles from './Search.css.ts';
import useRecent from '../../../hook/useRecent.tsx';
import Recent from '../../atoms/recent/Recent.tsx';

export interface SearchIuputProps{
  searchWord:string;
  onChange:(value:string) => void;
  onClear:()=>void;
  onBlur:(value:boolean) => void;
  onFocus:(value:boolean)=>void;
  onEnter?:(id :string) => void;
  placeholder : string;
} 
const Serach = () => {
  const { searchWord, handleChange, handleDelete, searchResult} = useSearch({data:AUTO_COMPLETE_DATA});
  const { keywords, handleEnter, handleRemove, handleClear} = useRecent();
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  const handelEnter = () => {
    // setIsFocused(false);
  };

  

  return (
    <div className={SearchStyles.SearchWrap}>
        <SearchInput searchWord={searchWord} onFocus={handleFocus} onChange={handleChange} onClear={handleDelete} onBlur={handleBlur} onEnter={handelEnter} placeholder={`도시나 상품을 검색해보세요`}/>
        <SearchResultList searchWord={searchWord} searchResult={searchResult} />
        
        { !(searchWord) && 
          isFocused &&
          <Recent keywords={keywords} onEnter={handleEnter} onRemove={handleRemove} onClear={handleClear} />
        }
    </div>
  )
}

export default Serach