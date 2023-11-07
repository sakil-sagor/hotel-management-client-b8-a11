import { useState } from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const SingleRome = ({ room }) => {
    const { _id, image, price, discount, rating, review, bookingDate, totalSeat } = room;
    const [bookingSeat, setBookingSeat] = useState(0)


    const bookingSeatTotal = () => {
        let seatTotal = 0;
        bookingDate?.forEach((item) => {
            seatTotal += item.bookingSeat;
        });
        return seatTotal;
    }

    const makeRatingAvarage = (review) => {
        let sum = 0;
        review?.forEach((item) => {
            sum += parseFloat(item.rating);
        });

        return (sum / review.length);
    }
    return (
        <Link to={`/rooms/${_id}`} >
            <div className="relative">
                <div className="">
                    <img className="rounded-md" src={image} alt="" />
                </div>
                <div className=" bg-sky-800 py-2 px-2 absolute bottom-0 w-full opacity-90 flex justify-between items-center">
                    <div>
                        {
                            <del className={` text-gray-300 mb-2 ${discount === "0" && 'opacity-0'}`}> {price}TK / <span className="text-xs">day</span></del>
                        }
                        <p className="mb-2 text-white font-bold text-lg">{price - ((price * discount) / 100)}TK / <span className="text-xs">day</span></p>

                    </div>
                    <div className="text-white">
                        <Rating
                            className='text-sm text-yellow-500 mb-2'
                            initialRating={makeRatingAvarage(review)}
                            readonly
                            emptySymbol="far fa-star star-icon"
                            fullSymbol="fas fa-star star-icon"
                        >
                        </Rating>
                        <span className="text-white font-semibold">( {review.length} )</span>
                    </div>

                </div>
                {
                    bookingSeatTotal() >= totalSeat &&

                    <div className=" bg-red-800 py-2 px-2 absolute top-0 right-0 text-white font-semibold rounded-md flex justify-between items-center">
                        <p>Unavailable</p>
                    </div>
                }

            </div>
        </Link>
    );
};

export default SingleRome;