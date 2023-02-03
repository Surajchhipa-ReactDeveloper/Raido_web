import React from "react";
import './Footer.css';
import { Link } from "react-scroll";

let facebook = (
    <svg id="facebook" xmlns="http://www.w3.org/2000/svg" width="13.001" height="22" viewBox="0 0 13.001 22">
        <defs>
            <clipPath id="clip-path">
                <path id="icon_facebook" data-name="icon / facebook" d="M7.976,22H3.988a.945.945,0,0,1-1-1V14H1a.946.946,0,0,1-1-1V9A.945.945,0,0,1,1,8H2.991V6A6,6,0,0,1,8.973,0h2.991a.945.945,0,0,1,1,1V5a.945.945,0,0,1-1,1H8.973V8h2.991a.829.829,0,0,1,.8.3,1,1,0,0,1,.2.9l-1,4a.975.975,0,0,1-1,.8H8.973v7A.945.945,0,0,1,7.976,22ZM1.994,10h0v2H3.988a.945.945,0,0,1,1,1v7H6.979V13a.945.945,0,0,1,1-1h2.193l.5-2H7.976a.945.945,0,0,1-1-1V6A2,2,0,0,1,8.973,4h1.993V2H8.973A4,4,0,0,0,4.985,6V9a.945.945,0,0,1-1,1H1.994Z" transform="translate(6 1)" fill="#222b45" />
            </clipPath>
        </defs>
        <g id="Group_128" data-name="Group 128" transform="translate(-6 -1)">
            <path id="icon_facebook-2" data-name="icon / facebook" d="M7.976,22H3.988a.945.945,0,0,1-1-1V14H1a.946.946,0,0,1-1-1V9A.945.945,0,0,1,1,8H2.991V6A6,6,0,0,1,8.973,0h2.991a.945.945,0,0,1,1,1V5a.945.945,0,0,1-1,1H8.973V8h2.991a.829.829,0,0,1,.8.3,1,1,0,0,1,.2.9l-1,4a.975.975,0,0,1-1,.8H8.973v7A.945.945,0,0,1,7.976,22ZM1.994,10h0v2H3.988a.945.945,0,0,1,1,1v7H6.979V13a.945.945,0,0,1,1-1h2.193l.5-2H7.976a.945.945,0,0,1-1-1V6A2,2,0,0,1,8.973,4h1.993V2H8.973A4,4,0,0,0,4.985,6V9a.945.945,0,0,1-1,1H1.994Z" transform="translate(6 1)" fill="#fff" />
        </g>
    </svg>
)

let instagram = (
    <svg id="instagram" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
        <defs>
            <clipPath id="clip-path">
                <path id="icon_instagram" data-name="icon / instagram" d="M16,22H6a6.007,6.007,0,0,1-6-6V6A6.007,6.007,0,0,1,6,0H16a6.007,6.007,0,0,1,6,6V16A6.006,6.006,0,0,1,16,22ZM6,2A4.005,4.005,0,0,0,2,6V16a4,4,0,0,0,4,4H16a4,4,0,0,0,4-4V6a4,4,0,0,0-4-4Zm5,14a4.877,4.877,0,0,1-3.2-1.213A5.181,5.181,0,0,1,6.1,11.7a5,5,0,0,1,.937-3.713A4.929,4.929,0,0,1,10.3,6a3.793,3.793,0,0,1,1.5,0,4.691,4.691,0,0,1,4.1,4.2,4.9,4.9,0,0,1-.9,3.7,4.986,4.986,0,0,1-3.3,2A1.706,1.706,0,0,1,11,16Zm-.4-8A2.918,2.918,0,0,0,8.626,9.191,2.875,2.875,0,0,0,8.1,11.4a3.019,3.019,0,0,0,3.021,2.523A3.054,3.054,0,0,0,11.5,13.9a3.193,3.193,0,0,0,2-1.2,2.769,2.769,0,0,0,.4-2.2A2.976,2.976,0,0,0,11.4,8h-.8Zm5.9-1.5a1.026,1.026,0,0,1-1-1,.6.6,0,0,1,.1-.4c0-.1.107-.207.2-.3a.967.967,0,0,1,1.4,0c.1.1.2.2.2.3a.359.359,0,0,0,.037.131A.657.657,0,0,1,17.5,5.5a.905.905,0,0,1-.3.7A1.076,1.076,0,0,1,16.5,6.5Z" transform="translate(1 1)" fill="#222b45" />
            </clipPath>
        </defs>
        <g id="Group_109" data-name="Group 109" transform="translate(-1 -1)">
            <path id="icon_instagram-2" data-name="icon / instagram" d="M16,22H6a6.007,6.007,0,0,1-6-6V6A6.007,6.007,0,0,1,6,0H16a6.007,6.007,0,0,1,6,6V16A6.006,6.006,0,0,1,16,22ZM6,2A4.005,4.005,0,0,0,2,6V16a4,4,0,0,0,4,4H16a4,4,0,0,0,4-4V6a4,4,0,0,0-4-4Zm5,14a4.877,4.877,0,0,1-3.2-1.213A5.181,5.181,0,0,1,6.1,11.7a5,5,0,0,1,.937-3.713A4.929,4.929,0,0,1,10.3,6a3.793,3.793,0,0,1,1.5,0,4.691,4.691,0,0,1,4.1,4.2,4.9,4.9,0,0,1-.9,3.7,4.986,4.986,0,0,1-3.3,2A1.706,1.706,0,0,1,11,16Zm-.4-8A2.918,2.918,0,0,0,8.626,9.191,2.875,2.875,0,0,0,8.1,11.4a3.019,3.019,0,0,0,3.021,2.523A3.054,3.054,0,0,0,11.5,13.9a3.193,3.193,0,0,0,2-1.2,2.769,2.769,0,0,0,.4-2.2A2.976,2.976,0,0,0,11.4,8h-.8Zm5.9-1.5a1.026,1.026,0,0,1-1-1,.6.6,0,0,1,.1-.4c0-.1.107-.207.2-.3a.967.967,0,0,1,1.4,0c.1.1.2.2.2.3a.359.359,0,0,0,.037.131A.657.657,0,0,1,17.5,5.5a.905.905,0,0,1-.3.7A1.076,1.076,0,0,1,16.5,6.5Z" transform="translate(1 1)" fill="#fff" />
        </g>
    </svg>

)

