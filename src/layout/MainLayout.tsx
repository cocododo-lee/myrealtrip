import React, { useEffect, useState } from 'react'
import {Outlet} from 'react-router-dom';

import CardList from '../components/organisms/CardList'
import MenuList from '../components/molecules/MenuList'
import DropDown from '../components/molecules/DropDown'

const MainLayout:React.FC  = () => {

  return (
    <div>
      <MenuList/>
      <DropDown/>
      <CardList/>
      <Outlet/>
   </div>
  )
}

export default MainLayout