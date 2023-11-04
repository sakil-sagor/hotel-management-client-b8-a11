import React, { useContext } from 'react';
import { AiFillGoogleCircle } from "react-icons/ai";
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../Context/AuthProvider';
const Login = () => {

    const { signIn, googleLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();


    const handleLogin = (e) => {
        e.preventDefault();
        // toast.success("Dontaion successfully added")
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                toast.success("User login successfully ")
                setTimeout(function () {
                    navigate(location?.state ? location.state : '/');
                }, 500);





            })
            .catch(error => {
                console.error(error);
                toast.error(error.message)
            })


    }
    const handleGoogleSignIn = () => {
        googleLogin()
            .then(result => {
                console.log(result.user)
                // navigate(location?.state ? location.state : '/');
                toast.success("User Register successfully ")
                setTimeout(function () {
                    navigate(location?.state ? location.state : '/');
                }, 500);
            })
            .catch(error => {
                console.error(error)
                toast.error(error.message)
            })
    }

    return (
        <div className=" bg-blue-50">
            <div className='md:flex justify-center md:m-0'>
                <div className='md:w-96 px-4 py-8  bg-white rounded-md shadow-2xl shadow-blue-300'>

                    <form className='' onSubmit={handleLogin}>
                        <div className=''>
                            <div className='mb-3 '>
                                <span className=' text-gray-600 font-semibold block mb-2 '> Email </span>
                                <input placeholder=' Your Email ' required className="p-2 w-full  bg-white border border-gray-400 rounded-md " type="email" name="email" />
                            </div>

                            <div className='mb-6 '>
                                <span className=' text-gray-600 font-semibold block mb-2'> Password </span>
                                <input placeholder='Password' type="password" required className="p-2 w-full   bg-white border border-gray-400 rounded-md " name='password' />
                            </div>

                            <div className='mb-6'>

                                <button className=' py-2 text-sm w-full text-white cursor-pointer rounded bg-blue-800 uppercase hover:bg-blue-900' type="submit">Login</button>

                            </div>

                        </div>
                    </form >
                    <div className='flex justify-between text-sm w-full' >
                        <p ><button onClick={handleGoogleSignIn} className="border px-2 py-1 rounded bg-blue-200 hover:bg-blue-300 duration-200"> <AiFillGoogleCircle className='inline-block text-3xl text-gray-600 '></AiFillGoogleCircle> Google</button></p>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                theme="colored"
            />

        </div>
    );
};

export default Login;