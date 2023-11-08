import BookingShortcut from "../../Components/BookingShortcut/BookingShortcut";
import Emergency from "../../Components/Emergency/Emergency";
import Header from "../../Components/Header/Header";
import MapLocation from "../../Components/MapLocation/MapLocation";
import SpecialOffers from "../../Components/SpecialOffers/SpecialOffers";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <div>
                <Emergency></Emergency>
            </div>

            <div className="container mx-auto px-2">
                <SpecialOffers></SpecialOffers>
            </div>
            <div className="">
                <MapLocation></MapLocation>
            </div>
            <div>
                <BookingShortcut></BookingShortcut>
            </div>
        </div>







    );
};

export default Home;





