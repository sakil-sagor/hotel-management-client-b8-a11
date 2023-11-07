import React from 'react';

// Emergency page for home  

const Emergency = () => {

    return (
        <div>
            <div className={`grid sm:grid-cols-2 md:grid-cols-4 text-white`}>
                <div className="bg-green-600 py-16  text-center flex justify-center	items-center " >
                    <div className="hover:text-gray-800 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110	">
                        <i class="fas fa-phone mr-2 text-4xl"></i>
                        <p className="text-xl font-semibold	"> 24 Hours Services</p>
                    </div>
                </div>
                <div className="bg-pink-600 py-16 text-center flex justify-center	items-center" >
                    <div className="hover:text-gray-800 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110	">
                        <i class="far fa-calendar-check mr-2 text-4xl"></i>
                        <p className="text-xl font-semibold	hover:text-gray-800">100+ Rooms</p>
                    </div>
                </div>
                <div className="bg-blue-600 py-16 text-center flex justify-center	items-center" >
                    <div className="hover:text-gray-800 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110	">
                        <i class="fas fa-people-carry mr-2 text-4xl"></i>
                        <p className="text-xl font-semibold	hover:text-gray-800">Best Managment</p>
                    </div>
                </div>
                <div className="bg-red-600 py-16 text-center flex justify-center	items-center" >
                    <div className="hover:text-gray-800 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110	">
                        <i class="fab fa-amazon-pay  mr-2 text-4xl"></i>
                        <p className="text-xl font-semibold	hover:text-gray-800"> Online Payment</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Emergency;

