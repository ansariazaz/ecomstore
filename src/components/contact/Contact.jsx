import React from 'react'
import style from './contact.module.css'

const Contact = () => {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <p className={style.para}>
                    Subscribe to get updates on exciting offers & deals
                </p>
                <div className={style.contact}>
                    <input type={"text"} placeholder="Enter your email" className={style.email}/>
                    <span className={style.subsribe}>Subscribe</span>
                </div>
            </div>
        </div>
    )
}

export default Contact