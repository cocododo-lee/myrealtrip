import React from 'react'
import DeleteButton from '../button/delete/DeleteButton'

interface HistoryHeadProps {
    title : string;
}

const HistoryHead = ({...props}:HistoryHeadProps) => {
  return (
    <>
        <strong className='historyTitle'>{props.title}</strong>
        <DeleteButton className='btnDeleteLink'>전체삭제</DeleteButton>
    </>
  )
}

export default HistoryHead