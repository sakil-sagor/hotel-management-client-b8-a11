import React, { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../Context/AuthProvider';
import blue from "../../assets/blue.gif";

const ReviewAdd = ({ roomId, singleRoom, fetchData, setFetchData }) => {
    const { bookingDate } = singleRoom
    const { user } = useContext(AuthContext);
    const userEmail = user?.email;
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        rating: '',
        feadback: '',
        email: userEmail
    });


    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)

        // if (userEmail !== bookingDate?.email) {
        //     setLoading(false)
        //     return toast.error("Only booked user can make a review");
        // }
        fetch(`http://localhost:5000/api/v1/rooms/all/${roomId}`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === "success") {
                    toast.success("success");
                    setFetchData(fetchData + 1)

                }
                // setFormData({
                //     size: '',
                //     price: '',
                //     description: '',
                //     discount: '',
                //     image: ''

                // });

                setLoading(false)
                if (data.error) {
                    toast.error(data.error);
                }
            })


    };

    return (
        <div>
            <div className=' mt-4 '>

                <form className=" border shadow-xl shadow-blue-300 px-2 py-6 md:p-8 rounded-md" onSubmit={handleSubmit}>

                    <div className='flex flex-col w-full mt-2'>
                        <label className=' text-gray-600 font-semibold block ' htmlFor='description'>
                            Rating ( 0-5 )
                        </label>
                        <input required className='py-1 rounded-md  px-2  border border-gray-300' name="rating" type="number" step="0.01" value={formData.rating} onChange={handleInputChange} min="0" max="5" placeholder="Your rating ( 0 - 5 )" />
                    </div> <br />
                    <div className='flex flex-col w-full mt-2'>
                        <label className=' text-gray-600 font-semibold block ' htmlFor='feadback'>
                            Your Feadback
                        </label>
                        <textarea
                            required
                            className='py-1 rounded-md  px-2  border border-gray-300'
                            name='feadback'
                            id='feadback'
                            placeholder='Write Youre Feadback...'
                            cols='30'
                            rows='2'
                            value={formData.feadback}
                            onChange={handleInputChange}

                        ></textarea>
                    </div>
                    <div className=' mt-4 '>
                        <div className='flex items-center justify-center h-10  bg-indigo-500 rounded'>
                            <button className=' '>
                                <img className={`w-8 text-center  mx-auto ${!loading && "hidden"}`} src={blue} alt="" />
                            </button>
                            <button className={`w-full h-full  text-white py-18 ${loading && "hidden"}`}>
                                <span  >
                                    Add Feadback
                                </span>
                            </button>
                        </div>
                    </div>
                </form>
                <ToastContainer
                    position="top-right"
                    autoClose={2000}
                    theme="light"
                />
            </div>
        </div>
    );
};

export default ReviewAdd;