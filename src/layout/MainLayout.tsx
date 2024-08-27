import React from 'react'
import * as styles from '../styles/styles.css.ts'; 
import * as buttons from '../styles/buttons.css.ts'; 
import Buttons from '../components/atoms/Buttons.tsx';

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