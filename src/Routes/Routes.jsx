import { createBrowserRouter } from "react-router-dom";
import ConfirmBookNow from "../Components/AllRooms/ConfirmBookNow";
import RoomDetails from "../Components/AllRooms/RoomDetails";
import Registration from "../Components/Registration/Registration";
import Main from "../Layout/Main";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import AddRooms from "../Pages/Dashboard/AddRooms/AddRooms";
import ErroPage from "../Pages/ErrorPage/ErroPage";
import Gallery from "../Pages/Gallery/Gallery";
import Home from "../Pages/Home/Home";
import MyBookings from "../Pages/MyBookings/MyBookings";
import RoomsPage from "../Pages/RoomsPage/RoomsPage";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErroPage></ErroPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/rooms",
                element: <RoomsPage></RoomsPage>,
            },
            {
                path: "/rooms/:roomId",
                element: <RoomDetails></RoomDetails>,
            },
            {
                path: "/rooms/confirmbooking",
                element: <PrivateRoute> <ConfirmBookNow></ConfirmBookNow></PrivateRoute>,
            },
            {
                path: "/addRooms",
                element: <PrivateRoute> <AddRooms></AddRooms></PrivateRoute>,
            },
            {
                path: "/myBookings",
                element: <PrivateRoute> <MyBookings></MyBookings> </PrivateRoute>,
            },

            {
                path: "/gallery",
                element: <Gallery></Gallery>
            },
            {
                path: "/contactUs",
                element: <ContactUs></ContactUs>
            },
            {
                path: "/aboutus",
                element: <AboutUs></AboutUs>
            },

            {
                path: "/registration",
                element: <Registration></Registration>
            },

        ]
    },
]);


export default router;