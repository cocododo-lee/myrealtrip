import React, {ReactElement, ReactNode } from 'react'
import Button from '../../atoms/button/Button.tsx'
import * as card from './Card.css.ts'
import * as button from '../../atoms/button/Button.css.ts';

interface TitleProps {
  id?:string;
  cardTop?:ReactNode;
  hasIcon?: true; 
  imgUrl?: string;
  btnText?: string;
}

const Card = ({cardTop, imgUrl, btnText, id}:TitleProps):ReactElement => {
  return (
    <div id={id} className={card.cardItem} style={{background:`url(${imgUrl}) no-repeat left top / cover` }}>
        {cardTop}
        <Button variant='buttonLink' className={button.btnWhiteRound}>
          {btnText}
        </Button>
    </div>
  )
}

export default Card