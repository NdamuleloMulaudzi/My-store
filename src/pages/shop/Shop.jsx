import React from 'react'
import { PRODUCTS } from '../../Products'
import Product from './Product'
import './Shop.css' 
import Name from '../../img/name.png'

export function Shop() {
    return (
        <div className="shop">
            <div className='shopTitle'>
                <img src={Name} alt="" />
            </div>
            <div className="products">
                {PRODUCTS.map((product) => (
                    <Product data={product}/>
                ))}
            </div>
        </div>
    )
}
