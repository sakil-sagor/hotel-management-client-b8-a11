import React from 'react';
import './BookingShortcut.css';
const BookingShortcut = () => {
    return (
        <div className="d-bottom-area">
            <div className="full-width-all container m-auto text-center text-white py-24">
                <h2 className="text-2xl">Need All Updates and Hot Deals from Us!</h2>
                <h1 className="text-4xl my-8 font-bold">Just Make A Subscribe with Email  & You're Done!</h1>
                <div>
                    <input className='border-2 py-2 px-4 text-lg pr-12 text-black' type="text" />
                    <button className="border-2 text-lg font-bold py-2 px-2 mt-4 duration-300 rounded-rl hover:bg-white hover:border-l-sky-900 hover:text-sky-900">Make an Booking</button>
                </div>

            </div>
        </div>
    );
};

export default BookingShortcut;