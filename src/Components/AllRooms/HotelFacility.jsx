
import { FaAirbnb, FaBroom, FaHiking, FaHome, FaParking, FaRestroom, FaSmokingBan, FaWifi } from "react-icons/fa";

const HotelFacility = () => {
    return (
        <div>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-4  ">
                <div className="flex items-center justify-center gap-4 p-4  border shadow shadow-sky-400 ">
                    <FaWifi className="text-sky-800 text-4xl"></FaWifi>
                    <p>Free Wifi</p>
                </div>
                <div className="flex items-center  justify-center gap-4  p-4  border shadow shadow-sky-400 ">
                    <FaParking className="text-sky-800 text-4xl"></FaParking>
                    <p>Free Parking</p>
                </div>
                <div className="flex items-center justify-center gap-4   p-4  border shadow shadow-sky-400 ">
                    <FaHiking className="text-sky-800 text-4xl"></FaHiking>
                    <p>Facilities for disabled guests</p>
                </div>
                <div className="flex items-center  justify-center gap-4 p-4  border shadow shadow-sky-400 ">
                    <FaHome className="text-sky-800 text-4xl"></FaHome>
                    <p>Balcony</p>
                </div>
                <div className="flex items-center justify-center gap-4   p-4  border shadow shadow-sky-400 ">
                    <FaBroom className="text-sky-800 text-4xl"></FaBroom>
                    <p>Room service</p>
                </div>
                <div className="flex items-center justify-center gap-4  p-4  border shadow shadow-sky-400 ">
                    <FaSmokingBan className="text-sky-800 text-4xl"></FaSmokingBan>
                    <p>Non-smoking rooms</p>
                </div>

                <div className="flex items-center  justify-center gap-4  p-4  border shadow shadow-sky-400 ">
                    <FaAirbnb className="text-sky-800 text-4xl"></FaAirbnb>
                    <p>Air conditioning</p>
                </div>
                <div className="flex items-center  justify-center gap-4 p-4  border shadow shadow-sky-400 ">
                    <FaRestroom className="text-sky-800 text-4xl"></FaRestroom>
                    <p>Family rooms</p>
                </div>
            </div>
        </div>
    );
};

export default HotelFacility;