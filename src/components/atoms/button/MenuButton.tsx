import React, {  PropsWithChildren, } from 'react'
import { NavLink } from 'react-router-dom'
import {typographVariants} from '../../../types/typography.css.ts';
import * as menuButton from './MenuButton.css.ts'
import clsx from 'clsx'
import Badge from '../badge/Badge.tsx';


type Variant = keyof typeof typographVariants;

interface MenuButtonStyled {
  linkVal?: string;
  className?: string;
  hasIcon?:string; //URL
  variant?: Variant; 
  isNew?:boolean;
  id?: string;
}

const MenuButton = ({children, variant, className, hasIcon, isNew, id, linkVal}:PropsWithChildren<MenuButtonStyled>): JSX.Element | null => { 
  if (!linkVal) {
    return null; // linkVal이 없으면 아무것도 렌더링하지 않음
  }

  const variantClass = variant ? typographVariants[variant] : undefined;


  return (
    <>
      <NavLink id={id} className={clsx(className, variantClass)}
        to={linkVal}
      >
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
      </NavLink>
    </>
  )
}

export default MenuButton