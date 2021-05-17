//importing Link
import { Link } from "../../../node_modules/react-router-dom";

// importing a default images in case of an error or missing images
import defaultImage from "../../images/room-11.jpeg";

// importing PropTypes
import PropTypes from "../../../node_modules/prop-types";

// importing styling scss
import "./RoomCard.scss";

export default function RoomCard({ room }) {
    let { name, slug, images, price } = room;

    return (
        <article className="room">
            <div className="img-container">
                <img src={ images[0] || defaultImage } alt="single room" />
                <div className="price-top">
                    <h6>€{price}</h6>
                    <p>per night</p>
                </div>
                <Link to={`/rooms/${slug}`} className="btn-primary room-link">Features</Link>
            </div>
            <p className="room-info">{name}</p>
        </article>
    )
};


// executing PropTypes
RoomCard.propTypes = {
    room: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired,
    })
}
