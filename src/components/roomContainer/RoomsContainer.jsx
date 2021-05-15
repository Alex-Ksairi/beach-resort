// option one
// importing rooms filter & list
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";

// importing context consumer including option one
// import { RoomConsumer } from "../../store/context";

// importing loading to check wether data is loading by fetching data.url from internet or not
import Loading from "../loading/Loading";

// option two
import { withRoomConsumer } from "../../store/context";

// option one
// export default function RoomsContainer() {
//     return (
//         // in order to get data from RoomConsumer, <RoomConsumer> function need to be executed here
//         // and in order render data from Provider --> accessing its value which based on value (context.js --> line 62)
//         <RoomConsumer>
//         {
//             (value) => {
//                 // console.log(value);
//                 let {loading, sortedRooms, rooms} = value;

//                 if (loading) {
//                     return <Loading />
//                 }

//                 return (
//                     <div>
//                         hello from rooms container
//                         <RoomList rooms={rooms}/>
//                         <RoomFilter rooms={sortedRooms}/>
//                     </div>
//                 )
//             }
//         }
//     </RoomConsumer>
//     )
// }



// option two
function RoomsContainer({context}) {
    let {loading, sortedRooms, rooms} = context;

    if (loading) {
        return <Loading />
    }

    return (
        <div>
            <RoomFilter rooms={rooms}/>
            <RoomList rooms={sortedRooms}/>
        </div>
    )
}

export default withRoomConsumer(RoomsContainer);

