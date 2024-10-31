import PropTypes from "prop-types";

function Card(props) {
    console.log(props.openSpots)
    return (
        <div className="card">
        {props.openSpots===0 && <div className="card-badge bold-text">SOLD OUT</div>}
            <img className="card-img" src={new URL(`../assets/images/${props.img}`, import.meta.url)} />
            <div className="reviews">
                <img className="rating-img" src={new URL("./../assets/images/star.png", import.meta.url)} />
                <span>{props.rating} </span>
                <span className="review-details">({props.reviewCount})  •</span>
                <span className="review-details">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold-text">From ${props.price}</span> / person </p>
        </div>
    )
}

Card.propTypes = {
    img: PropTypes.string,
    rating: PropTypes.number,
    reviewCount: PropTypes.number,
    location: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    openSpots: PropTypes.number
}

export default Card;

// <img src= { new URL("../images/asdf.png", import.meta.url)} className="randomImage"/>

// try npm run build to make a distribution dist folder

/* Another note: If I have trouble with vite incorrectly reading my images from the relative path not pointing to the correct parent file:

Go into vite.config.js file:
go into the export define config function

base: "./", // Whenever we open a project it is gonna base it NOT on the root directory of url, but one level up above the file we work on (to address intense levels of nesting) in current directory rather than random file in assets or src
*/

// After fixing things up in base, we run npm run build again!