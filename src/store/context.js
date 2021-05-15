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
        type: 'all',
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false,
    };

    // getting Data --> getData
    
    // lifecycle methods
    componentDidMount() {
        // this.getData
        let rooms = this.formatData(items);  // formatData is a function line 28, items are data.js
        // console.log(rooms);

        let featuredRooms = rooms.filter(room => room.featured === true);

        // setting up maxPrice & maxSize by using map to look through rooms.price
        let maxPrice = Math.max(...rooms.map(item => item.price));
        let maxSize = Math.max(...rooms.map(item => item.size));

        this.setState({
            rooms,
            featuredRooms,
            sortedRooms: rooms,
            loading: false,
            price: maxPrice,
            maxPrice,
            maxSize,
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

    // handleChange
    handleChange = event => {
        // let type = event.target.type;
        // let name = event.target.name;
        // let value = event.target.value;
        // console.log(type, name, value);

        let target = event.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = event.target.name;

        this.setState({
            [name]: value,
        }, this.filterRooms);
    }

    // filterRooms
    filterRooms = () => {
        // console.log('filter rooms');
        let {rooms, type, capacity, price, minSize, maxSize, breakfast, pets} = this.state;

        // all room
        let tempRoom = [...rooms];

        // filter by value & price and transform to numbers by using parseInt()
        capacity = parseInt(capacity);
        price = parseInt(price);

        // filter by extras


        // filter by rooms
        if (type !== 'all') {
            tempRoom = tempRoom.filter(room => room.type === type)
        };

        // filter by guests
        if (capacity !== 1) {
            tempRoom = tempRoom.filter(room => room.capacity >= capacity)
        };

        // filter by price
        tempRoom = tempRoom.filter(room => room.price <= price)

        // filter by extras (size, breakfast and pets)
        tempRoom = tempRoom.filter(room => room.size >= minSize && room.size <= maxSize)

        if (breakfast) {
            tempRoom = tempRoom.filter(room => room.breakfast === true)
        };

        if (pets) {
            tempRoom = tempRoom.filter(room => room.pets === true)
        };

        // change state
        this.setState({
            sortedRooms: tempRoom,
        });
    };

    render() {
        return (
            <React.Fragment>
                <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom, handleChange: this.handleChange }}>
                    {this.props.children}
                </RoomContext.Provider>
            </React.Fragment>
        )
    }
}

let RoomConsumer = RoomContext.Consumer;

// higher order component by using a nested function inside a function
export function withRoomConsumer(Component) {
    return function ConsumerWrapper(props) {        // returning props "props in RoomContainer.jsx line 28, 29" in order of rendering them inside a Component
        return <RoomConsumer>
            {value => <Component {...props} context={value} />}
        </RoomConsumer>
    }
}

export { RoomContext, RoomProvider, RoomConsumer }
