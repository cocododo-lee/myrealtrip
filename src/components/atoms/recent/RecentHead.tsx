import React from 'react'
import DeleteButton from '../button/delete/DeleteButton'

interface RecentHeadProps {
    title : string;
}

const HistoryHead = ({...props}:RecentHeadProps) => {
  return (
    <>
        <strong className='RecentTitle'>{props.title}</strong>
        <DeleteButton className='btnDeleteLink'>전체삭제</DeleteButton>
    </>
  )
}

export default HistoryHead