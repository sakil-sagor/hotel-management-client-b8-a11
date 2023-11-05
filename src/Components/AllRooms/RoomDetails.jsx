import { useParams } from "react-router-dom";


const RoomDetails = () => {
    const { roomId } = useParams();

    console.log(roomId);
    return (
        <div>
            <p>{roomId}</p>
        </div>
    );
};

export default RoomDetails;