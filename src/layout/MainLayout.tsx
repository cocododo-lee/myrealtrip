import React, { useEffect, useState } from 'react'
import {Outlet} from 'react-router-dom';

import CardList from '../components/organisms/CardList'
import MenuList from '../components/molecules/MenuList'
import DropDown from '../components/molecules/DropDown'
import SlickSlide from '../components/atoms/slider/Slide';
import {settings1} from '../constants/settings'

const MainLayout:React.FC  = () => {
  return (
    <div>
      <MenuList/>
      <DropDown/>
      
      {/* <SlickSlide settings={settings1} contents={<CardList/>} /> */}
      <SlickSlide settings={settings1}>
        <CardList/>
      </SlickSlide>
      <Outlet/>
   </div>
  )
}

export default MainLayout