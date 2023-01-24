import React from "react";
import PrimeryButton from "../../Buttons/PrimeryButton";
import './Home.css'

let PrimeryButtonLogo = (
    <svg id="a775bb2801f9202e26e4d4c6dc2d86aa" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path id="Path_2" data-name="Path 2" d="M13.354,12.325a1.029,1.029,0,1,0,1.029,1.029,1.032,1.032,0,0,0-1.029-1.029Zm0-8.325a9.354,9.354,0,1,0,9.354,9.354A9.352,9.352,0,0,0,13.354,4ZM15.4,15.4,7.742,18.967l3.564-7.661,7.661-3.564Z" transform="translate(-1.354 -1.354)" fill="#0a0d13" />
        <path id="Path_3" data-name="Path 3" d="M0,0H24V24H0Z" fill="none" />
    </svg>
)


const Home = () => {
    const ScrollHandler = () => {
        document.body.scrollTop = 500
        document.documentElement.scrollTop = 500
    }
    
    return (
        <>
            <div className="home-gradiant-container" id="Home">
                <div className="home-container">
                    <div className="home-heading-container"><h1>The new way to plan your next adventure</h1></div>
                    <div className="hero-pera-container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="1.5" viewBox="0 0 40 1.5">
                            <path id="Rectangle" d="M0,0H40V1.5H0Z" fill="#fff" />
                        </svg>
                        <p>Explore the colourful world</p>
                    </div>
                    <div className="home-button-container">
                        <PrimeryButton
                            PrimeryButtonText='Explore More'
                            logo={PrimeryButtonLogo}
                            onClickHandler={ScrollHandler}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;