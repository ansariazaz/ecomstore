import React from 'react'
import style from './footer.module.css'
import facebook from '../../asset/facebook.svg'
import twitter from '../../asset/twitter.svg'
import insta from '../../asset/insta.svg'
import linkedin from '../../asset/linkedin.svg'
import pintrest from '../../asset/pintrest.svg'
import location from '../../asset/location.svg'
import call from '../../asset/call.svg'
import mails from '../../asset/mails.svg'
const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.left}>
                <div className={style.content}>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries....</p>
                    <div className={style.icons}>
                        <div className={style.fbCont}>
                            <img src={facebook} alt='icon' />
                        </div>
                        <div className={style.twitterCont}>
                            <img src={twitter} alt='icon' />
                        </div>
                        <div className={style.instaCont}>
                            <img src={insta} alt='icon' />
                        </div>
                        <div className={style.linkedinCont}>
                            <img src={linkedin} alt='icon' />
                        </div>
                        <div className={style.pintrestCont}>
                            <img src={pintrest} alt='icon' />
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.right}>
                <div className={style.leftItem}>
                    <h2 className={style.head}>ONLINE SHOPPING</h2>
                    <ul>
                        <li>Men’s T-Shirts</li>
                        <li>Women’s Wear</li>
                        <li>Winter Collections</li>
                        <li>Hooded T-Shirts</li>
                        <li>Streetwear Collections</li>
                    </ul>
                </div>
                <div className={style.midItem}>
                    <h2 className={style.head}>CUSTOMER POLICIES</h2>
                    <ul>
                        <li>About Us</li>
                        <li>Terms & Conditions</li>
                        <li>Shipping & Returns Policy</li>
                        <li>Cancellation & Refund Policy</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className={style.rightItem}>
                    <h2 className={style.head}>STORE INFORMATION</h2>
                    <ul>
                        <li>
                            <img src={location} alt='location' />
                            <span>Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry.
                            </span>
                        </li>
                        <li>
                            <img src={call} alt='call' />
                            <span>Call Us: 1234567890</span>
                        </li>
                        <li>
                            <img src={mails} alt='email' />
                            <span>Email Us: info@yourmail.com</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer