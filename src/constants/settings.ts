import { SlideArrowPrev } from "../components/atoms/slider/SlideArrowPrev";

export const defaultSettings = {
    speed: 500,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
};
  
export const settings1 = {
    ...defaultSettings,
};
export const settings2= {
    ...defaultSettings,
    // nextArrow: <SampleNextArrow />,
    prevArrow: (<SlideArrowPrev />)
};

export const settings3 = {
    ...defaultSettings,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
};
