import React, { useEffect, useState } from 'react'
import {Outlet} from 'react-router-dom';
import MenuList from '../components/molecules/MenuList'
import DropDown from '../components/molecules/DropDown'
import * as mainStyle from './MainLayout.css.ts'

const MainLayout = () => {
  return (
    <main className='wrap'>
      <header className='header_wrap'>
        <h1 className='logo'></h1>
        <MenuList/>
        <DropDown/>
      </header>
      <article className='container'>
        <div className={mainStyle.contents}>
          <Outlet/>
        </div>
      </article>
      <footer className='footer_wrap'>

      </footer>
    </main>
  )
}

export default MainLayout