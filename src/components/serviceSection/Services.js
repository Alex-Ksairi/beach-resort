import React, { Component } from 'react';

// importing title component
import Title from "../title/Title";

// importing serviceData
import { data } from "./servicesData";

// importing styling scss
import "./Services.scss";

export default class Services extends Component {
    // setting up the state
    state = {
        services: data,
    } 

    render() {
        return (
            <section className="services">
                <Title title="services"/>
                <div className="services-center">
                    {this.state.services.map(( item, index ) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
