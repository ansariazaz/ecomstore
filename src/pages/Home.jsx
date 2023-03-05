import React from 'react'
import Category from '../components/category/Category'
import Hero from '../components/hero/Hero'
import ProductList from '../components/products/ProductList'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Category/>
        <ProductList/>
    </div>
  )
}

export default Home