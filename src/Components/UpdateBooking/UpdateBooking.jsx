import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import blue from '../../assets/blue.gif';


const UpdateBooking = ({ singleRoom, userEmail, fetchData, setFetchData }) => {
    const { _id, bookingDate } = singleRoom;
    console.log(_id);
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        productId: _id,
        email: userEmail,
        date: '',
    });
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formData);
        setLoading(true)

        // Replace this with your API endpoint to update the product data
        fetch(`http://localhost:5000/api/v1/rooms/booking/${userEmail}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 'success') {
                    setFetchData(fetchData + 1)
                    toast.success("Successfully updated the Booking")
                    setLoading(false)
                }
            })
            .catch((error) => {
                console.error('Error updating Booking:', error);
                setLoading(false)
            });

    }


    return (
        <div className="modal">
            <div className="modal-box">
                <div>
                    {
                        bookingDate?.map(booking =>
                            <div>
                                <div>
                                    <form onSubmit={handleSubmit}>


                                        <div className='w-full'>
                                            <label className=' text-gray-600 font-semibold block ' htmlFor='date'>
                                                Name
                                            </label>
                                            <input
                                                className='py-1 w-full px-2 rounded-md border border-gray-300'
                                                required
                                                type="date"
                                                name="date"
                                                placeholder="input Updated date here"
                                                value={formData?.date}
                                                onChange={handleInputChange}

                                            />
                                        </div>

                                        <div className=' mt-8'>
                                            <div className='flex items-center justify-center h-10  bg-indigo-500 rounded'>
                                                <button className=' '>
                                                    <img className={`w-8 text-center  mx-auto ${!loading && "hidden"}`} src={blue} alt="" />
                                                </button>
                                                <button className={`w-full h-full  text-white py-18 ${loading && "hidden"}`}>
                                                    <span  >
                                                        Update Booking
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )
                    }
                </div>

                <div className="modal-action">
                    <label htmlFor="my_modal_6" className="btn">Close!</label>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                theme="light"
            />
        </div>
    );
};

export default UpdateBooking;