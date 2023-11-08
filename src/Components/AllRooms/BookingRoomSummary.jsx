
import blue from '../../assets/blue.gif';
import method from '../../assets/method.jpg';
const BookingRoomSummary = ({ singleRoom, user, loading, handleBookNow, formatCreatedAt, bookDate, bookingSeat }) => {
    const { image, bookingDate, price, description } = singleRoom;






    return (
        <div>
            <div>
                <h1 className="text-center text-2xl text-sky-800 font-semibold mb-12"> Please fill up all the necessary inputs for your Valuable order.</h1>
                {/* <form onSubmit={handelPlaceOrder}> */}
                <div className="grid  md:grid-cols-2 gap-8 px-4">

                    <div className="px-2 md:px-4 py-6 border-2 text-lg">
                        <div className="lg:grid grid-cols-3 justify-between items-center">
                            <div className="flex lg:col-span-2">
                                <img className="w-24" src={image} alt="" />
                                <div className="text-sky-800 font-semibold ml-3">

                                    <p> {formatCreatedAt(bookDate)}</p>
                                    <p className='text-xs font-normal'>{description.slice(0, 100)}</p>

                                </div>

                            </div>

                            <div className="text-sky-800 flex lg:block justify-end font-semibold text-right lg:col-span-1">


                                <div className="text-sky-800 font-semibold  flex justify-between">
                                    <p className="text-right"> Price:   </p>
                                    <p className="text-right"> $ {price}  </p>
                                </div>
                                <div className="text-sky-800 font-semibold  flex justify-between">
                                    <p className="text-right"> Seat:   </p>
                                    <p className="text-right"> {bookingSeat}  </p>
                                </div>
                                <div className="text-sky-800 font-semibold  flex justify-between">
                                    <p className="text-right"> Duration:   </p>
                                    <p className="text-right"> 1 Day </p>
                                </div>
                            </div>
                        </div>

                        <hr className="my-6" />

                        <div className="text-sky-800 font-semibold">
                            <p className="text-right">Total : $ {price * bookingSeat}</p>
                        </div>
                    </div>
                    <div className="div p-8 border-2 ">
                        <div>
                            <input required className="py-2 px-4 w-full text-lg border-2 border-black  rounded-md " name="userName" type="text" value={user.displayName || 'N/A'} />
                        </div> <br />
                        <div>
                            <input required className="py-2 px-4 w-full text-lg border-2 border-black    rounded-md " name="email" type="email" value={user.email} />
                        </div>
                        <br />
                        <div>
                            <input required className="py-2 px-4 w-full text-lg border-2 border-black    rounded-md" name="phone" type="number" placeholder="Your Phone" />
                        </div> <br />
                        <div>
                            <input required className="py-2 px-4 w-full text-lg  border-2 border-black   rounded-md" name="address" type="text" step="0.01" placeholder="Your Address" />
                        </div>
                        <br />
                        <div >
                            <img className='m-auto block' src={method} alt="" />
                        </div>
                        <div className=' mt-4 '>
                            <form onSubmit={handleBookNow}>
                                <div className='flex items-center justify-center h-10  bg-sky-800 rounded'>
                                    <button className=' '>
                                        <img className={`w-8 text-center  mx-auto ${!loading && "hidden"}`} src={blue} alt="" />
                                    </button>
                                    <button className={`w-full h-full  text-white py-18 ${loading && "hidden"}`}>
                                        <span  >
                                            Make Order
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
                <br />
            </div>
        </div>
    );
};

export default BookingRoomSummary;