import React, { useState } from 'react'

const useSearchHistory = () => {
    const [historyView, setHistoryView] = useState(false);
    
    // 리스트 키워드 추가
    // 리스트 데이터 초기화 

    // Focus/Blur
    const handelrFocus = (value:boolean) => {
        setHistoryView(value);
    }
    const handlerBulr= (value:boolean) => {
        setHistoryView(value)
    }

  return {
    historyView,
    handelrFocus,
    handlerBulr,
  }
}

export default useSearchHistory