import React from 'react'
import section1 from '../../asset/section1.png'
import section2 from '../../asset/section2.png'
import section3 from '../../asset/section3.png'
import section4 from '../../asset/section4.png'
import section5 from '../../asset/section5.png'
import style from './section.module.css'
const Section = () => {
    return (
            <div className={style.section}>
                <div className={style.topSection}>
                    <img src={section1} alt='section1' className={style.section1}/>
                    <img src={section2} alt='section2' className={style.section2}/>
                </div>
                <div className={style.bottomSection}>
                    <img src={section3} alt='section3' className={style.section3}/>
                    <img src={section4} alt='section4' className={style.section4}/>
                    <img src={section5} alt='section5' className={style.section5}/>
                </div>
            </div>
    )
}

export default Section