import React, {ReactElement, ReactNode } from 'react'
import Button from '../../atoms/button/Button.tsx'
import * as card from './Card.css.ts'
import * as button from '../../atoms/button/Button.css.ts';

interface TitleProps {
  id?:string;
  top?:ReactNode;
  hasIcon?: true; 
  imgUrl?: string;
  text?: string;
}

const Card = ({top, imgUrl, text, id}:TitleProps):ReactElement => {
  return (
    <div id={id} className={card.cardItem} style={{background:`url(${imgUrl}) no-repeat left top / cover` }}>
        {top}
        <Button variant='buttonLink' className={button.btnWhiteRound}>
          {text}
        </Button>
    </div>
  )
}

export default Card