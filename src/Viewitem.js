import React from 'react'
import { Link } from 'react-router-dom'
import "./viewitem.css"
import { connect } from 'react-redux'
import { addToCart } from './components/redux/shopping/ShopActions'

const Viewitem = ({ currentItem, addToCart }) => {
    return ( <
        div className = 'viewcontainer' >
        <
        div className = 'view-left' >
        <
        img src = { currentItem.img }
        alt = { currentItem.title }
        /> <
        /div> <
        div className = 'view-right' >
        <
        div className = 'view-title' > { currentItem.title } < /div> <
        div className = 'view-desc' > Food tastes better when you eat it with your family.A recipe has no soul as the cook.You must bring soul to the Recipe.Good Food is the foundation of happiness.Food
        for the body is not enough.ther must be food
        for the Soul. < /div> <
        div className = 'view-price' > ₹{ currentItem.price } < /div> <
        div className = 'view-addbtn' > < button onClick = {
            () => addToCart(currentItem.id) } > Continue To Shopping < /button></div >
        <
        Link to = "/" > < button className = 'view-goto-btn' > Go To Foods < /button></Link >
        <
        /div> <
        /div>
    )
}
const mapStateToProps = state => {
    return {
        currentItem: state.shop.currentItem
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addToCart: (id) => dispatch(addToCart(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Viewitem);