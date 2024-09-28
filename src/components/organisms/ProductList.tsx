import React, { ReactNode } from 'react'
import Title from '../atoms/text/Title';
import Slide from '../atoms/slider/Slide';
import Product from '../molecules/product/Product';
import * as slider from '../atoms/slider/Slider.css.ts'
import * as  badge from '../atoms/badge/Badge.css.ts'
import { SlideArrowPrev } from '../atoms/slider/SlideArrowPrev.tsx';
import { SlideArrowNext } from '../atoms/slider/SlideArrowNext.tsx';
// img 
import prodThumnail1 from '../../assets/images/img_product_ex.webp'
import prodThumnail2 from '../../assets/images/img_product_ex2.webp'
import prodThumnail3 from '../../assets/images/img_product_ex3.webp'
import prodThumnail4 from '../../assets/images/img_product_ex4.webp'

type Variant = keyof typeof badge;

interface SectionTitleProps {
  sectiontitle?:string;
}

interface ProductCardProps {
  linkTo:string;
  title:string;
  imgUrl:string;
  imgAlt?:string;
  bookmark:boolean;
  // bookmarkStyle?:string;
  badgeStyle?:string;
  badgeText?:string;
  badgeVariant?:Variant;
  categoryTxt?:string;
  cityName?:string;
  reviewer:number;
  discount?:number;
  FinalPrice:number;
  productUnit:string;
};

const PRODUCT_LIST_R:ProductCardProps[]=[
  {
    linkTo:"https://www.naver.com",
    title:"[10월 27일까지만, 단독 특가★] 롯데월드 어드벤처 종합&파크이용권",
    imgUrl:prodThumnail1,
    bookmark : false,
    // bookmarkStyle:'productType',
    imgAlt:'',
    badgeStyle:'badgeRound',
    badgeText : '즉시확정',
    categoryTxt:'티켓',
    cityName:'서울',
    reviewer : 10,
    discount : 10000,
    FinalPrice : 8000,
    productUnit : '1인',
  },{
    linkTo:"https://www.daum.com",
    title:"[특가★] 롯데월드타워 전망대 서울스카이 입장권 ",
    imgUrl:prodThumnail2,
    bookmark : false,
    // bookmarkStyle:'productType',
    imgAlt:'',
    categoryTxt:'티켓',
    cityName:'서울',
    badgeStyle:'badgeRound',
    badgeText : '즉시확정',
    reviewer : 999,
    discount : 100000,
    FinalPrice : 8000,
    productUnit : '1인',
  },{
    linkTo:"https://www.myrealtrip.com/",
    title:"[특가★] 서울 롯데월드 아쿠아리움 입장권  ",
    imgUrl:prodThumnail3,
    bookmark : false,
    // bookmarkStyle:'productType',
    imgAlt:'',
    categoryTxt:'티켓',
    cityName:'서울',
    badgeStyle:'badgeRound',
    badgeText : '즉시확정',
    reviewer : 999,
    discount : 100000,
    FinalPrice : 8000,
    productUnit : '1인',
  },{
    linkTo:"https://www.everland.com/gateway",
    title:"[용인] 에버랜드 오후이용권 (방문날짜지정) (~10/31)",
    imgUrl:prodThumnail4,
    bookmark : false,
    // bookmarkStyle:'productType',
    imgAlt:'',
    categoryTxt:'티켓',
    cityName:'경기도',
    badgeStyle:'badgeRound',
    badgeText:'즉시확정',
    reviewer : 999,
    discount : 100000,
    FinalPrice : 8000,
    productUnit : '1인',
  }
]

export const slickProductOption= {
  speed: 500,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  prevArrow: (<SlideArrowPrev arrowStyle={slider.sliderArrowPrev} />),
  nextArrow: (<SlideArrowNext arrowStyle={slider.sliderArrowNext} />),
};

const ProductList = ({sectiontitle}:SectionTitleProps) => {
  return (
    <div>
      <Title>
        {sectiontitle}
      </Title>
      <Slide items={PRODUCT_LIST_R} className={slider.sliderWrap} settings={slickProductOption} renderItem={(item,idx) => (
        <Product 
          linkTo={item.linkTo}
          title={item.title}
          imgUrl={item.imgUrl}
          imgAlt={item.imgAlt}
          bookmark={item.bookmark}
          // bookmarkStyle={item.bookmarkStyle}
          badgeText={item.badge}
          categoryTxt={item.categoryTxt}
          cityName={item.cityName}
          reviewer = {item.reviewer}
          discount= {item.discount}
          FinalPrice= {item.FinalPrice}
          productUnit= {item.productUnit}
        />
        )}
      />
    </div>
  )
}

export default ProductList