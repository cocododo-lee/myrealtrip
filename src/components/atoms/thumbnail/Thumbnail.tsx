import React from 'react'
import * as styles from './Thumbnail.css.ts';

interface ThumbnailProps {
    className?:string;
    imgUrl: string;
    imgAlt?: string;
}

const Thumbnail  = ({ ...props }:ThumbnailProps) => {
  return (
    <div className={props.className}>
        <img src={props.imgUrl} alt={props.imgAlt}/>
    </div>
  )
}

export default Thumbnail