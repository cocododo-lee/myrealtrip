import clsx from 'clsx'
import React from 'react'
import RecentItem from './RecentItem'

const RecentBody = () => {
  return (
    <div className={clsx('RecentBody')}>
      <RecentItem/>
    </div>
  )
}

export default RecentBody