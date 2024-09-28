import { globalStyle, style } from "@vanilla-extract/css";

export const bnrlink = style({
    display:'block',
    selectors:{
    }  
})
globalStyle(`.blind`, {
    overflow:'hidden',
    position:'absolute',
    top:'-1px',
    left:'-1px',
    clipPath: 'circle(0)',
    margin:'-1px',
    width:'1px',
    height:'1px',
    fontSize:'1px',
    lineHeight:'0',
})

globalStyle(`a`, {
    textDecoration:'none'
})

globalStyle(`${bnrlink} img`, {
    width:'100%'
})

globalStyle('.slick-dots li', {
    margin: '0px 2.5px',
    padding: '0px !important',
    width: '6px',
    height: '6px',
})

globalStyle('.slick-dots li button:before', {
    opacity: '0.4',
    overflow:'hidden',
    width: '6px',
    height: '6px',
    borderRadius:'50%',
    backgroundColor:'#101418',
    textIndent:'-9999em'
})
