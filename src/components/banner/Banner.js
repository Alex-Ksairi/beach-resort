// importing React
import React from "../../../node_modules/react";

// importing styling scss
import './Banner.scss';

export default function Banner({ children, title, subtitle }) {
    return (
        <React.Fragment>
            <div className="banner">
                <h1>{title}</h1>
                <div></div>
                <p>{subtitle}</p>
                {children}
            </div>
        </React.Fragment>
    )
}
