import React from 'react'
// import {style} from '../styles.css.ts';
import * as styles from '../styles.css.ts'; 
const Layout:React.FC  = () => {
  return (
    <div>
      <div className={styles.container}>
          <h1 className={styles.exampleH1}>Layout</h1>
          <h2>Vite + React + Typescript + MSW + zustand + vanilla-extract</h2>
      </div>
   </div>
  )
}

export default Layout