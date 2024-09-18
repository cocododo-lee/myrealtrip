import React, { Children } from 'react'
import MenuButton from '../atoms/button/MenuButton'
import * as menuButton from '../atoms/button/MenuButton.css.ts'
import {typographVariants} from '../../types/typography.css.ts';
import icon1 from '../../assets/images/icon/icon_menu_1.webp'
import icon2 from '../../assets/images/icon/icon_menu_2.webp'

type Variant = keyof typeof typographVariants;

export interface IMenuListProps {
  id: string;
  isNew?: boolean;
  hasIcon?: string;
  linkTo?: string;
  text : string;
  variant?: Variant; 
}

const menuList:IMenuListProps[]= [
  {
    isNew: true,
    id:'menuList1',
    hasIcon : icon1,
    text : '메뉴1',
    variant : 'iconGNB',
    linkTo: '/sub1',
  },
  {
    hasIcon : icon2,
    id:'menuList2',
    text : '메뉴2',
    variant : 'iconGNB',
    linkTo: '/hotel',
  },
];


const MenuList = () => {
  return (
    <nav>
        { menuList.map((list) => {
          return (
              <MenuButton {...list} key={list.id} className={menuButton.iconGnb}>
                {list.text}
              </MenuButton>
          )})
        }
    </nav>
  )
}

export default MenuList