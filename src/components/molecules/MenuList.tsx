import React from 'react'
import MenuButton from '../atoms/button/MenuButton'
import * as menuButton from '../atoms/button/MenuButton.css.ts'
import {typographVariants} from '../../types/typography.css.ts';
import icon1 from '../../assets/images/icon/icon_menu_1.webp'
import icon2 from '../../assets/images/icon/icon_menu_2.webp'

type Variant = keyof typeof typographVariants;

interface MenuItem {
  id?: string;
  isNew?: boolean;
  hasIcon?: string;
  linkTo?: string;
  btnText : string;
  variant?: Variant; 
  linkVal?: string;
}

const MenuListData:MenuItem[]= [
  {
    isNew: true,
    id:'menuList1',
    hasIcon : icon1,
    btnText : '메뉴1',
    variant : 'iconGNB',
    linkVal: '/sub1',
  },
  {
    hasIcon : icon2,
    id:'menuList2',
    btnText : '메뉴2',
    variant : 'iconGNB',
    linkVal: '/hotel',
  },
];


const MenuList = () => {
  return (
    <nav>
        { MenuListData.map((el) => {
          return (
              <MenuButton linkVal={el.linkVal} key={el.id} id={`${el.id}`} className={menuButton.iconGnb} hasIcon={el.hasIcon} isNew={el.isNew} variant={el.variant}>
                {el.btnText}
              </MenuButton>
          )})
        }
    </nav>
  )
}

export default MenuList