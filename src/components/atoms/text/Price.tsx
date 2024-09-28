import React from 'react'
import * as prices from './Price.css.ts'
import clsx from 'clsx'

interface PriceProps {
  className?:string;
  discount?:number;
  FinalPrice?:number;
  productUnit?:string;
}

const Price = ({...props}:PriceProps) => {
  return (
    <div className={prices.priceWrap}>
        { props.discount && <span className={clsx(prices.priceFix, prices.discount)}>{props.discount}<em className={prices.priceUnit}>원</em></span>}
        { props.FinalPrice && <span className={prices.FinalPrice}>{props.FinalPrice}</span>}
        <span className={prices.productUnit}>{props.productUnit}</span>
    </div>
  )
}

export default Price