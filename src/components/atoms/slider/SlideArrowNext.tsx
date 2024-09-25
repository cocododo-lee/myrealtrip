
import React from 'react'
import clsx from 'clsx';

interface NextArrowProps {
    btnClassName?: string;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const SlideArrowNext = ({btnClassName, onClick }: NextArrowProps) => {
    return (
      <button type='button' className={clsx(btnClassName)} onClick={onClick}>
          {/* <span></span> */}
      </button>
    )
}