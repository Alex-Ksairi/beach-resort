// importing data.js (since data are default exported --> name can be assignable)
import items from '../data';

// creating React.createContext using a class component
import React, { Component } from 'react'

// declaring a variable of React.createContext with an empty string
let RoomContext = React.createContext();
// <RoomContext.Provider value={to render data}></RoomContext.Provider>
class RoomProvider extends Component {
    // state = {
    //     greeting: 'Hello',
    //     name: 'Alex',
    // };

    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
    };

    // getting Data --> getData
    
    // lifecycle methods
    componentDidMount() {
        // this.getData
        let rooms = this.formatData(items);  // formatData is a function line 28, items are data.js
        // console.log(rooms);

        let featuredRooms = rooms.filter(room => room.featured === true);
        this.setState({
            rooms,
            featuredRooms,
            sortedRooms: rooms,
            loading: false,
        })
    };

    formatData(items) {     // items are (params)
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);

            // let room = { ...item.fields, images: images, id: id }
            let room = { ...item.fields, images, id };
            return room;
        });
        return tempItems
    };

    // getRoom --> single room
    getRoom = slug => {
        let tempRooms = [...this.state.rooms];
        let room = tempRooms.find((room) => room.slug === slug);
        return room;
    };

    render() {
        return (
            <React.Fragment>
                <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom }}>
                    {this.props.children}
                </RoomContext.Provider>
            </React.Fragment>
        )
    }
}

let RoomConsumer = RoomContext.Consumer;

export { RoomContext, RoomProvider, RoomConsumer }
