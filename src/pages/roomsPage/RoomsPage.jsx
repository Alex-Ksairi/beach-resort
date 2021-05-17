// importing React
import React from "../../../node_modules/react";

// importing Link
import { Link } from "react-router-dom";

// importing hero component
import Hero from "../../components/hero/Hero";

// importing Banner
import Banner from "../../components/banner/Banner";

// importing RoomContainer
import RoomsContainer from "../../components/roomContainer/RoomsContainer";

export default function RoomsPage() {
    return (
        <React.Fragment>
            <Hero hero="roomsHero">
                <Banner title="our rooms">
                    <Link to="/" className="btn-primary">return home</Link>
                </Banner>
            </Hero>
            <RoomsContainer />
        </React.Fragment>
        
    )
}
