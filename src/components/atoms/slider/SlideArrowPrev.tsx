
import React from 'react'
import clsx from 'clsx';

interface PrevArrowProps {
  arrowStyle?: string;
    onClick?: ()=> void;
}

export const SlideArrowPrev = ({arrowStyle, onClick }: PrevArrowProps) => {
  return (
    <button type='button' className={clsx(arrowStyle)} onClick={onClick}>
        {/* <span></span> */}
    </button>
  )
}