import React from "react";
import './Discover.css'
import DiscoverCard from "./DiscoverCard";

const Discover = () => {
    return (
        <>
            <div className="Discover-container" id="Discover">
                <div className="discover-heading-and-pera-container">
                    <div className="discover-heading-container">
                        <h1>Discover the most engaging places</h1>
                    </div>
                    <div className="discover-pera-container">
                        <p>Lets's see the world with us with you and your family.</p>
                    </div>
                    <div className="Card-container">
                        <DiscoverCard
                            id="DCard-1"
                            title="Norway"
                            pera="Norway is a Scandinavian country encompassing mountains, glaciers and deep coastal fjords. "
                        />
                        <DiscoverCard
                            id="DCard-2"
                            title="London"
                            pera="London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times."
                        />
                        <DiscoverCard
                            id="DCard-3"
                            title="Japan"
                            pera="Japan is famous for creating the world’s leading electronics and car brands, while remaining deeply connected to traditions."
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Discover;