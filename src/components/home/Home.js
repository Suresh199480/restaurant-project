import React from 'react'
import "./home.css"

const Home = () => {
    return ( <
        div className = 'home-section' >
        <
        div className = 'home-left' >
        <
        img src = 'https://pbs.twimg.com/media/FiN_5XvUcAEIPO_?format=jpg&name=900x900'
        alt = '' / >
        <
        /div> <
        div className = 'video-container' >
        <
        iframe width = "560"
        height = "315"
        src = "https://www.youtube.com/embed/sQDYM49l8Qc"
        title = "YouTube video player"
        frameborder = "0"
        allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen > < /iframe> <
        /div> <
        /div>
    )
}

export default Home