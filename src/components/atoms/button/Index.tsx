import React, { PropsWithChildren} from 'react'
import {PaletteTypes} from '../../../types/palette.ts'
import {typographVariants} from '../../../types/typography.css.ts'
import clsx from 'clsx';

type Variant = keyof typeof typographVariants;

interface ButtonProps {
  width?:string; // px을 받기 위한 String
  height?:string;
  hasIcon?: true;
  bgColor?:PaletteTypes; // HEX코드 등을 받기 위한 String
  variant?: Variant;
  className?: string;
}


const Button = ({...props}:PropsWithChildren<ButtonProps>) => {
  const variantClass = props.variant ? typographVariants[props.variant] : undefined;
  return (
    <>
      <button className={clsx(props.className,variantClass)} >
        {props.children}
      </button>
    </>
  )
}

export default Button