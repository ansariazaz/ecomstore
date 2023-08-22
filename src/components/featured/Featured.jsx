import React from 'react'
import Product from '../product/product'
import { products } from '../../data/productData'
import style from './featured.module.css'
import banner from '../../asset/banner.png'
const Featured = ({isbanner,topic}) => {
    let newproducts = products.slice(0, 4)
    return (
        <div className={style.products}>
            <div className={style.head}>
                <h1>{topic}</h1>
            </div>
            <div className={style.productList}>
                {newproducts.map((item) => (
                    <Product item={item} key={item.id} />
                ))}
            </div>
            <div className={style.viewContainer}>
                <span className={style.view}>VIEW ALL</span>
            </div>
            {isbanner && (
                <div className={style.bannerCont}>
                    <img src={banner} alt='banner' className={style.banner} />
                </div>
            )}
        </div>
    )
}

export default Featured