import React from 'react'
import Card from '../molecules/card/Card.tsx';
import Slide from '../atoms/slider/Slider.tsx';
import { titleVariants } from '../atoms/title/Title.css.ts'
import * as  stylesCard from '../molecules/card/Card.css.ts'
import * as  StylesSlick from '../atoms/slider/Slider.css.ts'
//img
import ImgJeju from '../../assets/images/country/img_card_jeju.webp';
import ImgParis from '../../assets/images/country/img_card_paris.webp';
import ImgSokcho from '../../assets/images/country/img_card_sokcho.webp';
import ImgBangkok from '../../assets/images/country/img_card_bangkok.webp';
import ImgLondon from '../../assets/images/country/img_card_london.webp';
import ImgRoma from '../../assets/images/country/img_card_roma.webp';
import ImgBarcelona from '../../assets/images/country/img_card_barcelona.webp';
import ImgDanang from '../../assets/images/country/img_card_danang.webp';

interface CardItem {
  title: string;
  imgUrl: string;
  text : string;
}

const CARD_LIST:CardItem[]= [
  {
    title : "제주",
    imgUrl : ImgJeju,
    text : '둘러보기',
  },{
    title : "파리",
    imgUrl : ImgParis,
    text : '둘러보기',
  },{
    title : "속초",
    imgUrl : ImgSokcho,
    text : '둘러보기',
  }, {
    title : "방콕",
    imgUrl : ImgBangkok,
    text : '둘러보기',
  },{
    title : "런던",
    imgUrl : ImgLondon,
    text : '둘러보기',
  },{
    title : "로마",
    imgUrl : ImgRoma,
    text : '둘러보기',
  },{
    title : "바르셀로나",
    imgUrl : ImgBarcelona,
    text : '둘러보기',
  },{
    title : "다낭",
    imgUrl : ImgDanang,
    text : '둘러보기',
  },
];

import { SlideArrowPrev } from '../atoms/button/slide/prev/PrevButton.tsx';
import { SlideArrowNext } from '../atoms/button/slide/next/NextButton.tsx';

export const SlickOption= {
  speed: 500,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  prevArrow: (<SlideArrowPrev arrowStyle={StylesSlick.sliderArrowPrev} />),
  nextArrow: (<SlideArrowNext arrowStyle={StylesSlick.sliderArrowNext} />),
};


const CardList = () => {
  return (
    <>
      <Slide items={CARD_LIST} className={StylesSlick.sliderWrap} settings={SlickOption} renderItem={(item,idx) => (
        <Card
          top={
            <strong className={titleVariants.cardImgTitle}>{item.title}</strong>
          } 
          node={
            <div className={stylesCard.cardIntro} style={{background:`url(${item.imgUrl}) no-repeat left top / cover` }}></div>
          }
          text = {item.text}
          />
      )}/>
    </>
  )
}

export default CardList