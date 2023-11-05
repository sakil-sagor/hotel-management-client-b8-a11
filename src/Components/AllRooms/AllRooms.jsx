import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";


const AllRooms = () => {
    const [allRooms, setAllRooms] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                let url = `http://localhost:5000/api/v1/rooms/all`
                const response = await axios.get(url);
                setAllRooms(response?.data?.data);
                window.scrollTo(0, 0);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }
        fetchProducts();
    }, [loading])

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
                {
                    allRooms.map(room => (
                        <Link key={room._id} to={`/rooms/${room?._id}`}>
                            <div>
                                <div className="">
                                    <img className="rounded-md" src={room.image} alt="" />
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};
export default AllRooms;

