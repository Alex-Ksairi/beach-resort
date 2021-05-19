// importing hero component
import Hero from "../../components/hero/Hero";

// importing React
import React, { useEffect } from "../../../node_modules/react";

// importing Link
import { Link } from "../../../node_modules/react-router-dom";

// importing Banner
import Banner from "../../components/banner/Banner";

// importing Services
import Services from '../../components/serviceSection/Services';

// importing FeaturedRoom
import FeaturedRoom from '../../components/featuredRoom/FeaturedRoom';


export default function HomePage() {

    useEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <React.Fragment>
            {/* <Hero hero='defaultHero'/> */}
            <Hero>
                <Banner title="luxurious rooms" subtitle="deluxe rooms starting from 299€">
                    <Link to="/rooms" className="btn-primary">
                        our rooms
                    </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRoom />
        </React.Fragment>
    )
}
