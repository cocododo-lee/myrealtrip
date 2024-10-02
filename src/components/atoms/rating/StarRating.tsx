import React from 'react'
import { Rating } from 'react-simple-star-rating'
import * as styles from './StarRating.css.ts'
import ProductStar from '../../../assets/svg/icon_rating_star.svg?react'
import ProductStarFill from '../../../assets/svg/icon_rating_star_fill.svg?react'

interface RatingProps {
  className?:string;
  count:number;
}

const StarRating = ({...props}:RatingProps) => {
  return (
    <div className={props.className}>
        <Rating 
          emptyIcon={<ProductStar size={12} />}
          fillIcon={<ProductStarFill size={12} />}
          initialValue={3}
          readonly
        />
        <span className={styles.ratingCount}>
          {props.count}
        </span>
    </div>
  )
}

export default StarRating