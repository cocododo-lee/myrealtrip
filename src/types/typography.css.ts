import { styleVariants } from '@vanilla-extract/css';

const variants = {
  h1: {
    fontSize: '48px',
    fontWeight: '800',
    color: 'blue',
  },
  h2: {
    fontSize: '36px',
    fontWeight: '700',
    color: 'red',
  },
  buttonLink:{
    fontSize:'14px',
    fontWeight:'700',
    color:'#495056',
  },
};

export const typographVariants = styleVariants(variants);
