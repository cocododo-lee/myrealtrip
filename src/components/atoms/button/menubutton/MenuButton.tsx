import React, {  PropsWithChildren, } from 'react'
import { NavLink } from 'react-router-dom'
import {typographVariants} from '../../../../types/typography.css.ts';
import * as styles from './MenuButton.css.ts'
import clsx from 'clsx'
import Badge from '../../badge/Badge.tsx';
import type { MenuListProps } from '../../../molecules/MenuList.tsx';

interface MenuButtonStyled extends Omit<MenuListProps, 'id'>{
  className?: string;
}

const MenuButton = ({...props}:PropsWithChildren<MenuButtonStyled>): JSX.Element | null => { 
  if (!props.linkTo) {
    return null; // linkTo 값이 없으면 아무것도 렌더링하지 않음
  }

  const variantClass = props.variant ? typographVariants[props.variant] : undefined;
  return (
    <>
      <NavLink className={clsx(props.className, variantClass)} to={props.linkTo}
      >
        {
          props.hasIcon && (
          <i aria-hidden="true" className={styles.iconGnbIcon}><img src={props.hasIcon} alt="" className={styles.iconGnbIconImg}/></i>
          )        
        }{
          props.isNew && (
            <Badge children='new' variant='badgeNew'/>
          )
        }
        <span className='btn_text'>{props.children}</span>
      </NavLink>
    </>
  )
}

export default MenuButton