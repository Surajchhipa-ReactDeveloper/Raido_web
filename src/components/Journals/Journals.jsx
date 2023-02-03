import React, { useEffect } from "react";
import PrimeryButton from "../../Buttons/PrimeryButton";
import JournalCard from "./JournalCard";
import './Journals.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const shareIcon = (
    <svg id="_7f59fd7eca5c4dfb67076eb439d10531" data-name="7f59fd7eca5c4dfb67076eb439d10531" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path id="Path_4" data-name="Path 4" d="M0,0H24V24H0Z" fill="none" />
        <path id="Path_5" data-name="Path 5" d="M18,16.08a2.912,2.912,0,0,0-1.96.77L8.91,12.7A3.274,3.274,0,0,0,9,12a3.274,3.274,0,0,0-.09-.7l7.05-4.11A2.993,2.993,0,1,0,15,5a3.274,3.274,0,0,0,.09.7L8.04,9.81a3,3,0,1,0,0,4.38l7.12,4.16a2.821,2.821,0,0,0-.08.65A2.92,2.92,0,1,0,18,16.08Z" fill="#fff" />
    </svg>
)

const JournalArrow = (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="17.812" viewBox="0 0 22 17.812">
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

const Journals = () => {
    useEffect(() =>{
        AOS.init();
    },[])
    return (
        <>
            <div className="Journals-container" id="Journals">
                <div className="Journal-Heading-and-Pera-container">
                    <div className="Journal-heading-container">
                        <h1>The Travel Journals</h1>
                    </div>
                    <div className="Journal-pera-container">
                        <p>A journal is a place to record new things you have discovered while exploring various places you visit.</p>
                    </div>
                </div>
                <div className="JCard-container" data-aos = 'fade-up'>
                    <JournalCard
                        img="/Assets/JCard-1.png"
                        userImg="/Assets/JCardUser-1.png"
                        UserName="By Austin Martin"
                        pera="How to use less plastic when you travel."
                        date="10 Apr 2022"
                        Icon={shareIcon}
                    />
                    <JournalCard
                        img="/Assets/JCard-2.png"
                        userImg="/Assets/JCardUser-2.png"
                        UserName="By Mary Ann"
                        pera="The best weekend road trips from Denver.."
                        date="14 Apr 2022"
                        Icon={shareIcon}
                    />
                    <JournalCard
                        img="/Assets/JCard-3.png"
                        userImg="/Assets/JCardUser-3.png"
                        UserName="By Anina Joseph"
                        pera="Tips and tricks to plan your next adventure.."
                        date="16 Apr 2022"
                        Icon={shareIcon}
                    />
                    <JournalCard
                        img="/Assets/JCard-4.png"
                        userImg="/Assets/JCardUser-4.png"
                        UserName="By Jacob Fernandez"
                        pera="A beginner's guide to hostels."
                        date="18 Apr 2022"
                        Icon={shareIcon}
                    />
                    <JournalCard
                        img="/Assets/JCard-5.png"
                        userImg="/Assets/JCardUser-5.png"
                        UserName="By John Smith"
                        pera="17 unconventional travel hacks you need."
                        date="20 Apr 2022"
                        Icon={shareIcon}
                    />
                    <JournalCard
                        img="/Assets/JCard-6.png"
                        userImg="/Assets/JCardUser-6.png"
                        UserName="By Aaron Kennedy"
                        pera="Travel tip's you'll wish you'd known sooner"
                        date="25 Apr 2022"
                        Icon={shareIcon}
                    />
                </div>
                <div className="Journal-button-container">
                    <PrimeryButton
                        PrimeryButtonText="View all journal"
                        logo={JournalArrow}
                    />
                </div>
            </div>
        </>
    )
}

export default Journals;