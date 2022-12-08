import React, { useEffect, useState } from 'react'
import "./navbar.css"

import { Link } from "react-router-dom"
import { connect } from 'react-redux'
const Navbar = ({ cart }) => {
    const [cartCount, setCartCount] = useState(0)
    useEffect(() => {
        let count = 0
        cart.forEach((item) => {
            count += item.qty
        })
        setCartCount(count)
    }, [cart, cartCount]);
    return ( <
        >
        <
        div className = 'navbar-container' >
        <
        div className = 'item' >
        <
        Link to = "/"
        className = 'callbutton' > < img src = 'images/telephone.png'
        width = "32"
        height = "32"
        alt = '' / > < /Link>  <
        div className = 'texts' >
        <
        div className = 'text' > Order Now < /div>  <
        div className = 'text' > +91 9553820979 < /div>  <
        /div>  <
        /div>

        <
        div className = 'item' >
        <
        Link to = "/" > < h3 > Foods. < /h3></Link >
        <
        /div>

        <
        div className = 'item' >

        <
        Link to = '/cart'
        className = 'cart' > < img src = 'images/cart.png'
        width = "50"
        height = "50"
        alt = '' / > < /Link>  <
        div className = 'counter' > { cartCount } < /div>

        <
        /div>  <
        /div>



        <
        />


    )
}
const mapStateToProps = state => {
    return {
        cart: state.shop.cart,
    }
}
export default connect(mapStateToProps)(Navbar);