import React from 'react'
import Slider from 'react-slick';

import './slick-theme.min.css'
import './slick.min.css'

interface IslideProps<T> {
  items:T[];
  settings:object;
  renderItem:(item:T, index:number) => React.ReactNode;
}

const Slide = ({items, settings, renderItem}: IslideProps) => {  
  return (
    <div className="slider-container">
      <Slider {...settings}>
        { items.map((item,index) => (
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