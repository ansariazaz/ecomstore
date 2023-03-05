import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom';
import { CartContext } from '../../App';
import { products } from '../../data/productData';
import style from './productdetails.module.css'
const ProductDetail = () => {
    const {cartItem,setCartItem} = useContext(CartContext);
    let { id } = useParams();
    const data = products.filter((f) => {
        return f.id === Number(id);
    });
  const addToCart = ()=>{
    setCartItem(cartItem+1)
  }
    return (
        <div className={style.productDetail}>
            <Link to="/" className={style.back}>back</Link>
            <div className={style.content}>
                <div className={style.left}>
                    <div className={style.imgCont}>
                        <img src={data[0]?.img} key={data[0].id} alt="product" className={style.img} />
                    </div>
                </div>
                <div className={style.right}>
                    <div className={style.name}>
                        <h2>{data[0].title}</h2>
                        <p>Product Code # {data[0].code}</p>
                    </div>
                    <div className={style.price}>
                        <h1>Price: ₹ {data[0].price}</h1>
                        <div className={style.addCont}>
                            <div className={style.addbtns}>
                                <button className={style.change}>-</button>
                                <span>1</span>
                                <button className={style.change}>+</button>
                            </div>
                            <button className={style.btn} onClick={addToCart}>Add to Cart</button>
                        </div>
                    </div>
                    <div className={style.sizeChart}>
                        {data && data[0].size.map((size,i) => (
                            <div className={style.size} key={i}>
                                <span >{size}</span>
                            </div>
                        ))}
                    </div>
                    <div className={style.description}>
                        Description : Easy 15 days return and exchange. Return Policies may vary based on products and promotions.<p></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail