import React, { useContext } from 'react'
import { useNavigate} from 'react-router-dom'
import { PRODUCTS } from '../../Products'
import { ShopContext } from '../../context/ShopContext'
import { CartItem } from './CartItem'
import './Cart.css'




export  function Cart() {
    const {cartItems, getTotalAmount} = useContext(ShopContext)
    const totalAmount = getTotalAmount()
    const navigate = useNavigate()
    return (
        <div className="cart">
            <div>
                <h1>Your Cart Items</h1>
            </div>
            <div className="cartItems">
                {PRODUCTS.map((product) => {
                    if(cartItems[product.id] !==0){
                        return <CartItem data={product} />
                    }
                })}
            </div>
            {totalAmount >0 ?
                <div className="checkout">
                    
                    <p>Subtotal : R {totalAmount}</p>
                    <button onClick={(() => navigate("/") )}>Continue Shopping</button>
                    <button>Check Out</button>
                </div>
            : <h1>Your Cart is empty</h1> }
        </div>
    )
}
