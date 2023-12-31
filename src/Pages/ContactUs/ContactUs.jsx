
import { NavLink } from 'react-router-dom';
import PageTitle from '../../Components/PageTitle';
import imgd2 from '../../assets/4.jpg';
import './ContacsUs.css';


const ContactUs = () => {
    return (
        <div>
            {/* contact us area  page title */}
            <div className="cotanct-bottom-banner text-white py-8">
                <PageTitle title="Contact Us" content="Conantc us for emergency services or Your Valuable Feedback"></PageTitle>
            </div>
            {/* contact us area  main body*/}
            <div className="py-12 md:py-16 lg:py-24 container full-width-all m-auto">

                <div className="grid grid-cols-12 gap-8 px-2 ">
                    <div className='col-span-12 md:col-span-4'>
                        <div>
                            <img className="w-full" src={imgd2} alt="" />
                        </div>
                        <div className="border-b-2 py-6 flex justify-start  items-center" >
                            <i class="fas fa-phone-alt text-indigo-500 text-4xl mr-4"></i>
                            <div className="text-gray-500">
                                <h3 className="font-bold">CALL US ANYTIME</h3>
                                <h3>+8801712365764</h3>
                            </div>
                        </div>
                        <div className="border-b-2 py-6 flex justify-start  items-center" >
                            <i class="fas fa-map-marker-alt text-indigo-500 text-4xl mr-4"></i>
                            <div className="text-gray-500">
                                <h3 className="font-bold"> VISIT US ANYTIME</h3>
                                <h3>27/4 NewTola,KishoreGanj,Dhaka</h3>
                            </div>
                        </div>
                        <div className="border-b-2 py-6 flex justify-start  items-center" >
                            <i class="far fa-calendar-check text-indigo-500 text-4xl mr-4"></i>
                            <div className="text-gray-500">
                                <NavLink to='/appointment'>
                                    <h3 className="cursor-pointer font-bold">EMERGENCY BOOKING</h3>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-12 md:col-span-8 bg-sky-200 rounded-xl shadow-2xl'>
                        <div className=" p-8 m-auto">
                            <h1 className="text-2xl pb-4">Leave us a feadback</h1>
                            <hr className="border border-gray-500 w-2/4" />
                            <form >
                                <div className="grid sm:grid-cols-2 gap-x-8 mt-8">
                                    <div className="mb-4">
                                        <label htmlFor="name" className="text-gray-500 "> Your Name</label>
                                        <br />
                                        <input type="text" id="name" required className="bg-white py-2 px-2 w-full rounded-2xl mt-2" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="email" className="text-gray-500 "> Your Email</label>
                                        <br />
                                        <input type="email" id="email" required className="bg-white py-2 px-2 w-full rounded-2xl mt-2" />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="doctor" className="text-gray-500 "> Subject</label>
                                    <br />
                                    <input type="text" id="doctor" required className="bg-white py-2 px-2 w-full rounded-2xl mt-2" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="message" required className="text-gray-500 "> Your Message</label>
                                    <br />
                                    <textarea className="bg-white py-2 px-2 w-full rounded-2xl mt-2" name="" id="message" cols="30" rows="4"></textarea>
                                </div>
                                <div className="text-center pt-4">
                                    <button className="rounded-full py-2 px-4 border text-sky-800 text-lg font-semibold border-indigo-900 hover:bg-sky-900 hover:text-white transition duration-500 ease-in-out " >Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
            {/* contact us area bottom emergency appoinment component */}

        </div>
    );
};

export default ContactUs;