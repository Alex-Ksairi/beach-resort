// importing styling scss
import Hero from "../../components/hero/Hero";

// importing hero component
import "./errorPage.scss";

// importing Banner, Link
import Banner from "../../components/banner/Banner";
import { Link } from "../../../node_modules/react-router-dom";

export default function errorPage() {
    return (
        <div>
            <Hero>
                <Banner title="404" subtitle="Page not found!">
                    <Link to="/" className="btn-primary">return home</Link>
                </Banner>
            </Hero>
        </div>
    )
}
