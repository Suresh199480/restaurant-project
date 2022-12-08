import React from 'react'
import { Link } from 'react-router-dom'
import "./emptycart.css"

const EmptyCart = () => {
    return ( <
        div className = 'empty-container' >
        <
        div className = 'empty-img' >
        <
        img src = 'images/empty.jpg'
        alt = '' / >
        <
        /div> <
        div className = 'empty-text' >
        <
        h2 > Empty Cart! < /h2> <
        p > No Item found in cart.Items added to cart will appear here < /p> <
        Link to = '/' > < button className = 'empty-btn' > Back to shopping < /button></Link >
        <
        /div> <
        /div>
    )
}

export default EmptyCart