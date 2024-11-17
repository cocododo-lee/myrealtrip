import React, { useEffect, useRef, useState } from 'react'
import { AUTO_COMPLETE_DATA } from '../../../mocks/autoComplete.ts';
import useSearch from '../../../hook/useSearch.tsx';
import SearchInput from '../../atoms/iuput/SearchInput.tsx';
import SearchResultList from './SearchResultList.tsx'; 
import * as SearchStyles from './Search.css.ts';
import useRecent from '../../../hook/useRecent.tsx';
import Recent from '../../atoms/recent/Recent.tsx';

export interface SearchInputProps{
  searchWord:string;
  onClick:(value:string) => void;
  onChange:(value:string) => void;
  onClear:()=>void;
  // onBlur:(value:boolean) => void;
  onFocus:(value:boolean)=>void;
  //onEnter?: (value: string) => void;
  onKeyDown?: (value: string) => void;
  onMouseOver?:(value:boolean) => void;
  placeholder : string;  
} 
const Serach = () => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const searchWrapperRef  = useRef<HTMLDivElement>(null)
  const { searchWord, handleChange, handleDelete, searchResult} = useSearch({data:AUTO_COMPLETE_DATA});
  const { keywords, handleClick, handleKeyDown, handleClearClick} = useRecent();

  useEffect(() => {
    const handleClickOutside = (e:MouseEvent) => {
      if (searchWrapperRef.current && !searchWrapperRef.current.contains(e.target as Node)) {
        setIsFocus(false)
      }
    } 
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isFocus])
  
  
  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };
 


  return (
    <div className={SearchStyles.SearchWrap} ref={searchWrapperRef}>
        <SearchInput searchWord={searchWord} onFocus={handleFocus} onChange={handleChange} onClick={handleClick} onClear={handleDelete} onKeyDown={handleKeyDown} placeholder={`도시나 상품을 검색해보세요`}/>
        <SearchResultList searchWord={searchWord} searchResult={searchResult} onClear={handleDelete} onBlur={handleBlur}/>
        
        { !(searchWord) && isFocus && 
          <Recent keywords={keywords} onClear={handleClearClick} onClose={handleBlur}/>
        }
    </div>
  )
}

export default Serach