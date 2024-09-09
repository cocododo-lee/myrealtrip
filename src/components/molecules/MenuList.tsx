import React from 'react'
import MenuButton from '../atoms/button/MenuButton'
import * as menuButton from '../atoms/button/MenuButton.css.ts'
import {typographVariants} from '../../types/typography.css.ts';
import icon1 from '../../assets/images/icon/icon_menu_1.webp'
import icon2 from '../../assets/images/icon/icon_menu_2.webp'

type Variant = keyof typeof typographVariants;

interface MenuItem {
  isNew?: boolean;
  hasIcon?: string;
  linkTo?: string;
  btnText : string;
  variant?: Variant; 
}

const MenuListData:MenuItem[]= [
  {
    isNew: true,
    hasIcon : icon1,
    btnText : '메뉴1',
    variant : 'iconGNB',
  },
  {
    hasIcon : icon2,
    btnText : '메뉴2',
    variant : 'iconGNB',
  },
];


const MenuList = () => {
  return (
    <nav>
        { MenuListData.map((el,index) => {
          return (
              <MenuButton key={index} className={menuButton.iconGnb} hasIcon={el.hasIcon} isNew={el.isNew} variant={el.variant}>
                {el.btnText}
              </MenuButton>
          )})
        }
    </nav>
  )
}

export default MenuList

// import React from 'react'
// import MenuButton from '../atoms/button/MenuButton'
// import * as menuButton from '../atoms/button/menuButton.css.ts'
// import icon1 from '../../assets/images/icon/icon_menu_1.png'
// import icon2 from '../../assets/images/icon/icon_menu_2.jpg'
// const MenuList = () => {
//   return (
//     <nav>
//         <MenuButton className={menuButton.iconGnb} children="메뉴1" variant='iconGNB' hasIcon={icon1} isNew={true} linkTo='https://www.naver.com'/>
//         <MenuButton className={menuButton.iconGnb} children="메뉴2" variant='iconGNB' hasIcon={icon2} linkTo='https://www.daum.net'/>
//     </nav>
//   )
// }

// export default MenuList