// importing styling scss
import "./ContactForm.scss";

// importing hero component
import Hero from "../../components/hero/Hero";

// importing React
import React, { useEffect } from "../../../node_modules/react";

// importing Link
import { Link } from "../../../node_modules/react-router-dom";

// importing Banner
import Banner from "../../components/banner/Banner";

// importing ContactForm
import ContactForm from "./ContactForm";



export default function ContactPage() {
    
    useEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <React.Fragment>
            {/* <Hero hero='defaultHero'/> */}
            <Hero>
                <Banner title="Contact us" subtitle="in our beach resort your dreams can be fulfilled!">
                    <Link to="/" className="btn-primary">
                        return home
                    </Link>
                </Banner>
            </Hero>
            <ContactForm />
        </React.Fragment>
    )
}
