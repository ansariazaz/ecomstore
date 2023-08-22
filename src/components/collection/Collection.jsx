import React from 'react'
import style from './collection.module.css'
const Collection = ({ item }) => {
    return (
        <div className={style.collection} >
            <div className={style.container}>
                <img src={item.img} alt="product" className={style.image} />
            </div>
            <div className={style.titleContainer}>
                <h2 className={style.title}>{item.title}</h2>
            </div>
        </div>
    )
}

export default Collection