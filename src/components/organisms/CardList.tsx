import React from 'react'
import Card from '../molecules/card/Card.tsx';
import Slide from '../atoms/slider/Slide.tsx';
import { titleVariants } from '../atoms/text/Title.css.ts'
import * as  card from '../molecules/card/Card.css.ts'
import { settings1 } from '../../constants/settings.ts';
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
  id:string;
  title: string;
  imgUrl: string;
  text : string;
}

const cardList:CardItem[]= [
  {
    id : 'carditem1',
    title : "제주",
    imgUrl : ImgJeju,
    text : '둘러보기',
  },{
    id : 'carditem2',
    title : "파리",
    imgUrl : ImgParis,
    text : '둘러보기',
  },{
    id : 'carditem3',
    title : "속초",
    imgUrl : ImgSokcho,
    text : '둘러보기',
  }, {
    id : 'carditem4',
    title : "방콕",
    imgUrl : ImgBangkok,
    text : '둘러보기',
  },{
    id : 'carditem5',
    title : "런던",
    imgUrl : ImgLondon,
    text : '둘러보기',
  },{
    id : 'carditem6',
    title : "로마",
    imgUrl : ImgRoma,
    text : '둘러보기',
  },{
    id : 'carditem7',
    title : "바르셀로나",
    imgUrl : ImgBarcelona,
    text : '둘러보기',
  },{
    id : 'carditem8',
    title : "다낭",
    imgUrl : ImgDanang,
    text : '둘러보기',
  },
];


const CardList = () => {
  return (
    <>
      <Slide items={cardList} settings={settings1} renderItem={(item,idx) => (
        <Card key={item.id} id={item.id}
          top={
            <strong className={titleVariants.cardImgTitle}>{item.title}</strong>
          } 
          imgData={
            <div className={card.cardIntro} style={{background:`url(${item.imgUrl}) no-repeat left top / cover` }}></div>
          }
          text = {item.text}
          />
      )}/>
    </>
  )
}

export default CardList