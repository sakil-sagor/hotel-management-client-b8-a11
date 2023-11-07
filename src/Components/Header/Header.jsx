import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import './Banner.css';
// all banner images 


// import Swiper core and required modules

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import HeaderSingle from './HeaderSingle';

// install Swiper modules
// SwiperCore.use([Autoplay, Pagination, Navigation]);

const banners = [
    { _id: 1, img: "https://i.ibb.co/GssRdvn/hotel6.jpg", titleOne: "Luxary Views", titleTwo: "Rendering the meaning - of time", description: "We provide travelers with an authentic Jordanian experience thatthey can remember for the rest of their lives" },
    { _id: 2, img: "https://i.ibb.co/0YcyG60/hotel2.jpg", titleOne: "Modern -Life.", titleTwo: "Enojoy your life with - more power", description: "We provide travelers with an authentic Jordanian experience thatthey can remember for the rest of their lives" },
    { _id: 3, img: "https://i.ibb.co/8nCBjd4/hotel3.jpg", titleOne: "Get -Smart.", titleTwo: "Make you path with Exclusive one", description: "We provide travelers with an authentic Jordanian experience thatthey can remember for the rest of their lives" },

]

const Header = () => {
    return (
        <div>
            <div>
                <Swiper

                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    effect="fade"
                    className="mySwiper"
                >
                    <div>{
                        banners.map(banner =>
                            <SwiperSlide >
                                <HeaderSingle key={banner._id} banner={banner}></HeaderSingle>
                            </SwiperSlide>
                        )
                    }
                    </div>

                </Swiper>

            </div>
        </div >
    );
};

export default Header;