
import React from 'react'
import clsx from 'clsx';

interface NextArrowProps {
    arrowStyle?: string;
    onClick?: ()=> void;
}

export const SlideArrowNext = ({arrowStyle, onClick }: NextArrowProps) => {
    return (
      <button type='button' className={clsx(arrowStyle)} onClick={onClick}>
          {/* <span></span> */}
      </button>
    )
}