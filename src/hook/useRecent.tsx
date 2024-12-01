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

  const handleSetKeyword = (value:string) => {
    if(!keywords.includes(value)){
      const newKeywords = [value, ...keywords];
      setKeywords(newKeywords);
    }
  }

  const handleRemove= (valueToRemove:string) => { 
    const removeDataList =  keywords.filter((keyword:string) => 
      keyword !== valueToRemove
    );
    setKeywords(removeDataList);
  }

  const handleClearClick = () => {
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
    handleSetKeyword, 
    handleRemove,
    handleClearClick,
  }
}

export default useRecent