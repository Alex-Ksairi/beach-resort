// importing React.Component
import React from "../../../node_modules/react";

// importing a default backgroundImage in case of an error or missing data
import defaultBackgroundImage from '../../images/room-11.jpeg';

// importing Hero component
// import Hero from "../../components/hero/Hero";

// importing Banner component
import Banner from "../../components/banner/Banner";

// importing Link 
import { Link } from "../../../node_modules/react-router-dom";

// importing RoomContext
import { RoomContext } from "../../store/context";

// importing StyledHero
import StyledHero from "../../components/styledHero/StyledHero";

// importing styling scss
import './SingleRoom.scss';

export default class SingleRoom extends React.Component {
    constructor (props) {
        super(props)
        // console.log(props); by clicking on one of the cards --> get --> history, match, params, slug ... etc (in order to target the specific room that was clicked)
        this.state = {
            slug: this.props.match.params.slug,
            defaultBackgroundImage,
        }
    };

    // targeting RoomContext
    static contextType = RoomContext;

    // lifecycle method
    componentDidMount() {};

    render() {
        let {getRoom} = this.context;
        let room = getRoom(this.state.slug);
        // console.log(room); output --> info about room that was chosen

        // if statement in order to check wether a chosen room has any info or not --> then get data
        if (!room) {
            return <div className="error">
                <h3>there's no such rooms which could be found!</h3>
                <Link to="/rooms" className="btn-primary">back to rooms</Link>
            </div>
        }

        let { name, description, capacity, size, price, images, extras, breakfast, pets } = room;

        // in order to avoid having an image twice --> set up a default and main image
        let [mainImage, ...followingImage] = images;

        return (
            <React.Fragment>
                <StyledHero img={mainImage || this.state.defaultBackgroundImage}>
                    <Banner title={`${name} room`}>
                        <Link to="/rooms" className="btn-primary">back to rooms</Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {followingImage.map((item, index) => {
                            return <img key={index} src={item} alt={name} />
                        })}
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>details</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>info</h3>
                            <h6>price: €{price}</h6>
                            <h6>size: {size} Square feet</h6>
                            <h6>
                                Max capacity: {" "}
                                {capacity < 1 ? `${capacity} people` : `${capacity} person`}
                            </h6>
                            <h6>
                                {pets ? 'pets are allowed' : 'no pets allowed'}
                            </h6>
                            <h6>{breakfast && 'free breakfast included'}</h6>
                        </article>
                    </div>
                </section>
                <section className="room-extras">
                        <h6>extras</h6>
                        <ul className="extras">
                            {extras.map((item, index) => {
                                return <li key={index}>- {item}</li>
                            })}
                        </ul>
                </section>
            </React.Fragment>
        )
    }
}


