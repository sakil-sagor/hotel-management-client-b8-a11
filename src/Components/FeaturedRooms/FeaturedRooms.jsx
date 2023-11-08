import axios from "axios";
import { useEffect, useState } from "react";

import SingleRome from "../AllRooms/SingleRome";
import Loading from "../Loading/Loading";


const FeaturedRooms = () => {
    const [allRooms, setAllRooms] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [sortByPrice, setSortByPrice] = useState('')
    const [page, setPage] = useState(0);
    const [count, setCount] = useState(0)
    const [total, setTotal] = useState(0)
    const limit = 6;


    useEffect(() => {
        let url = `https://assignment11ser.iitpark.com/api/v1/rooms/all?sort=${sortByPrice}&page=${page + 1}&limit=${limit}`
        const fetchProducts = async () => {
            try {


                const response = await axios.get(url);
                setAllRooms(response?.data?.data?.result);
                setCount(response?.data?.data?.pageCount);
                setTotal(response?.data?.data?.totalRoom);

                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }
        fetchProducts();
    }, [page, total, sortByPrice])
    return (
        <div className="my-16 container mx-auto px-2">
            <div className="services-page-banner">
                <div className="full-width-all container m-auto text-white">
                    <div>
                        <div className="px-2 lg:px-0 pb-12 text-center" >
                            <h1 className={`text-4xl md:text-5xl text-sky-800  `}>Featured Rooms Design</h1>
                            <br />
                            <hr className="w-24 border-indigo-900 border-t-2 mx-auto" />
                            <br />
                            <h4 className={`text-xl w-full sm:w3/4 text-sky-800   `}>Amazing Rooms design added recently in our catalog</h4>

                        </div >
                    </div >

                </div>
            </div>
            <div>
                {
                    loading ?
                        <Loading></Loading>
                        :
                        <div className="grid grid-cols-1 md:grid-cols-md lg:grid-cols-3 gap-4 ">
                            {
                                allRooms.slice(0, 6)?.map(room => (
                                    <SingleRome key={room?._id} room={room}></SingleRome>
                                ))
                            }
                        </div>

                }

            </div>

        </div>
    );
};

export default FeaturedRooms;