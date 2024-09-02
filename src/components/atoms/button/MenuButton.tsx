import clsx from 'clsx'
import React, { ReactElement, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import {menuVariants} from '../../atoms/button/menuButton.css.ts'

type Variant = keyof typeof menuVariants;


interface MenuButtonStyled {
    className?: string;
    variant?: Variant;
    children: ReactNode;
}
  


const MenuButton = ({children}:MenuButtonStyled):ReactElement => {  
const menuVariantClass = variant ? menuVariants[variant] : undefined;
  return (
    <div>
        <Link to={likTo} className={clsx(className, variantClass)}>
            {children}
        </Link>
    </div>
  )
}

export default MenuButton