import React, { useEffect, useState } from 'react'
import * as SearchStyles from './Search.css.ts'
import { AutoCompleteProps } from '../../../types/autoComplete.ts';
import { AUTO_COMPLETE_DATA } from '../../../mocks/autoComplete.ts';
import clsx from 'clsx';



const Input = () => {
    const [searchWord, setSearchWord] = useState(''); // 검색된 값 체크
    const [hasActive, setHasActive] = useState(false); // 검색창 활성화 유무 체크
    const [searchList, setSearchList] = useState<AutoCompleteProps[]>();

    const handlerChangeWord = (e: React.ChangeEvent<any>) => {
        setSearchWord(e.target.value)
        console.log(searchWord)
        
        setSearchList(AUTO_COMPLETE_DATA.filter(el =>el.word.includes(searchWord)).sort())
        setHasActive(true)
        console.log(searchList)
    }

    const handlerDeleteText = () =>{
        setSearchWord('');
        setHasActive(false);
    }

    useEffect(() => {
      return () => {
      }
    }, [searchWord])
    

    return (
        <div>
            <div className="searchWrap">
                <div className="searchBox">
                    <input 
                        type="text" 
                        className='input inputSearch' 
                        value={searchWord} 
                        onChange={handlerChangeWord}
                        placeholder='도시나 상품을 검색해보세요'
                    />
                    <button type='submit' className='btnSearch'>검색</button>
                    {
                        (hasActive == true) && <button type='button' className='btnClear' onClick={handlerDeleteText}>초기화</button>
                    }
                    
                </div>
                <div className='searchAutoComplete'>

                    <ul className='completeList'>

                        {
                            (hasActive) && 
                            searchList.map((items)=>{
                                <li className='completeItem'><a href="" className={clsx(SearchStyles.link)}>{items.word}</a></li>
                            })
                        }

                        {/* 
                            <li className='completeItem'><a href="" className='completeLink typeMap'>Australia</a></li>
                            <li className='completeItem'><a href="" className='completeLink'>A</a></li>
                            <li className='completeItem'><a href="" className='completeLink'>Anchor</a></li>
                            <li className='completeItem'><a href="" className='completeLink'>Apple</a></li>
                            <li className='completeItem'><a href="" className='completeLink'>Atom</a></li>
                         */}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Input