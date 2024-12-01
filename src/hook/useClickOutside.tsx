import React, { RefObject, useEffect } from 'react'
// interface OutClickProps<T extends HTMLElement>{
//   ref:RefObject<T>;
//   callback:(value:boolean)=>void;
// }
// interface OutClickProps{
//   ref:RefObject<HTMLElement>,
//   callback:(value:boolean)=>void;
// }


// const useClickOutside =  <T extends HTMLElement>({ref, callback}:OutClickProps<T>) => {
const useClickOutside =(ref: React.RefObject<HTMLDivElement>, callback: (value:boolean) => void) => {
  useEffect(() => {
    const handleClickOutside = (e:MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback(false);
      }
    } 
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [ref])
}

export default useClickOutside