import React from 'react'
import { Link } from 'react-router-dom'
import Badge from '../../atoms/badge/Badge'
import StarRating from '../../atoms/rating/StarRating.tsx'
import Thumnail from '../../atoms/images/Thumnail.tsx'
import Price from '../../atoms/text/Price.tsx'
import clsx from 'clsx'
import * as product from './Product.css.ts'
import * as badge from '../../atoms/badge/Badge.css.ts'
import * as bookmarks from '../../atoms/button/Bookmark.css.ts'
// import { bookmarkVariants } from '../../atoms/button/Bookmark.css.ts'
import Bookmark from '../../atoms/button/Bookmark.tsx'


type Variant = keyof typeof badge;
// type BookmarksVariant = keyof typeof bookmarkVariant;

interface ProductProps {
  linkTo:string;
  title:string; 
  imgUrl:string;
  imgAlt:string;
  bookmark?: boolean;
  // bookmarkStyle?:string;
  badgeStyle?:string;
  badgeText?:string;
  badgeVariant?:Variant;
  // bookmarkVariants?:VariantBookmarks;
  categoryTxt?:string;
  cityName?:string;
  reviewer:number;
  discount?:number;
  FinalPrice?:number;
  productUnit?:string;
}


const Product = ({...props}:ProductProps) => {
  // const variantbookmark = BookmarksVariant ? bookmarkVariant[variant] : undefined;
  return (
    <div className={product.productItem}>
      <Link to={props.linkTo} className={product.productInner}>
          <Thumnail className={product.productThumnail} imgUrl={props.imgUrl} imgAlt={props.imgAlt}/>

          <Badge className={clsx(props.badgeStyle)} variant={props.badgeVariant}>{props.badgeText}</Badge>
          {/* true/false에 따른 북마크 값 가져오기  */}
          {/* <Bookmark className={clsx(variantbookmark.productType, variantbookmark )}/> */}
          <Bookmark className={bookmarks.productType}/>
          <div className={product.body}>
            <span className={product.category}>
              <em className={product.categoryTxt}>{props.categoryTxt}</em>&middot;
              <em className={product.categoryCity}>{props.cityName}</em>
            </span>
            <p className={product.title}>{props.title}</p>
            <div className={product.infoData}>
              <StarRating className={product.starRating} count={props.reviewer}/>
              <Price discount={props.discount} FinalPrice={props.FinalPrice} productUnit={props.productUnit}/>
            </div>
          </div>
      </Link>
    </div>
  )
}

export default Product