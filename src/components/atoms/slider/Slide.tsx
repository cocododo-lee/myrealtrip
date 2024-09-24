import React from 'react'
import Slider from 'react-slick';

import './slick-theme.min.css'
import './slick.min.css'
import clsx from 'clsx';

interface IslideProps<T> {
  items:T[];
  settings:object;
  renderItem:(item:T, index:number) => React.ReactNode;
}

const Slide = ({items, settings, className, renderItem}: IslideProps) => {  
  return (
    <div className={clsx(className, 'slider-contianer')}>
      <Slider {...settings}>
        { items.map((item, index) => (
          <div key={index}>
            {renderItem(item,index)}
          </div>
         ))
        }
      </Slider>
    </div>
  )
}

export default Slide