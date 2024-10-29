import React, { useEffect, useState } from 'react'

export interface RecentProps {
  keywords:string[];
  onKeyDown: (keyword: string) => void;
  onRemove: (keyword: string) => void;
  onClear: () => void;
  onClick: ( keywords:string) => void;
}

const useRecent = () => {

  const [keywords, setKeywords] = useState<string[]>([]); 
  
    useEffect(() => {
      localStorage.setItem('keywords', JSON.stringify(keywords))
      console.log(localStorage.getItem('keywords'))
    }, [keywords])
    
   
    
    const handleClick = (value:string) => {
      setKeywords([value, ...keywords])
    }
 
    const handleKeyDown = (value:string) => {
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
    handleClick,
    handleKeyDown,
    handleRemove,
    handleClear,
  }
}

export default useRecent