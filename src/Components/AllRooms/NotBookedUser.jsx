import blue from '../../assets/blue.gif';

const NotBookedUser = ({ singleRoom, loading, bookDate, bookedSeat, bookingSeat, setBookingSeat, handleSubmit, setBookDate }) => {
    return (
        <div>
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
                        <div className="bg-white flex justify-between items-center my-3 p-3 rounded-md ">
                            <p className="text-lg">Avaiable Seat : </p>

                            <p className="   ">{singleRoom?.totalSeat - bookedSeat} <span className="text-xs"></span> </p>
                        </div>

                    </div>
                </div>
                <div className="flex-grow">
                    <form className=" border shadow-xl shadow-blue-300 px-2   rounded-md" onSubmit={handleSubmit}>
                        <div className='flex gap-2 w-full mt-2'>
                            <div className='w-1/2'>
                                <label className=' text-gray-600 font-semibold block  ' htmlFor='totalSeat'>
                                    Total Seat
                                </label>
                                <input
                                    className='py-1 px-2 w-full rounded-md border border-gray-300'
                                    type="text"
                                    required
                                    name="totalSeat"
                                    placeholder="totalSeat"
                                    value={bookingSeat}
                                    onChange={(e) => setBookingSeat(e.target.value)}



                                />
                            </div>
                            <div className='w-1/2'>
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
        </div>
    );
};

export default NotBookedUser;