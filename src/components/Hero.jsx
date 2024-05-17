const Hero = () => {
return(
<main className="hero container">
    <div className="hero-content">
       <h1>YOUR FEET DESERVES THE BEST</h1>
       <p>YOUR FEET DESERVES THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVES THE BEST AND WE'RE HERE TO HELP
        YOU WITH OUR SHOES.</p>
        <div className="hero-btn">
            <button>SHOP NOW</button>
            <button className="sec-btn">Category</button>
        </div>
        <div className="shopping">
            <p>Avaliable on</p>
            <div className="brand-icons">
                <img src="/images/flipkart.png" alt="flipkart logo"/>
                <img src="/images/amazon.png" alt="amazon logo"/>
            </div>
        </div>
    </div>
    <div className="hero-image">
        <img src="/images/shoe_image.png" alt="shoe-image"/>
    </div>
</main>
);
}
export default Hero;