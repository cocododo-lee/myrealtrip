import React from 'react'
import CardList from '../components/organisms/CardList' 
import BannerList from '../components/organisms/banner/BannerList'

const Main = () => {
  return (
    <>
      <section>
        <CardList/>
      </section>
      <section>
        <BannerList/>
      </section>
    </>
  )
}

export default Main