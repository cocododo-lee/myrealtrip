import React from 'react'
import * as prices from './Price.css.ts'
import clsx from 'clsx'

interface PriceProps {
  className?:string;
  discount?:number;
  total?:number;
  unit?:string;
}

const Price = ({...props}:PriceProps) => {
  return (
    <div className={prices.priceWrap}>
        { props.discount && <span className={clsx(prices.priceFix, prices.discount)}>{props.discount}<em className={prices.priceUnit}>원</em></span>}
        { props.total && <span className={prices.total}>{props.total}</span>}
        <span className={prices.productUnit}>{props.unit}</span>
    </div>
  )
}

export default Price