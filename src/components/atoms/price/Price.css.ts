import { style } from "@vanilla-extract/css";

export const priceWrap = style({
    display:'flex',
    alignItems:'baseline',
})
export const priceFix = style({
    marginRight:'4px',
    color:'#848c94',
    fontSize: '12px',
    lineHeight:'1',
})
export const total = style({
    fontSize: '14px',
    fontWeight: '600',
    color: '#666d75',
    lineHeight:'1',
})
export const priceUnit = style({
    fontSize: '12px',
    fontStyle:'normal',
    color:'#848c94',
    lineHeight:'1',

})
export const discount = style({
    textDecoration: 'line-through',
})

export const productUnit = style({
    marginLeft:'2px',
    fontSize: '12px',
    color: '#848c94',
    selectors:{
        [`&:before`] : {
            content:'/',
            marginRight:'2px',
            fontSize: '12px',
            color: '#848c94',
        }
    }
})


