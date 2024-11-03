import React from 'react'
import DeleteButton from '../button/delete/DeleteButton'

interface RecentHeadProps {
    title : string;
    onClear: () => void;
}

const HistoryHead = ({title,onClear}:RecentHeadProps) => {
  return (
    <>
        <strong className='RecentTitle'>{title}</strong>
        <DeleteButton className='btnDeleteLink' onClick={onClear}>전체삭제</DeleteButton>
    </>
  )
}

export default HistoryHead