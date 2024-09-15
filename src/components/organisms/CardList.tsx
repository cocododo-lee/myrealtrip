import React from 'react'
import Card from '../molecules/card/Card.tsx';
import {titleVariants} from '../atoms/text/Title.css.ts'
import ImgJeju from '../../assets/images/country/img_card_jeju.webp';
import ImgParis from '../../assets/images/country/img_card_paris.webp';
// type Variant = keyof typeof titleVariants;

interface CardItem {
  title: string;
  imgUrl: string;
  btnText : string;
  keyVal?: string;
}

const CardListData:CardItem[]= [
  {
    title : "제주",
    imgUrl : ImgJeju,
    btnText : '둘러보기',
    keyVal : 'carditem1'
  },
  {
    title : "파리",
    imgUrl : ImgParis,
    btnText : '둘러보기',
    keyVal : 'carditem2'
  },
];


const CardList = () => {
  return (
    <div>
      {CardListData.map((el, index)=>{
        return (
          <Card 
            key={el.keyVal} 
            cardTop={
              <strong className={titleVariants.title}>{el.title}</strong>
            } 
            imgUrl={el.imgUrl}
            btnText = {el.btnText}
            />
          )
        })
      }
      </div>
  )
}

export default CardList