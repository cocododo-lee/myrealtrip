import React from 'react'
import * as bookmarkStyle from './Bookmark.css.ts';
import SvgBookmark from '../../../assets/svg/icon_bookmark.svg?react'
import clsx from 'clsx';

type Variant = keyof typeof bookmarks;

interface bookmarkProps {
    className?: string;
    variant?: Variant;
}

const Bookmark = ({className, variant}:bookmarkProps) => {
  return (
    <>
        <button className={clsx(bookmarkStyle.bookmark, className)} variant={variant}>
            <i aria-hidden='true'><SvgBookmark/></i>
            <span className='blind'>북마크 추가</span>
        </button>
    </>
  )
}

export default Bookmark