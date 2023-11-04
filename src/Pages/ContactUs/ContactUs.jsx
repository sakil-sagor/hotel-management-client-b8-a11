import React from 'react';
import LocationFind from '../../Components/LocationFind/LocationFind';
import PageTitle from '../../Components/PageTitle';

const ContactUs = () => {
    return (
        <div className='min-h-[70vh]'>
            <div className="login-page-banner ">
                <PageTitle title="Find our Shop "
                    content="Explore us for your lifeStyle and change the passion."
                ></PageTitle>
            </div>
            <div className='container mx-auto px-2 py-16'>


                <LocationFind></LocationFind>

            </div>
        </div>
    );
};

export default ContactUs;