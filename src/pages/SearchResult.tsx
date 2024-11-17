import React from 'react'
import { useSearchParams } from 'react-router-dom'

const SearchResult = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('keywords');
  return (
    <>
        <div>
            <h2>검색어 내용 : {query}</h2>
        </div>
        <div>
            검색결과
        </div>
    </>
  )
}

export default SearchResult