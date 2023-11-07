import UpdateBooking from "../UpdateBooking/UpdateBooking";

const IfBookeUser = ({ singleRoom, bookedSeat, userEmail, setFetchData, fetchData }) => {
    // console.log(userEmail);
    const orderDate = singleRoom?.bookingDate?.find(room => room?.email === userEmail)
    const formatCreatedAt = (newdate) => {
        const date = new Date(newdate);
        const day = date.getDate();
        const month = date.getMonth() + 1; // 'long' for the full month name
        const year = date.getFullYear();

        return `${day}-${month}-${year}`;
    };
    return (
        <div>
            <div className="text-center">
                {
                    (singleRoom?.totalSeat - bookedSeat) <= 0 ?
                        <p className="py-2 border text-white text-center font-bold text-xl bg-red-700 rounded-md">Unavailable</p>
                        :
                        <p className="py-2 border text-white text-center font-bold text-xl bg-green-700 rounded-md">Available</p>
                }
                <hr className="border-white border-2" />
                <p className="font-bold text-lg text-sky-800 mt-1">Your Booking Date is  {formatCreatedAt(orderDate?.date)} </p>
                <p className="font-bold text-lg text-sky-800 mt-1">Your Booking Seat :  {orderDate?.bookingSeat} </p>
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
                    <label htmlFor="my_modal_6" className="">Update Booking</label>
                </button>
                <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                <UpdateBooking className="modal" singleRoom={singleRoom} userEmail={userEmail} fetchData={fetchData} setFetchData={setFetchData}></UpdateBooking>
            </div>
        </div>
    );
};

export default IfBookeUser;