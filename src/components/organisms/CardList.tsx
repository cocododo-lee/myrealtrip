import React from 'react'
import Card from '../molecules/card/Card.tsx';
import Slide from '../atoms/slider/Slide.tsx';
import { titleVariants } from '../atoms/text/Title.css.ts'
import { settings1 } from '../../constants/settings.ts';
//img
import ImgJeju from '../../assets/images/country/img_card_jeju.webp';
import ImgParis from '../../assets/images/country/img_card_paris.webp';


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
  },
  {
    id : 'carditem2',
    title : "파리",
    imgUrl : ImgParis,
    text : '둘러보기',
  },
];


const CardList = () => {
  return (
    <>
      <Slide items={cardList} settings={settings1} renderItem={(item,idx) => (
        <Card key={item.id} id={item.id}
          top={
            <strong className={titleVariants.title}>{item.title}</strong>
          } 
          imgUrl={item.imgUrl}
          text = {item.text}
          />
      )}/>
    </>
  )
}

export default CardList