import React from "react";
import './RadioVideo.css';

const RadioVideo = () => {
    return (
        <>
            <div className="Raido-contaienr">
                <video autoPlay loop muted>
                    <source src="/Assets/RadioVideo.mp4" />
                </video>
                <div className="text">
                    <h1 className="text-text">Raido.</h1>
                </div>
            </div>
        </>
    );
}

export default RadioVideo;