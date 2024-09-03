import React from 'react'
import Card from '../molecules/Card.tsx';
import CardImgJeju from '../../assets/images/country/img_card_jeju.jpg';
import CardImgParis from '../../assets/images/country/img_card_paris.jpg';


const CardList = () => {
  return (
    <div>
        <Card cardTitleText={'제주'} cardBgImg={CardImgJeju}/>
        <Card cardTitleText={'파리'} cardBgImg={CardImgParis}/>
    </div>
  )
}

export default CardList