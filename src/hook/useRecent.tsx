import React, { useEffect, useState } from 'react'

export interface RecentProps {
  keywords:string[];
  onEnter: (keyword: string) => void;
  onRemove: (keyword: string) => void;
  onClear: () => void;
}

const useRecent = () => {

  const [keywords, setKeywords] = useState<string[]>([]); 
  
    useEffect(() => {
      localStorage.setItem('keywords', JSON.stringify(keywords))
    }, [keywords])
    
    const handleEnter= (value:string) => {
      setKeywords([value, ...keywords])
    }

    const handleRemove= (id) => {
      const removeDataList =  keywords.filter((keyword:string) => {
        return keyword.id != id;
      })
      setKeywords(removeDataList);
    }

    const handleClear= () => {
      setKeywords([''])
    }


  return {
    keywords,
    handleEnter,
    handleRemove,
    handleClear,
  }
}

export default useRecent