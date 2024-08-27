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
};

export const typographVariants = styleVariants(variants);
