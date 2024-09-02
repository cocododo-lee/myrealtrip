import { styleVariants } from "@vanilla-extract/css";

const variants = {
    titleH2 :{
        fontSize: "24px",
        fontWeight: "700",    
        color: "#343a40",
    },
    cardTitle : {
        fontSize:"28px",
        fontWeight:"700",
        letterSpacing:"-.4px",
        lineHeight:"1.29",
        textAlign:"left",
        textShadow:"0 1px 8px rgba(33, 37, 41, .6)",
    },
};
export const titleVariants = styleVariants(variants);
