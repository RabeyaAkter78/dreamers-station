import { FaAward, FaRegSmile, FaUserAlt, FaUserShield } from "react-icons/fa";
import SectionTitle from "../SectionTitle/SectionTitle";
import './About.css'


const AboutUs = () => {
    return (

        <div className="my-20">
            <SectionTitle
                heading={"About us"}
                subHeading={"Lets Know Something About Us"}
            >
            </SectionTitle>
            <div className="about-us bg-slate-800 bg-fixed pt-12 my-20">
                <div className="md:flex justify-center items-center pb-20 px-36 pt-12 bg-slate-500 bg-opacity-60 text-white">

                    <div className="md:flex justify-center items-center pb-20 px-36 pt-12 inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 bg-slate-900 bg-opacity-60 text-white">
                        
                        <div className="md:ml-12">
                            <h4 className="text-2xl uppercase">Welcome to Dreamers Station!</h4>
                            <p>Dreamers Station Admissions Booking is a user-friendly platform dedicated to simplifying the admission process for students and parents seeking enrollment in various educational institutions. With our expert guidance and comprehensive support, we strive to make the admission journey stress-free and efficient. Our platform features a diverse range of educational institutions, ensuring that you find the perfect fit for your aspirations. We prioritize security and confidentiality, providing real-time updates on admission status and important dates. At Dreamers Station Admissions Booking, we are committed to excellence and believe in empowering students to make informed decisions about their academic future. Join us on this transformative journey as we open the doors to endless opportunities in education. Welcome to Dreamers Station Admissions Booking – Where Your Dreams Take Flight!</p>
                        </div>
                    </div>
                </div>
                {/* stats */}
                <div className="stats shadow flex justify-center items-center my-16 shadow shadow-lg shadow-black bg-pink-50">

                    <div className="stat">

                        <div className="stat-title "><FaRegSmile className="h-[40px] w-[40px] text-yellow-400 text-center"></FaRegSmile></div>
                        <div className="stat-value">3000</div>
                        <div className="stat-desc">Happy clients</div>
                    </div>

                    <div className="stat">

                        <div className="stat-title"><FaUserAlt className="h-[40px] w-[40px] text-yellow-400 text-center"></FaUserAlt></div>
                        <div className="stat-value">4,200</div>
                        <div className="stat-desc">New Clients</div>
                    </div>

                    <div className="stat">

                        <div className="stat-title"><FaUserShield className="h-[40px] w-[40px] text-yellow-400 text-center"></FaUserShield></div>
                        <div className="stat-value">1,200</div>
                        <div className="stat-desc">↘︎ New registers</div>
                    </div>
                    <div className="stat">
                        <div className="stat-title"><FaAward className="h-[40px] w-[40px] text-yellow-400 text-center"></FaAward></div>
                        <div className="stat-value">1,200</div>
                        <div className="stat-desc">Awards</div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default AboutUs;