import React, { useEffect } from "react";
import PrimeryButton from "../../Buttons/PrimeryButton";
import './AboutUs.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const arrow = (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="17.811" viewBox="0 0 22 17.811">
        <g id="Page-1" transform="translate(0 0.406)">
            <g id="Artboard" transform="translate(1 1)">
                <g id="arrow-right">
                    <path id="Shape" d="M0,6H20" transform="translate(0 1.5)" fill="none" stroke="#0a0d13" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" fill-rule="evenodd" />
                    <path id="Shape-2" data-name="Shape" d="M10,0l6,7.5L10,15" transform="translate(4)" fill="none" stroke="#0a0d13" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" fill-rule="evenodd" />
                </g>
            </g>
        </g>
    </svg>
)

const AboutUs = () => {
    useEffect(() =>{
        AOS.init();
    },[])
    return (
        <>
            <div className="About-container" id="AboutUs">
                <div className="about-color-container">
                    <div className="about-heading-container" data-aos = "fade-up">
                        <h1>About Us</h1>
                    </div>
                    <div className="about-pera-container" data-aos = "fade-up">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                    <div className="upar-container" data-aos = "fade-up">
                        <div className="complete-trips tour-guid-box ">
                            <div className="about-tour-guid-box-number border-left">268</div>
                            <div className="about-tour-guid-box-text border-left">Completed Trips</div>
                        </div>
                        <div className="tour-guides tour-guid-box ">
                            <div className="about-tour-guid-box-number border-left">176</div>
                            <div className="about-tour-guid-box-text border-left">Tour Guides</div>
                        </div>
                        <div className="destinations tour-guid-box">
                            <div className="about-tour-guid-box-number">153</div>
                            <div className="about-tour-guid-box-text">Destinations</div>
                        </div>
                    </div>
                    <div className="about-button">
                        <PrimeryButton
                            PrimeryButtonText='Read More'
                            logo={arrow}
                        />
                    </div>
                </div>
                <div className="about-img-container"></div>
            </div>
        </>
    )
}

export default AboutUs;