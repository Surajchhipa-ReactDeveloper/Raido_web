import React from "react";
import './Blog.css';
import BlogCard from "./BlogCard";

const Blog = () => {
    return (
        <>
            <div className="Blog-container" id="Blog">
                <div className="Blog-pera-heading-container">
                    <div className="Blog-heading-container"><h1>Latest on the Blogs</h1></div>
                    <div className="Blog-pera-container"><p>We want to help you to travel better!</p></div>
                </div>
                <div className="Blog-imgae-container">
                    <BlogCard
                        id = 'BCard-1'
                        BCardPera = '10 Mistakes every first time traveller will make and how to avoid them!'
                    />
                       <BlogCard
                        id = 'BCard-2'
                        BCardPera = 'What&#39;s it really like to move to a country where you don&#39;t speak the language?'
                    />
                       <BlogCard
                        id = 'BCard-3'
                        BCardPera = '10 Mistakes every first time traveller will make and how to avoid them!'
                    />
                       <BlogCard
                        id = 'BCard-4'
                        BCardPera = '10 Mistakes every first time traveller will make and how to avoid them!'
                    />
                </div>
            </div>
        </>
    )
}

export default Blog;