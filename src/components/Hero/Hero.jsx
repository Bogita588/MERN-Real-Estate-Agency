import SearchBar from "../../components/searchBar/SearchBar";

import "./Hero.scss";

function Hero() {
  return (
    <div className="heroContainer">
      <div className="heroTextContainer">
        <div className="heroWrapper">
          <h1 className="heroTitle">Find Real Estate & Get Your Dream Place</h1>
          <p>
          At BoggyEstate, we specialize in finding your perfect property.
           With our expertise and personalized service, we ensure that your 
           real estate journey is seamless and satisfying. 
          Trust us to deliver exceptional results tailored to your needs.
          </p>
          <SearchBar />
          
          <div className="heroBoxes">
            <div className="heroBox">
              <h1>3+</h1>
              <h2>Years of Excellence</h2>
            </div>
            <div className="heroBox">
              <h1>15</h1>
              <h2>Awards Gained</h2>
            </div>
            <div className="heroBox">
              <h1>100+</h1>
              <h2>Properties Available</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="heroImageContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Hero;
