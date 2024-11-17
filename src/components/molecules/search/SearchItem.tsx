import React from 'react'
import clsx from 'clsx'
import { AutoCompleteProps } from '../../../types/autoComplete'
import * as SearchStyles from '../../atoms/iuput/SearchInput.css'
import { Link } from 'react-router-dom'

const SearchItem = ({word, countries, onClear}:AutoCompleteProps) => {
  const handleCloseLayer = ()=> {
    onClear();
    onBlur();
  }
  return (
    <>
        <li className='completeItem'>
            {/* 자동완성검색 단어 목록에 있을 경우 노출되는 아이템 */}
            <Link
              to= {`/search?keywords=${encodeURIComponent(word)}`}
              className={clsx(SearchStyles.link, countries ? `typeMap` : '')} 
              onClick={handleCloseLayer}
            >
              {word}
            </Link>
        </li>
    </>
  )
}

export default SearchItem