import React from "react";
import Rakesh from '../../src/assets/images/Rakesh.png'  
import { Container } from "react-bootstrap";


const Slider=()=>{

    return(

        <>
        <Container fluid className="portfolio-slider p-5">
        <p className="text-center">
            <img src={Rakesh} alt="Rakesh img" title="Hello Rakesh"  className="img-fluid"/>
            <p className="text-center h1 mt-2 text-white portfolio-name">Rakesh Dangar</p>
            <hr className="border border-white boredr-5 mx-auto w-25" />
            <p className="text-center mt-2 text-white h4">Frontend Devloper</p>
        </p>


        </Container>
        
        </>
    )
}
export default Slider