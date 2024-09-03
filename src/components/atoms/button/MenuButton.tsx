import React, { ReactElement, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import {typographVariants} from '../../../types/typography.css.ts';
import * as menuButton from '../button/menuButton.css.ts'
import clsx from 'clsx'


type Variant = keyof typeof typographVariants;

interface MenuButtonStyled {
  children: ReactNode;
  linkTo: string;
  className?: string;
  hasIcon?:string; //URL
  variant?: Variant; 
}

const MenuButton = ({children, variant, className, hasIcon, linkTo}:MenuButtonStyled):ReactElement => {  
const variantClass = variant ? typographVariants[variant] : undefined;
  return (
    <>
      <Link to={linkTo} className={clsx(className, variantClass)}>
        {
          hasIcon && (
          <i aria-hidden="true" className={menuButton.iconGnbIcon}><img src={hasIcon} alt="" className={menuButton.iconGnbIconImg}/></i>
          )        
        }
        <span className='btn_text'>{children}</span>
      </Link>
    </>
  )
}

export default MenuButton