let twitter = (
    <svg id="twitter" xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20">
        <defs>
            <clipPath id="clip-path">
                <path id="icon_twitter" data-name="icon / twitter" d="M8.208,20A15.732,15.732,0,0,1,.525,17.888a1.02,1.02,0,0,1-.5-1.106,1.081,1.081,0,0,1,1-.7,11.415,11.415,0,0,0,4.89-1.005,9.63,9.63,0,0,1-4.79-8.045,12.6,12.6,0,0,1,1-5.431.866.866,0,0,1,.8-.6.961.961,0,0,1,.9.4A9.6,9.6,0,0,0,11,5.519,5.169,5.169,0,0,1,13,1.4,5.3,5.3,0,0,1,16.576,0a5.36,5.36,0,0,1,3.607,1.4,9.989,9.989,0,0,0,2.3-1.207,1.071,1.071,0,0,1,1.1,0,.956.956,0,0,1,.4,1.005,8.334,8.334,0,0,1-2,3.821v.5c0,5.6-2.437,10.18-6.685,12.57A13.645,13.645,0,0,1,8.208,20ZM3.418,4.111a8.283,8.283,0,0,0,4.99,10.056.941.941,0,0,1,.1,1.71,11.686,11.686,0,0,1-3.592,1.71,13.831,13.831,0,0,0,3.273.4,12.08,12.08,0,0,0,6.106-1.609c3.615-2.125,5.688-6.084,5.688-10.861a1.293,1.293,0,0,0-.1-.6,1.406,1.406,0,0,1,.3-.9c.1-.152.2-.28.3-.4s.2-.25.3-.4a1.431,1.431,0,0,1-.351.1,1.438,1.438,0,0,0-.348.1.752.752,0,0,1-.24.038,1.092,1.092,0,0,1-.758-.339,3.464,3.464,0,0,0-2.619-1.178,3.3,3.3,0,0,0-2.271.876A3.608,3.608,0,0,0,13,5.519V6.524A1.085,1.085,0,0,1,12,7.53c-.117,0-.235.005-.352.005A11.667,11.667,0,0,1,3.418,4.111Z" transform="translate(0 2)" fill="#222b45" />
            </clipPath>
        </defs>
        <g id="Group_26" data-name="Group 26" transform="translate(0 -2)">
            <path id="icon_twitter-2" data-name="icon / twitter" d="M8.208,20A15.732,15.732,0,0,1,.525,17.888a1.02,1.02,0,0,1-.5-1.106,1.081,1.081,0,0,1,1-.7,11.415,11.415,0,0,0,4.89-1.005,9.63,9.63,0,0,1-4.79-8.045,12.6,12.6,0,0,1,1-5.431.866.866,0,0,1,.8-.6.961.961,0,0,1,.9.4A9.6,9.6,0,0,0,11,5.519,5.169,5.169,0,0,1,13,1.4,5.3,5.3,0,0,1,16.576,0a5.36,5.36,0,0,1,3.607,1.4,9.989,9.989,0,0,0,2.3-1.207,1.071,1.071,0,0,1,1.1,0,.956.956,0,0,1,.4,1.005,8.334,8.334,0,0,1-2,3.821v.5c0,5.6-2.437,10.18-6.685,12.57A13.645,13.645,0,0,1,8.208,20ZM3.418,4.111a8.283,8.283,0,0,0,4.99,10.056.941.941,0,0,1,.1,1.71,11.686,11.686,0,0,1-3.592,1.71,13.831,13.831,0,0,0,3.273.4,12.08,12.08,0,0,0,6.106-1.609c3.615-2.125,5.688-6.084,5.688-10.861a1.293,1.293,0,0,0-.1-.6,1.406,1.406,0,0,1,.3-.9c.1-.152.2-.28.3-.4s.2-.25.3-.4a1.431,1.431,0,0,1-.351.1,1.438,1.438,0,0,0-.348.1.752.752,0,0,1-.24.038,1.092,1.092,0,0,1-.758-.339,3.464,3.464,0,0,0-2.619-1.178,3.3,3.3,0,0,0-2.271.876A3.608,3.608,0,0,0,13,5.519V6.524A1.085,1.085,0,0,1,12,7.53c-.117,0-.235.005-.352.005A11.667,11.667,0,0,1,3.418,4.111Z" transform="translate(0 2)" fill="#fff" />
        </g>
    </svg>

)

