import React, { ReactElement, ReactNode } from 'react'
import Button from '../atoms/button/Button'
import * as card from './Card.css.ts'
import {titleVariants} from '../atoms/text/title.css.ts'
import * as button from '../atoms/button/button.css.ts';
// import clsx from 'clsx';
type Variant = keyof typeof titleVariants;


interface TitleProps {
  hasIcon?: true;
  variant?: Variant;
  children?: ReactNode;
  className?: string;
}
interface cardTitleProps extends TitleProps {
  cardTitleText?: string;
  cardBgImg?: string;
}

const Card = ({cardTitleText, cardBgImg}:cardTitleProps):ReactElement => {
  // const variantClass = variant ? titleVariants[variant] : undefined;
  return (
    <div className={card.cardItem} style={{background:`url(${cardBgImg}) no-repeat left top / cover` }}>
        <strong className={titleVariants.cardTitle}>{cardTitleText}</strong>
        <Button variant='buttonLink' children='둘러보기' className={button.btnWhiteRound}/>
    </div>
  )
}

export default Card