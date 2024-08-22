import React, { ReactElement, ReactNode } from 'react'
import {PaletteTypes} from '../../styles/palette'

interface ButtonStyled {
  width?:string; // px을 받기 위한 
  height?:string;
  fontSize?: string; 
  fontColor?:PaletteTypes;
  hasBorder?: boolean;
  borderColor?: PaletteTypes;
  borderRadius?: string;
  hasIcon?: true;
  hasIconOnly?:true; // 아이콘만 보이는 버튼인 경우 
  iconType?: string; // 클래스로 아이콘 클래스명 매칭을 위한 stirng 
  bgColor?:PaletteTypes; // HEX코드 등을 받기 위한
  // onClick?: () => void;
}

// 확장-상속
interface ButtonProps extends ButtonStyled{
  children: ReactNode;
  className?: string;
}

const Buttons = ({className, children, ...rest}:ButtonProps):ReactElement => {
  return (
    <>
    <StyledButton className={className} {...rest}>{children}</StyledButton>
      
      {/* <ButtonStyled className={className} {...rest}>{children}</ButtonStyled> */}

      {/* 공부용 코멘트는 최종 머지될 때 정리하여 삭제할 예정입니다! 
          0821 참고글 : https://hackids.tistory.com/133
          => ✅ 0821 멘토님 피드백 URL : https://doiler.tistory.com/m/40
        */}
    </>
  )
}

export default Buttons