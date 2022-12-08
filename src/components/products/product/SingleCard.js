import React from 'react'
import { Link } from 'react-router-dom'
import "./singlecard.css"
import { connect } from 'react-redux'
import { addToCart, currentItem } from '../../redux/shopping/ShopActions'

const SingleCard = ({ productData, addToCart, currentItem }) => {
    return ( <
        >
        <
        div className = 'cardcontainer' >
        <
        div className = 'singlecard' >
        <
        div className = 'imgcontainer' >
        <
        img src = { productData.img }
        alt = { productData.title }
        /> <
        /div> <
        div className = 'carddetails' >
        <
        div className = 'viewitem' >
        <
        div className = 'title' > < h4 > { productData.title } < /h4></div >
        <
        Link to = { `/product/${productData.id}` } > < button className = 'viewbtn'
        onClick = {
            () => currentItem(productData) } > View Item < /button></Link >
        <
        /div> <
        div className = 'additem' >
        <
        div className = 'price' > < p > ₹{ productData.price } < /p></div >
        <
        button className = 'addbtn'
        onClick = {
            () => addToCart(productData.id) } > +ADD < /button> <
        /div> <
        /div> <
        /div> <
        /div> <
        />
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
        currentItem: (item) => dispatch(currentItem(item))

    }
}

export default connect(null, mapDispatchToProps)(SingleCard);