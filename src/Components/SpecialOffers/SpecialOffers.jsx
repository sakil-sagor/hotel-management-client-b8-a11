import { Link } from 'react-router-dom';
import special from '../../assets/specail.png';

const SpecialOffers = () => {
    return (
        <div className='my-12'>
            <div className='grid grid-cols-2 items-center'>
                <div className='p-2 bg-sky-900  rounded-full'>
                    <img className='h-96 rounded-full ' src={special} alt="" />
                </div>
                <div className='text-right'>
                    <div className='flex justify-center my-4 text-5xl md:text-6xl italic font-bold text-yellow-500'>
                        <h2 className=' '>12</h2>
                        <div>:</div>
                        <h2>12</h2>
                        <p className='text-sky-900  text-sm font-bold my-4'>Only For Pre Booking</p>

                    </div>
                    <h3 className='text-sky-900 text-2xl md:text-4xl text-center font-bold mb-4'>Independent Day Festible</h3>
                    <p className='text-yellow-400 text-4xl font-bold text-center '>Best Offer</p>

                    <Link to='/rooms'>
                        <button className='bg-white text-center mx-auto block text-xl px-4 py-3 mt-4 rounded font-bold border text-sky-900 hover:bg-sky-900 hover:text-white duration-300 border-sky-900'>
                            Exprole Now
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default SpecialOffers;