import React from 'react'
import Card from '../molecules/card/Card.tsx';
import {titleVariants} from '../atoms/text/Title.css.ts'
import ImgJeju from '../../assets/images/country/img_card_jeju.webp';
import ImgParis from '../../assets/images/country/img_card_paris.webp';
// type Variant = keyof typeof titleVariants;

interface CardItem {
  id:string;
  title: string;
  imgUrl: string;
  text : string;
}

const CardListData:CardItem[]= [
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
    <div>
      {CardListData.map((el)=>{
        return (
          <Card key={el.id} id={`${el.id}`}
            top={
              <strong className={titleVariants.title}>{el.title}</strong>
            } 
            imgUrl={el.imgUrl}
            text = {el.text}
            />
          )
        })
      }
      </div>
  )
}

export default CardList