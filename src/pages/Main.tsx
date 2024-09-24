import React from 'react'
import CardList from '../components/organisms/CardList'
import Slide from '../components/atoms/slider/Slide.tsx';
// resource
import ImgMainBnr1_1 from '../assets/images/img_banner1.webp';
import ImgMainBnr1_2 from '../assets/images/img_banner2.webp';
import ImgMainBnr1_3 from '../assets/images/img_banner3.webp';


const Main = () => {
  return (
    <>
      <CardList/>
      <Slide/>
    </>
  )
}

export default Main