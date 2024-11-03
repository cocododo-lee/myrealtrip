import React, { PropsWithChildren } from 'react'

interface RecentDeleteButton {
  className?:string;
  onClick: () => void;
}
const DeleteButton = (props:PropsWithChildren<RecentDeleteButton>) => {
  const {className, children, onClick} = props;
  return (
    <>
        <button type='button' className={className} onClick={onClick}>
            <span>{children}</span>
        </button>
    </>
  )
}

export default DeleteButton