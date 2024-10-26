import React from 'react'
import clsx from 'clsx'
import { AutoCompleteProps } from '../../../types/autoComplete'
import * as SearchStyles from '../../atoms/iuput/SearchInput.css'

const SearchItem = ({...props}:AutoCompleteProps) => {
  return (
    <>
        <li className='completeItem'>
            <a href="" className={clsx(SearchStyles.link, props.countries && `typeMap`)}>{props.word}</a>
        </li>
    </>
  )
}

export default SearchItem