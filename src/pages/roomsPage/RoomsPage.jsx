// importing Link
import { Link } from "react-router-dom";

// importing styling scss
import './RoomsPage.scss';

// importing hero component
import Hero from "../../components/hero/Hero";

// importing Banner
import Banner from "../../components/banner/Banner";

export default function RoomsPage() {
    return (
        <Hero hero="roomsHero">
            <Banner title="our rooms">
                <Link to="/" className="btn-primary">return home</Link>
            </Banner>
        </Hero>
    )
}
