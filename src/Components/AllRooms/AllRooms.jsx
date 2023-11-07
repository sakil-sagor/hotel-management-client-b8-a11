import axios from "axios";
import { useEffect, useState } from "react";
import { AiFillDatabase } from "react-icons/ai";
import Loading from "../Loading/Loading";
import SingleRome from "./SingleRome";


const AllRooms = () => {
    const [allRooms, setAllRooms] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [sortByPrice, setSortByPrice] = useState('')
    const [page, setPage] = useState(0);
    const [count, setCount] = useState(0)
    const [total, setTotal] = useState(0)
    const limit = 5;

    // url = `https://bloodserver.lifezet.com/api/v1/donor?donationStatus=active&fields=-password&sort=lastDonateDate,-totalDonate&page=${page + 1}&limit=${limit}&bloodGroup=${encodedValue}&address.district=${district}&address.thana=${thana}`
    useEffect(() => {
        let url = `http://localhost:5000/api/v1/rooms/all?sort=${sortByPrice}&page=${page + 1}&limit=${limit}`
        const fetchProducts = async () => {
            try {


                const response = await axios.get(url);
                setAllRooms(response?.data?.data?.result);
                setCount(response?.data?.data?.pageCount);
                setTotal(response?.data?.data?.totalRoom);
                window.scrollTo(0, 0);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }
        fetchProducts();
    }, [page, total, sortByPrice])
    // console.log(sortByPrice);

    // if (loading) {
    //     return <Loading></Loading>
    // }
    console.log(loading);
    return (
        <div>
            <div className="py-4">
                <h2 className="text-green-600 font-semibold text-2xl "><AiFillDatabase className="inline mb-1"></AiFillDatabase> All Rooms: </h2>
                <div className="flex items-center justify-between mt-4 px-2">
                    <p>Total Result: <span>{total}</span></p>
                    <div>
                        <label htmlFor="">Sort By </label>
                        {/* <input className="border border-gray-400 p-1 bg-blue-50 rounded" type="text" /> */}
                        <select
                            className="border  border-gray-300 py-2  text-gray-600 bg-blue-50 rounded-full px-3"
                            name='religion'
                            id='religion'
                            required
                            onChange={(e) => setSortByPrice(e.target.value)}
                        >
                            <option className='' value='' disabled selected>--Sort By Price--</option>
                            <option value='-price'>Price High to Low </option>
                            <option value='price'>Price Low to High</option>

                        </select>
                    </div>
                </div>
            </div>
            <hr />
            <div>
                {
                    loading ?
                        <Loading></Loading>
                        :
                        <div className="grid grid-cols-1 md:grid-cols-md lg:grid-cols-3 gap-4 ">
                            {
                                allRooms?.map(room => (
                                    <SingleRome key={room?._id} room={room}></SingleRome>
                                ))
                            }
                        </div>

                }

            </div>
            <div className=' ' >
                {
                    total ?
                        <>
                            <hr className='border-2 border-t-white mt-16' />
                            <div className=' mb-16  flex items-center mt-8' >
                                <p className='text-blue-800 font-semibold mr-3'> Total Page : </p>
                                <div>
                                    {
                                        [...Array(count).keys()].map(number => <button className={`${page === number ? "bg-blue-700 " : " bg-gray-500"} text-white rounded  mr-4 py-1 px-4`} key={number} onClick={() => setPage(number)}>{number + 1}</button>)
                                    }
                                </div>

                            </div>
                        </>

                        :
                        <div></div>
                }

            </div>
        </div>
    );
};
export default AllRooms;

