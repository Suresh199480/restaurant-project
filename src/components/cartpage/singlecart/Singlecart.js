import React from 'react'
import "./singlecart.css"
import { connect } from 'react-redux'
import { removeFromCart, Increment, Decrement } from '../../redux/shopping/ShopActions'

const Singlecart = ({ itemData, removeFromCart, Increment, Decrement }) => {
    return ( <
        >
        <
        div className = 'singlecart-container' >
        <
        div className = 'singlecart-card-details' >
        <
        div className = 'singlecart-card' >
        <
        div className = 'singlecart-img' >
        <
        div className = 'scart-products' > < h3 > Products < /h3></div >
        <
        img src = { itemData.img }
        alt = { itemData.title }
        /> <
        /div> <
        div className = 'scart-title-details' >
        <
        div className = 'scart-name' > < h3 > Name < /h3></div >
        <
        div className = 'scart-title' > < h4 > { itemData.title } < /h4></div >

        <
        /div> <
        div className = 'scart-price-details' >
        <
        div className = 'scart-price-name' > < h3 > Price < /h3></div >
        <
        div className = 'scart-price' > < h4 > ₹{ itemData.price } < /h4></div >
        <
        /div>

        <
        div className = 'quantity-section' >
        <
        div className = 'quantity-name' > Quantity < /div> <
        div className = 'btn minus-button'
        onClick = {
            () => Decrement(itemData.qty > 1 ? itemData.id -= 1 : itemData.qty) } > < i class = "fa fa-minus" > < /i></div >
        <
        button className = 'btn quntity-box' > { itemData.qty } < /button> <
        div className = 'btn plus-button'
        onClick = {
            () => Increment(itemData.id += 1) } > < i class = "fa fa-plus" > < /i></div >
        <
        /div> <
        div className = 'remove-section' >
        <
        div className = 'remove-name' > < h3 > Remove < /h3></div >
        <
        div className = 'remove-btn'
        onClick = {
            () => removeFromCart(itemData.id) } > < img src = 'images/delete-1.png'
        alt = ''
        width = "35"
        height = "35" / > < /div> <
        /div> <
        /div> <
        /div> <
        /div> <
        />
    )
}
const mapDispatchToProps = dispatch => {
    return {
        removeFromCart: (id) => dispatch(removeFromCart(id)),
        Increment: (id, value) => dispatch(Increment(id, value)),
        Decrement: (id, value) => dispatch(Decrement(id, value))
    }
}

export default connect(null, mapDispatchToProps)(Singlecart);