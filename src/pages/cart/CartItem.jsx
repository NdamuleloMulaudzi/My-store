import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'



export function CartItem(props) {
    const {id, productName, price,productImage} = props.data
    const {addToCart, removeFromCart, cartItems, updateCartItemCount} = useContext(ShopContext)

    return (
        <div className='cartItem'>
            <img src={productImage} alt="" />
             <div className="description">
                <p>
                    <b>{productName}</b>
                </p>
                <p><b>R {price}</b></p>
                <div className="countHandler">
                    <button onClick={(()=> removeFromCart(id) )}> - </button>
                    <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
                    <button onClick={(()=> addToCart(id) )}> + </button>
                </div>
            </div>
        </div>
    )
}
