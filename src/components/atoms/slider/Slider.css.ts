import { style } from "@vanilla-extract/css";
import slidePrevArrow  from '../../../assets/images/common/bg_slick_arrow_prev.svg'
import slideNextArrow  from '../../../assets/images/common/bg_slick_arrow_next.svg'
export const sliderWrap= style({
    position:'relative',
    margin:'0 0 64px',
});
export const sliderArrowPrev= style({
    zIndex:'10',
    position:'absolute',
    top:'50%',
    left:'-10px',
    transform:'translateY(-50%)',
    transition: '.2s',
    width: '40px',
    height: '40px',
    border:'0',
    borderRadius:'50%',
    boxShadow:'0 0 0 1px rgba(0, 0, 0, .05), 0 2px 6px 0 rgba(0, 0, 0, .05), 0 4px 12px 0 rgba(0, 0, 0, .05)',
    textAlign:'center',
    backgroundColor:'#fff',
    selectors : {
        '&::after' : {
            content: "''",
            position: 'absolute',
            width: '24px',
            height: '24px',
            top: '50%',
            left: '0',
            right: '0',
            transform:'translateY(-50%)',
            margin:'0 auto',
            background:`url('${slidePrevArrow}') no-repeat center / 100% auto`,
        },
        '&:hover': {
            boxShadow:'0 0 0 1px rgba(0, 0, 0, .15), 0 2px 6px 0 rgba(0, 0, 0, .05), 0 8px 12px 0 rgba(0, 0, 0, .2)',
        }
    }
});
export const sliderArrowNext= style({
    zIndex:'10',
    position:'absolute',
    top:'calc(50%)',
    right:'-10px',
    transform:'translateY(-50%)',
    transition: '.2s',
    width: '40px',
    height: '40px',
    border:'0',
    borderRadius:'50%',
    boxShadow:'0 0 0 1px rgba(0, 0, 0, .05), 0 2px 6px 0 rgba(0, 0, 0, .05), 0 4px 12px 0 rgba(0, 0, 0, .05)',
    textAlign:'center',
    backgroundColor:'#fff',
    selectors : {
        '&::after' : {
            content: "''",
            position: 'absolute',
            width: '24px',
            height: '24px',
            top: '50%',
            left: '0',
            right: '0',
            transform:'translateY(-50%)',
            margin:'0 auto',
            background:`url('${slideNextArrow}') no-repeat center / 100% auto`,
        },
        '&:hover': {
            boxShadow:'0 0 0 1px rgba(0, 0, 0, .15), 0 2px 6px 0 rgba(0, 0, 0, .05), 0 8px 12px 0 rgba(0, 0, 0, .2)',
        }
    }
});
export const bannerSlider = style({
    margin:'0 0 44px'
})