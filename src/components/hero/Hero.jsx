import React from 'react'
import style from './hero.module.css'
import hero from '../../asset/hero.png'
const Hero = () => {
    return (
        <div className={style.hero}>
            <div className={style.imageContainer}>
                <img src={hero} alt='hero' className={style.image} />
            </div>
        </div>
    )
}

export default Hero