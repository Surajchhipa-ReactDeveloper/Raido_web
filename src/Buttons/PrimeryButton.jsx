import React from "react";
import './PrimeryButton.css';

const PrimeryButton = (props) => {
    return (
        <>
            <div className="PrimeryButton-container" onClick={props.onClickHandler}>
                <div className="PrimeryButton-text">
                    {props.PrimeryButtonText}
                </div>
                <div className="PrimeryButton-logo">
                    {props.logo}
                </div>
            </div>
        </>
    );
}

export default PrimeryButton;