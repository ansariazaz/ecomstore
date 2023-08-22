import React from 'react'
import { products } from '../../data/productData'
import Product from '../product/product'
import style from './products.module.css'
const ProductList = () => {
  return (
    <div className={style.products}>
      <div className={style.head}>
        <h1>Trending T-Shirts</h1>
      </div>
      <div className={style.productList}>
        {products.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </div>
      <div className={style.viewContainer}>
       <span className={style.view}>VIEW ALL</span>
      </div>
    </div>
  )
}

export default ProductList