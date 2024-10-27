import React from 'react'
import RecentHead from './RecentHead.tsx'
import * as RecentStyles from './Recent.css.ts'
import RecentBody from './RecentBody.tsx'

const Recent = () => {
  return (
    <div className={RecentStyles.RecentWrap}>
       <RecentHead title="최근 검색기록"/>
       <RecentBody/>
    </div>
  )
}

export default Recent