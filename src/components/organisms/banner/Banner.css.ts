import { globalStyle, style } from "@vanilla-extract/css";

export const bnrlink = style({
    display:'block',
    selectors:{
    }  
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
