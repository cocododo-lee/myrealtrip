import React, { PropsWithChildren, ReactElement, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import {typographVariants} from '../../../types/typography.css.ts';
import * as menuButton from './MenuButton.css.ts'
import clsx from 'clsx'
import Badge from '../badge/Badge.tsx';


type Variant = keyof typeof typographVariants;

interface MenuButtonStyled {
  linkTo?: string;
  className?: string;
  hasIcon?:string; //URL
  variant?: Variant; 
  isNew?:boolean;
}

const MenuButton = ({children, variant, className, hasIcon, isNew, linkTo}:PropsWithChildren<MenuButtonStyled>):ReactElement => {  
const variantClass = variant ? typographVariants[variant] : undefined;
  return (
    <>
      <Link to={linkTo} className={clsx(className, variantClass)}>
        {
          hasIcon && (
          <i aria-hidden="true" className={menuButton.iconGnbIcon}><img src={hasIcon} alt="" className={menuButton.iconGnbIconImg}/></i>
          )        
        }{
          isNew && (
            <Badge children='new' variant='badgeNew'/>
          )
        }
        <span className='btn_text'>{children}</span>
      </Link>
    </>
  )
}

export default MenuButton