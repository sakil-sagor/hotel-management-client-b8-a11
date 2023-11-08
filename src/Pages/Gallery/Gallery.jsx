import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
// import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";


const images = [
    "https://i.ibb.co/yhs1BWF/sr2.jpg",
    "https://i.ibb.co/6sNVQTT/hotel3.jpg",
    "https://i.ibb.co/ZJxcVMD/sr5.jpg",
    "https://i.ibb.co/Jph42xn/sr3.jpg",
    "https://i.ibb.co/GssRdvn/hotel6.jpg",
    "https://i.ibb.co/KVJfQSC/hotel1-1.jpg",
    "https://i.ibb.co/9GCKmsK/swimming-pool.jpg",
    "https://i.ibb.co/BjRskk3/hotel2.jpg",
    "https://i.ibb.co/bXx232h/hotel5.jpg"
]
const Gallery = () => {



    const [imageData, setImageData] = useState({ img: '', i: 0 })
    const viewImg = (img, i) => {
        setImageData({ img, i })
        console.log(img, i)
    }
    const imageAction = action => {
        let i = imageData.i;
        if (action === "next-img") {
            setImageData({ img: images[i + 1], i: i + 1 })
        }
        if (action === "previous-img") {
            setImageData({ img: images[i - 1], i: i - 1 })
        }
        if (!action) {
            setImageData({ img: '', i: 0 })
        }
    }
    return (
        <>
            {
                imageData.img &&

                <div className='w-full h-screen  bg-gray-700 fixed  overflow-hidden'>
                    <div className='container relative mx-auto w-full h-full flex justify-center items-center'>
                        <button onClick={() => imageAction()} className='absolute top-3 right-3  text-white m-3 font-bold rounded hover:bg-gray-500 duration-200 px-3 py-1 text-2xl'>X</button>
                        <button className='text-white text-4xl absolute left-0 top-[50%] hover:bg-gray-500 rounded duration-100' onClick={() => imageAction("previous-img")}><FaAngleLeft></FaAngleLeft></button>
                        <img src={imageData.img} className='w-auto max-w-[90%] max-h-[90%]' alt="" />
                        <button className='text-white text-4xl absolute right-0 top-[50%]  hover:bg-gray-500 rounded duration-100' onClick={() => imageAction("next-img")}><FaAngleRight></FaAngleRight></button>
                    </div>
                </div>
            }

            <div className='min-h-[70vh]'>
                <div className='container mx-auto px-2 '>
                    <div className='p-3'>
                        <ResponsiveMasonry
                            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                        >
                            <Masonry gutter='20px'>
                                {images.map((image, i) => (
                                    <img
                                        key={i}
                                        src={image}
                                        style={{ width: "100%", display: "block", cursor: "pointer" }}
                                        alt=""
                                        onClick={() => viewImg(image, i)}
                                    />
                                ))}
                            </Masonry>
                        </ResponsiveMasonry>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Gallery;