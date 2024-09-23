import { style } from "@vanilla-extract/css";

export const btnWhiteRound = style({
    border:"none",
    boxShadow:"0 0 0 1px rgba(33, 37, 41, .08)",
    background:"#fff",
});

export const moreButton = style({
    cursor:'pointer',
    display:"inline-flex",
    alignItems:'center',
    justifyContent:'center',
    padding:'0px 14px',
    height:'40px',
    fontSize:'14px',
    fontWeight:'700',
    color:'#495056',
    border:'none',
    borderRadius:'4px',
    boxShadow: '0 0 0 1px rgba(33, 37, 41, .08)',
    backgroundColor: '#fff',
})