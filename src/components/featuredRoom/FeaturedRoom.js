import React, { Component } from 'react'

// importing RoomContext
import { RoomContext } from "../../store/context";

// importing Loading component
import Loading from '../loading/Loading';

// importing RoomCard
import RoomCard from '../roomCard/RoomCard';

// importing Title component
import Title from "../title/Title";

// importing styling scss
import './FeaturedRoom.scss';

export default class FeaturedRoom extends Component {
    // setting up 'static' in order to call the value --> important is: contextType
    static contextType = RoomContext;

    render() {
        // declaring a variable in order of accessing context and its type
        // let { greeting, name } = this.context;

        // {value} --> call the value in context.js --> to render data
        // console.log(value);     // output --> to render data

        // rendering featuredRooms
        let { loading, featuredRooms: rooms } = this.context;
        // console.log(rooms);

        rooms = rooms.map(room => {
            return <RoomCard key={room.id} room={room} />
        })

        return (
            <React.Fragment>
                {/* {value} --> call the value in context.js        {greeting} {name} */}
                <section className="featured-rooms">
                    <Title title="featured rooms"/>
                        <div className="featured-rooms-center">
                            {loading ? <Loading /> : rooms}
                        </div>
                </section>
            </React.Fragment>
        )
    }
}

