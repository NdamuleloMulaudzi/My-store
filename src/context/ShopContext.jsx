import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../Products';

export  const ShopContext = createContext(null)

function getDefaultCart() {
  let cart = {}
  for (let i = 1; i < PRODUCTS.length +1; i++) {
    cart[i] = 0;
    
  }
  return cart;
};

export function ShopContextProvider(props) {
  const [cartItems, setCartItems] = useState(getDefaultCart())

  function addToCart(itemId) {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId]+1}))
  }

  function removeFromCart(itemId) {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId]-1}))
  }

  function updateCartItemCount(newAmount, itemId) {
    setCartItems((prev) => ({...prev, [itemId]:newAmount}))
  }

  function getTotalAmount() {
    let totalAmount = 0;
    for(const item in cartItems){
      if (cartItems[item]> 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price
      }
    }
    return totalAmount
  }

  const contextValue = {
    cartItems, 
    addToCart, 
    removeFromCart, 
    updateCartItemCount,
    getTotalAmount
  }
  
  return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}
