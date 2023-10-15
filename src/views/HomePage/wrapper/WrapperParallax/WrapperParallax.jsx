"use client"

const { ParallaxProvider } = require("react-scroll-parallax")

const WrapperParallax =({children}) => {
    return (
         <ParallaxProvider>{children}</ParallaxProvider> 
    )
}

export default WrapperParallax