import React from 'react'
import { Link } from 'react-router-dom'
import Badge from '../../atoms/badge/Badge'
import StarRating from '../../atoms/rating/StarRating.tsx'
import Thumnail from '../../atoms/thumbnail/Thumbnail.tsx'
import Price from '../../atoms/price/Price.tsx'
import clsx from 'clsx'
import * as stylesProduct from './Product.css.ts'
import * as stylesBadge from '../../atoms/badge/Badge.css.ts'
import * as stylesBookmarks from '../../atoms/button/bookmark/Bookmark.css.ts'
// import { bookmarkVariants } from '../../atoms/button/Bookmark.css.ts'
import Bookmark from '../../atoms/button/bookmark/Bookmark.tsx'
import { ProductProps } from '../../../types/product.ts'

type Variant = keyof typeof stylesBadge;
// type BookmarksVariant = keyof typeof bookmarkVariant;



const Product = ({...props}:ProductProps) => {
  // const variantbookmark = BookmarksVariant ? bookmarkVariant[variant] : undefined;
  return (
    <div className={stylesProduct.productItem}>
      <Link to={props.linkTo} className={stylesProduct.productInner}>
          <Thumnail className={stylesProduct.productThumnail} imgUrl={props.imgUrl} imgAlt={props.imgAlt}/>

          <Badge className={clsx(props.badgeStyle)} variant={props.badgeVariant}>{props.badgeText}</Badge>
          {/* true/false에 따른 북마크 값 가져오기  */}
          {/* <Bookmark className={clsx(variantbookmark.productType, variantbookmark )}/> */}
          <Bookmark className={stylesBookmarks.productType}/>
          <div className={stylesProduct.body}>
            <span className={stylesProduct.categoryWrap}>
              <em className={stylesProduct.category}>{props.category}</em>&middot;
              <em className={stylesProduct.city}>{props.city}</em>
            </span>
            <p className={stylesProduct.title}>{props.title}</p>
            <div className={stylesProduct.infoData}>
              <StarRating className={stylesProduct.starRating} count={props.reviewer}/>
              <Price discount={props.discount} total={props.total} unit={props.unit}/>
            </div>
          </div>
      </Link>
    </div>
  )
}

export default Product