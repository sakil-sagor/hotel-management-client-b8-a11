import UpdateBookFromBoking from "./UpdateBookFromBoking";


const SingleBooking = ({ booking, handelDelete, fetchData, setFetchData, ind }) => {
    const { productId, image, price, item, } = booking;

    // date fixer 
    const formatCreatedAt = (newdate) => {
        const date = new Date(newdate);
        const day = date.getDate();
        const month = date.getMonth() + 1; // 'long' for the full month name
        const year = date.getFullYear();

        return `${day}-${month}-${year}`;
    };

    return (
        <div>
            <div>
                <div className="px-2 md:px-4 py-6 border shadow-2xl">
                    <div className="lg:flex justify-between items-center">
                        <div className="flex items-center">
                            <img className="w-16 h-16" src={image} alt="" />
                            <div className="text-sky-800 font-semibold ml-2">

                                <p> {item?._id} </p>
                                <p>Date: {formatCreatedAt(item?.date)}</p>
                            </div>
                        </div>
                        <div className="text-sky-800 font-semibold text-right">
                            <p> Price: $ {price * item?.bookingSeat}</p>
                        </div>


                    </div>

                    <hr className="my-3" />

                    <div className="flex justify-between items-center">
                        <div>
                            {/* <button onClick={() => document.getElementById('my_modal_5').showModal()}><i class="far fa-trash-alt hover:text-red-800 border px-4 py-2 text-xl hover:border-red-800 cursor-pointer transition duration-500 rounded"></i></button> */}

                            <label htmlFor={`my_modal_${ind}`} ><i className="far fa-trash-alt hover:text-red-800 border px-4 py-2 text-xl hover:border-red-800 cursor-pointer transition duration-500 rounded"></i></label>

                        </div>
                        <div>
                            <button className="cursor-pointer">
                                <label htmlFor={`my_modal_${booking?.productId}`} className="cursor-pointer transition duration-500 bg-sky-800 text-white px-10 py-2 rounded font-semibold hover:text-sky-800 hover:bg-white  d-button-solid border hover:border-blue-500">Update </label>
                            </button>
                            <input type="checkbox" id={`my_modal_${booking?.productId}`} className="modal-toggle" />
                            <UpdateBookFromBoking className="modal" _id={productId} fetchData={fetchData} booking={booking} setFetchData={setFetchData}></UpdateBookFromBoking>

                        </div>
                    </div>




                    {/* Open the modal using document.getElementById('ID').showModal() method */}

                    <input type="checkbox" id={`my_modal_${ind}`} className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box">

                            <p className="py-4 text-xl text-red-600 text-center font-bold">Do you want to remove this product!</p>
                            <div className="modal-action">
                                <label htmlFor={`my_modal_${ind}`} className="btn py-1">No</label>
                                <label htmlFor={`my_modal_${ind}`} className="btn" onClick={() => handelDelete(productId, item?._id, item?.date)}>
                                    Yes
                                </label>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default SingleBooking;