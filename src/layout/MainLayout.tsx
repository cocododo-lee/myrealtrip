import React, { useEffect, useState } from 'react'
import {Outlet} from 'react-router-dom';
import MenuList from '../components/molecules/MenuList'
import DropDown from '../components/molecules/DropDown'
import * as styles from './MainLayout.css.ts'
import Search from '../components/molecules/Serach';

const MainLayout = () => {
  return (
    <main className='container'>
      <header className='header_wrap'>
        <h1 className='logo'></h1>
        <Search/>
        <MenuList/>
        <DropDown/>
      </header>
      <article className='container'>
        <div className={styles.contents}>
          <Outlet/>
        </div>
      </article>
      <footer className='footer_wrap'>

      </footer>
    </main>
  )
}

export default MainLayout