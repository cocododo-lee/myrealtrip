import React, { ReactElement, ReactNode } from 'react'
import {PaletteTypes} from '../../styles/palette'
import {typographVariants} from '../../styles/typography.css.ts'
import clsx from 'clsx';

type Variant = keyof typeof typographVariants;

interface ButtonStyled {
  width?:string; // px을 받기 위한 String
  height?:string;
  hasIcon?: true;
  bgColor?:PaletteTypes; // HEX코드 등을 받기 위한 String
  variant?: Variant;
}

// 확장-상속
interface ButtonProps extends ButtonStyled{
  children: ReactNode;
  className?: string;
}


const Buttons = ({className, children, variant}:ButtonProps):ReactElement => {
  const variantClass = variant ? typographVariants[variant] : undefined;
  return (
    <>
      <button className={clsx(className,variantClass)} >
        {children}
      </button>
      
      {/* 공부용 코멘트는 최종 머지될 때 정리하여 삭제할 예정입니다! 
         ✏️ 0821 참고글 : https://hackids.tistory.com/133
          => ✅ 0821 멘토님 피드백 URL : https://doiler.tistory.com/m/40
          => ✅ 0823 멘토님 도움 참고 URL : https://www.material-tailwind.com/docs/react/typography
      */}
    </>
  )
}

export default Buttons