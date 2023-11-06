import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../Context/AuthProvider";
import blue from "../../assets/blue.gif";
import SingleBooking from "./SingleBooking";


const BookingSection = () => {
    const { user } = useContext(AuthContext);
    const [allBokking, setAllBooking] = useState([])
    const [loading, setLoading] = useState(true);
    const [fetchData, setFetchData] = useState(0)

    // get all booking from database 
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                let url = `http://localhost:5000/api/v1/rooms/booking/${user?.email}`
                const response = await axios.get(url);
                setAllBooking(response?.data?.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        }
        fetchProducts();
    }, [fetchData])


    // make the delete for booking 
    const handelDelete = (id) => {
        console.log(id)
        let link = `https://tenthserver.iitpark.com/addToCart?email=${user?.email}&&id=${id}`
        console.log(link)
        fetch(`http://localhost:5000/api/v1/rooms/booking?email=${user?.email}&&id=${id}`, {
            method: "PATCH",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.data.modifiedCount > 0) {
                    toast.success("Successfully Removed");
                    const remainingData = allBokking.filter(booking => booking._id !== id)
                    setAllBooking(remainingData)
                }
            });
    }
    console.log(allBokking);
    return (
        <div>
            <div>
                <div>
                    {/* <h1 className="text-left text-2xl text-blue-700 font-semibold mb-12">You Can Place Order from your Cart Products!</h1> */}
                </div>
                <hr />
                {
                    loading && <div className="flex justify-center items-center mt-24">

                        <img className='w-24' src={blue} alt="" />

                    </div>
                }
                {
                    !loading &&
                    <div className='pt-12'>
                        {
                            !allBokking.length ?
                                <div>
                                    <h1 className="text-center text-2xl text-indigo-900 font-semibold mb-12">Oops! You Have no any Booked Room .</h1>
                                    <div className="mt-24">
                                        <h1 className="text-center text-2xl text-indigo-900 font-semibold mb-12">Want to make any Booking...?   </h1>
                                        <p className="text-center"><NavLink className="transition duration-500 bg-indigo-900 text-white px-10 py-3 rounded font-semibold hover:text-indigo-900 hover:bg-white  d-button-solid border hover:border-indigo-900" to='/rooms'>Find Now</NavLink></p>
                                    </div>
                                </div>

                                :
                                <div>
                                    {
                                        allBokking.length &&
                                        <div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 px-2">

                                                {
                                                    allBokking?.map((booking, ind) => (
                                                        <SingleBooking key={ind} booking={booking} handelDelete={handelDelete}></SingleBooking>
                                                    ))
                                                }
                                            </div>
                                        </div>


                                    }
                                </div>

                        }
                    </div>
                }
                <ToastContainer
                    position="top-right"
                    autoClose={2000}
                    theme="light"
                />
            </div>
        </div>
    );
};

export default BookingSection;