import React, { Children } from 'react'

const DeleteButton = ({...props}) => {
  return (
    <>
        <button type='button'>
            <span>{props.Children}</span>
        </button>
    </>
  )
}

export default DeleteButton