import React from "react";
import './JournalCard.css';

const JournalCard = (props) => {
    return (
        <>
            <div className="JournalCard-container">
                <div className="JournalCard-imgae-container"><img src={props.img} alt="" /></div>
                <div className="JournalCard-color-container">
                    <div className="JournalCard-userName-and-Image-container">
                        <div className="User-img-container"><img src={props.userImg} alt="" /></div>
                        <div className="User-Name-container"><p>{props.UserName}</p></div>
                    </div>
                    <div className="JournalCard-pera-container"><p>{props.pera}</p></div>
                    <div className="JournalCard-data-and-shareIcon">
                        <div className="JornalCard-date-container"><p>{props.date}</p></div>
                        <div className="JournalCard-shareIcon-container">{props.Icon}</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default JournalCard;