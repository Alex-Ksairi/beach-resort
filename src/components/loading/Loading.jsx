// importing loadingGif
import loadingGif from "../../images/gif/loading-arrow.gif";

// importing styling scss
import './Loading.scss';

export default function Loading() {
    return (
        <div className="loading">
            <h4>Rooms data loading...</h4>
            <img src={loadingGif} alt="loading gif" />
        </div>
    )
}
