import axios from "axios";
import { useEffect, useState } from "react";

const useRooms = () => {
  const [allRooms, setAllRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url = `https://ass8-b8.vercel.app/api/v1/rooms/all`;
        const response = await axios.get(url);
        setAllRooms(response?.data?.data);
        window.scrollTo(0, 0);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return [allRooms, loading, setAllRooms];
};
export default useRooms;
