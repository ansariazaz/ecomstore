import React from 'react'
import { products } from '../../data/productData'
import Product from '../product/product'
import style from './products.module.css'
const ProductList = () => {
  return (
    <div className={style.products}>
      <div className={style.productList}>
        {products.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </div>

    </div>
  )
}

export default ProductList