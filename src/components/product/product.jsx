import React, {useContext } from 'react'
import style from './product.module.css'
import addcart from '../../asset/addcart.svg'
import heart from '../../asset/heart.svg'
import share from '../../asset/share.svg'
import { Link } from 'react-router-dom'
import { CartContext } from '../../App'
const Product = ({ item }) => {
    const {cartItem,setCartItem} = useContext(CartContext);
    const addToCart = (e)=>{
        e.preventDefault()
        setCartItem(cartItem+1)
        window.scrollTo(0, 0);
    }
    console.log(cartItem)
    const likeProduct = (e)=>{
        e.preventDefault()
        
    }
    const shareProduct = (e)=>{
        e.preventDefault()
        
    }
    return (
        <div className={style.product}>
            <Link to={`/productdetail/${item.id}`} className={style.container}>
                <div className={style.circle}></div>
                <img src={item.img} alt="product" className={style.image} />
                <div className={style.info}>
                    <div className={style.iconContainer} onClick={(e)=>addToCart(e)}>
                        <img src={addcart} alt='addcart' />
                    </div>
                    <div className={style.iconContainer} onClick={likeProduct}>
                        <img src={heart} alt='heart' />
                    </div>
                    <div className={style.iconContainer}  onClick={shareProduct}>
                        <img src={share} alt='share' />
                    </div>
                </div>
            </Link>
            <div className={style.detail}>
                <p>{item.title}</p>
                <div className={style.price}>
                    <span className={style.amount}>₹ {item.price}</span>
                    <span className={style.discount}>₹1200</span>
                </div>
                <div className={style.sizeChart}>
                    {item.size && item.size.map((size,i) => (
                        <div className={style.size} key={i}>
                            <span >{size}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Product