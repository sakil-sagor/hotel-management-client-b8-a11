import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../Context/AuthProvider";
import PrivateRoute from "../../Routes/PrivateRoute";
import useAxios from "../../hooks/useAxios";
import AllReviews from "./AllReviews";
import BookingRoomSummary from "./BookingRoomSummary";
import HotelFacility from "./HotelFacility";
import IfBookeUser from "./IfBookeUser";
import NotBookedUser from "./NotBookedUser";
import ReviewAdd from "./ReviewAdd";

const RoomDetails = () => {
    const [orederNow, setOrderNow] = useState(false)
    const { user } = useContext(AuthContext);
    const { roomId } = useParams();
    const [singleRoom, setSingleRoom] = useState({})
    const [loading, setLoading] = useState(true);
    const [bookDate, setBookDate] = useState(0)
    const [errorMsg, setErrorMsg] = useState('')
    const [fetchData, setFetchData] = useState(0)
    const [bookingSeat, setBookingSeat] = useState()
    const [bookedUser, setBookedUser] = useState([])
    const location = useLocation()
    const userEmail = user?.email;
    const userName = user?.displayName;
    const [bookedSeat, setBookedSeat] = useState(0)
    const navigate = useNavigate();
    const axiosSecure = useAxios();

    console.log(user);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                let url = `http://localhost:5000/api/v1/rooms/all/${roomId}`
                const response = await axiosSecure.get(url);
                console.log(response);
                setSingleRoom(response?.data?.data);
                setBookedSeat(response?.data?.seatTotal)
                setBookedUser(response?.data?.bookedUser)
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        }
        fetchProducts();
    }, [roomId, fetchData])

    // click for go to confirm booking page 
    const handleSubmit = (e) => {
        e.preventDefault();
        if ((singleRoom?.totalSeat - bookedSeat) < bookingSeat) {
            return toast.error("You select more than available seat!")
        }
        if (bookedUser.includes(userEmail)) {
            return toast.error("You Already book this room!")
        }
        return setOrderNow(true)
    }

    const handleBookNow = async (e) => {
        e.preventDefault();
        const bookingDate = {
            email: userEmail,
            bookingSeat: bookingSeat,
            date: bookDate,
            status: true,
        }
        if (bookDate) {
            try {
                const response = await axiosSecure.put(`http://localhost:5000/api/v1/rooms/all/${roomId}`, bookingDate, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const data = response.data;
                if (data.status === "success") {
                    setFetchData(fetchData + 1);
                    toast.success("success");
                    setLoading(false);
                    setOrderNow(false);
                    setBookingSeat('');
                    setBookDate('');
                } else if (data.error) {
                    toast.error("failed");
                    setLoading(false);
                }
            } catch (error) {
                console.error(error);
                toast.error("An error occurred");
                setLoading(false);
            }
        } else {
            toast.error("Please Select a date for booking");
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

                                    bookedUser?.includes(userEmail) ?
                                        <IfBookeUser singleRoom={singleRoom} bookedUser={bookedUser} bookedSeat={bookedSeat} userEmail={userEmail} fetchData={fetchData} setFetchData={setFetchData}></IfBookeUser>
                                        :
                                        <NotBookedUser singleRoom={singleRoom} loading={loading} bookedSeat={bookedSeat} setBookDate={setBookDate} bookDate={bookDate} bookingSeat={bookingSeat} setBookingSeat={setBookingSeat} handleSubmit={handleSubmit}></NotBookedUser>
                                }


                            </div>

                        </div>
                        <div className="col-span-2">
                            <div className="relative">
                                <img className="w-full" src={singleRoom?.image} alt="" />
                                <div className=" bg-black shadow-xl py-4 absolute  bottom-0 w-full opacity-70">
                                    <div className="flex justify-end pr-4">


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
                            <BookingRoomSummary loading={loading} user={user} bookingSeat={bookingSeat} singleRoom={singleRoom} bookDate={bookDate} handleBookNow={handleBookNow} formatCreatedAt={formatCreatedAt}></BookingRoomSummary>
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