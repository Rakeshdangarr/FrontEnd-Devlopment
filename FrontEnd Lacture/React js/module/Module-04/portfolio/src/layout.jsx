import React from "react";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Content from "./components/Content";
import Footer from "./components/Footer";






const Layout=()=>{

    return(

        <>
        {/* header here */}
        <Header/>

        {/* Slider here */}
        <Slider/>

        {/* Content here */}
        <Content/>

        {/* Footer here */}
        <Footer/>

        </>
    )
}
export default Layout