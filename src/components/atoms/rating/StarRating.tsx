import React from 'react'
import { Rating } from 'react-simple-star-rating'
import * as starRating from './StarRating.css.ts'
import ProductStar from '../../../assets/svg/icon_rating_star.svg?react'
import ProductStarFill from '../../../assets/svg/icon_rating_star_fill.svg?react'

// const [rating, setRating] = useState(0)

interface RatingProps {
  className?:string;
  count:number;
}
const StarRating = ({className, count}:RatingProps) => {
  return (
    <div className={className}>
        <Rating 
          emptyIcon={<ProductStar size={12} />}
          fillIcon={<ProductStarFill size={12} />}
          initialValue={3}
          readonly
        />
        <span className={starRating.ratingCount}>
          {count}
        </span>
    </div>
  )
}

export default StarRating