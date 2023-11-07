import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../Context/AuthProvider";
import PrivateRoute from "../../Routes/PrivateRoute";
import blue from "../../assets/blue.gif";
import AllReviews from "./AllReviews";
import BookingRoomSummary from "./BookingRoomSummary";
import HotelFacility from "./HotelFacility";
import ReviewAdd from "./ReviewAdd";

const RoomDetails = () => {
    const [orederNow, setOrderNow] = useState(false)
    const { user } = useContext(AuthContext);
    const { roomId } = useParams();
    const [singleRoom, setSingleRoom] = useState([])
    const [loading, setLoading] = useState(true);
    const [bookDate, setBookDate] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    const [fetchData, setFetchData] = useState(0)
    const location = useLocation()
    const userEmail = user?.email;
    const userName = user?.displayName;
    const navigate = useNavigate();



    useEffect(() => {
        const fetchProducts = async () => {
            try {
                let url = `http://localhost:5000/api/v1/rooms/all/${roomId}`
                const response = await axios.get(url);
                setSingleRoom(response?.data?.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        }
        fetchProducts();
    }, [roomId, fetchData])



    console.log(singleRoom);

    const handleSubmit = (e) => {
        e.preventDefault();
        // if (singleRoom?.bookingDate?.status) {
        //     return toast.error("This room is already booked!")
        // }
        // if (!userEmail) {
        //     navigate("/registration", { state: location.pathname });
        // }
        return setOrderNow(true)
    }
    // book now area 
    const handleBookNow = (e) => {
        e.preventDefault();
        const bookingDate = {
            email: (userEmail),
            date: bookDate,
            status: true,
        }
        if (singleRoom?.bookingDate?.status) {
            return toast.error("This room is already booked!")
        }
        console.log(bookingDate);
        if (bookDate) {
            fetch(`http://localhost:5000/api/v1/rooms/all/${roomId}`, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(bookingDate)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.status === "success") {
                        setFetchData(fetchData + 1)
                        toast.success("success");
                        setLoading(false)
                    }
                    if (data.error) {
                        toast.error(" failed");
                        setLoading(false)
                    }
                })
        } else {
            toast.error("Please Select a date for booking")
        }
    }

    // date fixer 
    const formatCreatedAt = (newdate) => {
        const date = new Date(newdate);
        const day = date.getDate();
        const month = date.getMonth() + 1; // 'long' for the full month name
        const year = date.getFullYear();

        return `${day}-${month}-${year}`;
    };
    return (
        <div className="container mx-auto px-2 my-12">
            {
                !orederNow &&


                <div>
                    <div className="grid grid-cols-1 lg:grid-cols-3">

                        <div className="bg-sky-100 lg:col-span-1 rounded-md">
                            <div>
                                {
                                    singleRoom?.bookingDate?.status ?
                                        <div className="text-center">
                                            <p className="py-2 border text-white text-center font-bold text-xl bg-red-700 rounded-md">Unavailable</p>
                                            <p className="text-lg my-2">Booked for {formatCreatedAt(singleRoom?.bookingDate?.date)}</p>
                                            <hr className="border-white border-2" />
                                            <div className="my-3 p-4 flex-">
                                                <div className="text-black font-semibold ">
                                                    <div className="bg-white flex justify-between items-center px-3 rounded-md">
                                                        <p className="text-lg">Price : </p>
                                                        {
                                                            singleRoom.discount > 0 ?
                                                                <div>
                                                                    <del className="  mb-2 "> {singleRoom?.price}TK / <span className="text-xs">day</span></del>
                                                                    <p className="mb-2 ">{singleRoom?.price - ((singleRoom?.price * singleRoom?.discount) / 100)}TK / <span className="text-xs">day</span></p>
                                                                </div>
                                                                :
                                                                <div className="py-2">

                                                                    <p className="mb-2 ">{singleRoom?.price - ((singleRoom?.price * singleRoom?.discount) / 100)}TK / <span className="text-xs">day</span></p>
                                                                </div>
                                                        }

                                                    </div>
                                                    <div className="bg-white flex justify-between items-center my-3 p-3 rounded-md ">
                                                        <p className="text-lg">Room Size : </p>

                                                        <p className="   ">{parseInt(singleRoom?.size)}``<span className="text-xs">feet</span> </p>
                                                    </div>
                                                    <div className="bg-white flex justify-between items-center my-3 p-3 rounded-md ">
                                                        <p className="text-lg">Discount : </p>

                                                        <p className="   ">{parseInt(singleRoom?.discount)} <span className="text-xs">% Eid Offer</span> </p>
                                                    </div>

                                                </div>
                                            </div>
                                            <button className={`w-full font-semibold text-white py-2 rounded-md bg-sky-700 hover:bg-sky-800 `}>
                                                Update Booking Date
                                            </button>
                                        </div>

                                        :
                                        <div className="flex flex-col">
                                            <p className="py-2 border text-white text-center font-bold text-xl bg-green-700 rounded-md">Available</p>
                                            <hr className="border-white border-2" />
                                            <div className="my-3 p-4 flex-">
                                                <div className="text-black font-semibold ">
                                                    <div className="bg-white flex justify-between items-center px-3 rounded-md">
                                                        <p className="text-lg">Price : </p>
                                                        {
                                                            singleRoom.discount > 0 ?
                                                                <div>
                                                                    <del className="  mb-2 "> {singleRoom?.price}TK / <span className="text-xs">day</span></del>
                                                                    <p className="mb-2 ">{singleRoom?.price - ((singleRoom?.price * singleRoom?.discount) / 100)}TK / <span className="text-xs">day</span></p>
                                                                </div>
                                                                :
                                                                <div className="py-2">

                                                                    <p className="mb-2 ">{singleRoom?.price - ((singleRoom?.price * singleRoom?.discount) / 100)}TK / <span className="text-xs">day</span></p>
                                                                </div>
                                                        }

                                                    </div>
                                                    <div className="bg-white flex justify-between items-center my-3 p-3 rounded-md ">
                                                        <p className="text-lg">Room Size : </p>

                                                        <p className="   ">{parseInt(singleRoom?.size)}``<span className="text-xs">feet</span> </p>
                                                    </div>
                                                    <div className="bg-white flex justify-between items-center my-3 p-3 rounded-md ">
                                                        <p className="text-lg">Discount : </p>

                                                        <p className="   ">{parseInt(singleRoom?.discount)} <span className="text-xs">% Eid Offer</span> </p>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="flex-grow">
                                                <form className=" border shadow-xl shadow-blue-300 px-2   rounded-md" onSubmit={handleSubmit}>
                                                    <div className='flex flex-col w-full mt-2'>
                                                        <label className=' text-gray-600 font-semibold block ' htmlFor='date'>
                                                            Date
                                                        </label>
                                                        <input
                                                            className='py-1 px-2 w-full rounded-md border border-gray-300'
                                                            type="date" step="1"
                                                            // type='number'
                                                            required
                                                            name="date"
                                                            min="0" max="100"
                                                            placeholder=" Discount ( 0 - 100 )"
                                                            value={bookDate}
                                                            onChange={(e) => setBookDate(e.target.value)}

                                                        />
                                                    </div>
                                                    <div className=' mt-4 '>
                                                        <div className='flex items-center justify-center h-10  bg-indigo-500 rounded'>
                                                            <button className=' '>
                                                                <img className={`w-8 text-center  mx-auto ${!loading && "hidden"}`} src={blue} alt="" />
                                                            </button>
                                                            <button className={`w-full h-full  text-white py-18 ${loading && "hidden"}`}>
                                                                <span  >
                                                                    Book Now
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                }


                            </div>

                        </div>
                        <div className="col-span-2">
                            <div className="relative">
                                <img className="w-full" src={singleRoom?.image} alt="" />
                                <div className=" bg-black shadow-xl py-4 absolute  bottom-0 w-full opacity-70">
                                    <div className="flex justify-between">
                                        <p className="text-white font-semibold  ">Size: {parseInt(singleRoom?.size)}``<span className="text-xs">feet</span> </p>

                                        {
                                            singleRoom.discount > 0 ?
                                                <div>
                                                    <del>
                                                        <p className="text-white  text-xs mb-1 ">{singleRoom?.price}TK / <span className="text-xs">day</span></p>
                                                    </del>

                                                    <p className="text-white font-semibold  ">{singleRoom?.price - ((singleRoom?.price * singleRoom?.discount) / 100)}TK / <span className="text-xs">day</span></p>
                                                </div>
                                                :
                                                <p className="text-white font-semibold  ">{singleRoom?.price}TK / <span className="text-xs">day</span></p>
                                        }
                                    </div>

                                </div>
                                {
                                    singleRoom?.bookingDate?.status &&

                                    <div className="absolute top-0 bg-red-700 inline right-0 text-white px-4 py-2 rounded-md font-bold uppercase">
                                        <p>Booked</p>
                                    </div>
                                }

                            </div>
                        </div>
                    </div>
                    <div className="my-4">
                        <HotelFacility></HotelFacility>

                        <div className="min-h-[500px] mt-12">
                            <Tabs>
                                <TabList>
                                    <Tab>Description</Tab>
                                    <Tab>FAQ</Tab>
                                    <Tab>Review</Tab>
                                </TabList>
                                <TabPanel>
                                    <div className="text-gray-700 my-14">
                                        <p className="mb-4">{singleRoom?.description?.slice(0, 300)}</p>
                                        <p className="mb-4">{singleRoom?.description?.slice(300, 500)}</p>
                                        <p className="mb-4">{singleRoom?.description?.slice(400, 300000)}</p>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <h2>Comming Soon...</h2>
                                </TabPanel>
                                <TabPanel>
                                    <ReviewAdd singleRoom={singleRoom} roomId={roomId} fetchData={fetchData} setFetchData={setFetchData}></ReviewAdd>
                                    <hr className="my-4" />
                                    <AllReviews singleRoom={singleRoom} ></AllReviews>
                                </TabPanel>
                            </Tabs>
                        </div>
                    </div>

                </div>
            }

            <div>
                {
                    orederNow &&
                    <PrivateRoute>
                        <div className="duration-200">
                            <BookingRoomSummary loading={loading} user={user} singleRoom={singleRoom} bookDate={bookDate} handleBookNow={handleBookNow} formatCreatedAt={formatCreatedAt}></BookingRoomSummary>
                        </div>
                    </PrivateRoute>
                }
            </div>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                theme="light"
            />
        </div>
    );
};

export default RoomDetails;