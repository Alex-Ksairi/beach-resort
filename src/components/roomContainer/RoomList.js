// importing styling scss
import './RoomList.scss';

// importing RoomCard
import RoomCard from "../roomCard/RoomCard";

export default function RoomList({rooms}) {
    // checking wether rooms can be displayed or not
    if (rooms.length === 0) {
        return (
            <div className="empty-search">
                <h3>unfortunately, there're no rooms matched your search parameters...</h3>
            </div>
        );
    }

    return (
        <section className="roomsList">
            <div className="roomsList-center">
                {
                    rooms.map(item => {
                        return <RoomCard key={item.id} room={item} />
                    })
                }
            </div>
        </section>
    )
}
