import React from 'react'
import RecentHead from './RecentHead.tsx'
import * as RecentStyles from './Recent.css.ts'
import clsx from 'clsx';
import RecentItem from './RecentItem.tsx';
interface RecentUIProps  {
  keywords:string[];
}
const Recent = (props:RecentUIProps) => {
  const {keywords} = props;
  return (
    <div className={RecentStyles.RecentWrap}>
      <RecentHead title="최근 검색기록"/>
      <div className={clsx('RecentBody')}>
        {
          keywords.length > 1 && 
          keywords.map((items) => (
            <RecentItem key={items} value={items}/>
          ))
        }
      </div>
    </div>
  )
}

export default Recent