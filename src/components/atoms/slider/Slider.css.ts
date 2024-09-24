import { style } from "@vanilla-extract/css";
export const sliderWrap= style({
    position:'relative'
});
export const sliderArrowPrev= style({
    zIndex:'10',
    position:'absolute',
    top:'50%',
    transform:'translateY(-50%)',
    transition: '.2s',
    width: '40px',
    height: '40px',
    border:'0',
    borderRadius:'50%',
    boxShadow:'0 0 0 1px rgba(0, 0, 0, .05), 0 2px 6px 0 rgba(0, 0, 0, .05), 0 4px 12px 0 rgba(0, 0, 0, .05)',
    textAlign:'center',
    backgroundColor:'#fff',
});