let linkedin = (
    <svg id="linkedin" xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21">
        <defs>
            <clipPath id="clip-path">
                <path id="icon_linkedin" data-name="icon / linkedin" d="M21,21H17a.947.947,0,0,1-1-1V13a1,1,0,0,0-2,0v7a.947.947,0,0,1-1,1H9a.947.947,0,0,1-1-1V13a7,7,0,1,1,14,0v7A.947.947,0,0,1,21,21ZM15,10a2.934,2.934,0,0,1,3,3v6h2V13a5,5,0,0,0-10,0v6h2V13A2.934,2.934,0,0,1,15,10ZM5,21H1a.947.947,0,0,1-1-1V8A.947.947,0,0,1,1,7H5A.947.947,0,0,1,6,8V20A.947.947,0,0,1,5,21ZM2,9V19H4V9ZM3,6A2.934,2.934,0,0,1,0,3,2.934,2.934,0,0,1,3,0,2.934,2.934,0,0,1,6,3,2.935,2.935,0,0,1,3,6ZM3,2A.947.947,0,0,0,2,3,.947.947,0,0,0,3,4,.947.947,0,0,0,4,3,.947.947,0,0,0,3,2Z" transform="translate(1 2)" fill="#222b45" />
            </clipPath>
        </defs>
        <g id="Group_104" data-name="Group 104" transform="translate(-1 -2)">
            <path id="icon_linkedin-2" data-name="icon / linkedin" d="M21,21H17a.947.947,0,0,1-1-1V13a1,1,0,0,0-2,0v7a.947.947,0,0,1-1,1H9a.947.947,0,0,1-1-1V13a7,7,0,1,1,14,0v7A.947.947,0,0,1,21,21ZM15,10a2.934,2.934,0,0,1,3,3v6h2V13a5,5,0,0,0-10,0v6h2V13A2.934,2.934,0,0,1,15,10ZM5,21H1a.947.947,0,0,1-1-1V8A.947.947,0,0,1,1,7H5A.947.947,0,0,1,6,8V20A.947.947,0,0,1,5,21ZM2,9V19H4V9ZM3,6A2.934,2.934,0,0,1,0,3,2.934,2.934,0,0,1,3,0,2.934,2.934,0,0,1,6,3,2.935,2.935,0,0,1,3,6ZM3,2A.947.947,0,0,0,2,3,.947.947,0,0,0,3,4,.947.947,0,0,0,4,3,.947.947,0,0,0,3,2Z" transform="translate(1 2)" fill="#fff" />
        </g>
    </svg>

)

const Footer = () => {
    return (
        <>
            <footer className="footer">
                    <div className="footer-uper-divs">
                        <div className="main-logo-container">
                            <h1>Raido.</h1>
                        </div>
                        <div className="socialMedia-icons-container">
                            <div className="facebook">
                                {facebook}
                            </div>
                            <div className="instagram">
                                {instagram}
                            </div>
                            <div className="twitter">
                                {twitter}
                            </div>
                            <div className="linkedin">
                                {linkedin}
                            </div>
                        </div>
                        <div className="footer-pera-container">
                            <p>Cheap Romantic Vacations. Many people feel that there is a limited amount of abundance, wealth, or chances to succeed in life.</p>
                        </div>
                        <div className="footer-links-container">
                            <ul className="Footer-navigation">
                                <li className="footer-nav-items" >
                                    <Link
                                        to="Home"
                                        spy={true}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li className="footer-nav-items">
                                    <Link
                                        to="AboutUs"
                                        spy={true}
                                    >
                                        About Us
                                    </Link>
                                </li>
                                <li className="footer-nav-items">
                                    <Link
                                        to="Discover"
                                        spy={true}
                                    >
                                        Discover
                                    </Link>
                                </li>
                                <li className="footer-nav-items">
                                    <Link
                                        to="Blog"
                                        spy={true}
                                    >
                                        Blog
                                    </Link>
                                </li>
                                <li className="footer-nav-items">
                                    <Link
                                        to="Journals"
                                        spy={true}

                                    >
                                        Journals
                                    </Link>
                                </li>
                                <li className="footer-nav-items">
                                    <Link
                                        to="Gallery"
                                        spy={true}

                                    >
                                        Gallery
                                    </Link>
                                </li>
                                <li className="footer-nav-items">
                                    <Link
                                        to="Contact"
                                        spy={true}
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="copyright-container"><p>© 2022 All Right Reserved </p></div>
            </footer >
        </>
    );
}

export default Footer;