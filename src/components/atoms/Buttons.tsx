import React from 'react'

interface ButtonProps {
  variants: [
    {
      //default 
      default : string,
      //Style
      outline :string,
      ghost : string,
      icon : string,
      round:string,
    },
  ],
  role : {
    default:string,
    outlink : string,
    form :string,
    submit :string,
  },
  size : string,
  background: string,
  children : string,
  onClick: () => void;
}


const Buttons = (props:ButtonProps) => {
  return (
    <>  
      <button {...props}>
        {props.children}
      </button>

      {/* 0821 참고글 :
          https://hackids.tistory.com/133
       */}
    </>
  )
}

export default Buttons