import { FaMailBulk, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png'
const Footer = () => {
    return (
        <div>
            <footer className="footer px-10 py-4 border-t bg-base-content text-white  border-base-300 ">
                <div className="items-center grid-flow-col gap-10">
                    <img className="rounded-full h-24 w-24" src={logo} alt="" />
                    <div className=" flex-col ">
                        <p>Dreamers Station Ltd. <br />Providing reliable tech since 1992 </p>
                        <p>Dhaka,Bangladesh.</p>
                        <p className="flex items-center gap-2"><FaMailBulk></FaMailBulk><span>dreamersstation@gmail.com</span></p>
                        <p className="flex items-center gap-2"><FaPhone></FaPhone><span>01234567890</span></p>

                    </div>

                </div>
                <div className="md:place-self-center md:justify-self-end">
                    <div>
                    <p className="font-bold">explore</p>
                    <hr />
                    </div>
                    <div className="grid grid-flow-col gap-4">
                        <Link to="/" className="link link-hover">Home</Link>
                        <Link to="/college" className="link link-hover">College</Link>
                        <Link to="/admission" className="link link-hover">Admission</Link>
                        <Link to="/class" className="link link-hover">My Class</Link>
                    </div>
                </div>
            </footer>
            <footer className="footer footer-center p-4  bg-base-content text-white mb-12">
                <div>
                    <p>Copyright © 2023 - All right reserved by This Industries Ltd</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;