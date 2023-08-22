import React from 'react'
import Category from '../components/category/Category'
import CollectionList from '../components/collectionList/CollectionList'
import Featured from '../components/featured/Featured'
import Hero from '../components/hero/Hero'
import ProductList from '../components/products/ProductList'
import Section from '../components/section/Section'
import Discount from '../components/discount/Discount'
import Contact from '../components/contact/Contact'
const Home = () => {
  return (
    <div>
        <Hero/>
        <Category/>
        <Section/>
        <ProductList/>
        <Featured isbanner={true} topic="Featured Products"/>
        <Featured topic="Best Selling Products" />
        <CollectionList/>
        <Discount/>
        <Contact/>
    </div>
  )
}

export default Home