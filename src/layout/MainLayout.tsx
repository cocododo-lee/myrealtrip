import React from 'react'
// import {style} from '../styles.css.ts';
import * as styles from '../styles.css.ts'; 
import Buttons from '../components/atoms/Buttons.tsx';
import * as buttons from '../components/atoms/Buttons.css.ts'; 

const MainLayout:React.FC  = () => {
  return (
    <div>
      <div className={styles.container}>
          <h1 className={styles.exampleH1}>Layout</h1>
          <h2>Vite + React + Typescript + MSW + zustand + vanilla-extract</h2>
      </div>
      <Buttons variant="h1" children='버튼제작1' className={buttons.buttonRound}/>
      <Buttons variant="h2" children='버튼제작2' className={buttons.buttonRound}/>
   </div>
  )
}

export default MainLayout