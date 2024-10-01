import React from 'react'
import * as styles from './Thumbnail.css.ts';

interface ThumnailProps {
    className?:string;
    imgUrl: string;
    imgAlt?: string;
}

const Thumnail = ({ ...props }:ThumnailProps) => {
  return (
    <div className={props.className}>
        <img src={props.imgUrl} alt={props.imgAlt}/>
    </div>
  )
}

export default Thumnail