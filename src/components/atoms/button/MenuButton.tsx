import React, {  PropsWithChildren, } from 'react'
import { NavLink } from 'react-router-dom'
import {typographVariants} from '../../../types/typography.css.ts';
import * as menuButton from './MenuButton.css.ts'
import clsx from 'clsx'
import Badge from '../badge/Badge.tsx';
import type { IMenuListProps } from '../../molecules/MenuList.tsx';

interface MenuButtonStyled extends Omit<IMenuListProps, 'id'>{
  className?: string;
}

const MenuButton = ({children, variant, className, hasIcon, isNew, linkTo}:PropsWithChildren<MenuButtonStyled>): JSX.Element | null => { 
  if (!linkTo) {
    return null; // linkTo 값이 없으면 아무것도 렌더링하지 않음
  }

  const variantClass = variant ? typographVariants[variant] : undefined;
  return (
    <>
      <NavLink className={clsx(className, variantClass)} to={linkTo}
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