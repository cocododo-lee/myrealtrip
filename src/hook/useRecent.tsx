import React, { useEffect, useState } from 'react'

const useRecent = () => {
    const [keywords, setKeyword] = useState(
      JSON.parse(localStorage.getItem('keywords') || '[]')
    );
  
    useEffect(() => {
      localStorage.setItem('keywords', JSON.stringify(keywords))
    }, [keywords])
    
    const handleEnter= (value:string) => {
      setKeyword([value, ...keywords])
    }

    const handleRemove= (id) => {
      const removeDataList =  keywords.filter((keyword:string) => {
        return keyword.id != id;
      })
      setKeyword(removeDataList);
    }

    const handleClear= () => {
      setKeyword([''])
    }


  return {
    keywords,
    handleEnter,
    handleRemove,
    handleClear,
  }
}

export default useRecent