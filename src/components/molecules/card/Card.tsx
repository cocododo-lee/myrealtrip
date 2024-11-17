import React, {ReactElement, ReactNode } from 'react'
import Button from '../../atoms/button/Index.tsx'
import * as stylesCard from './Card.css.ts'
import * as stylesButton from '../../atoms/button/Index.css.ts';
import clsx from 'clsx';

interface CardProps {
  top?:ReactNode;
  hasIcon?: true; 
  node?: React.ReactNode;
  text?: string;
}

const Card = ({...props}:CardProps):ReactElement => {
  return (
    <div className={stylesCard.cardItem}>
        {props.top}
        {props.node}
        <Button variant='buttonLink' className={clsx(stylesButton.moreButton, stylesCard.cardMoreButton) }>
          {props.text}
        </Button>
    </div>
  )
}

export default Card