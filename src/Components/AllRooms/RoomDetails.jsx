import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { FaAirbnb, FaBroom, FaHiking, FaHome, FaParking, FaRestroom, FaSmokingBan, FaWifi } from "react-icons/fa";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../Context/AuthProvider";
import blue from "../../assets/blue.gif";
import AllReviews from "./AllReviews";
import ReviewAdd from "./ReviewAdd";

const RoomDetails = () => {

    const { user } = useContext(AuthContext);
    const { roomId } = useParams();
    const [singleRoom, setSingleRoom] = useState([])
    const [loading, setLoading] = useState(true);
    const [bookDate, setBookDate] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    const [fetchData, setFetchData] = useState(0)
    const location = useLocation()
    const userEmail = user?.email;
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
        const bookingDate = {
            email: userEmail,
            date: bookDate,
            status: true,
        }
        console.log(userEmail);

        if (!userEmail) {
            navigate("/registration", { state: location.pathname });


        }
        if (singleRoom?.bookingDate?.status) {

            return toast.error("This room is already booked!")

        }
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
    console.log(singleRoom);
    return (
        <div className="container mx-auto px-2 my-12">
            <div>
                <div className="grid grid-cols-1 lg:grid-cols-3">

                    <div className="bg-sky-700 lg:col-span-1">
                        <div>
                            {
                                singleRoom?.bookingDate?.status &&
                                <p>Booked for {singleRoom?.bookDate?.date}</p>
                            }

                            <form className=" border shadow-xl shadow-blue-300 px-2 py-6 md:p-8 rounded-md" onSubmit={handleSubmit}>
                                <div className='flex flex-col w-full mt-2'>
                                    <label className=' text-gray-600 font-semibold block ' htmlFor='date'>
                                        Date
                                    </label>
                                    <input
                                        className='py-1 px-2 w-full rounded-md border border-gray-300'
                                        type="date" step="1"
                                        // type='number'
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
                        <div>

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
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-4  ">
                        <div className="flex items-center justify-center gap-4 p-4  border shadow shadow-sky-400 ">
                            <FaWifi className="text-sky-800 text-4xl"></FaWifi>
                            <p>Free Wifi</p>
                        </div>
                        <div className="flex items-center  justify-center gap-4  p-4  border shadow shadow-sky-400 ">
                            <FaParking className="text-sky-800 text-4xl"></FaParking>
                            <p>Free Parking</p>
                        </div>
                        <div className="flex items-center justify-center gap-4   p-4  border shadow shadow-sky-400 ">
                            <FaHiking className="text-sky-800 text-4xl"></FaHiking>
                            <p>Facilities for disabled guests</p>
                        </div>
                        <div className="flex items-center  justify-center gap-4 p-4  border shadow shadow-sky-400 ">
                            <FaHome className="text-sky-800 text-4xl"></FaHome>
                            <p>Balcony</p>
                        </div>
                        <div className="flex items-center justify-center gap-4   p-4  border shadow shadow-sky-400 ">
                            <FaBroom className="text-sky-800 text-4xl"></FaBroom>
                            <p>Room service</p>
                        </div>
                        <div className="flex items-center justify-center gap-4  p-4  border shadow shadow-sky-400 ">
                            <FaSmokingBan className="text-sky-800 text-4xl"></FaSmokingBan>
                            <p>Non-smoking rooms</p>
                        </div>

                        <div className="flex items-center  justify-center gap-4  p-4  border shadow shadow-sky-400 ">
                            <FaAirbnb className="text-sky-800 text-4xl"></FaAirbnb>
                            <p>Air conditioning</p>
                        </div>
                        <div className="flex items-center  justify-center gap-4 p-4  border shadow shadow-sky-400 ">
                            <FaRestroom className="text-sky-800 text-4xl"></FaRestroom>
                            <p>Family rooms</p>
                        </div>
                    </div>

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
            <ToastContainer
                position="top-right"
                autoClose={2000}
                theme="light"
            />
        </div>
    );
};

export default RoomDetails;