import React from 'react'
import { Link } from 'react-router-dom';
import Slide from '../../atoms/slider/Slide.tsx';
import * as  slider from '../../atoms/slider/Slider.css.ts'
import * as  banner from './Banner.css.ts'
import { SlideArrowPrev } from '../../atoms/slider/SlideArrowPrev.tsx';
import { SlideArrowNext } from '../../atoms/slider/SlideArrowNext.tsx';
//img
import ImgMainBnr1_1 from '../../../assets/images/img_banner1.webp';
import ImgMainBnr1_2 from '../../../assets/images/img_banner2.webp';
import ImgMainBnr1_3 from '../../../assets/images/img_banner3.webp';


interface BannerItem {
  id:string;
  imgUrl: string;
  linkTo?:string;
  text?: string;
}

const bannerList:BannerItem[]= [
  {
    id : 'bnrMain1',
    linkTo:'',
    imgUrl : ImgMainBnr1_1,
    text : '둘러보기',
  },{
    id : 'bnrMain2',
    linkTo:'',
    imgUrl : ImgMainBnr1_2,
    text : '둘러보기',
  },{
    id : 'bnrMain3',
    linkTo:'',
    imgUrl : ImgMainBnr1_3,
    text : '둘러보기',
  },
];

export const bnrSettings= {
  dots:true,
  speed: 500,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll:1,
  prevArrow: (<SlideArrowPrev btnClassName={slider.sliderArrowPrev} />),
  nextArrow: (<SlideArrowNext btnClassName={slider.sliderArrowNext} />),
};


const BannerList = () => {
  return (
    <>
      <Slide items={bannerList} className={slider.bannerSlider} settings={bnrSettings}  renderItem={(item,idx) => (
        <Link to={item.linkTo} className={banner.bnrlink}>
          <img src={item.imgUrl} alt ={item.text}/>
        </Link>
      )}/>
    </>
  )
}

export default BannerList