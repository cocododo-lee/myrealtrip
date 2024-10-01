import React from 'react'
import Slider from 'react-slick';
import clsx from 'clsx';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface SlickProps<T> {
  items:T[];
  settings:object;
  renderItem:(item:T, index:number) => React.ReactNode;
}

const Slide = ({...props}:SlickProps) => {  
  return (
    <div className={clsx(props.className, 'slider-contianer')}>
      <Slider {...props.settings}>
        {props.items.map((item, index) => (
          <div key={index}>
            {props.renderItem(item,index)}
          </div>
         ))
        }
      </Slider>
    </div>
  )
}

export default Slide