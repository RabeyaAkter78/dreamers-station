import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Gallery from "../Gallery/Gallery";

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Gallery></Gallery>
          <AboutUs></AboutUs>
          <Contact></Contact>  
        </div>
    );
};

export default Home;