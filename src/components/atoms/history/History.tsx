import React from 'react'
import HistoryHead from './HistoryHead'
import * as HistoryStyles from './History.css.ts'

const History = () => {
  return (
    <div className={HistoryStyles.historyWrap}>
       <HistoryHead title="최근 검색기록"/>
    </div>
  )
}

export default History