import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import College from "../College/College";
import Contact from "../Contact/Contact";
import Gallery from "../Gallery/Gallery";
import Review from "../Review/Review";

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Gallery></Gallery>
          <College></College>
          <Review></Review>
          <AboutUs></AboutUs>
          <Contact></Contact>  
        </div>
    );
};

export default Home;