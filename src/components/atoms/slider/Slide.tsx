import React, { ReactElement, ReactNode } from 'react'
import Slider from 'react-slick';

import './slick-theme.min.css'
import './slick.min.css'

interface IslideProps {
  contents:ReactElement;
  settings:object;
}
const Slide:React.FC<IslideProps> = ({settings, contents}) => {  
  const slideChildArray: ReactNode[] = React.Children.toArray(contents.props.children);

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {
          slideChildArray.map((items, index) => (
            <div key={index}>
              {items}
            </div>
          ))
        }
      </Slider>
    </div>
  )
}

export default Slide