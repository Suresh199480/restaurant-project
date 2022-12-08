import React, { useState } from 'react'
import Home from '../home/Home'
import "./multicards.css"
import SingleCard from './product/SingleCard'
import { connect } from 'react-redux'

const MultiCards = ({ products }) => {
    const [search, setSearch] = useState("")
    const [cardData, setCardData] = useState(products)

    return ( <
        >
        <
        Home / >
        <
        div className = 'search' >
        <
        input type = "text"
        placeholder = 'Search items...'
        value = { search }
        onChange = {
            (e) => setSearch(e.target.value) }
        /> <
        span > < i className = 'fas fa-search' > < /i></span >
        <
        /div>

        <
        div className = 'multicards-container' >
        <
        div className = 'multicards' > {
            cardData.filter(product => product.title.toLowerCase().includes(search)).map((product) => ( <
                SingleCard key = { product.id }
                productData = { product }
                />
            ))
        } <
        /div> <
        /div> <
        />
    )
}
const mapToStateToProps = (state) => {
    return {
        products: state.shop.products,
    }
}

export default connect(mapToStateToProps)(MultiCards);