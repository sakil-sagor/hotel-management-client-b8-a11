import { AiFillPhone, AiTwotoneMail, } from "react-icons/ai";
import { FaLocationPin } from "react-icons/fa6";
import TopSection from "../TopSection/TopSection";

const LocationFind = () => {

    return (
        <div>
            <TitleBoard titleWord={"Find Us Here"}></TitleBoard>
            <div className="py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
                    <div className="px-8">
                        <div>
                            <TopSection headline={"Find us on here..."}></TopSection>
                        </div>
                        <div className="flex items-center my-4">
                            <FaLocationPin className="text-pink-600 text-3xl mr-2"></FaLocationPin>
                            <div>
                                <p className="font-semibold text-green-800 text-lg">  Location: </p>
                                <p className="text-pink-600">Bir Hajipur, Hossainpur, Kishoreganj</p>
                            </div>
                        </div>
                        <hr />
                        <div className="flex items-center my-4">
                            <AiFillPhone className="text-pink-600 text-3xl mr-2"></AiFillPhone>
                            <div>
                                <p className="font-semibold text-green-800 text-lg">  Call Us: </p>
                                <p className="text-pink-600">017123456789,0123456789</p>
                            </div>
                        </div>
                        <hr />
                        <div className="flex items-center my-4">
                            <AiTwotoneMail className="text-pink-600 text-3xl mr-2"></AiTwotoneMail>
                            <div>
                                <p className="font-semibold text-green-800 text-lg">  Mail Us: </p>
                                <p className="text-pink-600">piplakandi@gmail.com</p>
                            </div>
                        </div>
                        <hr />

                    </div>
                    <div>
                        <div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d556.1837935362722!2d90.61450794914464!3d24.46990540593512!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1696014600960!5m2!1sen!2sbd" width="100%" height="450" style={{ "border": 0 }} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default LocationFind;