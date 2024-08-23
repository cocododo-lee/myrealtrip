import React, { ReactElement, ReactNode } from 'react'
import {PaletteTypes} from '../../styles/palette'

interface ButtonStyled {
  width?:string; // px을 받기 위한 String
  height?:string;
  hasIcon?: true;
  bgColor?:PaletteTypes; // HEX코드 등을 받기 위한 String
}

// 확장-상속
interface ButtonProps extends ButtonStyled{
  children: ReactNode;
  className?: string;
  variant?:string;
}

const Buttons = ({className, children}:ButtonProps):ReactElement => {
  return (
    <>
      <a href='' className={className}>
        {children}
      </a>
      
      {/* 공부용 코멘트는 최종 머지될 때 정리하여 삭제할 예정입니다! 
         ✏️ 0821 참고글 : https://hackids.tistory.com/133
          => ✅ 0821 멘토님 피드백 URL : https://doiler.tistory.com/m/40
          => ✅ 0823 멘토님 도움 참고 URL : https://www.material-tailwind.com/docs/react/typography
      */}
    </>
  )
}

export default Buttons