import PropTypes from "prop-types";

function Card(props) {
    return (
        <div className="card">
            {/* <p className="sold-out">SOLD OUT</p> */}
            <img className="main-img" src={new URL(`../assets/images/${props.img}`, import.meta.url)} />
            <div className="reviews">
                <img className="star-img" src={new URL("./../assets/images/star.png", import.meta.url)} />
                <span>{props.rating}</span>
                <span className="review-details">({props.reviewCount}) - USA</span>
            </div>
            <p>{props.title}</p>
            <p> <strong>From ${props.price} </strong> / person </p>
        </div>
    )
}

Card.propTypes = {
    img: PropTypes.string,
    rating: PropTypes.number,
    reviewCount: PropTypes.number,
    location: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number
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