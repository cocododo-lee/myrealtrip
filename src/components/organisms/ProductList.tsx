import React, { ReactNode } from 'react'
import ProductCard from '../molecules/ProductCard';

interface ProductListProps {
    top?:ReactNode;
    title?:string;
}


const ProductList = ({title}:ProductListProps) => {
  return (
    <div>
        top = {
            <h3>{title}</h3>
        }
        <ProductCard/>
    </div>
  )
}

export default ProductList