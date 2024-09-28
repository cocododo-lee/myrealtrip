import React, {ReactElement, ReactNode } from 'react'
import Button from '../../atoms/button/Button.tsx'
import * as card from './Card.css.ts'
import * as button from '../../atoms/button/Button.css.ts';
import clsx from 'clsx';

interface CardProps {
  top?:ReactNode;
  hasIcon?: true; 
  imgData?: React.ReactNode;
  text?: string;
}

const Card = ({top, imgData, text}:CardProps):ReactElement => {
  return (
    <div className={card.cardItem}>
        {top}
        {imgData}
        <Button variant='buttonLink' className={clsx(button.moreButton, card.cardMoreButton) }>
          {text}
        </Button>
    </div>
  )
}

export default Card