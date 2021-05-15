// importing useContext
import { useContext } from "../../../node_modules/react";

// importing RoomContext
import { RoomContext } from "../../store/context";

// importing styling scss
import './RoomFilter.scss';

// importing Title
import Title from "../title/Title";

// getting unique value in order to not repeat unnecessary values 
let getUniqueValue = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
};

export default function RoomFilter({rooms}) {
    let context = useContext(RoomContext);
    // console.log(context);

    let {handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets} = context;

    // get unique type
    let uniqueTypes = getUniqueValue(rooms, 'type');

    // add all types
    uniqueTypes = ['all', ...uniqueTypes];

    // map through types in order to render data in an option tag
    uniqueTypes = uniqueTypes.map((value, index) => {
        return <option value={value} key={index}>{value}</option>
    }); 

    // get unique guests
    let guests = getUniqueValue(rooms, 'capacity');

    // map through guests in order to render data in an option tag
    guests = guests.map((value, index) => {
        return <option value={value} key={index}>{value}</option>
    }); 

    return (
        <section className="filter-container">
            <Title title="search rooms"/>
            <form className="filter-form">
                {/* select type */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                        {uniqueTypes}
                    </select>
                </div>
                {/* end select type */}

                {/* select capacity */}
                <div className="form-group">
                    <label htmlFor="capacity">guests</label>
                    <select name="capacity" id="type" value={capacity} className="form-control" onChange={handleChange}>
                        {guests}
                    </select>
                </div>
                {/* end select capacity */}

                {/* select price */}
                <div className="form-group">
                    <label htmlFor="price">room price €{price}</label>
                    <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} className="form-control" onChange={handleChange} />
                </div>
                {/* end select price */}

                {/* select room size & extras */}
                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" min={minSize} id="size" value={minSize} className="size-input" onChange={handleChange} />
                        <input type="number" name="maxSize" min={maxSize} id="size" value={maxSize} className="size-input" onChange={handleChange} />
                    </div>
                </div>

                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
                {/* end select room size & extras */}
            </form>
        </section>
    )
}
