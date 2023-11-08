import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import AllSummarySection from "../../Components/AllSummarySection/AllSummarySection";
import BookingShortcut from "../../Components/BookingShortcut/BookingShortcut";
import Emergency from "../../Components/Emergency/Emergency";
import FeaturedRooms from "../../Components/FeaturedRooms/FeaturedRooms";
import Header from "../../Components/Header/Header";
import MapLocation from "../../Components/MapLocation/MapLocation";
import SpecialOffers from "../../Components/SpecialOffers/SpecialOffers";


const Home = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div>
            <Header></Header>
            <div>
                <Emergency></Emergency>
            </div>

            <div data-aos="fade-down" className="container mx-auto px-2">
                <SpecialOffers></SpecialOffers>
            </div>

            <div data-aos="zoom-in" className="bg-gradient-to-b from-blue-200 to-blue-50">
                <div className='py-8'>
                    <FeaturedRooms></FeaturedRooms>
                </div>
            </div>
            <hr />
            <div data-aos="fade-up">
                <AllSummarySection></AllSummarySection>
            </div>
            <div data-aos="flip-left">
                <MapLocation></MapLocation>
            </div>
            <div data-aos="flip-right" >
                <BookingShortcut></BookingShortcut>
            </div>
        </div>







    );
};

export default Home;





