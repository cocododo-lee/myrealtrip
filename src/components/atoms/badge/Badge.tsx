import React from 'react'
import * as  badges from './badge.css'
import {PaletteTypes} from '../../../types/palette.ts'
import clsx from 'clsx'

type Variant = keyof typeof badges;

interface BadgeStyle {
  hasIcon?: true;
  bgColor?:PaletteTypes; // HEX코드 등을 받기 위한 String
  variant?: Variant;
  className?: string;
  children?:string;
}

const Badge = ({className, children, variant}:BadgeStyle) => {
const variantClass = variant ? badges[variant] :undefined;
   return (
    <span className={clsx(className, variantClass)}>
        {/* 최저가 보장제, 즉시확정 */}
        {children}
    </span>
  )
}

export default Badge