import React from "react";
import './SecondryButton.css';

const SecondryButton = (props) => {
    return (
        <>
            <div className="SecondryButton-container">
                <div className="SecondryButton-text">
                    {props.SecondryButtonText}
                </div>
                <div className="SecondryButton-logo">
                    {props.logo}
                </div>
            </div>
        </>
    );
}

export default SecondryButton;