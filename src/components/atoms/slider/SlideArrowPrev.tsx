
import clsx from 'clsx';
import React from 'react'

interface PrevArrowProps {
    btnClassName?: string;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const SlideArrowPrev = ({btnClassName, onClick }: PrevArrowProps) => {
  return (
    <button type='button' className={clsx(btnClassName)} onClick={onClick}>
        {/* <span></span> */}
    </button>
  )
}

//  default SlideArrowPrev