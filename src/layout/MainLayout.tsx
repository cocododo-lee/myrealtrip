import React from 'react'
import CardList from '../components/organisms/CardList'
import MenuList from '../components/molecules/MenuList'
// import * as styles from '../styles/styles.css.ts'; 
// import * as button from '../components/atoms/button/button.css.ts';
// import * as badges from '../components/atoms/badge/badge.css.ts';
// import Button from '../components/atoms/button/Button.tsx';
// import Badge from '../components/atoms/badge/Badge.tsx';


const MainLayout:React.FC  = () => {
  return (
    <div>
      <MenuList/>
      <CardList/>      
      {/* <div className={styles.container}>
          <h1 className={styles.exampleH1}>Layout</h1>
          <h2>Vite + React + Typescript + MSW + zustand + vanilla-extract</h2>
      </div>
      <Button variant="h1" children='버튼제작1' className={button.btnWhiteRound}/>
      <Button variant="h2" children='버튼제작2' className={button.btnWhiteRound}/>

      <Badge children='즉시할인' className={badges.badge1}/> */}
   </div>
  )
}

export default MainLayout