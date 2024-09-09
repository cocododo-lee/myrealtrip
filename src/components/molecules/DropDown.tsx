import React from 'react'
import MenuButton from '../atoms/button/MenuButton'
import * as menuButton from '../atoms/button/MenuButton.css.ts'
import menuGnbMore from '../../assets/images/common/bg_drop_down_arrow.svg';
import icon10 from '../../assets/images/icon/icon_menu_10.webp';
import icon11 from '../../assets/images/icon/icon_menu_11.webp';
import icon12 from '../../assets/images/icon/icon_menu_12.webp';
import icon13 from '../../assets/images/icon/icon_menu_13.webp';
import icon14 from '../../assets/images/icon/icon_menu_14.webp';
import icon15 from '../../assets/images/icon/icon_menu_15.webp';
import icon16 from '../../assets/images/icon/icon_menu_16.webp';
import icon17 from '../../assets/images/icon/icon_menu_17.webp';
import icon18 from '../../assets/images/icon/icon_menu_18.webp';


interface DropMenuItem {
  hasIcon?: string;
  variant?:string;
  linkTo?: string;
  menuText :string;
}

const DropMenuData:DropMenuItem[]= [
  {
    hasIcon:icon10,
    variant: 'iconGNB',
    menuText: '메뉴10'
  },
  {
    hasIcon:icon11,
    variant: 'iconGNB',
    menuText: '메뉴10'
  },
  {
    hasIcon:icon12,
    variant: 'iconGNB',
    menuText: '메뉴12'
  },
  {
    hasIcon:icon13,
    variant: 'iconGNB',
    menuText: '메뉴13'
  },
  {
    hasIcon:icon14,
    variant: 'iconGNB',
    menuText: '메뉴14'
  },
  {
    hasIcon:icon15,
    variant: 'iconGNB',
    menuText: '메뉴15'
  },
  {
    hasIcon:icon16,
    variant: 'iconGNB',
    menuText: '메뉴16'
  },
  {
    hasIcon:icon17,
    variant: 'iconGNB',
    menuText: '메뉴17'
  },
  {
    hasIcon:icon18,
    variant: 'iconGNB',
    menuText: '메뉴18'
  }
]
const DropDown = () => {
  return (
    <div>
        <MenuButton className={menuButton.iconGnbMore} hasIcon={menuGnbMore}>더보기</MenuButton>
        <div className={menuButton.dropDownMenu}>
            {
              DropMenuData.map((el,index) => {
                return (
                  <MenuButton key={index} className={menuButton.iconGnb} hasIcon={el.hasIcon} variant={el.variant}>{el.menuText}</MenuButton>
                )
              })
            }
        </div>
    </div>
  )
}

export default DropDown