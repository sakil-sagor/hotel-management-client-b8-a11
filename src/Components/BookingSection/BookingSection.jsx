import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../Context/AuthProvider";
import blue from "../../assets/blue.gif";
import useAxios from "../../hooks/useAxios";
import SingleBooking from "./SingleBooking";

const BookingSection = () => {
  const { user } = useContext(AuthContext);
  const [allBokking, setAllBooking] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchData, setFetchData] = useState(0);
  const axiosSecure = useAxios();
  console.log(allBokking);
  // get all booking from database
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url = `https://ass8-b8.vercel.app/api/v1/rooms/booking/${user?.email}`;
        const response = await axiosSecure.get(url);
        setAllBooking(response?.data?.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [fetchData]);

  const handelDelete = async (productId, orderId, orderDate) => {
    const currentDate = new Date();
    const oneDaysBeforeOrderDate = new Date(orderDate);
    const bookingorderDate = new Date(orderDate);
    oneDaysBeforeOrderDate.setDate(oneDaysBeforeOrderDate.getDate() - 1);
    console.log(oneDaysBeforeOrderDate);
    console.log(currentDate);

    if (currentDate <= oneDaysBeforeOrderDate) {
      try {
        const response = await axiosSecure.delete(
          `https://ass8-b8.vercel.app/api/v1/rooms/booking?orderId=${orderId}&&productId=${productId}`
        );

        const data = response.data;
        console.log(data);

        if (data.status === "success") {
          toast.success("Successfully Removed");
          const remainingData = allBokking.filter(
            (booking) => booking?.item?._id !== orderId
          );
          setAllBooking(remainingData);
        }
      } catch (error) {
        console.error("Error while removing booking:", error);
      }
    } else {
      toast.error("Sorry, you cannot cancel this booking now!");
    }
  };

  return (
    <div>
      <div>
        <div>
          {/* <h1 className="text-left text-2xl text-blue-700 font-semibold mb-12">You Can Place Order from your Cart Products!</h1> */}
        </div>
        <hr />
        {loading && (
          <div className="flex justify-center items-center mt-24">
            <img className="w-24" src={blue} alt="" />
          </div>
        )}
        {!loading && (
          <div className="pt-12">
            {!allBokking.length ? (
              <div>
                <h1 className="text-center text-2xl text-sky-800 font-semibold mb-12">
                  Oops! You Have no any Booked Room .
                </h1>
                <div className="mt-24">
                  <h1 className="text-center text-2xl text-sky-800 font-semibold mb-12">
                    Want to make any Booking...?{" "}
                  </h1>
                  <p className="text-center">
                    <NavLink
                      className="transition duration-500 bg-sky-900 text-white px-10 py-3 rounded font-semibold hover:text-sky-800 hover:bg-white  d-button-solid border hover:border-indigo-900"
                      to="/rooms"
                    >
                      Find Now
                    </NavLink>
                  </p>
                </div>
              </div>
            ) : (
              <div>
                {allBokking.length && (
                  <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 px-2">
                      {allBokking?.map((booking, ind) => (
                        <SingleBooking
                          key={ind}
                          booking={booking}
                          ind={ind}
                          handelDelete={handelDelete}
                          fetchData={fetchData}
                          setFetchData={setFetchData}
                        ></SingleBooking>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
        <ToastContainer
          position="top-center"
          autoClose={1000}
          theme="colored"
        />
      </div>
    </div>
  );
};

export default BookingSection;
