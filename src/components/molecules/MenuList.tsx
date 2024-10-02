import React from 'react'
import MenuButton from '../atoms/button/menubutton/MenuButton.tsx'
import * as styles from '../atoms/button/menubutton/MenuButton.css.ts'
import {typographVariants} from '../../types/typography.css.ts';
import icon1 from '../../assets/images/icon/icon_menu_1.webp'
import icon2 from '../../assets/images/icon/icon_menu_2.webp'

type Variant = keyof typeof typographVariants;

export interface MenuListProps {
  id: string;
  isNew?: boolean;
  hasIcon?: string;
  linkTo?: string;
  text?: string;
  variant?: Variant; 
}

const MENU_LIST:MenuListProps[]= [
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
        { MENU_LIST.map((list) => {
          return (
              <MenuButton {...list} key={list.id} className={styles.iconGnb}>
                {list.text}
              </MenuButton>
          )})
        }
    </nav>
  )
}

export default MenuList