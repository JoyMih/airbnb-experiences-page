import PropTypes from "prop-types";

function Card(props) { // Passing in props from App.jsx
    let badgeText; // Creating flexibility: depending on value of badgeText, the card badge will display different text or not display at all 
    if (props.openSpots === 0){
        badgeText = "SOLD OUT";
    } else if (props.location === "Online") {
        badgeText = "ONLINE";
    } 

    return (
        <div className="card">
        {badgeText && <div className="card-badge bold-text">{badgeText}</div>}
        {/* Recalling the notation for conditionals in JS */}
            <img className="card-img" src={new URL(`../assets/images/${props.coverImg}`, import.meta.url)} />
            {/* Importing images via import.meta.url due to folder nesting in assets and images folders as an alternative to utilizing the public folder to store all images */}
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

Card.propTypes = { // Setting the PropTypes to ensure the correct type of data being passed into our component
    // info: PropTypes.object, // This is utilized only if passed in props was packed into an object to be passed down, such as in info={info}
    coverImg: PropTypes.string,
    rating: PropTypes.number,
    reviewCount: PropTypes.number,
    location: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    openSpots: PropTypes.number
}

export default Card;

/* Other notes below on Image relative path issue fixing */

// Example --> <img src= { new URL("../images/asdf.png", import.meta.url)} className="randomImage"/>

// Try npm run build to make a distribution dist folder if you happen need it for other troubleshooting. We don't really want to commit these to github, however.

/* Another note: If I have trouble with vite incorrectly reading my images from the relative path not pointing to the correct parent file:

Go into vite.config.js file:
go into the export define config function

Potential workaround: --> Adding base: "./", into vite.config.js file 
// Whenever we open a project it is going to by default base it on the root directory of url, but one level up above the file we work on (to address intense levels of nesting) in current directory rather than random file in assets or src
// --> However, that won't be needed in my case, I've got multiple folders being nested so I will not be changing the vite.config.js file necessarily to cater for "./", and it seems that leaving the configurations as is will do.

// Should we aim to fix things up in base, we would theoretically run npm run build again to update the distributable folder.

*/