import React, { useState } from 'react'
import SearchInput from '../atoms/iuput/SearchInput'
import { AutoCompleteProps } from '../../types/autoComplete.ts';
import { AUTO_COMPLETE_DATA } from '../../mocks/autoComplete.ts';

export interface SearchIuputProps{
  searchWord:string;
  onChange:()=>void;
  onClear:()=>void;
  placeholder : string;
}

const Serach = () => {
  const [searchWord, setSearchWord] = useState('');
  const [searchList, setSearchList] = useState<AutoCompleteProps[]>([]);

  const handlerChang = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchWord(e.target.value)
  }

  const handlerDelete= () => {
      setSearchWord('');
  }

  const autoResult = AUTO_COMPLETE_DATA.filter((el)=>{
      return el.word.includes(searchWord);
  })

  return (
    <div>
        <SearchInput searchWord={searchWord} onChange={handlerChang} onClear={handlerDelete} placeholder={`도시나 상품을 검색해보세요`}/>
    </div>
  )
}

export default Serach