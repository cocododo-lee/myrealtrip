import React from 'react'
import MenuButton from '../atoms/button/MenuButton'
import * as menuButton from '../atoms/button/menuButton.css.ts'
import icon1 from '../../assets/images/icon/icon_menu_1.png'
const MenuList = () => {
  return (
    <nav>
        <MenuButton className={menuButton.iconGnb} children="메뉴1" variant='iconGNB' hasIcon={icon1} linkTo='https://www.naver.com'/>
    </nav>
  )
}

export default MenuList