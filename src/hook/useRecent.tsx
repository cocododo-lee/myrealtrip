import React, { useEffect, useState } from 'react'

export interface RecentProps {
  keywords:string[];
  onKeyDown: (keyword: string) => void;
  onRemove: (keyword: string) => void;
  onClear: () => void;
  onClick: ( keywords:string) => void;
  
}

const useRecent = () => {

  const getInitialkeywords = () => {
    try {
      const savedData = localStorage.getItem('keywords');
      const initialValue = savedData ? JSON.parse(savedData) : [];
      return initialValue;
    } catch (error) {
      console.error('Error loadding from localStroage :',error);
      return [];
    } 
  }

  const [keywords, setKeywords] = useState<string[]>(getInitialkeywords);   
  useEffect(() => {
      localStorage.setItem('keywords', JSON.stringify(keywords));
  }, [keywords]);

  const handleClick = (value:string) => {
    if(!keywords.includes(value)){
      const newKeywords = [value, ...keywords];
     // ✏️별로 좋지 않은 방법인지 
     // setKeywords([value, ...keywords]);
      setKeywords(newKeywords);
    }
  }

  const handleKeyDown = (value:string) => {
    const newKeywords = [value, ...keywords];
   // ✏️별로 좋지 않은 방법인지 
   // setKeywords([value, ...keywords]);
    setKeywords(newKeywords);
  }

  const handleRemove= (valueToRemove:string) => { // 😭 타입 지정도 빼 먹음 
    const removeDataList =  keywords.filter((keyword:string) => 
      // return keyword.id != id;
      keyword !== valueToRemove
    );
    setKeywords(removeDataList);
  }

  const handleClearClick = () => {
    //setKeywords(['']) //✏️ 이렇게 할 경우 완전한 빈 배열값이 되지 못한다. 
      if(keywords.length >= 1){
        const resetKeywordConfirm = confirm('최근 검색내역을 전체삭제할까요?');
        if(resetKeywordConfirm) {
          setKeywords([]);
          localStorage.removeItem('keywords');
        }
    } else {
      alert('삭제할 최근 검색 내역이 없습니다.😭')
    }
  } 
  

  
  return {
    keywords,
    handleClick,
    handleKeyDown,
    handleRemove,
    handleClearClick,
  }
}

export default useRecent