import React from 'react'
import Title from '../atoms/title/Title';
import Slide from '../atoms/slider/Slider.tsx';
import Product from '../molecules/product/Product';
import * as stylesSlick from '../atoms/slider/Slider.css.ts'
import * as  stylesBadge from '../atoms/badge/Badge.css.ts'
import { SlideArrowPrev } from '../atoms/button/slide/prev/PrevButton.tsx';
import { SlideArrowNext } from '../atoms/button/slide/next/NextButton.tsx';
import { PRODUCT_LIST_R } from '../../mocks/products.ts';

type Variant = keyof typeof stylesBadge;

interface TitleProps {
  title?:string;
}

export const SlickOption= {
  speed: 500,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  prevArrow: (<SlideArrowPrev arrowStyle={stylesSlick.sliderArrowPrev} />),
  nextArrow: (<SlideArrowNext arrowStyle={stylesSlick.sliderArrowNext} />),
};

const ProductList = ({...props}:TitleProps) => {
  return (
    <div>
      <Title>
        {props.title}
      </Title>
      <Slide items={PRODUCT_LIST_R} className={stylesSlick.sliderWrap}  settings={SlickOption} renderItem={(item,idx) => (
          <Product {...item} />
        )}
      />
    </div>
  )
}

export default ProductList