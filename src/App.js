import React from 'react'
import Navbar from './components/navbar/Navbar'
import "./app.css"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import MultiCards from './components/products/MultiCards'
import Multicart from './components/cartpage/Multicart'
import Viewitem from './Viewitem'
import { connect } from 'react-redux'
import EmptyCart from './components/cartpage/EmptyCart'
import "./style.css"


const App = ({ currentItem, cart }) => {
    return (

        <
        div className = 'app' >
        <
        Router >
        <
        Navbar / >
        <
        Routes >
        <
        Route exact path = '/'
        element = { < MultiCards / > }
        /> <
        Route exact path = '/cart'
        element = { cart.length === 0 ? < EmptyCart / > : < Multicart / > }
        /> <
        Route exact path = '/product/:ID'
        element = {!currentItem ? < Navigate to = "/" / > : < Viewitem / > }
        /> <
        /Routes> <
        /Router> <
        /div>


    );
};
const mapStateToProps = state => {
    return {
        currentItem: state.shop.currentItem,
        cart: state.shop.cart
    }
}

export default connect(mapStateToProps)(App);