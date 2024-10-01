import React, { PropsWithChildren } from 'react'
import * as  styles from './Badge.css.ts'
import {PaletteTypes} from '../../../types/palette.ts'
import clsx from 'clsx'

type Variant = keyof typeof styles;

interface BadgeStyle {
  hasIcon?: true;
  bgColor?:PaletteTypes; // HEX코드 등을 받기 위한 String
  variant?: Variant;
  className?: string;
}

const Badge = ({className, variant, children}:PropsWithChildren<BadgeStyle>) => {
const variantClass = variant ? styles[variant] :undefined;
   return (
    <span className={clsx(className, variantClass)}>
        {children}
    </span>
  )
}

export default Badge