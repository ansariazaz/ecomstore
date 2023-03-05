import React, { useContext } from 'react'
import style from './navbar.module.css'
import menu from '../../asset/menu.svg'
import like from '../../asset/like.svg'
import cart from '../../asset/cart.svg'
import search from '../../asset/search.svg'
import profile from '../../asset/profile.svg'
import { Link } from 'react-router-dom'
import { CartContext } from '../../App'
const Navbar = () => {
    const { cartItem } = useContext(CartContext);
    return (
        <div className={style.navbar}>
            <div>
                <div className={style.navLeft}>
                    <Link to="/">
                        <img src={menu} alt='menu-img' className={style.menu} />
                    </Link>
                    <div className={style.link}>
                        <Link to="/products">Products</Link>
                        <Link to="/about">About</Link>
                    </div>
                </div>

            </div>
            <div>
                <p>Logo Here</p>
            </div>
            <div className={style.navRight}>
                <ul>
                    <li><img src={search} alt='search' /></li>
                    <li><img src={like} alt='like' /></li>
                    <li className={style.cart}><img src={cart} alt='cart' /><span className={style.item}>{cartItem}</span></li>
                    <li><img src={profile} alt='profile' /></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar