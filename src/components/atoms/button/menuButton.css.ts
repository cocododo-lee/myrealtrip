import { style } from "@vanilla-extract/css";

export const menuButton = style({
    display:"inline-flex",
    alignContent:'center',
    justifyContent:'center',
    padding:'3px',
    fontSize:'12px',
    fontWeight:'700',
    color:'#f78000',
    background:'#fff2c6',
})

export const iconGnb = style({
    display:'inline-flex',
    alignItems:'center',
    justifyContent:'center',
    flexWrap:'wrap',
    position:'relative',
    height:'50px',
    textDecoration:'none',
    selectors : {
        '&::before' : {
            content: "''",
            opacity: '0',
            visibility: 'hidden',
            position: 'absolute',
            width: '100%',
            height: '3px',
            bottom: '0px',
            left: '0px',
            backgroundColor:'rgb(121, 190, 245)',
            transition: 'opacity 0.3s ease 0s'
        },
        '&:hover:before': {
            opacity: '1',
            color:'red',
            visibility: 'visible',
        },
    }
});
export const iconGnbIcon = style({
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    marginRight: '8px',
    width:'20px',
    height:'20px'
})
export const iconGnbIconImg = style({
    width:'100%',
    height:'100%'
});