import React from 'react'
import RecentHead from './RecentHead.tsx'
import * as RecentStyles from './Recent.css.ts'
import clsx from 'clsx';
import RecentItem from './RecentItem.tsx';
import { RecentProps } from '../../../hook/useRecent.tsx';


const Recent = (keywords:RecentProps) => {
  return (
    <div className={RecentStyles.RecentWrap}>
       <RecentHead title="최근 검색기록"/>
       <div className={clsx('RecentBody')}>
       {
          keywords.map((items)=>(
            <RecentItem key={items.value}/>
        ))
        }
      </div>
    </div>
  )
}

export default Recent