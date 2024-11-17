import React, { PropsWithChildren, ReactElement } from 'react'
import {titleVariants} from './Title.css'
import clsx from 'clsx';

type Variant = keyof typeof titleVariants;

interface TitleProps {
    hasIcon?: true;
    variant?: Variant;
    className?: string;
}
  
const Title = ({...props}:PropsWithChildren<TitleProps>):ReactElement => {
  const variantClass = props.variant ? titleVariants[props.variant] : undefined;
  return (
    <div className="titleWrap">
      <h3 className={clsx(props.className,variantClass)}>{props.children}</h3>
    </div>
  )
}

export default Title