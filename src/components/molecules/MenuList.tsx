import React from 'react'
import MenuButton from '../atoms/button/MenuButton'
import * as menuButton from '../atoms/button/menuButton.css.ts'
import icon1 from '../../assets/images/icon/icon_menu_1.png'
import icon2 from '../../assets/images/icon/icon_menu_2.jpg'
const MenuList = () => {
  return (
    <nav>
        <MenuButton className={menuButton.iconGnb} children="메뉴1" variant='iconGNB' hasIcon={icon1} isNew={true} linkTo='https://www.naver.com'/>
        <MenuButton className={menuButton.iconGnb} children="메뉴2" variant='iconGNB' hasIcon={icon2} linkTo='https://www.daum.net'/>
    </nav>
  )
}

export default MenuList