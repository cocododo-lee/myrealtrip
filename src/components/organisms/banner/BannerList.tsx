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
  imgUrl: string;
  linkTo?:string;
  text?: string;
}

const BANNER_LIST:BannerItem[]= [
  {
    linkTo:'https://www.myrealtrip.com/promotions/tna-ush-202409',
    imgUrl : ImgMainBnr1_1,
    text : '둘러보기',
  },{
    linkTo:'https://www.myrealtrip.com/promotions/checkout',
    imgUrl : ImgMainBnr1_2,
    text : '둘러보기',
  },{
    linkTo:'https://www.myrealtrip.com/promotions/2024salefesta-chuseok',
    imgUrl : ImgMainBnr1_3,
    text : '둘러보기',
  },
];

export const bannerSlideOption= {
  dots:true,
  speed: 500,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll:1,
  prevArrow: (<SlideArrowPrev arrowStyle={slider.sliderArrowPrev} />),
  nextArrow: (<SlideArrowNext arrowStyle={slider.sliderArrowNext} />),
};


const BannerList = () => {
  return (
    <>
      <Slide items={BANNER_LIST} className={slider.bannerSlider} settings={bannerSlideOption}  renderItem={(item,idx) => (
        <Link to={item.linkTo} className={banner.bnrlink}>
          <img src={item.imgUrl} alt ={item.text}/>
        </Link>
      )}/>
    </>
  )
}

export default BannerList