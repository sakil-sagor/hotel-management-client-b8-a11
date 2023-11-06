import pro1 from '../../assets/pro1.png';

const AllReviews = ({ singleRoom }) => {
    console.log(singleRoom);
    return (
        <div>
            {
                singleRoom?.review?.map((room, ind) => (
                    <div key={ind}>
                        <div className="shadow-2xl p-4 bg-indigo-200 rounded-lg">
                            <div className="flex items-center">
                                <img style={{ cursor: 'pointer' }} className="w-12 rounded-full" src={pro1} alt="" />
                                <div className="ml-4">
                                    <p className="text-xl font-semibold">{room.email}</p>
                                    <p className="text-sm text-yellow-500">
                                        {/* <Rating
                                            initialRating={room?.rating}
                                            readonly
                                            emptySymbol="far fa-star star-icon"
                                            fullSymbol="fas fa-star star-icon"
                                        >
                                        </Rating> <span className="text-indigo-900 font-semibold">( {room?.rating} )</span> */}
                                    </p>

                                </div>
                                <div>

                                </div>
                            </div>
                            <div className="bg-gray-200 p-4 rounded-lg mt-4" style={{ height: "200px" }}>
                                <p><i className="fas fa-quote-left text-2xl"></i></p>
                                <p className="text-gray-500">
                                    {room.feadback}
                                </p>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    );
};

export default AllReviews;