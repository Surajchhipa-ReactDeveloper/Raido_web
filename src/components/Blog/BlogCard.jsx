import React from "react";
import './BlogCard.css';

const BlogCard = (props) =>{
    return(
        <>
            <div className="BlogCard-container">
                <div className="BlogCard-background-image" id={props.id}>
                    <div className="BlogCard-Gradient">
                        <div className="BlogCard-pera-container"><p>{props.BCardPera}</p></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BlogCard;