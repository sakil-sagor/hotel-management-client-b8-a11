import LocationFind from "../LocationFind/LocationFind";
import PageTitle from "../PageTitle";


const MapLocation = () => {
    return (
        <div className='min-h-[70vh]'>
            <div className="login-page-banner ">
                <PageTitle title="Find our Best Hotels "
                    content="Explore us for your lifeStyle and change the passion."
                ></PageTitle>
            </div>
            <hr />
            <div className="bg-gradient-to-b from-blue-200 to-blue-50">
                <div className='container mx-auto px-2  '>
                    <LocationFind></LocationFind>

                </div>
            </div>

        </div>
    );
};

export default MapLocation;