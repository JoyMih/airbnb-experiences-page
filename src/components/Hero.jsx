function Hero() {
    return (
        <div className="hero-component">
            <div className="image-grid">
                <img src="./src/assets/images/photo-grid.png" className="hero--logo" />
            {/* </div> */}
            {/* <div className="experience-section"> */}
                <h1 className="hero-header">Online Experiences</h1>
                <p className="hero-text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
            </div>
        </div>
    )
}

export default Hero;