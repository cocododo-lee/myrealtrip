import { globalStyle, style } from "@vanilla-extract/css"; 

export const productItem = style({
    padding: '0 10px',
});
export const productInner = style({
    display:'block',
    overflow:'hidden',
    position: 'relative',
    padding:'56.25% 0 0',
    borderRadius:'4px',
    backgroundColor:'#fff',
    boxShadow:'inset 0 0 0 1px rgba(0, 0, 0, .16)',
});
export const productThumnail = style({
   selectors : {
        [`${productInner} &`]: {
            position:'absolute',
            top:0,
            left:0,
            width:'100%',
            padding:'56.25% 0 0',
        },
    }
});
globalStyle(`${productThumnail}  img`, {
    position:'absolute',
    top:0,
    left:0,
    right:0,
    margin:'0 auto',
    width:'100%',
    height:'100%',
})

export const body = style({
    position: 'relative',
    padding: '10px 16px 16px',
    height: '145px',
    boxSizing:'border-box'
});
export const category = style({
    overflow: 'hidden',
    display:'block',
    maxWidth: '100%',
    fontSize: '12px',
    fontStyle:'normal',
    color: '#848c94',
    lineHeight:'1',
});
export const categoryTxt = style({
    marginRight:'5px',
    fontStyle:'normal',
});
export const categoryCity = style({
    marginLeft:'5px',
    fontStyle:'normal',
});
export const title = style({
    display:'-webkit-box',
    overflow:'hidden',
    textOverflow:'ellipsis',
    WebkitLineClamp: '2',   
    WebkitBoxOrient: 'vertical',
    margin: '3px 0 0',
    fontSize:'15px',
    fontWeight:'600',
    color: '#343a40',
    lineHeight:'1.47',
    letterSpacing:'-0.05em'
});
export const infoData = style({
    position:'absolute',
    bottom:'16px',
    left:'16px',
});
export const starRating = style({
    marginBottom:'8px'
});