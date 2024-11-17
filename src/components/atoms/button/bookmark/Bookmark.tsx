import React from 'react'
import * as styles from './Bookmark.css.ts';
import SvgBookmark from '../../../../assets/svg/icon_bookmark.svg?react'
import clsx from 'clsx';

interface BookmarkProps {
    className?: string;
}
const Bookmark = ({...props}:BookmarkProps) => {
  return (
    <>
        <button className={clsx(styles.productType, props.className)}>
            <i aria-hidden='true'><SvgBookmark/></i>
            <span className='blind'>북마크 추가</span>
        </button>
    </>
  )
}

export default Bookmark