import React from 'react'
import CardList from '../components/organisms/CardList' 
import BannerList from '../components/organisms/banner/BannerList'
import ProductList from '../components/organisms/ProductList'

const Main = () => {
  return (
    <>
      <section>
        <CardList/>
      </section>
      <section>
        <BannerList/>
      </section>
      <section>
        <ProductList title={'전국 핫플 최저가 🎠'}/>
      </section>
    </>
  )
}

export default Main