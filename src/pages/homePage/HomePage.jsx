// importing styling scss
import './HomePage.scss';

// importing hero component
import Hero from "../../components/hero/Hero";

// importing React
import React from "../../../node_modules/react";

// importing Link
import { Link } from "../../../node_modules/react-router-dom";

// importing Banner
import Banner from "../../components/banner/Banner";

// importing Services
import Services from '../../components/serviceSection/Services';


export default function HomePage() {
    return (
        <React.Fragment>
            {/* <Hero hero='defaultHero'/> */}
            <Hero>
                <Banner title="luxurious rooms" subtitle="deluxe rooms starting from 399€">
                    <Link to="/rooms" className="btn-primary">
                        our rooms
                    </Link>
                </Banner>
            </Hero>
            <Services />
        </React.Fragment>
    )
}
