import React, { ReactElement, ReactNode } from 'react'
import {PaletteTypes} from '../../../types/palette.ts'
import {typographVariants} from '../../../types/typography.css.ts'
import clsx from 'clsx';

type Variant = keyof typeof typographVariants;

interface ButtonStyled {
  width?:string; // px을 받기 위한 String
  height?:string;
  hasIcon?: true;
  bgColor?:PaletteTypes; // HEX코드 등을 받기 위한 String
  variant?: Variant;
  children: ReactNode;
  className?: string;
}


const Button = ({className, children, variant}:ButtonStyled):ReactElement => {
  const variantClass = variant ? typographVariants[variant] : undefined;
  return (
    <>
      <button className={clsx(className,variantClass)} >
        {children}
      </button>
    </>
  )
}

export default Button