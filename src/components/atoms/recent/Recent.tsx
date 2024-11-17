import React from 'react'
import RecentHead from './RecentHead.tsx'
import * as RecentStyles from './Recent.css.ts'
import clsx from 'clsx';
import RecentItem from './RecentItem.tsx';

interface RecentUIProps  {
  keywords:string[];
  onClear: () => void;
  onClose: () => void;
}
const Recent = (props:RecentUIProps) => {
  const { keywords, onClear,  onClose} = props;  
  const handleClearClick = () => {
    console.log('Clear button clicked'); // 디버깅용
    onClear();
  };
  const handleCloseLayer = () => {
    onClose();
  }

  return (
    <div className={RecentStyles.RecentWrap}>
        <RecentHead title="최근 검색기록" onClear={handleClearClick}/>
        <div className={clsx('RecentBody')}>
          {
            keywords.length > 0 && 
            keywords.map((keyword,index) => (
              <RecentItem key={`${keyword}${index}`} value={keyword} onClick={handleCloseLayer}/>
            ))
          }
        </div>
    </div>
  )
}

export default Recent