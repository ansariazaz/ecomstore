import React from 'react'
import style from './category.module.css'
import mens from '../../asset/mens.png'
import women from '../../asset/women.png'
import winter from '../../asset/winter.png'
import hoodie from '../../asset/hoodie.png'
import polo from '../../asset/polo.png'
import bg1 from '../../asset/bg1.png'
import bg2 from '../../asset/bg2.png'
import bg3 from '../../asset/bg3.png'
import bg4 from '../../asset/bg4.png'
import bg5 from '../../asset/bg5.png'
import bg6 from '../../asset/bg6.png'
import fullsleeve from '../../asset/fullsleeve.png'
const Category = () => {

    let categories = [
        {
            id: 1,
            image: mens,
            category: "Men's T-Shirts",
            bg:bg1
        },
        {
            id: 2,
            image: women,
            category: "Women’s Wear",
            bg:bg2
        },
        {
            id: 3,
            image: winter,
            category: "Winter Collections",
            bg:bg3
        },
        {
            id: 4,
            image: hoodie,
            category: "Hooded T-Shirts",
            bg:bg4
        },
        {
            id: 5,
            image: polo,
            category: "Polo Neck T-Shirts",
            bg:bg5
        },
        {
            id: 6,
            image: fullsleeve,
            category: "Full Sleeves T-Shirts",
            bg:bg6
        },
    ]
    return (
        <div className={style.category}>
            <div className={style.cardContainer}>
                {categories.map((item) => (
                    <div key={item.id} className={style.card}>
                        <div className={style.imageContainer} style={{background:`url(${item.bg})`}}>
                            <img src={item.image} alt={item.category} className={style.image} />
                        </div>
                        <div className={style.title}>
                            <p>{item.category}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Category