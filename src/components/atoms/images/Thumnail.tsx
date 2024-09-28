import React from 'react'
import * as thumnail from './Thumnail.css.ts';

interface ThumnailProps {
    className?:string;
    imgUrl: string;
    imgAlt?: string;
}


const Thumnail = ({ className, imgUrl, imgAlt}:ThumnailProps) => {
  return (
    <div className={className}>
        <img src={imgUrl} alt={imgAlt}/>
    </div>
  )
}

export default Thumnail