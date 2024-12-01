import Banner from '@components/Banner/Banner';
import CardHDBank from '@components/CardHDBank/CardHDBank';
import Header from '@components/Header/Header'
import ProductHDBank from '@components/ProductHDBank/ProductHDBank';
import React from 'react';

const HomePage = () => {
  return (
    <div>
        <Header/>
        <Banner/>
        <ProductHDBank/>
        <CardHDBank/>
    </div>
  )
}

export default HomePage;