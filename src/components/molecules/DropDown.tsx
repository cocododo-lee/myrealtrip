import React from 'react'
import MenuButton from '../atoms/button/MenuButton'
import * as menuButton from '../atoms/button/menuButton.css.ts'
import menuGnbMore from '../../assets/images/common/bg_drop_down_arrow.svg';
import icon10 from '../../assets/images/icon/icon_menu_10.png';
import icon11 from '../../assets/images/icon/icon_menu_11.png';
import icon12 from '../../assets/images/icon/icon_menu_12.png';
import icon13 from '../../assets/images/icon/icon_menu_13.png';
import icon14 from '../../assets/images/icon/icon_menu_14.png';
import icon15 from '../../assets/images/icon/icon_menu_15.png';
import icon16 from '../../assets/images/icon/icon_menu_16.png';
import icon17 from '../../assets/images/icon/icon_menu_17.png';
import icon18 from '../../assets/images/icon/icon_menu_18.png';

const DropDown = () => {
  return (
    <div>
        <MenuButton className={menuButton.iconGnbMore} children="더보기" hasIcon={menuGnbMore}/>
        <div className={menuButton.dropDownMenu}>
            <MenuButton className={menuButton.iconGnb} children="메뉴10" variant='iconGNB' hasIcon={icon10} linkTo='https://www.daum.net'/>
            <MenuButton className={menuButton.iconGnb} children="메뉴11" variant='iconGNB' hasIcon={icon11} linkTo='https://www.daum.net'/>
            <MenuButton className={menuButton.iconGnb} children="메뉴12" variant='iconGNB' hasIcon={icon12} linkTo='https://www.daum.net'/>
            <MenuButton className={menuButton.iconGnb} children="메뉴13" variant='iconGNB' hasIcon={icon13} linkTo='https://www.daum.net'/>
            <MenuButton className={menuButton.iconGnb} children="메뉴14" variant='iconGNB' hasIcon={icon14} linkTo='https://www.daum.net'/>
            <MenuButton className={menuButton.iconGnb} children="메뉴15" variant='iconGNB' hasIcon={icon15} linkTo='https://www.daum.net'/>
            <MenuButton className={menuButton.iconGnb} children="메뉴16" variant='iconGNB' hasIcon={icon16} linkTo='https://www.daum.net'/>
            <MenuButton className={menuButton.iconGnb} children="메뉴17" variant='iconGNB' hasIcon={icon17} linkTo='https://www.daum.net'/>
            <MenuButton className={menuButton.iconGnb} children="메뉴18" variant='iconGNB' hasIcon={icon18} linkTo='https://www.daum.net'/>
        </div>
    </div>
  )
}

export default DropDown