import React, { ReactElement, ReactNode } from 'react'
import Slider from 'react-slick';

import './slick-theme.min.css'
import './slick.min.css'

interface IslideProps {
  children:ReactElement;
  settings:object;
}
const Slide:React.FC<IslideProps> = ({settings, children}) => {  
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {
          React.Children.map(children, (child) => (
            <div key={child.key}>
              {child}
            </div>
          ))
        }
      </Slider>
    </div>
  )
}

export default Slide