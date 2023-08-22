import React from 'react'
import {collectionData} from '../../data/productData'
import style from './collectionList.module.css'
import Collection from '../collection/Collection'
import banner2 from '../../asset/banner2.png'
const CollectionList = () => {
  return (
    <div className={style.products}>
            <div className={style.productList}>
                {collectionData.map((item) => (
                    <Collection item={item} key={item.id} />
                ))}
            </div>
            <div className={style.bannerCont}>
                    <img src={banner2} alt='banner' className={style.banner} />
            </div>
        </div>
  )
}

export default CollectionList