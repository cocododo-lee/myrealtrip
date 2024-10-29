import React from 'react'
import { Link } from 'react-router-dom'
import { RecentProps } from '../../../hook/useRecent.tsx';
interface RecentKeywordProps {
  value:string;
}

const RecentItem = (props:RecentKeywordProps) => {
  const {value} = props;
  return (
    <>
      <li>
        <Link to='/'>{value}</Link>
      </li>
    </>
  )
}

export default RecentItem