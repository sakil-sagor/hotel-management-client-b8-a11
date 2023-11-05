import { Link } from "react-router-dom";

const SingleRome = ({ room }) => {
    const { _id, image, price } = room;
    return (
        <Link to={`/rooms/${_id}`} >
            <div>
                <div className="">
                    <img className="rounded-md" src={image} alt="" />
                </div>
                <p>{price}</p>
            </div>
        </Link>
    );
};

export default SingleRome;