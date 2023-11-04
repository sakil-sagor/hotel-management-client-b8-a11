import { Link, useRouteError } from "react-router-dom";


const ErroPage = () => {
    const error = useRouteError();
    return (
        <div className="flex flex-col justify-center items-center mt-20">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <br />
            <Link className="bg-pink-500 text-white p-2 rounded hover:bg-pink-600" to="/">Go to Home</Link>
        </div>
    );
};

export default ErroPage;