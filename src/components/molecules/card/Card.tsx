import React, {ReactElement, ReactNode } from 'react'
import Button from '../../atoms/button/Button.tsx'
import * as card from './Card.css.ts'
import * as button from '../../atoms/button/Button.css.ts';

interface TitleProps {
  cardTop?:ReactNode;
  hasIcon?: true; 
  imgUrl?: string;
  btnText?: string;
}

const Card = ({cardTop, imgUrl, btnText}:TitleProps):ReactElement => {
  return (
    <div className={card.cardItem} style={{background:`url(${imgUrl}) no-repeat left top / cover` }}>
        {cardTop}
        <Button variant='buttonLink' className={button.btnWhiteRound}>
          {btnText}
        </Button>
    </div>
  )
}

export default Card