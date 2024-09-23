import { style } from "@vanilla-extract/css";
export const cardItem = style({
    zIndex:'0',
    position:'relative',
    overflow:'hidden',
    margin:'0 0 20px',
    padding:'32px 24px',
    width:'270px',
    height:'333px',
    borderRadius:'8px',
    boxSizing:'border-box',
    selectors : {
        '&::after' : {
            zIndex:'-1',
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: '0px',
            left: '0px',
            boxShadow:'0 8px 12px 0 rgba(33, 37, 41, .15)',
        },
    },
});
export const cardIntro = style({
    zIndex:'-1',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0px',
    left: '0px',
    transition:'transform 3s ease-out',
    selectors : { 
        [`${cardItem}:hover &`]: {
            transform:'scale(1.1)',
        },
        '&::before' : {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: '0px',
            left: '0px',
            background:'linear-gradient(142deg, rgba(0, 0, 0, .7), hsla(0, 0%, 100%, 0) 65%)',
        },
    },
})

export const cardMoreButton = style({
    position:'absolute',
    bottom:'32px',
    left:'24px',
    boxShadow:'0 0 0 1px rgba(33,37,41,.08)',
})
