import React from 'react'
import discount from '../../asset/discount.png'
import diamond from '../../asset/diamond.png'
import twenty from '../../asset/24x7.png'
import safe from '../../asset/safe.png'
import returned from '../../asset/return.png'
import left from '../../asset/left.png'
import righte from '../../asset/righte.png'
import quality from '../../asset/quality.png'
import style from './discount.module.css'

const Discount = () => {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.left}>
                    <img src={diamond} alt='discount' className={style.discount} />
                    <h2 className={style.head2}>Hurry Up!</h2>
                    <h1 className={style.head1}>85% OFF</h1>
                    <h2 className={style.head2}>Sale</h2>
                    <button className={style.btn}>SHOP NOW</button>
                </div>
                <div className={style.right}>
                    <img src={discount} alt='discount' className={style.discount} />
                    <h2 className={style.head2}>Hurry Up!</h2>
                    <h1 className={style.head1}>75% OFF</h1>
                    <h2 className={style.head2}>Sale</h2>
                    <button className={style.btn}>SHOP NOW</button>
                </div>
            </div>
            <div className={style.section}>
                <div className={style.ellipse1}>
                    <img src={left} alt='logo' className={style.ellipse}/>
                </div>
                <div className={style.box}>
                    <img src={returned} alt='logo' className={style.logo}/>
                </div>
                <div className={style.box}>
                    <img src={quality} alt='logo' className={style.logo}/>
                </div>
                <div className={style.box}>
                    <img src={safe} alt='logo' className={style.logo}/>
                </div>
                <div className={style.box}>
                    <img src={twenty} alt='logo' className={style.logo}/>
                </div>
                <div className={style.ellipse2}>
                    <img src={righte} alt='logo' className={style.ellipse}/>
                </div>
            </div>
        </div>
    )
}

export default Discount