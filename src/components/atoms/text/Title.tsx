import React, { PropsWithChildren, ReactElement, ReactNode } from 'react'
import {titleVariants} from './Title.css'
import clsx from 'clsx';

type Variant = keyof typeof titleVariants;

interface TitleProps {
    hasIcon?: true;
    variant?: Variant;
    className?: string;
}
  
const Title = ({className, children, variant}:PropsWithChildren<TitleProps>):ReactElement => {
  const variantClass = variant ? titleVariants[variant] : undefined;
  return (
    <div className="titleWrap">
      <h3 className={clsx(className,variantClass)}>{children}</h3>
    </div>
  )
}

export default Title