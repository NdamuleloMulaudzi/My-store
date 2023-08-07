import React from 'react'
import {Link} from 'react-router-dom'
import { ShoppingBag, ShoppingCart } from 'phosphor-react'
import './NavBar.css'


function NavBar() {
    return (
        <div className="navbar">
            <div className="navbar-menu">
                <Link to="/"><ShoppingBag /></Link>
                <Link to='/cart'>
                    <ShoppingCart />
                </Link>
            </div>
        </div>
    )
}

export default NavBar