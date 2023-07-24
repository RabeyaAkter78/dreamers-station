import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import College from "../College/College";
import Contact from "../Contact/Contact";
import Gallery from "../Gallery/Gallery";

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Gallery></Gallery>
          <College></College>
          <AboutUs></AboutUs>
          <Contact></Contact>  
        </div>
    );
};

export default Home;