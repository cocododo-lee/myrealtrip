import React from 'react'
import { Link } from 'react-router-dom'
import { RecentProps } from '../../../hook/useRecent.tsx';
interface RecentKeywordProps {
  value:string;
  onClick:()=>void;
}

const RecentItem = (props:RecentKeywordProps) => {
  const {value, onClick} = props;
  return (
    <>
      <li>
        {/* 최근 검색 단어 목록 */}
        <Link 
          to= {`/search?keywords=${encodeURIComponent(value)}`}
          onClick={onClick}
        >
          {value}
        </Link>
      </li>
    </>
  )
}

export default RecentItem