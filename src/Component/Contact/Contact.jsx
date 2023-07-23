import { useRef, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import conatactImg from '../../assets/images/contact.png'
const Contact = () => {
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ledbr2k','template_4p7z78v', form.current, 'YfYwkP5jqA14U7iM5')
            .then((result) => {
                console.log(result.text);
                setIsFormSubmitted(true);
                form.current.reset();
                toast.success("Message sent successfully!");
            }, (error) => {
                console.log(error.text);
                toast.error("Failed to send message. Please try again.")
            });
    };
    return (
        <section>
            <div className="w-full">
                <div data-aos="fade-up"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    className="w-full h-auto flex flex-col md:flex-col lg:flex-row justify-between gap-10 lg:gap-4 p-5 lg:p-2 ">

                    <div className="w-full lg:w-[35%] h-full bg-gradient-to-r from-slate-700 to-slate-950 p-2 shadow-2xl flex flex-col gap-8 justify-center">
                        <img className="rounded-lg " src={conatactImg} alt="" />
                        <div className="flex flex-col gap-4 px-5 lg:px-2">
                            <h3 className="text-2xl font-bold text-white">Dreamers Station</h3>
                            <p className="text-lg font-normal text-gray-400">Dhaka,Bangladesh.</p>

                            <p className="text-base text-gray-400 flex items-center gap-2"
                            > Phone: <span className="text-yellow-50">+88 0123-4256485</span></p>
                            <p className="text-base text-gray-400 flex items-center gap-2"
                            > Email: <span className="text-yellow-50">dreamersstation.com</span></p>
                            <div >
                                <h2 className="underline text-base uppercase mb-4">Find Us In</h2>
                                <h3 className=" text-white">Feel Free to Contact Us</h3>
                                <div className="flex  gap-4">
                                    <a href="">
                                        <span className="w-16 h-16 bg-black hover:text-blue-600 hover:bg-black bg-opacity-25 text-gray-200 text-xl inline-flex justify-center items-center rounded-lg"><FaFacebook></FaFacebook></span>
                                    </a>
                                    <a href="">
                                        <span className="w-16 h-16 bg-black hover:text-blue-600 hover:bg-black bg-opacity-25 text-gray-200 text-xl inline-flex justify-center items-center rounded-lg"><FaLinkedin></FaLinkedin></span>
                                    </a>
                                    <a href="">
                                        <span className="w-16 h-16 bg-black hover:text-blue-600 hover:bg-black bg-opacity-25 text-gray-200 text-xl inline-flex justify-center items-center rounded-lg"><FaTwitter></FaTwitter></span>
                                    </a>


                                </div>

                            </div>

                        </div>
                    </div>

                    <div className="w-full lg:w-[60%] h-full py-10 bg-gradient-to-r from-slate-700 to-slate-950 shadow-2xl flex flex-col gap-8 p-8 rounded-lg">
                        <form ref={form} onSubmit={sendEmail} className="w-full" >
                            <div className="flex gap-10 mb-4">
                                <div className="w-full flex flex-col gap-4">
                                    <p className="text-sm text-gray-400 uppercase">Your Name</p>
                                    <input className="w-full h-12 rounded-lg border-b-[1px] border-b-gray-400 bg-slate-600 text-white px-4 active:outline-none" type="text" name="from_name" required />
                                </div>
                                <div className="w-1/2 flex flex-col gap-4">
                                    <p className="text-sm text-gray-400 uppercase">phone number</p>
                                    <input className="w-full h-12 rounded-lg border-b-[1px] border-b-gray-400 bg-slate-600 text-white px-4 active:outline-none" type="text" name="from_phone" />
                                </div>
                            </div>
                            <div >
                                <p className="text-sm text-gray-400 uppercase">Email</p>
                                <input className="w-full h-12 rounded-lg border-b-[1px] border-b-gray-400 bg-slate-600 text-white px-4 active:outline-none mb-4 " type="email" name="from_name" required />
                            </div>
                            <div >
                                <p className="text-sm text-gray-400 uppercase">Subject</p>
                                <input className="w-full h-12 rounded-lg border-b-[1px] border-b-gray-400 bg-slate-600 text-white px-4 active:outline-none mb-10" type="text" required />
                            </div>
                            <div >
                                <p className="text-sm text-gray-400 uppercase">Message</p>
                                <textarea className="w-full h-48 rounded-lg border-b-[1px] border-b-gray-400 bg-slate-600 text-white px-4 active:outline-none mb-10" name="message" />
                            </div>
                            <div>
                                <input className='w-full  rounded-lg  border-b-gray-400 bg-slate-600 text-white px-4 active:outline-none mb-10 btn btn-outline border-0 border-b-4 border-l-2  shadow-md shadow-2xl shadow-black ' type="submit" value="Send" />
                            </div>
                        </form>
                    </div>


                </div>
            </div>
            {isFormSubmitted && (
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
            )}
        </section>
    );
};

export default Contact;