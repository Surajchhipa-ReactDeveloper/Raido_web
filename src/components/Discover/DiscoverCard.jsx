import React from "react";
import './DiscoverCard.css';
import SecondryButton from "../../Buttons/SecondryButton";

const arrowIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="21.5" height="17.108" viewBox="0 0 21.5 17.108">
        <g id="Page-1" transform="translate(-0.25 0.054)">
            <g id="Artboard" transform="translate(1 1)">
                <g id="arrow-right">
                    <path id="Shape" d="M0,6H20" transform="translate(0 1.5)" fill="none" stroke="#C1C2C4" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd" />
                    <path id="Shape-2" data-name="Shape" d="M10,0l6,7.5L10,15" transform="translate(4)" fill="none" stroke="#C1C2C4" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd" />
                </g>
            </g>
        </g>
    </svg>

)


const DiscoverCard = (props) => {
    return (
        <>
            <div className="DiscoverCard-container">
                <div className="DiscoverCard-image-container" id={props.id}>
                    <div className=" DiscoverCard-gradiantColor-container" >
                        <div className="DiscoverCard-heading-container"><h1>{props.title}</h1></div>
                        <div className="DiscoverCard-pera-container"><p>{props.pera}</p></div>
                    </div>
                </div>
                <div className="DCard-button">
                    <SecondryButton
                        SecondryButtonText="Discover More"
                        logo={arrowIcon}
                    />
                </div>
            </div>
        </>
    );
}

export default DiscoverCard;