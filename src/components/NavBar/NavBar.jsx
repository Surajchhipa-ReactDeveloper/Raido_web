import React, { useState } from "react";
import './NavBar.css';
import { GrClose, GrMenu } from 'react-icons/gr';
import { Link } from "react-scroll";

const NavBar = (props) => {
    const [menu, setMenu] = useState(false);
    return (
        <>
            <div className="blur-conainer"></div>
            <div className="NavBar-container">
                <div className="NavBar-logo"><Link to="Home" >Radio.</Link></div>
                <div className="NavBar-links">
                    <ul className={!menu ? "Navigation-links" : "mobile-size"}>
                        <li className="nav-item" >
                            <Link
                                onClick={() => { setMenu(false) }}
                                activeClass="active"
                                to="Home"
                                spy={true}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                onClick={() => { setMenu(false) }}
                                activeClass="active"
                                to="AboutUs"
                                spy={true}
                            >
                                About Us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                onClick={() => { setMenu(false) }}
                                activeClass="active"
                                to="Discover"
                                spy={true}
                            >
                                Discover
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                onClick={() => { setMenu(false) }}
                                activeClass="active"
                                to="Blog"
                                spy={true}
                            >
                                Blog
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                onClick={() => { setMenu(false) }}
                                activeClass="active"
                                to="Journals"
                                spy={true}

                            >
                                Journals
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                onClick={() => { setMenu(false) }}
                                activeClass="active"
                                to="Gallery"
                                spy={true}

                            >
                                Gallery
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                onClick={() => { setMenu(false) }}
                                activeClass="active"
                                to="Contact"
                                spy={true}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <div className="search-icon-container">
                        <svg id="search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <rect id="Rectangle_12" data-name="Rectangle 12" width="24" height="24" fill="#fff" opacity="0" />
                            <path id="Path_1" data-name="Path 1" d="M20.71,19.29l-3.4-3.39A7.92,7.92,0,0,0,19,11a8,8,0,1,0-8,8,7.92,7.92,0,0,0,4.9-1.69l3.39,3.4a1,1,0,1,0,1.42-1.42ZM5,11a6,6,0,1,1,6,6,6,6,0,0,1-6-6Z" fill="#fff" />
                        </svg>
                    </div>
                    <div className="Menu-button-container">
                        <GrMenu
                            color='red'
                            className={!menu ? "menu-open" : "open-display"}
                            name="open-button"
                            onClick={() => { setMenu(true) }}
                        />
                        <GrClose
                            className={!menu ? "menu-close" : "close-display"}
                            name="close-button"
                            onClick={() => { setMenu(false) }}
                        />
                    </div>
                </div>

            </div>
        </>
    )
}

export default NavBar;