import React from 'react';
import { FaPaintBrush, FaUserGraduate, FaUserTie } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import s3img from "../../assets/fort.jpg";




const AllSummarySection = () => {
    return (
        <div className='py-16'>
            <div className='container mx-auto px-2'>
                <div>


                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 text mt-16'>

                    <div className=' '>
                        <div className='grid grid-cols-2 gap-x-10'>
                            <div className=' bg-white border rounded-md py-8 text-center shadow-lg md:mb-8' >

                                <FaHouse className='mx-auto text-sky-700 text-6xl'></FaHouse>

                                <p className='text-gray-500 font-bold text-4xl my-4'>100+</p>
                                <p className='text-gray-500 font-semibold '>luxurious Room</p>

                            </div>
                            <div className=' bg-white border rounded-md py-8 text-center shadow-lg md:mt-8' >

                                <FaUserTie className='mx-auto text-sky-700  text-6xl'></FaUserTie>

                                <p className='text-gray-500 font-bold text-4xl my-4'>5000+</p>
                                <p className='text-gray-500 font-semibold '>Yearly Clients</p>

                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-x-10'>
                            <div className=' bg-white border rounded-md py-8 text-center shadow-lg md:mb-8' >

                                <FaUserGraduate className='mx-auto text-sky-700 text-6xl'></FaUserGraduate>

                                <p className='text-gray-500 font-bold text-4xl my-4'>50+</p>
                                <p className='text-gray-500 font-semibold '>Experienced Staff</p>

                            </div>
                            <div className=' bg-white border rounded-md py-8 text-center shadow-lg md:mt-8' >

                                <FaPaintBrush className='mx-auto text-sky-700 text-6xl'></FaPaintBrush>

                                <p className='text-gray-500 font-bold text-4xl my-4'>500+</p>
                                <p className='text-gray-500 font-semibold '>Feadback</p>

                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-end text-right justify-center'>
                        <div className='w-2/3'>
                            <img className='  rounded-bl-full' src={s3img} alt="" />
                        </div>
                        <h2 className='font-bold text-3xl text-left md:text-right text-sky-700 my-8 '> 7 years experience </h2>
                        <div>
                            <p className='font-semibold text-left md:text-right'>Welcome to Dream Hotel Management, where luxury and comfort meet to create unforgettable experiences. We are not just a hotel; we are your gateway to a world of exquisite hospitality, where every moment is designed to surpass your expectations.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AllSummarySection;